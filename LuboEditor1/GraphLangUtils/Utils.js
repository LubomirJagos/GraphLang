/**
 *  @class GraphLang.Utils
 *  @description Base class for GraphLang utils
 */
GraphLang.Utils = Class.extend({
  NAME: "GraphLang.Utils",
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
  }
  /*
   *  This wasn;t running when was written like this. There is something strange about that. But when assign lower as rvalue it's OK, so for now let's do it that way.
  run: function(textValue){
    alert(textValue);
  }
  */
});

/**
 *  @method GraphLang.Utils.runInterpreter
 *  @param {draw2d.Canvas} canvas - from where is taken schematic
 *  @description Go through all nodes by execution order and run onRun() function on each of them. It should return string which represent chunk of code for each node. <br/><br/>THIS IS NOW WORKING ON LAYER null WHAT MEANS ON TOP NODES JUST TO SEE IF IT'S TRANSCRIPTING SOMETHING, LOOKS OK, THIS WILL BE RECURSIVE FUNCTION!
 */
GraphLang.Utils.runInterpreter = function(canvas){
  var nodesToRun = GraphLang.Utils.getLoopDirectChildrenNodes(canvas, null);
  var strCodeOut = "";
  nodesToRun.each(function(nodeIndex, nodeObj){
    if (nodeObj.onRun4 != undefined) strCodeOut += nodeObj.onRun4();
  });
  var topLoops = new draw2d.util.ArrayList();
  canvas.getFigures().each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0 && nodeObj.getParent() == null){ topLoops.push(nodeObj);}
  });
  var sortedTopLoops = new draw2d.util.ArrayList();
  topLoops.each(function(loopIndex, loopObj){
    if (GraphLang.Utils.getNodeLoopOwner(canvas, loopObj) == null) sortedTopLoops.push(loopObj);
  });
  sortedTopLoops.each(function(loopIndex, loopObj){
    strCodeOut += "/* LOOP DETECTED! */";
  });

  alert("Result code:\n" + strCodeOut);
}

/**
 *  @method GraphLang.Utils.run(canvas)
 *  @param {draw2d.Canvas} canvas - from where is taken schematic
 *  @description Testing feunction for every my node to see if it's invoked. I want to use this to see if nodes are running in right order when graph interpreter is running.
 */
GraphLang.Utils.run = function(canvas){
    //alert(displayJSON(appCanvas));

    //start basic parsing JSON network, looking just for wires let's say
    //init json to get some data prepared by V8
    var jsonStr = displayJSON(appCanvas);
    var jsonObj = JSON.parse(jsonStr);

    var numberofNumericAdd = 0;
    var mySelectedNode;
    for (var nodeCnt = 0; nodeCnt < jsonObj.length; nodeCnt++){
      if (jsonObj[nodeCnt].type == "GraphLang.Shapes.Numeric.Add"){
        numberofNumericAdd++;
        //set default value for counter 1 of object
        jsonObj[nodeCnt].cnt1 = 0;
        //this is how to call object function, need to put there also object to push reference there
        new GraphLang.Shapes.Numeric.Add(jsonObj[nodeCnt]).onRun2(jsonObj[nodeCnt]);

        //remember one nodes for other experiments, last Add item
        mySelectedNode = new GraphLang.Shapes.Numeric.Add(jsonObj[nodeCnt]);
      }
    }
    inputPorts = mySelectedNode.getInputPorts();  //ArrayList
    alert("Input ports count:\n" + inputPorts.getSize());

    outMsg = new String();
    //for each port object call method to add to message its ID
    inputPorts.each(function(i, caller){outMsg += "> " + caller.id + "\n"});
    outMsg += "\n";
    alert("Node input ports:\n" + outMsg);

    alert("GraphLang.Shapes.Numeric.Add found: " + String(numberofNumericAdd));
}

/**
 *  @method GraphLang.Utils.detectJoints(canvas)
 *  @param {draw2d.Canvas} canvas - from where is taken schematic
 *  @description This function puts some mark at wires crossing. For now there will be point inserted.
 */
GraphLang.Utils.detectJoints = function(canvas){
  //get objects from canvas
  //var jsonStr = displayJSON(appCanvas);
  //var jsonObj = JSON.parse(jsonStr);

  var allWires = appCanvas.getLines();
  var wiresIntersectionList = [];
  var outMsg = "Wires ID list:\n";
  allWires.each(function(i, caller){
    outMsg += "> " + caller.id + "\n";
    wiresIntersectionList.push(appCanvas.getIntersection(caller));
    //caller.setColor("#FF0000"); //change color of each wire to red
  });
  alert(outMsg);

  outMsg = "Intersection X,Y:\n";
  if (wiresIntersectionList.length > 0){
    for (var k = 0; k < wiresIntersectionList.length; k++){
      wiresIntersectionList[k].each(function(i, caller){
        pObj = new GraphLang.geo.Point(caller);
        pX = pObj.getX();
        pY = pObj.getY();
        outMsg += "> " + String(pX) + "," + String(pY) + "\n";
        var shape =  new draw2d.shape.basic.Circle({stroke:3, color:"#3d3d3d", bgColor:"#3dff3d"});
        shape.setWidth(10);
        shape.setHeight(10);
        shape.setX(pX);
        shape.setY(pY);
        pX = pX - shape.width/2;
        pY = pY - shape.width/2;
        shape.setX(pX);
        shape.setY(pY);
        appCanvas.add(shape);
      });
    }
  }
  alert("Intersections: " + wiresIntersectionList[0].getSize() + "\n" + outMsg);
}

/**
 *  @method GraphLang.Utils.goThroughGraph(canvas)
 *  @description Going through nodes and hit them and run them if possible. This is now just for testing how to traverse graph through wires which connect nodes.
 */
GraphLang.Utils.goThroughGraph = function(canvas){
  var allWires = appCanvas.getLines();
  //allWires.each();
  //alert(allWires);
  let cnt1 = 0;
  allWires.each(function(wireIndex, wireObj){
    wireObj.sourcePort.color = new draw2d.util.Color("#FF00FF");

    //going up to parent and then again to next parent to get to top, ie. here can be traverse
    //property node and we start at property item port, then we are getting property item
    //reference and after this we at the end will get reference to property node itself
    //
    //NOW implemented function in property node onRun3() on list item, because it make sense,
    //there can be more functions triggered on property node, for each item one
    let sourcePortOwner = wireObj.sourcePort.parent;
    //while (sourcePortOwner.parent != null){ sourcePortOwner = sourcePortOwner.parent; }
    sourcePortOwner.onRun3();

    //traversing target port to obtain target node reference
    wireObj.targetPort.color = new draw2d.util.Color("#FF00FF");
    let targetPortOwner = wireObj.targetPort.parent;
    //while (targetPortOwner.parent != null){ targetPortOwner = targetPortOwner.parent; }
    targetPortOwner.onRun3();

    wireObj.setColor(new draw2d.util.Color("#FA11B0"));

    var label = new draw2d.shape.basic.Label({x: wireObj.start.x, y: wireObj.start.y, text:new String(cnt1++), stroke:1, color:"#FF0000", fontColor:"#0d0d0d"});
    appCanvas.add(label);
  });
}

/**
 *  @method createConnection(sourcePort, targetPort)
 *  @param {draw2d.InputPort} sourcePort - beginning of wire
 *  @param {draw2d.OutputPort} targetPort - end of wire
 *  @description CREATES wire connection btw source and target
 */
var createConnection=function(sourcePort, targetPort){

    var conn= new draw2d.Connection({
        router:new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
        outlineStroke:1,
        outlineColor:"#303030",
        stroke:2,
        color:"#00a8f0",
        radius:20,
        source:sourcePort,
        target:targetPort
    });

    // since version 3.5.6
    //
    conn.on("dragEnter", function(emitter, event){
        conn.attr({outlineColor:"#30ff30"});
    });
    conn.on("dragLeave", function(emitter, event){
        conn.attr({outlineColor:"#303030"});
    });

    return conn;

};

/**
 *  @method detectTunnels(canvas)
 *  @description Returns coordinates and put point where wires intersect with loop border (for loop, while loop, case structure, ...)
 */
GraphLang.Utils.detectTunnels = function(canvas){
  let loopList = new draw2d.util.ArrayList();
  // let loopBoundingRect;
  // let loopObj;
  canvas.getFigures().each(function(figureIndex, figureObj){
    //alert(figureObj.NAME);

    //remember loop object reference to not lose access to it
    if (figureObj.NAME.search("GraphLang.Shapes.Basic.Loop") >= 0){
      // loopObj = figureObj;
      // loopBoundingRect = figureObj.getBoundingBox();
      loopList.push(figureObj);
    }
  });

  loopList.each(function(loopIndex, loopObj){
    let loopBoundingRect = loopObj.getBoundingBox();

    let loopIntersections = [];
    let loopIntersctDirection = []; //1=top to bottom, 2=bottom to top, 3=left to right, 4=right to left
    let lineVert  = [];
    let intersectedLines = [];
    let intersectionInOutDirection = []; //0 = going into structure, 1 = going out of structure
    let intersectionEdge = []; //0 = top, 1 = right, 2 = down, 3 = left
    canvas.getLines().each(function(lineIndex, lineObj){

      //THIS HERE PREVENTS PUTTING TUNNELS TO WIRES WHICH ARE PART OF THIS LOOP AND GOING OUT AND IN AGAIN
      //TO OVERCOME PUTTING TUNNELS ON WIRES WHERE TUNNELS ALREADY ARE
      var sourcePort = lineObj.sourcePort.getParent()
      var targetPort = lineObj.targetPort.getParent()
      if (sourcePort.NAME.toLowerCase().search("tunnel") >= 0){
        if (sourcePort.getParent() == loopObj) return;
      }
      if (targetPort.NAME.toLowerCase().search("tunnel") >= 0){
        if (targetPort.getParent() == loopObj) return;
      }

      let lineSegments = lineObj.getSegments();
      lineSegments.each(function(segmentIndex, segmentObj){

        let intersectPoint = loopBoundingRect.intersectionWithLine(
          segmentObj.start,
          segmentObj.end
        );
        if (intersectPoint){
          loopIntersections.push(intersectPoint);
          intersectedLines.push(lineObj);

          //GETTING KNOW WHICH LINE OF LOOP RECTANGLE WAS CROSSED
          // 1 = right, 2 = bottom, 3 = left, 4 = top
          if (intersectPoint.data.length > 0){
            if (intersectPoint.data[0].x == loopBoundingRect.getX()) intersectionEdge.push(3);
            else if (intersectPoint.data[0].y == loopBoundingRect.getY()) intersectionEdge.push(0);
            else if (intersectPoint.data[0].x == loopBoundingRect.getX() + loopBoundingRect.getWidth()) intersectionEdge.push(1);
            else if (intersectPoint.data[0].y == loopBoundingRect.getY() + loopBoundingRect.getHeight()) intersectionEdge.push(2);
          }else{
            intersectionEdge.push(1);
          }

          //looking which point of segment is inside, which is otuside
          let insidePoint, outsidePoint;
          if (loopBoundingRect.hitTest(segmentObj.start.getX(), segmentObj.start.getY())){
            insidePoint = segmentObj.start;
            outsidePoint = segmentObj.end;
            intersectionInOutDirection.push(0); // wire is leaving structure, so this intersection is for going out of structure
          }else{
            insidePoint = segmentObj.end;
            outsidePoint = segmentObj.start;
            intersectionInOutDirection.push(1); // intersection is for wire going into structure
          }
          //based on X,Y coords of inside and outside point I'm able to compute dircetion
          //in which segment cross bounding box, whether is it crossing it top to bottom,
          //left to right or opposite direction, so I store this direction along with
          //intersection points
          if (insidePoint.getX() == outsidePoint.getX() && insidePoint.getY() < outsidePoint.getY()) loopIntersctDirection.push(1);
          if (insidePoint.getX() == outsidePoint.getX() && insidePoint.getY() >= outsidePoint.getY()) loopIntersctDirection.push(2);
          if (insidePoint.getY() == outsidePoint.getY() && insidePoint.getX() >= outsidePoint.getX()) loopIntersctDirection.push(3);
          if (insidePoint.getY() == outsidePoint.getY() && insidePoint.getX() < outsidePoint.getX()) loopIntersctDirection.push(4);
        }
      });
      lineVert.push(lineObj.getVertices());
    });

    //going through all connection segments and on each vertice put red point
  /*
    for (var k = 0; k < lineVert.length; k++){
      lineVert[k].each(function(i, caller){
        pObj = new GraphLang.geo.Point(caller);
        pX = pObj.getX();
        pY = pObj.getY();

        var shape =  new draw2d.shape.basic.Circle({stroke:1, color:"#00FF00", bgColor:"#FF0000"});
        shape.setWidth(10);
        shape.setHeight(10);
        shape.setX(pX);
        shape.setY(pY);
        pX = pX - shape.width/2;
        pY = pY - shape.width/2;
        shape.setX(pX);
        shape.setY(pY);
        appCanvas.add(shape);
      });
    }
  */
    if (loopIntersections.length > 0){
      for (var k = 0; k < loopIntersections.length; k++){
        loopIntersections[k].each(function(i, caller){
          pObj = new GraphLang.geo.Point(caller);
          pX = pObj.getX();
          pY = pObj.getY();

          outMsg = "> " + String(pX) + "," + String(pY) + "\n";
          $("#logitem2").html(outMsg);

          /*******************************************************
           *  Adding CIRCLE POINT
           *******************************************************/
  /*
          var shape =  new draw2d.shape.basic.Circle({stroke:3, color:"#3d3d3d", bgColor:"#3dff3d"});
          shape.setWidth(10);
          shape.setHeight(10);
          shape.setX(pX);
          shape.setY(pY);

          pX = pX - shape.width/2;
          pY = pY - shape.width/2;
          //based on direction in which wire is crossing boundary box, tunnel is moved inside
          //raft object, so when raft object is moved all placed tunnels are also moving
          if (loopIntersctDirection[k+i] == 1) pY -= 5;
          if (loopIntersctDirection[k+i] == 2) pY += 5;
          if (loopIntersctDirection[k+i] == 3) pX -= 5;
          if (loopIntersctDirection[k+i] == 4) pX += 5;

          shape.setX(pX);
          shape.setY(pY);
          appCanvas.add(shape);
  */
          /*******************************************************
           *  Adding TUNNEL (custom figure)
           *******************************************************/
           //var tunnelObj = new draw2d.HybridPort({stroke: 2, color: "#FF0000", bgColor: "#00FF00"});
           var tunnelObj;
           // tunnelObj = new GraphLang.Shapes.Basic.Tunnel();
           if (intersectionInOutDirection[k] == 1) tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
           else if (intersectionInOutDirection[k] == 0) tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();

           //this is correct, I tested both are rotating for 90deg, inputs and outputs are then on right side
           if (intersectionEdge[k+i] == 0 || intersectionEdge[k+i] == 2){
             if (intersectionInOutDirection[k] == 0){
               if (intersectionEdge[k+i] == 0) tunnelObj.setRotationAngle(270);
               if (intersectionEdge[k+i] == 2) tunnelObj.setRotationAngle(90);
            }else{
              if (intersectionEdge[k+i] == 0) tunnelObj.setRotationAngle(90);
              if (intersectionEdge[k+i] == 2) tunnelObj.setRotationAngle(270);
            }
             var objWidth = tunnelObj.getWidth();
             var objHeight = tunnelObj.getHeight();
             tunnelObj.setWidth(objHeight);
             tunnelObj.setHeight(objWidth);
           }
           //if (loopIntersctDirection[k+i] == 3) tunnelObj.setRotationAngle(180);
           //if (loopIntersctDirection[k+i] == 4) tunnelObj.setRotationAngle(0);


           //pX = pX - tunnelObj.getWidth()/2;
           //pY = pY - tunnelObj.getHeight()/2;
           //based on direction in which wire is crossing boundary box, tunnel is moved inside
           //raft object, so when raft object is moved all placed tunnels are also moving
           //not needed as ports are placed directly at intersections
           if (loopIntersctDirection[k+i] == 1) pY -= tunnelObj.getHeight()/2;
           if (loopIntersctDirection[k+i] == 2) pY += tunnelObj.getHeight()/2;
           if (loopIntersctDirection[k+i] == 3) pX += tunnelObj.getWidth()/2;
           if (loopIntersctDirection[k+i] == 4) pX -= tunnelObj.getWidth()/2;
           var tunnelLocatorAbs =  new draw2d.layout.locator.XYAbsPortLocator(Math.abs(pX - loopObj.getX()), Math.abs(pY - loopObj.getY()));

           //tunnelObj.setLocator(tunnelLocatorAbs);
           //loopObj.addPort(tunnelObj);

           //this is for relative locator
           if (intersectionEdge[k+i] == 0){ //TOP edge
             var tunnelLocatorRel =  new GraphLang.Utils.TopRelPortLocator(
               Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
               tunnelObj.getHeight()/2
             );
           }
           if (intersectionEdge[k+i] == 1){ //RIGHT edge
             var tunnelLocatorRel =  new GraphLang.Utils.RightRelPortLocator(
               tunnelObj.getWidth()/2,
               Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
             );
           }
           if (intersectionEdge[k+i] == 2){ //BOTTOM edge
             var tunnelLocatorRel =  new GraphLang.Utils.BottomRelPortLocator(
               Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
               tunnelObj.getHeight()/2
             );
           }
           if (intersectionEdge[k+i] == 3){ //LEFT edge
             var tunnelLocatorRel =  new GraphLang.Utils.LeftRelPortLocator(
               tunnelObj.getWidth()/2,
               Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
             );
           }


           //ABSOLUTE POSITIONING OF TUNNELS
  /*
           pX = pX - tunnelObj.getWidth()/2;
           pY = pY - tunnelObj.getHeight()/2;
           tunnelObj.setX(pX);
           tunnelObj.setY(pY);
           appCanvas.add(tunnelObj);
  */
           //RELATIVE POSITIOINING OF TUNNELS
           /*
            This calculation of realtive position is not totaly correct, because when resizing loop its width and height is changing, but locator percentage is still same and not changing accordingly to new width and height of loop, it was normalized by the previous dimensions and dimension of tunnels is not changing, so right resize method would be recalculate relative locator, or figure out how to snap tunnels to right and left and top and bottom wall of loop
            */
           loopObj.add(tunnelObj,tunnelLocatorRel)

           var oldSource = intersectedLines[k+i].getSource();
           intersectedLines[k+i].setSource(tunnelObj.getOutputPort(0));
           var additionalConnection = createConnection();
           additionalConnection.setSource(oldSource);
           additionalConnection.setTarget(tunnelObj.getInputPort(0));
           appCanvas.add(additionalConnection);
           tunnelObj.setSelectable(true);

        });
      }
    }
  }); //end function to add tunnel to each intersect of wires with loops

};

/**
 *  @method initAllPortToDefault(canvas)
 *  @param {draw2d.Canvas} canvas - schematic where ports will be set to default
 *  @description Set default value for all ports. FOR NOW SET VALUE OF EACH PORT TO 0.
 */
GraphLang.Utils.initAllPortToDefault = function(canvas){
  var allPorts = canvas.getAllPorts();
  var allNodes = canvas.getFigures();

  //set to defualt values execution order of LOOPS AND NODES
  allNodes.each(function(nodeIndex, nodeObj){
    //init execution order for all nodes
    if (nodeObj.getUserData() != undefined){
      nodeObj.getUserData().executionOrder = -1;
    }else{
      nodeObj.userData = {};
      nodeObj.userData.executionOrder = -1;
    }

    //for loops there is flag about they were transcripted to C/C++
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      if (nodeObj.getUserData() == undefined) nodeObj.userData.wasTranslatedToCppCode = false;
      nodeObj.getUserData().wasTranslatedToCppCode = false;
    }

    // //THIS DOESN'T HELP that execution order is somehow changed after first recalculation
    // //add ports from ItemsNode
    // if (nodeObj.NAME.toLowerCase().search("itemsnode") >= 0){
    //   nodeObj.getChildren().each(function(childIndex, childObj){
    //     if (childIndex > 0){
    //       childObj.getPorts().each(function(portIndex, portObj){
    //         allPorts.push(portObj);
    //       });
    //     }
    //   });
    // }
  });

  /*
   *  Set executionOrder of ALL PORTS to appropriate defualt value
   */
  allPorts.each(function(portIndex, portObj){
    if (portObj.userData == undefined) portObj.userData = {};
    portObj.userData.value = 0;
    portObj.userData.status = 0;
    portObj.useGradient = false;

    //coloring port and set value based on if it's input or output
    if (portObj.NAME.toLowerCase().search("inputport") >= 0){
      /* if port is input it's colored as input and execution order is -1 because there
      must be waiting for value */
      //portObj.setBackgroundColor(new draw2d.util.Color(255,255,0));
      portObj.userData.executionOrder = -1;
    }
    else if (portObj.NAME.toLowerCase().search("outputport") >= 0){
      if (portObj.getParent().getInputPorts().getSize() == 0){
        /* if there are just output ports than their values must be already accessible
        (if there would be som subblocks they will be evaluated as soon this node
        will be running here we figure out that these nodes will be first executed) */
        //portObj.setBackgroundColor(new draw2d.util.Color(0,255,0));
        portObj.userData.executionOrder = 1;
      }else{
        /* if node has some inputs, it means that it cannot be executed until all data
        at them are accessible, so status is set to 0 and corresponding color for
        input is used */
        //portObj.setBackgroundColor(new draw2d.util.Color(255,255,255));
        portObj.userData.executionOrder = -1;
      }
    }

    //remove label nodes from all nodes, this is because these labels are execution order for debugging
    if (portObj.getParent().NAME.toLowerCase().search(".constant.") == -1){ //if node is constant don't remove label, it's part of functionality!
      portObj.getParent().getChildren().each(function(childIndex, childObj){
        //check if label was placed as execution order, it's written in its user data as datatype
        if (childObj.NAME.toLowerCase().search("label") >= 0 && childObj.userData != null && childObj.userData.datatype != null && childObj.userData.datatype.search("executionOrder") > -1){
          portObj.getParent().remove(childObj);
        }
      });
    }else{            //if CONSTANT NODE, THEN ALL LABELS EXCEPT AT INDEX 0. ARE REMOVED, BECAUSE CONSTANT IS WRITTEN ISIDE 0.LABEL
      var cnt = 0;
      portObj.getParent().getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("label") >= 0){
          if (cnt > 0) portObj.getParent().remove(childObj);    //don't remove 0.element
          cnt++;
        }
      });
    }
  });
}

/**
 *  @method showPortExecutionOrder(canvas)
 *  @param {draw2d.Canvas} canvas - schematic where will be displayed execution order for nodes and tunnels
 *  @description Put label with port execution order next to each port which is children of canvas. Means it was added to canvas no to object like loop.
 */
GraphLang.Utils.showPortExecutionOrder = function(canvas){
  var allPorts = canvas.getAllPorts();
  allPorts.each(function(portIndex, portObj){
    if (portObj.getParent().NAME.toLowerCase().search("tunnel") >= 0){
      canvas.add(
        new draw2d.shape.basic.Label({
          x: portObj.getX() + portObj.getParent().getX() + portObj.getParent().getParent().getX(), //ports have relative position to parent obj
          y: portObj.getY() + portObj.getParent().getY() + portObj.getParent().getParent().getY(),
          text:new String(portObj.getUserData().executionOrder),
          stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
        })
      );
    }else{
      canvas.add(
        new draw2d.shape.basic.Label({
          x: portObj.getX() + portObj.getParent().getX(), //ports have relative position to parent obj
          y: portObj.getY() + portObj.getParent().getY(),
          text:new String(portObj.getUserData().executionOrder),
          stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
        })
      );
    }
  });
}
/**
 *  @method bringToFront(canvas)
 *  @name GraphLang.Utils.bringToFront(canvas)
 *  @param {draw2d.Canvas} canvas - from where is taken actual selection
 *  @description Bring to front actual selected figure in canvas.
 */
GraphLang.Utils.bringToFront = function(canvas){
  var selectedFigures = canvas.getSelection();
  if (selectedFigures){
    selectedFigures.each(function(selectionIndex, selectionObj){
      selectionObj.toFront();
    });
  }
}

/**
 *  @method bringToBack(canvas)
 *  @description Moves selected objects to back.
 */
GraphLang.Utils.bringToBack = function(canvas){
  var selectedFigures = canvas.getSelection();
  if (selectedFigures){
    selectedFigures.each(function(selectionIndex, selectionObj){
      selectionObj.toBack();
    });
  }
}

/**
 *  @method showNodes(canvas)
 *  @param {draw2d.Canvas} canvas - schematic where will be place labels next to ports
 *  @description Put label "-1" into middle of all nodes. This is method for debugging to see how IDE see nodes, what all is node.
 */
GraphLang.Utils.showNodes = function(canvas){
  var allNodes = canvas.getFigures();

  allNodes.each(function(nodeIndex, nodeObj){
    //if (nodeObj.NAME.toLowerCase().search("graphlang") < 0) return; //THIS RETURN IN CASE THAT NODE IS NOT GRAPHLANG NODE

    //SHOW TRIGGERED LABEL ON LOOP
    if (nodeObj.NAME.toLowerCase().search("loop") > 0){
      var allSubNodes = nodeObj.getChildren();
      allSubNodes.each(function(nodeIndex, nodeObj){
        if (nodeObj.NAME.toLowerCase().search("shapes.basic") > 0){ //put label just for nodes, for now suppose that's all shapes.basic
          nodeObj.add(
            new draw2d.shape.basic.Label({
              text:"-1",
              stroke:1, color:"#00FF00", fontColor:"#0d0d0d"  //GREEN DECORATED LABEL
            }),
            new draw2d.layout.locator.CenterLocator(nodeObj)
          );
        }
      });
    }else{
      nodeObj.add(
        new draw2d.shape.basic.Label({
          text:"-1",
          stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
        }),
        new draw2d.layout.locator.CenterLocator(nodeObj)
      );
    }
  });
};

/**
 *  @method getNodeLoopOwner(canvas, nodeObj/loopObj)
 *  @param {draw2d.Canvas} canvas - schematic from which is node or loop
 *  @param {draw2d.shape.Node} nodeObj - node or loop objec which is inspected for its loop owner
 *  @name GraphLang.Utils.getNodeLoopOwner(canvas, nodeObj/loopObj)
 *  @description Return loop which ownes node, if there's no loop return null.
 */
GraphLang.Utils.getNodeLoopOwner = function(canvas, nodeObj){
  var loopList = new draw2d.util.ArrayList();

  //get lsit of all loops
  canvas.getFigures().each(function(figureIndex, figureObj){
    if (figureObj.NAME.toLowerCase().search("loop") >= 0 && figureObj !== nodeObj){
      loopList.push(figureObj);
    }
  });

  //find all parent loop of this node
  // There could be two cases:
  //    1. node is part normal one layer loop - WhileLoop or ForLoop
  //    2. node is part of multilayered loop - case structure
  var nodeParentLoop = null;
  loopList.each(function(loopIndex, loopObj){
    if (loopObj.NAME.toLowerCase().search("multilayered") == -1 ||  //decision if dealing with multilayered loop, also need to think about layers of multilayered that reason why jailhouse is here also
        loopObj.NAME.toLowerCase().search("jailhouse") == -1){
      if (loopObj != nodeObj && loopObj.getAboardFigures().contains(nodeObj)){        //comparison for one layer loop
        nodeParentLoop = loopObj;
      }
    }else{
      loopObj.getAllLayers().each(function(layerIndex, layerObj){
        if (layerObj != nodeObj && layerObj.getAssignedFigures().contains(nodeObj)){
          nodeParentLoop = loopObj;
        }
      });
    }
  });
  return nodeParentLoop;
};

/**
 *  @method getLoopDirectChildrenNodes(canvas, parentLoop = null)
 *  @param {draw2d.Canvas} canvas - schematic in which is loop located
 *  @param {GraphLang.Shapes.Basic.Loop} parentLoop - loop which children are required
 *  @description Returns nodes which are direct descendant of loop, so there are no nodes nested inside other inner loops. If parent loop is not provided or undefined it return all nodes which are direct children of canvas.
 */
GraphLang.Utils.getLoopDirectChildrenNodes = function(canvas, parentLoop = null){
  var allLayerNodes = new draw2d.util.ArrayList();

  canvas.getFigures().each(function(figureIndex, figureObj){
    if ((figureObj.NAME.toLowerCase().search("loop") < 0) &&
        (figureObj.NAME.toLowerCase().search("tunnel") < 0) &&
        (GraphLang.Utils.getNodeLoopOwner(canvas, figureObj)) == parentLoop) allLayerNodes.push(figureObj);
  });

  return allLayerNodes;
}

/**
 *  @method getDirectChildrenWithoutTunnels(canvas, parentObj = null)
 *  @description Returns direct children of provided object. These returns objects which are not nested inside loop. Also return loops objects. If parent object is not provided it returns direct canvas children.
 */
GraphLang.Utils.getDirectChildrenWithoutTunnels = function(canvas, parentObj){
  var allLayerNodes = new draw2d.util.ArrayList();

  //REALLY PAY ATTENTION ABOUT SYNTAX HERE AND READ CAREFULLY
  //below is string comparison and items are named there and between them is OR operator!
  canvas.getFigures().each(function(figureIndex, figureObj){
    if (figureObj.NAME.toLowerCase().search("tunnel") == -1 &&
        (figureObj.NAME.toLowerCase().search("loop") > -1 ||            //this condition is list of allowed objects which are added as direct children objects, if something not running when added new structures here is probably error, need to add to this list
        figureObj.NAME.toLowerCase().search("multilayered") > -1 ||
        figureObj.NAME.toLowerCase().search("node") > -1 ||
        figureObj.NAME.toLowerCase().search("port") > -1) &&
        GraphLang.Utils.getNodeLoopOwner(canvas, figureObj) == parentObj){
          allLayerNodes.push(figureObj);
        }
  });

  return allLayerNodes;
}

/**
 *  @method executionOrder(canvas)
 *  @description Returns execution order in which nodes run.
 */
GraphLang.Utils.executionOrder = function executionOrder(canvas){
  var allNodes = canvas.getFigures();

  //ADDING LOOP TUNNELS TO OTHER NODES, tunnels are part of loop not canvas so they are not detected by canvas.getFigures()
  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.userData == undefined || nodeObj.userData == null){
      nodeObj.userData = {};
      nodeObj.userData.executionOrder = -1;
    }

    //ADD ALL LOOP'S TUNNELS into node list
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      var loopTunnels = new draw2d.util.ArrayList();
      nodeObj.getUserData().executionOrder = 1;   // default value for loops if other it will change in next calculations
      nodeObj.getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
          allNodes.push(childObj);
        }
      });
    }

    //ADD ALL PROPERTY NODE ITEMS
    if (nodeObj.NAME.toLowerCase().search("itemsnode") >= 0){
      var loopTunnels = new draw2d.util.ArrayList();
      nodeObj.getChildren().each(function(childIndex, childObj){
        if (childIndex > 0 && childObj.NAME.toLowerCase().search("label") >= 0){  //skip property node label
          allNodes.push(childObj);
        }
      });
    }
  });

  let cnt1 = 0;
  let inputPortCnt = 0;

  /******************************************************************************
   *  IMPORTANT NOT START AT 0, actualStepNum must start at 1 because for step 0
   *  there is no rule how to increase it or somethin, I choose to do this
   *  because 0 is weird zero :D
   *
   *  portObj.getUserData().executionOrder    NEVER 0
   *      -1 .....not executed, data not available stylesheet
   *      +1 .....prepared, OK
   ******************************************************************************/
  for (var actualStepNum = 1; actualStepNum < 20; actualStepNum++){
    allNodes.each(function(nodeIndex, nodeObj){

      //gathering information about input ports, checking if all of them are already prepared
      nodeObj.getInputPorts().each(function(portIndex, portObj){
        if (portObj.getUserData().executionOrder > 0) cnt1++; //counting prepared input ports
        else if (portObj.getUserData().executionOrder < 0){
          /* if input port is not ready, check connected ports for which is this port waiting
          and check their status */
          let inPortPrepared = true;

          //CHECK STATE OF CONNECTED OUTPUTS BEFORE THIS PORT
          portObj.getConnections().each(function(wireIndex, wireObj){
            if (wireObj.getSource() && wireObj.getSource().getUserData().executionOrder < 0) inPortPrepared = false;
          });

          //CHECK FOR CONTENT INSIDE LOOP IF WAIT FOR INPUT TUNNELS
          if (nodeObj.NAME.toLowerCase().search("tunnel") >= 0){
            var nodeParentLoop = GraphLang.Utils.getNodeLoopOwner(canvas, portObj.getParent());
            var leftTunnelCnt = 0;
            while (nodeParentLoop != undefined && inPortPrepared == true){

              //DEBUG PURPOSES, this was to paint loop background to yellow
              //nodeParentLoop.setBackgroundColor(new GraphLang.Utils.Color("#FFFF00")); //highlight current loop

              //check if all input tunnels are prepared, if not, input port of current node is set to wait, executionOrder left as it is
              nodeParentLoop.getChildren().each(function(tunnelIndex, tunnelObj){
                if (tunnelObj.NAME.toLowerCase().search("lefttunnel") >= 0){
                  leftTunnelCnt++;
                  if (tunnelObj == undefined ||
                      tunnelObj.getOutputPort(0).userData == undefined ||
                      tunnelObj.getOutputPort(0).userData.executionOrder == undefined ||
                      tunnelObj.getOutputPort(0).userData.executionOrder < 0) inPortPrepared = false;
                }
              });
              //if there are no input tunnels go for loop higher look if there are some input tunnels for which we have to wait
              //if some parent loop has some input tunnels it's not needed to go higher, because everything inside that loop will wait for these input tunnels, so we can set nodeParentLoop to undefined what cause end of while loop
              if (leftTunnelCnt == 0) nodeParentLoop = GraphLang.Utils.getNodeLoopOwner(canvas,nodeParentLoop);
              else nodeParentLoop = undefined;
            }
          }

          //IF PORT IS PREPARED SET ITS EXECUTION ORDER
          if (inPortPrepared == true){
            //here was problem that sometime loop doesnt had userdata so this should correct it
            if (portObj.userData != undefined)  portObj.userData = {};
            portObj.userData.executionOrder = actualStepNum;
          }
        }
        inputPortCnt++; //conting input ports of node
      });

      //PROPERTY NODE, waiting until all items are set to continue
      if (nodeObj.getParent() != undefined && nodeObj.getParent().NAME.toLowerCase().search("itemsnode") >= 0){
        var isPropertyNodePrepared = true;
        nodeObj.getParent().getChildren().each(function(childIndex, childObj){  //check all items if their inputs are prepared
          if (childIndex > 0){  //skip property name label
            childObj.getInputPorts().each(function(inPortIndex, inPortObj){
              if (inPortObj.userData.executionOrder == -1) isPropertyNodePrepared = false;
            });
          }
        });
        if (!isPropertyNodePrepared){cnt1 = 0; inputPortCnt = 1;} //if inputs are not prepared just set counters into invalid state and execution order is not generated
        else if (nodeObj.getParent().userData.executionOrder == -1) nodeObj.getParent().userData.executionOrder = actualStepNum;  //set PropertyNode executionOrder
      }

      /***************************************************************************************
       *  PLACING LABEL INTO MIDDLE OF NODE
       ***************************************************************************************/

      if (cnt1 == inputPortCnt){
        //OUTPUT PORT EXECUTION ORDER UPDATE
        var isNodeLabelAdded = false;
        nodeObj.getOutputPorts().each(function(portIndex, portObj){
          if (portObj.getUserData().executionOrder < 0){
            portObj.userData.executionOrder = actualStepNum + 1;  //result is on output in next step that's why +1
          }
        });

        //PLACE LABEL WITH EXECUTION ORDER INTO MIDDLE OF NODE, execept for property and invoke node, they have subelements with labels
        if (nodeObj.userData.executionOrder == -1 && nodeObj.NAME.toLowerCase().search("itemsnode") == -1){
          nodeObj.userData.executionOrder = actualStepNum;
          nodeObj.add(
            new draw2d.shape.basic.Label({
              text:new String(actualStepNum),
              stroke:1, color:"#FF0000", fontColor:"#0d0d0d", bgColor: "#FF0000",
              userData: {datatype: "executionOrder"}
            }),
            new draw2d.layout.locator.CenterLocator(nodeObj)
          );
        }
      }

      //COUNTERS RESET, cnt1 = counter of prepared inputs, inputPortCnt = count of input ports
      cnt1 = 0;
      inputPortCnt = 0;
    });
  }

  //set EXECUTION ORDER for LOOPS
  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      nodeObj.setExecutionOrderByTunnels(canvas);
    }
  });
}

/**
 *  @method runNodeInOrder(canvas)
 *  @description Returns execution order in which nodes run.
 */
GraphLang.Utils.runNodesInOrder = function(canvas){
  var allNodes = new draw2d.util.ArrayList();

  // getting just GraphLang nodes to execute them later
  canvas.getFigures().each(function(figureIndex, figureObj){
    if (figureObj.NAME.toLowerCase().search("graphlang") >= 0) allNodes.push(figureObj);
  });

  //ADDING LOOP TUNNELS TO OTHER NODES, tunnels are part of loop not canvas so they are not detected by canvas.getFigures()
  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") > 0){ //put label just for nodes, for now suppose that's all shapes.basic
      var loopTunnels = new draw2d.util.ArrayList();
      nodeObj.getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("tunnel") > 0){
          allNodes.push(childObj);
        }
      });
    }
  });

  for (var actualStepNum = 1; actualStepNum < 20; actualStepNum++){
    allNodes.each(function(nodeIndex, nodeObj){
      if (nodeObj.userData.executionOrder == actualStepNum) nodeObj.onRun3();
    });
  }
}

/**
 *  @method highlightNodesByExecutionOrder(canvas)
 *  @param {draw2d.Canvas} canvas - schematic in which will be highlited nodes step by step by clicking on button
 *  @description Returns execution order in which nodes run.
 */
var auxLoopCnt = 0;
GraphLang.Utils.highlightNodesByExecutionOrder = function(canvas, parentLoop = null){
  var allLoops = new draw2d.util.ArrayList();
  allLoops.push(undefined); //this is to get canvas direct children
  canvas.getFigures().each(function(loopIndex, loopObj){
    if (loopObj.NAME.toLowerCase().search("loop") >= 0) allLoops.push(loopObj);
  });
  parentLoop = allLoops.get(auxLoopCnt);

  var allLayerNodes = GraphLang.Utils.getLoopDirectChildrenNodes(canvas, parentLoop)

  allLayerNodes.each(function(nodeIndex, nodeObj){
    nodeObj.setBackgroundColor(new GraphLang.Utils.Color("#00FF00"));
  });
  auxLoopCnt++; //debugging moving through loop list
}

/**
 * @method translateToCppCode(canvas)
 * @param {draw2d.Canvas} canvas - place from where to take schematic which will be transcripted into C/C++ code
 * @description DEPRECATED Traverse digram and execute over each node function which gives it's C/C++ representation.
 * It's not solving translating loops or similar multilayered things, there is another function translateToCppCode2 which is trying to handle these things.
 *
 *    *********************************************************************************
 *    * DEPRECATED method, there is new better, more complete one translateToCppCode2
 *    *********************************************************************************
 *
 */
GraphLang.Utils.translateToCppCode = function(canvas){
  var allNodes = canvas.getFigures(); //<--- NEED TO BE REWORKED TJUST FOR TOP CHILDREN NOT ALL INCLUDES TUNNELS
  var allLoops = new draw2d.util.ArrayList();

  //ADDING LOOP TUNNELS TO OTHER NODES, tunnels are part of loop not canvas so they are not detected by canvas.getFigures()
  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") > 0){ //put label just for nodes, for now suppose that's all shapes.basic
      if (allLoops.indexOf(nodeObj) == -1) allLoops.push(nodeObj);  //if loop is not in list register it
      var loopTunnels = new draw2d.util.ArrayList();
      nodeObj.getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
          allNodes.push(childObj);
        }
      });
    }
  });

  /* Now just ticking with clock and run nodes setup to run at that step by execution order. */
  var cCode = "";
  for (var actualStep = 0; actualStep < 20; actualStep++){
    var allNodes = canvas.getFigures();

    /*
      Translating nodes to C++ code, if there are tunnels of loops, it's going also to translate their definitions, like:
        while(...condition...){ <--- this is translate just for first tunnel hwne going through nodes to run
          ...do something....
        }
    */
    allNodes.each(function(nodeIndex, nodeObj){
        if (nodeObj.NAME.toLowerCase().search("tunnel") >= 0){
          //var loopObj = new GraphLang.Shapes.Basic.Loop(nodeObj.getParent());
          var loopObj = nodeObj.getParent();
          var loopObjIndex = allLoops.indexOf(loopObj)

          if (nodeObj.getUserData() != undefined && nodeObj.getUserData().executionOrder == actualStep){
            var tunnelHighestExecutionOrder = -1;
            loopObj.getChildren().each(function(childIndex, childObj){
              if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
                var tunnelExecutionOrder = childObj.getUserData().executionOrder;
                if (tunnelExecutionOrder > tunnelHighestExecutionOrder) tunnelHighestExecutionOrder = tunnelExecutionOrder;
              }
            });
          }
          //actualStep is same as execution order of input tunnel into loop with, so loop definition is set and flag is set for that loop indicate to not translate its header to C/C++ again
          if (actualStep == tunnelHighestExecutionOrder && loopObjIndex >= 0 && loopObj.getUserData() != undefined && loopObj.getUserData().wasTranslatedToCppCode != true){
            cCode += loopObj.translateToCppCode() + "\n";
            loopObj.getUserData().wasTranslatedToCppCode = true;  //<--- mark loop as translated, to be sure
          }

          // // FOR TUNNELS MATTER IF IT SHOULD BE ALREADY EXECUTED, BECAUSE THERE COULD BE ANOTHER TUNNELS ON THE SAME LOOP WITH LATER EXEDCUTION ORDER
          // // NEED TO REWORK EXECUTION ORDER OF TUNNELS
          // if (nodeObj.getUserData().executionOrder == actualStep){
          //   if (loopObjIndex >= 0 && loopObj.getUserData() != undefined && loopObj.getUserData().wasTranslatedToCppCode != true){ //translate just for first time, after no
          //     cCode += loopObj.translateToCppCode();
          //
          //     /*
          //       HERE SHOULD BE RECURSIVE TRANSCRITPING ALL LOOPS, BECAUSE UNTIL NOW PROCESS
          //       SHOULD BE DONE FOR TOP ELEMENTS AND FOR ALL LOOP WHICH ARE EXECUTED IN THE
          //       SAME STEP WHAT COULD BE FIGURE OUT BASED ON TUNNELS, ALWAYS ON THE TUNNEL
          //       WHICH IS EXECUTED AS LATEST, SO EXECUTION ORDER FOR LOOP IS EXECUTION
          //       ORDER OF TUNNEL WHICH IS THE HIGHEST FROM ALLS
          //     */
          //
          //     //allLoops.removeElementAt(loopObjIndex);
          //     loopObj.getUserData().wasTranslatedToCppCode = true;  //<--- mark loop as translated, to be sure
          //   }
          // }
        }

        //getting node c code representation (TUNNELS EXCLUDED)
        if (nodeObj.NAME.toLowerCase().search("tunnel") == -1 && nodeObj.getUserData() != undefined && nodeObj.getUserData().executionOrder != undefined && nodeObj.getUserData().executionOrder == actualStep){
          cCode += nodeObj.translateToCppCode() + "\n";
        }
    });
  }

  alert(cCode);
}

/*********************************************************************************************************
 *  THIS IS MAIN METHOD TO TRANSLATE CODE INTO C/C++
 *********************************************************************************************************/

/**
 * @method translateToCppCode2(canvas)
 * @param {draw2d.Canvas} canvas - schematic which will be transcritped into C/C++ code
 * @description Traverse digram and execute over each node function which gives it's C/C++ representation.
 */
GraphLang.Utils.translateToCppCode2 = function translateToCppCode2(canvas, parentObj = null, nestedLevel = 0){
  var allNodes = GraphLang.Utils.getDirectChildrenWithoutTunnels(canvas, parentObj);
  var allLoops = new draw2d.util.ArrayList();
  var allMultilayeredNodes = new draw2d.util.ArrayList(); //new list for this special kind of node

  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0 &&
        nodeObj.NAME.toLowerCase().search("multilayered") == -1){ //put label just for nodes, for now suppose that's all shapes.basic
      if (allLoops.indexOf(nodeObj) == -1) allLoops.push(nodeObj);  //if loop is not in list register it
    }
    if (nodeObj.NAME.toLowerCase().search("multilayered") >= 0){
      if (allMultilayeredNodes.indexOf(nodeObj) == -1){
        allMultilayeredNodes.push(nodeObj);

        //remove multilayered from all nodes to not be translated as node
        //allNodes.remove(nodeObj);
      }
    }
  });

  /* Now just ticking with clock and run nodes setup to run at that step by execution order. */
  var cCode = "";


  /*********************************************************************************************************
   *  WIRES DECLARATION
   *
   *  globals at level of canvas
   *  ERROR:
   *    - THERE IS NOT VALUE ASSIGNEMENT WHEN WIRE IS CONNECTED TO CONSTANT
   *********************************************************************************************************/
  if (nestedLevel == 0){
    this.getDirectChildrenWires(canvas, null).each(function(lineIndex, lineObj){
      //LuboJ, for now we trust that each line is wire
      //if (lineObj.NAME.toLowerCase().search(""))
      var wireDatatype = lineObj.getSource().getUserData().datatype;

      /*
       *  If wire connected TO NUMERICCONSTNATNODE then assign its value to it
       */
      var connectedConstant = lineObj.getSource().getParent();
      if (connectedConstant.NAME.toLowerCase().search("numericconstantnode") > -1){
        cCode += wireDatatype + " wire_" + connectedConstant.getId() + " = const_" + connectedConstant.getId() + ";\n";
      }else{
        cCode += wireDatatype + " wire_" + connectedConstant.getId() + ";\n";
      }
    });
  }

  /*
   *  EXTERANL PORTS declaration
   *    this would be in fact input parameter into function which wrapp this whole diagram
   */


  for (var actualStep = 0; actualStep < 20; actualStep++){
    allNodes.each(function(nodeIndex, nodeObj){

        /****************************************************************
         *  LOOPS TRANSLATING
         *    WITHOT MULTILAYERED loops (case structure)
         *    must to differentiate between loops and multilayered structures
         *    here are process just loops no multilayered objects (case structures, but they have datataype GraphLang.Shapes.Basic.Loop.Multilayered)
         ****************************************************************/
        if (nodeObj.NAME.toLowerCase().search("loop") >= 0 &&
            nodeObj.NAME.toLowerCase().search("multilayered") == -1){
          var loopObj = nodeObj;
          var loopObjIndex = allLoops.indexOf(loopObj)

          //actualStep is same as execution order of input tunnel into loop with, so loop definition is set and flag is set for that loop indicate to not translate its header to C/C++ again
          // THERE IS RECURSION CALL INSIDE LOOP OBJ TO TRANSLATE IT'S CONTENTS
          if (actualStep == loopObj.getUserData().executionOrder && loopObj.getUserData().wasTranslatedToCppCode != true){
            var delimiter = "";
            for (var k = 0; k < nestedLevel*2; k++) delimiter += " ";
            cCode += delimiter + loopObj.translateToCppCode() + "\n";
            loopObj.getUserData().wasTranslatedToCppCode = true;  //<--- mark loop as translated, to be sure

            //after loop is translated
            for (var k = 0; k < nestedLevel*2; k++) delimiter += " ";
            if (loopObj.translateToCppCodePost != undefined || loopObj.translateToCppCodePost != null) cCode += delimiter + nodeObj.translateToCppCodePost() + "\n"; //if there is defined to put somethin after let's do it
            else cCode += delimiter + "{end loop}\n";
          }
        }


        /****************************************************************
         *  TRANSCRIPT
         *    NODE,
         *    PROPERTY NODE,
         *    INVOKE NODE
         *  INTO C/C++ CODE based just on their NAME, must contain NODE, this word is not used in LOOPS!
         ****************************************************************/

         /*
          *  NOT SURE if all elements which I want to translate into code fulfill condition that word NODE contains just elements
          *   which really are elements not loops or some other structure which are not supposed to behave as nodes
          *   NEED CHECK!
          */

        if (nodeObj.NAME.toLowerCase().search("node") > -1 &&
            nodeObj.getUserData() != undefined &&
            nodeObj.getUserData().executionOrder != undefined &&
            nodeObj.getUserData().executionOrder == actualStep){
          for (var k = 0; k < nestedLevel*2; k++) cCode += " ";
          cCode += nodeObj.translateToCppCode() + "\n";
        }

        /****************************************************************
         *  TRANSCRIPT MULTILAYERED loops translate
         ****************************************************************/

                //THIS DOESN'T RUN
                // if (nodeObj.getParent() != undefined && nodeObj.getParent().NAME.toLowerCase().search("jailhouse") >= 0) cCode += nodeObj.translateToCppCode() + "      {" + nodeObj.getParent().getId() + "}\n";
                // else cCode += nodeObj.translateToCppCode() + "\n";


        if (nodeObj.NAME.toLowerCase().search("multilayered") > -1 &&
            nodeObj.getUserData() != undefined &&
            nodeObj.getUserData().executionOrder != undefined &&
            nodeObj.getUserData().executionOrder == actualStep){

          /*
           *  THIS IS JUST PROTOTYPE
           *  traverse through all layers and transcript them into C CODE
           */
/*
        nodeObj.getAllLayers().each(function(layerIndex, layerObj){
            cCode += layerObj.translateToCppCode();
        });
*/
        cCode += nodeObj.translateToCppCode();
        }

    });
  }

  /* erase flag for for loops at the end of this operation, to be able run again correctly, otherwise
  there will be orphans flags that loops were translated and it will make mess when multiple times
  executed this function without initializing ports */
  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      nodeObj.getUserData().wasTranslatedToCppCode = false;
    }
  });

  //if (parentObj == null) alert(cCode); //DEBUG SHOWS ALERT WITH TRANSLATED CODE for top canvas DISABLED, REQUIRED USER INPUT CLICK ON OK
  return cCode;
}

/**
 *  @method loopsRecalculateAbroadFigures(canvas)
 *  @param {draw2d.Canvas} canvas - schematic which will be recalculated
 *  @description Reevaluate children nodes of every loop on canvas. This function was implemented because sometimes it looks like there are problems with this when new loops are added.
 */
GraphLang.Utils.loopsRecalculateAbroadFigures = function(canvas){
  canvas.getFigures().each(function(loopIndex, loopObj){
    if (loopObj.NAME.toLowerCase().search("loop") >= 0 &&
        loopObj.NAME.toLowerCase().search("multilayered") == -1){
          loopObj.getAboardFigures(true);
    }
  });
}

/**
 *  @method initLoopsZOrder(canvas)
 *  @param {draw2d.Canvas} canvas - schematic where correcting z-order should happen
 *  @description EXPERIMENTAL! STILL WRONG. <br/><br/>Go through all loops in schematic and setup right their z-order. This function is implemented because z-order is probably not right after loading schematic, so this function set it. If it's loaded correctly it should have no imapct on schematic.
 */
GraphLang.Utils.initLoopsZOrder = function(canvas){
  var allFigures = canvas.getFigures();

  //first get list of all loops in schematic
  var allLoops = new draw2d.util.ArrayList();
  allFigures.each(function(figureIndex, figureObj){
    if (figureObj.NAME.toLowerCase().search("loop") >= 0){

      allLoops.push(figureObj);
    }
  });

  //then order loops by their ownership
  // THIS IS RECURSIVE .............................AND NOW WRONG WRONG WRONG!

  /*
    This is not going to work, beacause I need to reimplement if loop contain another loop,
    imagine I load file and I have there some loop which are rectangles and their boundaries
    are set right what means that I need to figure out by looking on picture if they contains
    each other what means I need to just check their geometry, so here will be some simple math
    chekcing algorithm over array list items.

    UNDER HEAVY CONSTRUCTION, beer out, no battery need to go to sleep mode...
  */

  // var orderedLoops = new draw2d.util.ArrayList();
  // allLoops.each(function(loopIndex, loopObj){ //init root of tree, all loops which are descendant of undefined what means top loops
  //   if (GraphLang.Utils.getNodeLoopOwner(canvas, loopObj) == undefined){
  //      orderedLoops.push(loopObj);
  //   }
  // });
  // allLoops.each(function serializeLoopTreeIntoList(loopIndex, loopObj){
  //   var localOrderedLoops = new draw2d.util.ArrayList();
  //   //get direct descendants
  //   if (GraphLang.Utils.getNodeLoopOwner(canvas, loopObj) != undefined && orderedLoops.contains(GraphLang.Utils.getNodeLoopOwner(canvas, loopObj))){
  //      localOrderedLoops.push(loopObj);
  //   }
  //   //put each descendant into list of ordered loops and go further deeper into tree
  //   localOrderedLoops.each(function(loopIndex, loopObj){
  //     orderedLoops.push(loopObj);
  //   });
  //   localOrderedLoops.each(serializeLoopTreeIntoList(loopIndex, loopObj));
  // });
  //
  // /* at the end just go through loops list from end to begin and push them to back, so loop which
  //    contains all loops would be pushed last and therefore will be visible */
  // for (var k = orderedLoops.getSize()-1; k >= 0; k--){
  //   orderedLoops.get(k).toBack();
  // }

}

/**
 *  @method showSelectedObjExecutionOrder(canvas)
 *  @param {draw2d.Canvas} canvas - fromt here is taken selected object
 *  @description Display execution order of current highlighted object.
 */
GraphLang.Utils.showSelectedObjExecutionOrder = function(canvas){
    var element = canvas.getSelection().getAll().first();
    alert(element.getUserData().executionOrder);
}

/**
 * @method getDirectChildrenWires()
 * @param {draw2d.Canvas} canvas - schematic
 * @param {draw2d.Figure} parentObj - returned wires are direct descendant of this object
 * @description Returns wires which are direct descendant of provided object.
 */
GraphLang.Utils.getDirectChildrenWires = function getDirectChildrenWires(canvas, parentObjId = null){
  var directChildrenWires = new draw2d.util.ArrayList();
  var allLoops = new draw2d.util.ArrayList();

  //first get all loops, wire could be inside them
  canvas.getFigures().each(function(figureIndex, figureObj){
    if (figureObj.NAME.toLowerCase().search("loop") >= 0){
      allLoops.push(figureObj);
    }
  });

  //clear all lines parents
  canvas.getLines().each(function(lineIndex, lineObj){
    if (lineObj.userData == null) lineObj.userData = {};
    lineObj.userData.wireOwnerId = null;
  });

  //go through all loops and write into their abroad lines that it's their parent
  allLoops.each(function(loopIndex, loopObj){
    loopObj.getAboardFigures().each(function(aboardFigureIndex, aboardFigureObj){
      aboardFigureObj.getPorts().each(function(portIndex, portObj){
        portObj.getConnections().each(function(connectionIndex, connectionObj){
          if (connectionObj.userData == null) connectionObj.userData = {};
          connectionObj.userData.wireOwnerId = loopObj.getId();
        });
      });
    });
  });

  //go thorugh all wires and push that which has right parent
  canvas.getLines().each(function(lineIndex, lineObj){
    if (parentObjId != null){
      if (lineObj.userData.wireOwnerId != null && lineObj.userData.wireOwnerId.search(parentObjId) > -1){
        directChildrenWires.push(lineObj);
      }
    }else{
      if (lineObj.userData.wireOwnerId == null){
        directChildrenWires.push(lineObj);
      }
    }
  });
  //alert(directChildrenWires.getSize());

  return directChildrenWires;
}

/**
 * @method setWiresColorByPorts()
 * @param {draw2d.Canvas} canvas - schematic where wire will be colorized
 * @description Colorize all wires in schematic according to port datatypes.
 */
GraphLang.Utils.setWiresColorByPorts = function setWiresColorByPorts(canvas){
  //set wires color by connected input ports
  canvas.getLines().each(function(lineIndex, lineObj){
    var color = new GraphLang.Utils.Color();  //GraphLang.Utils.Color is not object so we need to instantiate that class
    // if (lineObj.getSource() != undefined && lineObj.getSource().getUserData() != undefined) var lineColor = color.getByName(lineObj.getSource().getUserData().datatype);  //get hexadecimal color string from it's name
    // else var lineColor = color.getByName("broken");
    var lineColor = color.getByName(lineObj.getSource().getUserData().datatype);  //get hexadecimal color string from it's name
    lineObj.setColor(lineColor);  //set wire color
  });

  /*
   *  COPY INPUT PORT DATATYPE TO OUTPUT AND CHANGE TUNNEL Color
   *  running twice to be sure that in first run all lefttunnels are rewritten and after in second run all consequence tunnels are rewritten
   *  *this is WRON SOLUTION ERROR when there is chain of tunnels, if there are N tunnels I need to run this N times, NEED IMPORVE!
   */

   /*
    *   FIND LOOPS and return TUNNEL LIST
    */
   var allNodes = canvas.getFigures();
   var allTunnels = new draw2d.util.ArrayList();
   allNodes.each(function(nodeIndex, nodeObj){
     //get loops from canvas
     if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
       if (nodeObj.getUserData() == undefined) nodeObj.userData.wasTranslatedToCppCode = false;
       nodeObj.getUserData().wasTranslatedToCppCode = false;

       nodeObj.getChildren().each(function(childIndex, childObj){
         if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
           allTunnels.push(childObj);
         }
         else if (childObj.NAME.toLowerCase().search("righttunnel") >= 0){
           allTunnels.push(childObj);
         }
       });
     }
   });

   //default Color object and datatype variable used for transfer input datatype of tunnel to its output
   var colorPicker = new GraphLang.Utils.Color();
   var inputPortDatatype = "undefined";

    /*
     *  CHANGE TUNNELS COLOR
     */
  allTunnels.each(function(tunnelIndex, tunnelObj){
    //tunnelObj.setColor(new GraphLang.Utils.Color("#FF0000"));
    //wireColor = colorPicker.getByName();
    if (tunnelObj.getInputPort(0).getConnections().getSize() > 0){
      inputPortDatatype = tunnelObj.getInputPort(0).getConnections().get(0).getSource().userData.datatype;
    }else{
      inputPortDatatype = "undefined";
    }
    wireColor = colorPicker.getByName(inputPortDatatype);
    tunnelObj.getOutputPort(0).userData.datatype = inputPortDatatype; //copy input datatype to output port
    tunnelObj.getInputPort(0).userData.datatype = inputPortDatatype; //copy input datatype to output port
    tunnelObj.setBackgroundColor(wireColor);                          //change tunnel color
  });

}

/**
 * @method getSelectedLoopTunnelCount(canvas)
 * @param {draw2d.Canvas} canvas - schematic
 * @description For selected loop show number of tunnels.
 */
GraphLang.Utils.getSelectedLoopTunnelCount = function setWiresColorByPorts(canvas){
  var node = canvas.getPrimarySelection();
  var tunnelCount = 0;

  if (node.NAME.toLowerCase().search("loop") >= 0){
    node.getChildren().each(function(tunnelIndex, tunnelObj){
      if (tunnelObj.NAME.toLowerCase().search("tunnel") >= 0){
        tunnelCount++;
      }
    });
  }
  alert(tunnelCount);
  return tunnelCount;
}

/**
 * @method getCanvasJson(canvas)
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @description For selected loop show number of tunnels.
 */
GraphLang.Utils.getCanvasJson = function(canvas){
  var writer = new draw2d.io.json.Writer();
  writer.marshal(canvas,function(json){
      var clearedJson = [];
      var wrongJson = [];
      for (var k = 0; k < json.length; k++){
        if (
          json[k].type.toLowerCase().search("tunnel") == -1 &&
          // (json[k].type.toLowerCase().search("graphlang") >= 0 ||
          //  json[k].type.toLowerCase().search("connection") >= 0)
          1
        )
        {
          clearedJson.push(json[k]);
        }else if (json[k].type.toLowerCase().search("multilayered") >= 0){
          var multilayerChooser = canvas.getFigure(json[k].id).getChildren().get(0);

          var chooserObj =  new draw2d.shape.basic.Label(multilayerChooser);
          clearedJson.push(chooserObj);
          // alert(multilayerChooser.text);
        }
        else wrongJson.push(json[k]);
      }
      jsonStr = JSON.stringify(clearedJson, null, 2);
      // jsonStr = JSON.stringify(wrongJson, null, 2);

      var copyElement = document.createElement('textarea');

      copyElement.innerHTML= "var jsonDocument = " + jsonStr + ";";
      copyElement = document.body.appendChild(copyElement);
      copyElement.select();
      document.execCommand('copy');
      copyElement.remove();
  });
}

/**
 * @method getCppCode2(canvas)
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @description Copy diagram as C/C++ code into clipboard, uses inside translateToCppCode2() function.
 */
GraphLang.Utils.getCppCode2 = function(canvas){
        var copyElement = document.createElement('textarea');
        cCode = "";

        //TO BE SURE RECALCULATE NODES OWNERSHIP BY loopsRecalculateAbroadFigures
        GraphLang.Utils.loopsRecalculateAbroadFigures(canvas);

        //THIS ADAPT PORT DATATYPES SAME AS CONNECTED Wires
        //this can cause some problems because it's not bullet proof function, beacuse it's running statically, need to rewrite it more adaptive but when clicked at least 3 times it's OK
        GraphLang.Utils.setWiresColorByPorts(canvas);
        GraphLang.Utils.setWiresColorByPorts(canvas);
        GraphLang.Utils.setWiresColorByPorts(canvas);

        //ORIGINAL WITHOUT REWRITING IDs
        //copyElement.innerHTML = GraphLang.Utils.translateToCppCode2(canvas, null);

        // INITIALIZATION
        // added by LuboJ. this CAN CAUSE SOME ERRORS IT WASN'T HERE UNTIL RECENTLY when I saw that there is not port initialization and execution order done in this task.
        this.initAllPortToDefault(canvas);
        this.executionOrder(canvas);

        //this is element which content is placed into clipboard
        cCode = GraphLang.Utils.translateToCppCode2(canvas, null);
        cCode = this.rewriteIDtoNumbers(canvas, cCode);                 //THIS WILL CHANGE ALL IDs IN FILE INTO NUMBERS TO MAKE CODE MORE READIBLE! DONT'FORGET ABOUT THAT WHEN DEBUGGING AND EXPECTING ID.
        copyElement.innerHTML = cCode;

        copyElement = document.body.appendChild(copyElement);
        copyElement.select();
        document.execCommand('copy');
        copyElement.remove();

        alert(cCode); //DEBUG show code in alert message
}


/**
 * @method getCanvasAsPNG(canvas)
 * @param {draw2d.Canvas} canvas - schematic which will be exported as PNG base64 encoded.
 * @description Copy diagram as PNG image.
 */
GraphLang.Utils.getCanvasAsPNG = function(canvas){
        var writer = new draw2d.io.png.Writer();
        writer.marshal(canvas,function(png){
           $("#preview").attr("src",png);

           //GRAB WHOLE CANVAS AS IMAGE AND PUT IT AS base64 encoded PNG into <img>
           //this is element which content is placed into clipboard
           var copyElement = document.createElement('textarea');
           copyElement.innerHTML = png;
           copyElement = document.body.appendChild(copyElement);
           copyElement.select();
           document.execCommand('copy');
           copyElement.remove();

           var selection = canvas.getPrimarySelection();
           srcX = selection.getX() - 10;
           srcY = selection.getY() - 10;
           srcWidth = selection.getWidth() + 20;
           srcHeight = selection.getHeight() + 20;

           srcRatio = srcWidth / srcHeight;

           //GRAB IMAGE CONTENT AND DRAW IT ONTO CANVAS, ADVATAGE IS THAT WE CAN DO CROP JUST PART OF CANVAS
           myCanvas = document.getElementById('myCanvas');
           ctx = myCanvas.getContext('2d');
           targetWidth = myCanvas.width;
           targetHeight = myCanvas.height;
/*
           ctx.drawImage(img ,sx, sy, swidth, sheight, x, y, width, height);

           img     - Specifies the image, canvas, or video element to use
           sx      - Optional. The x coordinate where to start clipping
           sy      - Optional. The y coordinate where to start clipping
           swidth  - Optional. The width of the clipped image
           sheight - Optional. The height of the clipped image
           x       - The x coordinate where to place the image on the canvas
           y       - The y coordinate where to place the image on the canvas
           width	 - Optional. The width of the image to use (stretch or reduce the image)
           height	 - Optional. The height of the image to use (stretch or reduce the image)
*/
           var image = new Image();
           image.onload = function() {
             //ctx.globalAlpha = 1; //NOT RUNNING
             ctx.beginPath();
             ctx.rect(0, 0, 300, 300);
             ctx.fillStyle = "#FFFFFF";
             ctx.fill();
             //put on canvas currently selected object
             if (srcWidth > srcHeight){
               ctx.drawImage(image,
                   srcX, srcY,   // Start at 70/20 pixels from the left and the top of the image (crop),
                   srcWidth, srcHeight,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
                   0, 0,     // Place the result at 0, 0 in the canvas,
                   targetWidth, srcHeight * targetWidth / srcWidth
               ); // With as width / height: 100 * 100 (scale)
            }else{
              ctx.drawImage(image,
                  srcX, srcY,
                  srcWidth, srcHeight,
                  0, 0,
                  srcWidth * targetHeight / srcHeight, targetHeight
              ); // With as width / height: 100 * 100 (scale)
            }
           };
           image.src = png;
        });
}

/**
 * @method setPortsColorByDatatype(canvas)
 * @param {draw2d.Canvas} canvas - schematic where ports will be colorized
 * @description Colorize all ports in schematic according to theirs datatypes.
 */
GraphLang.Utils.setPortsColorByDatatype = function setWiresColorByPorts(canvas){
  canvas.getAllPorts().each(function(portIndex, portObj){
    var color = new GraphLang.Utils.Color();  //GraphLang.Utils.Color is not object so we need to instantiate that class
    // if (lineObj.getSource() != undefined && lineObj.getSource().getUserData() != undefined) var lineColor = color.getByName(lineObj.getSource().getUserData().datatype);  //get hexadecimal color string from it's name
    // else var lineColor = color.getByName("broken");
    var portColor = color.getByName(
      portObj.getUserData() !== null ? portObj.getUserData().datatype : "undefined"
    );  //get hexadecimal color string from it's name
    portObj.useGradient = false;
    portObj.setBackgroundColor(portColor);  //set wire color
  });
}

/**
 *  @method setTunnelColorByWire(canvas)
 *  @param {draw2d.Canvas} canvas - source canvas from where take tunnels, all included one which belongs to loop structures
 *  @description Change color of each tunnel by connected wire datatype.
 */
GraphLang.Utils.setTunnelColorByWire = function(canvas){
  var allNodes = canvas.getFigures();
  var allTunnels = new draw2d.util.ArrayList();

  //ADDING LOOP TUNNELS TO OTHER NODES, tunnels are part of loop not canvas so they are not detected by canvas.getFigures()
  allNodes.each(function(nodeIndex, nodeObj){
    //ADD ALL LOOP'S TUNNELS into node list\
    // first search for all loops, because tunnels are part of them and then go through tunnels list
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      nodeObj.getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
          allTunnels.push(childObj);
        }
      });
    }
    var colorPicker = new GraphLang.Utils.Color();
    allTunnels.each(function(tunnelOrder, tunnelObj){
      tunnelObj.setBackgroundColor(
        colorPicker.getByName(
            tunnelObj.getInputPort(0).getConnections().first().getSource().userData.datatype
        ));
    });
  });
}

/**
 *  @method showLoopsExecutionOrder(canvas)
 *  @param {draw2d.Canvas} canvas
 *  @description Place label with loop execution order into its middle
 */
GraphLang.Utils.showLoopsExecutionOrder = function(canvas){
  var allNodes = canvas.getFigures();
  var allLoops = new draw2d.util.ArrayList();

  allNodes.each(function(nodeIndex, nodeObj){
    if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
      allLoops.push(nodeObj);
    }
  });

  allLoops.each(function(loopIndex, loopObj){
    //alert(loopObj.userData.executionOrder);
    loopObj.add(
      new draw2d.shape.basic.Label({
        text:new String(loopObj.userData.executionOrder),
        stroke:1, color:"#FF0000", fontColor:"#0d0d0d", bgColor: "#FF0000",
        userData: {datatype: "executionOrder"}
      }),
      new draw2d.layout.locator.CenterLocator(loopObj)
    );
  });
}

/**
 *  @method getDirectChildrenOfSelectedNode(canvas)
 *  @param {draw2d.Canvas} canvas
 *  @description Change background of nodes to be red for direct children of selected node. This function is here mostly for debug
 *  to see red nodes which should be children of loop if loop is selected, just to see how it's visible in javascript inside editor..
 */
GraphLang.Utils.getDirectChildrenOfSelectedNode = function(canvas){
  var selectedFigures = canvas.getSelection().getAll();
  GraphLang.Utils.getDirectChildrenWithoutTunnels(canvas, selectedFigures.get(0)).each(function(childrenIndex, childrenObj){
    childrenObj.setBackgroundColor(new GraphLang.Utils.Color("#FF0000"));
  });
}

/**
 *  @method rewriteIDtoNumbers(canvas)
 *  @param {draw2d.Canvas} canvas
 *  @description Rewrite in output code all IDs to normal numbers to make output code more readible
 */
GraphLang.Utils.rewriteIDtoNumbers = function(canvas, cCode){
  var allId = new draw2d.util.ArrayList();
  canvas.getFigures().each(function(figureIndex, figureObj){
      allId.push(figureObj.getId());
      if (figureObj.NAME.toLowerCase().search("loop") > -1){
        figureObj.getChildren().each(function(childIndex, childObj){
          if (childObj.NAME.toLowerCase().search("tunnel") > -1){
            allId.push(childObj.getId());
          }
        });
      }
  });
  canvas.getLines().each(function(connectionIndex, connectionObj){
    allId.push(connectionObj.getId());
  });

  //replace IDs with their order for more human readible code
  var counter = 0;
  allId.each(function(IdIndex, IdObj){
    var regExpression = new RegExp(IdObj, 'g');
    cCode = cCode.replace(regExpression, counter++);
  });

  return cCode;
}
