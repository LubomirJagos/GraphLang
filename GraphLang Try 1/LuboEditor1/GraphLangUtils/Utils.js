/**
 *  @name GraphLang.Utils
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
 *  @name GraphLang.Utils.runInterpreter
 *  @description Another testing function to see if graph interpreter is running nodes in right order.
 */
GraphLang.Utils.runInterpreter = function(canvas){
  let allPorts = canvas.getAllPorts();
  let outMsg = "";
  let idList = [];
  let cntPort = 0;
  let parentIdList = [];

  //getting type names of all ports just for example to show how it should be done
  allPorts.each(function(index, portObj){
    idList.push(portObj.NAME);
    parentIdList.push(portObj);
  });
  idList.sort();
  for (var i = 0; i < idList.length; i++){
    outMsg += idList[i] + "\n";
  }

  alert("All ports:" + "\n" + outMsg);
  //alert(idList);
}

/**
 *  @name GraphLang.Utils.run(canvas)
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

/**************************************
 *  @title "Detect Joints"
 *  @name GraphLang.Utils.detectJoints(canvas)
 *  @description This function puts some mark at wires crossing. For now there will be point inserted.
 **************************************/
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
 *  @method
 *  @name GraphLang.Utils.goThroughGraph(canvas)
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

/******************************************************************************
 *  CREATES wire connection btw source and target
 ******************************************************************************/
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
 *  @method
 *  @name GraphLang.Utils.detectTunnels(canvas)
 *  @description Returns coordinates and put point where wires intersect with loop border (for loop, while loop, case structure, ...)
 */
GraphLang.Utils.detectTunnels = function(canvas){
  let loopList = new draw2d.util.ArrayList();
  // let loopBoundingRect;
  // let loopObj;
  canvas.getFigures().each(function(figureIndex, figureObj){
    //alert(figureObj.NAME);

    //remember loop object reference to not lose access to it
    if (figureObj.NAME == "GraphLang.Shapes.Basic.Loop"){
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
           if (intersectionInOutDirection[k+1] == 0) tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
           else if (intersectionInOutDirection[k+1] == 1) tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();

           //this is correct, I tested both are rotating for 90deg, inputs and outputs are then on right side
           if (intersectionEdge[k+i] == 0 || intersectionEdge[k+i] == 2){
             tunnelObj.setRotationAngle(90);
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
           appCanvas.add(additionalConnection);
           additionalConnection.setSource(oldSource);
           additionalConnection.setTarget(tunnelObj.getInputPort(0));
           tunnelObj.setSelectable(true);

        });
      }
    }
  }); //end function to add tunnel to each intersect of wires with loops

};

/**
 *  @method auxFunc(canvas)
 *  @name GraphLang.Utils.auxFunc(canvas)
 *  @description This is auxiliary function for debugging to see something.
 */
GraphLang.Utils.auxFunc = function(canvas){
  var selectedFigures = canvas.getSelection();
  if (selectedFigures){
    var loopFigs = selectedFigures.getAll().get(0).getAboardFigures(true);
  }
};

/**
 *  @method
 *  @name GraphLang.Utils.initAllPortToDefault(canvas)
 *  @description Set default value for all ports. FOR NOW SET VALUE OF EACH PORT TO 0.
 */
GraphLang.Utils.initAllPortToDefault = function(canvas){
  var allPorts = appCanvas.getAllPorts();

  // var allNodes = appCanvas.getFigures();
  // allNodes.each(function(nodeIndex, nodeObj){
  //   if (nodeObj.NAME.toLowerCase().search("loop") >= 0){ //put label just for nodes, for now suppose that's all shapes.basic
  //     var loopTunnels = new draw2d.util.ArrayList();
  //     nodeObj.getChildren().each(function(childIndex, childObj){
  //       if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
  //         allPorts.push(childObj.getInputPort(0));
  //         allPorts.push(childObj.getOutputPort(0));
  //       }
  //     });
  //   }
  // });

  allPorts.each(function(portIndex, portObj){
    if (portObj.userData == undefined) portObj.userData = {};
    portObj.userData.value = 0;
    portObj.userData.status = 0;

    //coloring port and set value based on if it's input or output
    if (portObj.NAME.toLowerCase().search("inputport") >= 0){
      /* if port is input it's colored as input and execution order is -1 because there
      must be waiting for value */
      portObj.setBackgroundColor(new draw2d.util.Color(255,255,0));
      portObj.userData.executionOrder = -1;
    }
    else if (portObj.NAME.toLowerCase().search("outputport") >= 0){
      if (portObj.getParent().getInputPorts().getSize() == 0){
        /* if there are just output ports than their values must be already accessible
        (if there would be som subblocks they will be evaluated as soon this node
        will be running here we figure out that these nodes will be first executed) */
        portObj.setBackgroundColor(new draw2d.util.Color(0,255,0));
        portObj.userData.executionOrder = 1;
      }else{
        /* if node has some inputs, it means that it cannot be executed until all data
        at them are accessible, so status is set to 0 and corresponding color for
        input is used */
        portObj.setBackgroundColor(new draw2d.util.Color(255,255,255));
        portObj.userData.executionOrder = -1;
      }
    }

    //remove label nodes from all nodes, this is because these labels are execution order for debugging
    portObj.getParent().getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("label") >= 0){
        portObj.getParent().remove(childObj);
      }
    });
  });

}

/**
 *  @method
 *  @name GraphLang.Utils.showPortExecutionOrder(canvas)
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
 *  @name GraphLang.Utils.bringToFront(canvas)
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
 *  @method showNodes()
 *  @name GraphLang.Utils.executionOrder(canvas)
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
 *  @method
 *  @name GraphLang.Utils.executionOrder(canvas)
 *  @description Returns execution order in which nodes run.
 */
GraphLang.Utils.executionOrder = function(canvas){
  var allNodes = canvas.getFigures();

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
          if (portObj.getUserData().executionOrder > 0) cnt1++;
          else if (portObj.getUserData().executionOrder < 0){
            /* if input port is not ready, check connected ports for which is this port waiting
            and check their status */
            let inPortPrepared = true;

            //CHECK STATE OF CONNECTED OUTPUTS BEFORE THIS PORT
            portObj.getConnections().each(function(wireIndex, wireObj){
              if (wireObj.getSource() && wireObj.getSource().getUserData().executionOrder < 0) inPortPrepared = false;
            });

            //if port is part of tunnel, check if all other tunnel are already prepared
            //THIS IS NOT USED, because it makes other p[roblems that tunnels are waiting for each other so in the end we will get nothing
            // if (portObj.getParent().NAME.toLowerCase().search("tunnel") >= 0){
            //   var tunnelList = new draw2d.util.ArrayList();
            //   portObj.getParent().getParent().getChildren().each(function(childIndex, childObj){
            //     if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
            //       if (childObj.getInputPort(0).getUserData().executionOrder < 0) inPortPrepared = false;
            //     }
            //   });
            // }

            if (inPortPrepared == true){
              var userData = portObj.getUserData();
              userData.executionOrder = actualStepNum;
              portObj.setUserData(userData);
            }
          }
          inputPortCnt++;
        });

      /***************************************************************************************
       *  PLACING LABEL INTO MIDDLE OF NODE
       ***************************************************************************************/

      if (cnt1 == inputPortCnt){
        //PLACE LABEL WITH EXECUTION ORDER INTO MIDDLE OF NODE
        //if all inputs are available then mark to output ports number of step when they run
        nodeObj.getOutputPorts().each(function(portIndex, portObj){
          if (portObj.getUserData().executionOrder < 0){
            var userData = portObj.getUserData();
            userData.executionOrder = actualStepNum;
            portObj.setUserData(userData);
          }

/*        THIS ADD ALBEL NEXT TO OUTPUT PORTS
          canvas.add(
            new draw2d.shape.basic.Label({
              x: portObj.getX() + portObj.getParent().getX(), //ports have relative position to parent obj
              y: portObj.getY() + portObj.getParent().getY(),
              text:new String(portObj.getUserData().executionOrder),
              stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
            })
          );
*/

          //ADD LABEL INSIDE MIDDLE OF EACH NODE
          nodeObj.add(
            new draw2d.shape.basic.Label({
              x: portObj.getX() + portObj.getParent().getX(), //ports have relative position to parent obj
              y: portObj.getY() + portObj.getParent().getY(),
              text:new String(portObj.getUserData().executionOrder),
              stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
            }),
            new draw2d.layout.locator.CenterLocator(nodeObj)
          );
          nodeObj.setUserData($.extend({executionOrder: portObj.getUserData().executionOrder},nodeObj.getUserData()));

        });
        //reset counters

      }
      cnt1 = 0;
      inputPortCnt = 0;
    });
  }
}

/**
 *  @method runNodeInOrder(canvas)
 *  @name GraphLang.Utils.runNodeInOrder(canvas)
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
