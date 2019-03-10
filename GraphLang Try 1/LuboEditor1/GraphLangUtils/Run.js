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

/**
 *  @method
 *  @name GraphLang.Utils.detectTunnels(canvas)
 *  @description Returns coordinates and put point where wires intersect with loop border (for loop, while loop, case structure, ...)
 */
GraphLang.Utils.detectTunnels = function(canvas){
  let loopBoundingRect;
  canvas.getFigures().each(function(figureIndex, figureObj){
    //alert(figureObj.NAME);
    if (figureObj.NAME == "GraphLang.Shapes.Basic.Loop") loopBoundingRect = figureObj.getBoundingBox();
  });
  //alert("Loop rect width: " + loopBoundingRect.getWidth());
  let loopIntersections = [];
  let loopIntersctDirection = []; //1=top to bottom, 2=bottom to top, 3=left to right, 4=right to left
  let lineVert  = [];
  canvas.getLines().each(function(lineIndex, lineObj){
    let lineSegments = lineObj.getSegments();
    lineSegments.each(function(segmentIndex, segmentObj){
      let intersectPoint = loopBoundingRect.intersectionWithLine(
        segmentObj.start,
        segmentObj.end
      );
      if (intersectPoint){
        loopIntersections.push(intersectPoint);

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
        if (insidePoint.getY() == outsidePoint.getY() && insidePoint.getX() < outsidePoint.getX()) loopIntersctDirection.push(3);
        if (insidePoint.getY() == outsidePoint.getY() && insidePoint.getX() >= outsidePoint.getX()) loopIntersctDirection.push(4);
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
      });
    }
  }

};
