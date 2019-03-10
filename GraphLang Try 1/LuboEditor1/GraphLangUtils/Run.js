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
  let loopBoundingRect;
  let loopObj;
  canvas.getFigures().each(function(figureIndex, figureObj){
    //alert(figureObj.NAME);

    //remember loop object reference to not lose access to it
    if (figureObj.NAME == "GraphLang.Shapes.Basic.Loop"){
      loopObj = figureObj;
      loopBoundingRect = figureObj.getBoundingBox();
    }
  });
  //alert("Loop rect width: " + loopBoundingRect.getWidth());
  let loopIntersections = [];
  let loopIntersctDirection = []; //1=top to bottom, 2=bottom to top, 3=left to right, 4=right to left
  let lineVert  = [];
  let intersectedLines = [];
  canvas.getLines().each(function(lineIndex, lineObj){
    let lineSegments = lineObj.getSegments();
    lineSegments.each(function(segmentIndex, segmentObj){
      let intersectPoint = loopBoundingRect.intersectionWithLine(
        segmentObj.start,
        segmentObj.end
      );
      if (intersectPoint){
        loopIntersections.push(intersectPoint);
        intersectedLines.push(lineObj);

        //looking which point of segment is inside, which is otuside
        let insidePoint, outsidePoint;
        if (loopBoundingRect.hitTest(segmentObj.start.getX(), segmentObj.start.getY())){
          insidePoint = segmentObj.start;
          outsidePoint = segmentObj.end;
        }else{
          insidePoint = segmentObj.end;
          outsidePoint = segmentObj.start;
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
         var tunnelObj = new GraphLang.Shapes.Basic.Tunnel();

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
         var tunnelLocatorRel =  new draw2d.layout.locator.XYRelPortLocator(
           Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
           Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
         );

         //this is correct, I tested both are rotating for 90deg, inputs and outputs are then on right side
         if (loopIntersctDirection[k+i] == 1) tunnelObj.setRotationAngle(90);
         if (loopIntersctDirection[k+i] == 2) tunnelObj.setRotationAngle(90);
         //if (loopIntersctDirection[k+i] == 3) tunnelObj.setRotationAngle(180);
         //if (loopIntersctDirection[k+i] == 4) tunnelObj.setRotationAngle(0);

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

      });
    }
  }

};

/**
 *  @method
 *  @name GraphLang.Utils.initAllPortToDefault(canvas)
 *  @description Returns execution order in which nodes run.
 */
GraphLang.Utils.initAllPortToDefault = function(canvas){
  var allPorts = appCanvas.getAllPorts();

  allPorts.each(function(portIndex, portObj){
    //coloring port and set value based on if it's input or output
    if (portObj.NAME == "draw2d.InputPort"){
      /* if port is input it's colored as input and execution order is -1 because there
      must be waiting for value */
      portObj.setBackgroundColor(new draw2d.util.Color(255,255,0));
      portObj.setUserData($.extend({value: 0, status: 0, executionOrder: -1}, portObj.getUserData()));
    }
    else if (portObj.NAME == "draw2d.OutputPort"){
      if (portObj.getParent().getInputPorts().getSize() == 0){
        /* if there are just output ports than their values must be already accessible
        (if there would be som subblocks they will be evaluated as soon this node
        will be running here we figure out that these nodes will be first executed) */
        portObj.setBackgroundColor(new draw2d.util.Color(0,255,0));
        portObj.setUserData($.extend({value: 0, status: 0, executionOrder: 1}, portObj.getUserData()));
      }else{
        /* if node has some inputs, it means that it cannot be executed until all data
        at them are accessible, so status is set to 0 and corresponding color for
        input is used */
        portObj.setBackgroundColor(new draw2d.util.Color(255,255,255));
        portObj.setUserData($.extend({value: 0, status: 0, executionOrder: -1}, portObj.getUserData()));
      }
    }
  });
}

/**
 *  @method
 *  @name GraphLang.Utils.executionOrder(canvas)
 *  @description Returns execution order in which nodes run.
 */
GraphLang.Utils.executionOrder = function(canvas){
  var allNodes = canvas.getFigures();
  let cnt1 = 0;
  let inputPortCnt = 0;

  /******************************************************************************
   *  IMPORTANT NOT START AT 0, actualStepNum must start at 1 because for step 0
   *  there is no rule how to increase it or somethin, I choose to do this
   *  because 0 is weird zero :D
   ******************************************************************************/
  for (var actualStepNum = 1; actualStepNum < 10; actualStepNum++){
    allNodes.each(function(nodeIndex, nodeObj){
      //gathering information about input ports, checking if all of them are already prepared
      nodeObj.getInputPorts().each(function(portIndex, portObj){
        if (portObj.getUserData().executionOrder > 0) cnt1++;
        else if (portObj.getUserData().executionOrder < 0){
          /* if input port is not ready, check connected ports for which is this port waiting
          and check their status */
          let inPortPrepared = true;
          portObj.getConnections().each(function(wireIndex, wireObj){
            if (wireObj.getSource() && wireObj.getSource().getUserData().executionOrder < 0) inPortPrepared = false;
          });
          if (inPortPrepared == true){
            var userData = portObj.getUserData();
            userData.executionOrder = actualStepNum;
            portObj.setUserData(userData);
          }
        }
        inputPortCnt++;
      });
      if (cnt1 == inputPortCnt){
        //if all inputs are available then mark to output ports number of step when they run
        nodeObj.getOutputPorts().each(function(portIndex, portObj){
          if (portObj.getUserData().executionOrder < 0){
            var userData = portObj.getUserData();
            userData.executionOrder = actualStepNum;
            portObj.setUserData(userData);
          }

          canvas.add(
            new draw2d.shape.basic.Label({
              x: portObj.getX() + portObj.getParent().getX(), //ports have relative position to parent obj
              y: portObj.getY() + portObj.getParent().getY(),
              text:new String(portObj.getUserData().executionOrder),
              stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
            })
          );

        });
        //reset counters
      }
      cnt1 = 0;
      inputPortCnt = 0;
    });
    actualStepNum++;
  }
}
