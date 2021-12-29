/*******************************************************************************
 *  Utils.js by LuboJ
 */

//auxiliary ArrayList store declaration of some variables or something during translation process
translateToCppCodeDeclarationArray =  new draw2d.util.ArrayList();
translateToCppCodeFunctionsArray =  new draw2d.util.ArrayList();
lastCreatedConnection = null;

/**
 *  @class GraphLang.Utils
 *  @description Base class for GraphLang utils
 */
GraphLang.Utils = Class.extend({
  NAME: "GraphLang.Utils",

  init:function(attr, setter, getter){
    this._super(attr, setter, getter);

  }
});

/**
 *  @method getCppCodeDeclaration
 *  @description Returns ArrayList containing actual declarations for clusters and so collected during traversing diagram.
 */
GraphLang.Utils.getCppCodeDeclaration = function(){
  var cCode = "";
  translateToCppCodeDeclarationArray.each(function(itemIndex, itemObj){
    cCode += itemObj + "\n";
  });
  return cCode;
}

/**
 *  @method detectJoints
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
 *  @method createConnection
 *  @param {draw2d.InputPort} sourcePort - beginning of wire
 *  @param {draw2d.OutputPort} targetPort - end of wire
 *  @description CREATES wire connection btw source and target
 *  @returns {draw2d.Connection} Created connection
 */
var createConnection=function(sourcePort, targetPort){

    //var conn= new draw2d.Connection({
    var conn= new HoverConnection({
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


bullshit = 0;

/**
 *  @method detectTunnels2
 *  @param {draw2d.Canvas} canvas - schematic in which is loop located
 *  @description Rework function to detectTunnels.
 */
GraphLang.Utils.detectTunnels2 = function(canvas, wire = null){
  if (wire == null) return;		//tunnel detection is for particular wire, if not set this ends

  let loopList = new draw2d.util.ArrayList();
  let connectionList = new draw2d.util.ArrayList();

  /*
   *	gathering all multilayered structures
   */
  canvas.getFigures().each(function(figureIndex, figureObj){
    if (figureObj.NAME.search("GraphLang.Shapes.Basic.Loop") > -1 &&
        figureObj.NAME.toLowerCase().search("clusterdatatype") == -1 &&
        figureObj.getComposite() == null){

      let nestedLayeredList = figureObj.getVisibleLoopAndMultilayered();
      if (!nestedLayeredList.isEmpty()) loopList.addAll(nestedLayeredList);  //add ArrayList to current just in case it's not empty otherwise there will be undefined object and make harm in following code
    }
  });

  /*
   *	DETECT INTERSECTION WITH WIRE AND EACH MULTILAYERED STRUCTURED AND GATHER ALL NEEDED INFORMATIONS
   */
  let loopIntersections = [];
  loopList.each(function(loopIndex, loopObj){
    let loopBoundingRect = loopObj.getBoundingBox();

    let lineSegments = wire.getSegments();
    lineSegments.each(function(segmentIndex, segmentObj){

      let intersectPoint = loopBoundingRect.intersectionWithLine(
        segmentObj.start,
        segmentObj.end
      );

      if (intersectPoint.data.length > 0){
        for (k = 0; k < intersectPoint.data.length; k++){
	      intersection = intersectPoint.data[k];
		  intersection.loopObj = loopObj;					//remember top multilayered loop

          if (intersectPoint.data[k].x == loopBoundingRect.getX()) intersection.intersectionEdge = 3;                                        //LEFT edge
          else if (intersectPoint.data[k].y == loopBoundingRect.getY()) intersection.intersectionEdge = 0;                                   //TOP edge
          else if (intersectPoint.data[k].x == loopBoundingRect.getX() + loopBoundingRect.getWidth()) intersection.intersectionEdge = 1;     //RIGHT edge
          else if (intersectPoint.data[k].y == loopBoundingRect.getY() + loopBoundingRect.getHeight()) intersection.intersectionEdge = 2;    //BOTTOM edge

          if (intersectPoint.data[k].x == loopBoundingRect.getX()) intersection.intersectionEdgeStr = "left";                                        //LEFT edge
          else if (intersectPoint.data[k].y == loopBoundingRect.getY()) intersection.intersectionEdgeStr = "top";                                   //TOP edge
          else if (intersectPoint.data[k].x == loopBoundingRect.getX() + loopBoundingRect.getWidth()) intersection.intersectionEdgeStr = "right";     //RIGHT edge
          else if (intersectPoint.data[k].y == loopBoundingRect.getY() + loopBoundingRect.getHeight()) intersection.intersectionEdgeStr = "bottom";    //BOTTOM edge

          if (loopBoundingRect.hitTest(wire.getSource().getAbsoluteX(), wire.getSource().getAbsoluteY())){
          	intersection.containWireSource = "1";
          }else{
          	intersection.containWireSource = "0";
		  }

		  loopIntersections.push(intersection);
        }
      }

    });
  }); //end function to add tunnel to each intersect of wires with loops


  /*
   *	ORDERING WIRES INTERSECTIONS
   */
  let loopIntersectionsOrdered = [];
  let lineSegments = wire.getSegments();
  lineSegments.each(function(segmentIndex, segmentObj){
   	if (segmentObj.start.x == segmentObj.end.x){

  		auxLoopIntersections = [];
  		if (segmentObj.start.y < segmentObj.end.y){
  			startY = segmentObj.start.y; 
  			endY = segmentObj.end.y;
			lineDirection = "down"; 
  		}else{
  			startY = segmentObj.end.y; 
  			endY = segmentObj.start.y; 
			lineDirection = "up"; 
  		}

		for (k = 0; k < loopIntersections.length; k++){
			if (loopIntersections[k].y >= startY && loopIntersections[k].y <= endY && (loopIntersections[k].intersectionEdgeStr == "top" || loopIntersections[k].intersectionEdgeStr == "bottom")){
				loopIntersections[k].lineDirection = lineDirection;
				auxLoopIntersections.push(loopIntersections[k]);
			}
		}

		//depends on wire direction tunnels are numbered 0..n from top down or reversed
  		auxLoopIntersections.sort(function compare( a, b ) {
  		  if (lineDirection == "down"){
  				if ( a.y < b.y ) return -1;
	  			if ( a.y > b.y ) return 1;
	  		}else if (lineDirection == "up"){
  				if ( a.y > b.y ) return -1;
	  			if ( a.y < b.y ) return 1;			
	   	  }
  			return 0;
  		});
  		for (k = 0; k < auxLoopIntersections.length; k++){
  			loopIntersectionsOrdered.push(auxLoopIntersections[k])
  		}

  	}


  	if (segmentObj.start.y == segmentObj.end.y){

  		auxLoopIntersections = [];
  		if (segmentObj.start.x < segmentObj.end.x){
  			startX = segmentObj.start.x; 
  			endX = segmentObj.end.x; 
			lineDirection = "right"; 
  		}else{
  			startX = segmentObj.end.x; 
  			endX = segmentObj.start.x; 
			lineDirection = "left"; 
  		}

		for (k = 0; k < loopIntersections.length; k++){
			if (loopIntersections[k].x >= startX && loopIntersections[k].x <= endX  && (loopIntersections[k].intersectionEdgeStr == "left" || loopIntersections[k].intersectionEdgeStr == "right")){
				loopIntersections[k].lineDirection = lineDirection;
				auxLoopIntersections.push(loopIntersections[k]);
			}
		}

		//depends on wire direction tunnels are numbered 0..n from left right or reversed
  		auxLoopIntersections = auxLoopIntersections.sort(function compare( a, b ) {
			if (lineDirection == "right"){
				if ( a.x < b.x ) return -1;
				if ( a.x > b.x ) return 1;
			}else if (lineDirection == "left"){
				if ( a.x > b.x ) return -1;
				if ( a.x < b.x ) return 1;
			}
			return 0;
  		});

	    for (k = 0; k < auxLoopIntersections.length; k++){
  			loopIntersectionsOrdered.push(auxLoopIntersections[k])
  		}
	}
  });

  /*
   *	PUTTNG LABEL FOR EACH ORDERED INTERSECTION
   */
   /*
  for (k = 0; k < loopIntersectionsOrdered.length; k++){
  		canvas.add(
  		  new draw2d.shape.basic.Label({
  		    x: loopIntersectionsOrdered[k].x,
  		    y: loopIntersectionsOrdered[k].y,
  		    text:new String(k) + ".." + new String(loopIntersectionsOrdered[k].containWireSource) + ".." + new String(loopIntersectionsOrdered[k].lineDirection),
  		    bgColor: "#FFFFFF",
  		    stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
  		  })
  		);
  }
  */

  /*
   *	PUTTNG TUNNEL FOR EACH ORDERED INTERSECTION
   */
  addedTunnels = [];
  addedTunnelsLocator = [];
  addedTunnelLoopObj = [];
  for (k = 0; k < loopIntersectionsOrdered.length; k++){

           var tunnelObj;

           	//LeftTunnel - wire is going INSIDE structure
           	//RightTunnel - wire is going OUT of structure, it's leaving it

			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "top" && loopIntersectionsOrdered[k].lineDirection == "down"){
				tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
				tunnelObj.setRotationAngle(90);
			}
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "top" && loopIntersectionsOrdered[k].lineDirection == "up"){
				tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();
				tunnelObj.setRotationAngle(-90);
			}
			
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "bottom" && loopIntersectionsOrdered[k].lineDirection == "down"){
				tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();
				tunnelObj.setRotationAngle(90);
			}
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "bottom" && loopIntersectionsOrdered[k].lineDirection == "up"){
				tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
				tunnelObj.setRotationAngle(-90);
			}
			
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "left" && loopIntersectionsOrdered[k].lineDirection == "left"){
				tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();
				tunnelObj.setRotationAngle(180);
			}
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "left" && loopIntersectionsOrdered[k].lineDirection == "right"){
				tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
				tunnelObj.setRotationAngle(0);
			}
			
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "right" && loopIntersectionsOrdered[k].lineDirection == "left"){
				tunnelObj = new GraphLang.Shapes.Basic.LeftTunnel();
				tunnelObj.setRotationAngle(180);
			}
			if (loopIntersectionsOrdered[k].intersectionEdgeStr == "right" && loopIntersectionsOrdered[k].lineDirection == "right"){
				tunnelObj = new GraphLang.Shapes.Basic.RightTunnel();
				tunnelObj.setRotationAngle(0);
			}

		   //debugging
           //tunnelObj.getInputPort(0).setBackgroundColor("#FFFFFF");	//tunnel input will be white
           //tunnelObj.getOutputPort(0).setBackgroundColor("#000000");	//tunnel output will be black

           var objWidth = tunnelObj.getWidth();
           var objHeight = tunnelObj.getHeight();
           tunnelObj.setWidth(objHeight);
           tunnelObj.setHeight(objWidth);

		   pX = loopIntersectionsOrdered[k].x;
		   pY = loopIntersectionsOrdered[k].y;

           loopBoundingRect = loopIntersectionsOrdered[k].loopObj.getBoundingBox();
           loopObj = loopIntersectionsOrdered[k].loopObj;

           //this is for relative locator
           var tunnelLocatorRel = {}
           if (loopIntersectionsOrdered[k].intersectionEdge == 0){ //TOP edge
             tunnelLocatorRel =  new GraphLang.Utils.TopRelPortLocator(
               Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
               tunnelObj.getHeight()/2
             );
           }
           if (loopIntersectionsOrdered[k].intersectionEdge == 1){ //RIGHT edge
             tunnelLocatorRel =  new GraphLang.Utils.RightRelPortLocator(
               tunnelObj.getWidth()/2,
               Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
             );
           }
           if (loopIntersectionsOrdered[k].intersectionEdge == 2){ //BOTTOM edge
             tunnelLocatorRel =  new GraphLang.Utils.BottomRelPortLocator(
               Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
               tunnelObj.getHeight()/2
             );
           }
           if (loopIntersectionsOrdered[k].intersectionEdge == 3){ //LEFT edge
             tunnelLocatorRel =  new GraphLang.Utils.LeftRelPortLocator(
               tunnelObj.getWidth()/2,
               Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
             );
           }
           
           addedTunnels.push(tunnelObj);
           addedTunnelsLocator.push(tunnelLocatorRel);
           addedTunnelLoopObj.push(loopObj);
  }

  /*
   *	REMOVE TUNNELS WHICH are going straight through some structure
   */
  tunnelsRemovedFromArray = true;
  while (tunnelsRemovedFromArray){
  	tunnelsRemovedFromArray = false;
	for (k = 0; k <= addedTunnels.length - 2; k++){
  	  if (addedTunnelLoopObj[k].getId() == addedTunnelLoopObj[k+1].getId()){
  		addedTunnels.splice(k, 2);	//remove tunnel at index k, k+1
		addedTunnelsLocator.splice(k, 2);
		addedTunnelLoopObj.splice(k, 2);
  		tunnelsRemovedFromArray = true;
  		break;
	  }
	}
  }

  for (k = 0; k < addedTunnels.length; k++){
         /*
          *		This calculation of realtive position is not totaly correct, because when resizing loop its width and height
          *		is changing, but locator percentage is still same and not changing accordingly to new width and height of loop,
          *		it was normalized by the previous dimensions and dimension of tunnels is not changing, so right resize method
          *		would be recalculate relative locator, or figure out how to snap tunnels to right and left and top and
          *		bottom wall of loop
          */
         addedTunnelLoopObj[k].add(addedTunnels[k],addedTunnelsLocator[k])
         addedTunnels[k].setSelectable(true);
  }
  
	/*
	 *	NO TUNNELS, CONNECTION BETWEEN ALREADY EXISTING TUNNELS INSIDE ONE LOOP, GENERATE WireConnection
	 */
	if (
		addedTunnels.length == 0 &&
		wire.getSource().getParent().NAME.toLowerCase().search("lefttunnel") > -1 &&
		wire.getTarget().getParent().NAME.toLowerCase().search("righttunnel") > -1 &&
		wire.getSource().getParent().getParent().getId() == wire.getTarget().getParent().getParent().getId()
	){
		pX = (wire.getSource().getAbsoluteX() + wire.getTarget().getAbsoluteX())/2; 
		pY = (wire.getSource().getAbsoluteY() + wire.getTarget().getAbsoluteY())/2;
		wireConnectionObj = new GraphLang.Shapes.Basic.WireConnection();
		var wireConnectionLocatorAbs =  new draw2d.layout.locator.XYAbsPortLocator(pX, pY);
	
		canvas.add(wireConnectionObj, wireConnectionLocatorAbs);
	
		wire.getSource().getParent().getParent().getActiveLayer().assignFigure(wireConnectionObj);
		wireConnectionObj.setRotationAngle(wire.getTarget().getParent().getRotationAngle());
		if (wire.getTarget().getParent().getRotationAngle() == 0) wireConnectionObj.setWidth(30);
		else wireConnectionObj.setHeight(30);	 
	
		var additionalConnection = new HoverConnection();
		additionalConnection.setSource(wireConnectionObj.getOutputPort(0));	
		additionalConnection.setTarget(wire.getTarget());
	    canvas.add(additionalConnection);

		wire.setTarget(wireConnectionObj.getInputPort(0));
	}


  /*
   *	CONNECT ALL TUNNELS
   *	it was tried that wire.getSource() return figure output point and wire.getTarget() returns figure input port
   */
  wireTarget = wire.getTarget();
  for (k = 0; k < addedTunnels.length; k++){


	//FIRST MOVE WIRE TARGET TO THE FIRST TUNNEL
	if (k == 0){
		/* debug, set wire source port WHITE and target BLACK
		wire.getSource().setBackgroundColor("#FFFFFF");
		wire.getTarget().setBackgroundColor("#000000");
		*/

		/*
		 *	If source is tunnel and it's going through structure WireConnection is added to wire to not broke multilayer structure
		 */
		if (
			wire.getSource().getParent().NAME.toLowerCase().search("tunnel") > -1 &&
			wire.getSource().getParent().getParent().getId() == addedTunnels[k].getParent().getId() 
		){
			pX = (wire.getSource().getAbsoluteX() + addedTunnels[k].getAbsoluteX())/2; 
			pY = (wire.getSource().getAbsoluteY() + addedTunnels[k].getAbsoluteY())/2;
			wireConnectionObj = new GraphLang.Shapes.Basic.WireConnection();
			var wireConnectionLocatorAbs =  new draw2d.layout.locator.XYAbsPortLocator(pX, pY);
	
			canvas.add(wireConnectionObj, wireConnectionLocatorAbs);
	
			addedTunnels[k].getParent().getActiveLayer().assignFigure(wireConnectionObj);
			wireConnectionObj.setRotationAngle(addedTunnels[k].getRotationAngle());
			if (addedTunnels[k].getRotationAngle() == 0) wireConnectionObj.setWidth(30);
			else wireConnectionObj.setHeight(30);	 
	
			wire.setTarget(wireConnectionObj.getInputPort(0));
	
			var additionalConnection = new HoverConnection();
			additionalConnection.setSource(wireConnectionObj.getOutputPort(0));	
			additionalConnection.setTarget(addedTunnels[k].getInputPort(0));
		    canvas.add(additionalConnection);
		}else{
			wire.setTarget(addedTunnels[k].getInputPort(0));
		}
	}
	
	/*
	 *	START ADDING NEW WIRES AND CONNECT THEM BETWEEN TUNNELS AND TARGET
	 */
	//LAST SEGMENT, CONNECTING LAST TUNNEL AND TARGET
	if (k == addedTunnels.length-1){
		var additionalConnection = new HoverConnection();
		additionalConnection.setSource(addedTunnels[k].getOutputPort(0));	
		additionalConnection.setTarget(wireTarget);
    	canvas.add(additionalConnection);
	}else{

		/*
		 *	CONNECTION BETWEEN TUNNELS
		 *	If source is tunnel and it's going through structure WireConnection is added to wire to not broke multilayer structure
		 */
		if (addedTunnels[k].getParent().getId() == addedTunnels[k+1].getParent().getId()){

			pX = (addedTunnels[k].getAbsoluteX() + addedTunnels[k+1].getAbsoluteX())/2; 
			pY = (addedTunnels[k].getAbsoluteY() + addedTunnels[k+1].getAbsoluteY())/2;
			wireConnectionObj = new GraphLang.Shapes.Basic.WireConnection();
			var wireConnectionLocatorAbs =  new draw2d.layout.locator.XYAbsPortLocator(pX, pY);

			canvas.add(wireConnectionObj, wireConnectionLocatorAbs);

			addedTunnels[k].getParent().getActiveLayer().assignFigure(wireConnectionObj);
			wireConnectionObj.setRotationAngle(addedTunnels[k+1].getRotationAngle());
			if (addedTunnels[k+1].getRotationAngle() == 0) wireConnectionObj.setWidth(30);
			else wireConnectionObj.setHeight(30);	 

   			var additionalConnection = new HoverConnection();
			additionalConnection.setSource(addedTunnels[k].getOutputPort(0));	
			additionalConnection.setTarget(wireConnectionObj.getInputPort(0));
		    canvas.add(additionalConnection);

   			var additionalConnection = new HoverConnection();
			additionalConnection.setSource(wireConnectionObj.getOutputPort(0));	
			additionalConnection.setTarget(addedTunnels[k+1].getInputPort(0));
		    canvas.add(additionalConnection);

		}else{
			var additionalConnection = new HoverConnection();
			additionalConnection.setSource(addedTunnels[k].getOutputPort(0));	
			additionalConnection.setTarget(addedTunnels[k+1].getInputPort(0));
		    canvas.add(additionalConnection);
		}	
	}
  }

  /*
   *  PUTTING LABELS ON TUNNELS
   */
  /*
  for (k = 0; k < addedTunnels.length; k++){
	addedTunnels[k].add(
	  new draw2d.shape.basic.Label({
	    text: new String(k),
	    bgColor: "#FFFFFF",
	    stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
	  }),
	  new draw2d.layout.locator.XYRelPortLocator(0,0)
	);  	
  }
  */

  /*
   *  PUTTING LABELS ON WIRES
   */
   /*
  let lineSegments = wire.getSegments();
  orderCounter = 0;
  lineSegments.each(function(segmentIndex, segmentObj){
  	if (segmentObj.start.x == segmentObj.end.x){
		if (segmentObj.start.y < segmentObj.end.y){
			directionStr = "dir DOWN"
		}else{
			directionStr = "dir UP"
		}
		canvas.add(
		  new draw2d.shape.basic.Label({
		    x: segmentObj.start.x,
		    y: (segmentObj.start.y + segmentObj.end.y)/2,
		    text: directionStr + '..' + new String(orderCounter),
		    bgColor: "#FFFFFF",
		    stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
		  })
		);

	}
  	if (segmentObj.start.y == segmentObj.end.y){
		if (segmentObj.start.x < segmentObj.end.x){
			directionStr = "dir RIGHT"
		}else{
			directionStr = "dir LEFT"
		}
		canvas.add(
		  new draw2d.shape.basic.Label({
		    y: segmentObj.start.y,
		    x: (segmentObj.start.x + segmentObj.end.x)/2,
		    text: directionStr + '..' + new String(orderCounter),
		    bgColor: "#FFFFFF",
		    stroke:1, color:"#FF0000", fontColor:"#0d0d0d"
		  })
		);
	}
	orderCounter++;
  });
  */

};

/**
 *  @method initAllPortToDefault
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
    portObj.getParent().getChildren().each(function(childIndex, childObj){
      //check if label was placed as execution order, it's written in its user data as datatype
      if (childObj.NAME.toLowerCase().search("label") >= 0 && childObj.userData != null && childObj.userData.datatype != null && childObj.userData.datatype.search("executionOrder") > -1){
        portObj.getParent().remove(childObj);
      }
    });

    /****************************************************************
     *  EXTERNAL INPUT Port
     *  EXTERNAL OUTPUT Port
     *    - label is child object of VerticalLayout, so execution order label is not directly visible to canvas, but need to be access thorugh parent object
     *    - remove label with executionOrder
     ****************************************************************/
    var externalPortParent = portObj.getParent().getParent();
    if (
      (externalPortParent != undefined &&
       externalPortParent != null) &&
      (externalPortParent.NAME.toLowerCase().search("externaloutputport") != -1 ||
       externalPortParent.NAME.toLowerCase().search("externalinputport") != -1)
    )
    {
      externalPortParent.getChildren().each(function(childIndex, childObj){
        //check if label was placed as execution order, it's written in its user data as datatype
        if (childObj.NAME.toLowerCase().search("label") >= 0 && childObj.userData != null && childObj.userData.datatype != null && childObj.userData.datatype.search("executionOrder") > -1){
          externalPortParent.remove(childObj);
        }
      });
    }

    /****************************************************************
     *  FOR MULTILAYER NODES remove executionOrder Label
     ****************************************************************/
    multilayerObj = portObj.getParent();
    if (multilayerObj.NAME.toLowerCase().search("multilayered") > -1){
      
	  /*
	   *	THIS SHOULDN'T BE RUNNING BUT THIS REMOVE MOST EXECUTION LABELS, NEED INSPECTION!!!!!!
	   *	remove execution order labels from all figures inside layers
	   */
	  
	  multilayerObj.layers.each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("jailhouse") > -1){
          childObj.getChildren().each(function(layerChildIndex, layerChildObj){
            if (layerChildObj.userData.datatype.toLowerCase().search("executionorder") > -1){
              childObj.remove(layerChildObj);
            }
          });
        }
      });

/*    NOT USED ANYMORE, THERE IS NO PROTECTION RECTANGLE FOR MULTILAYER NODES
      multilayerObj.rect0.getChildren().each(function(layerChildIndex, layerChildObj){
        if (layerChildObj.userData.datatype.toLowerCase().search("executionorder") > -1){
           multilayerObj.rect0.remove(layerChildObj);
        }
      });
*/

    }
    
    /*
	 *  DON'T KNOW WHY BUT THIS REMOVE TOP LEVEL MULTILAYERED EXECUTION ORDER LABELS?????
	 *	remove execution order labels from multilayered structure
	 */
    multilayerObj = portObj.getParent().getParent();
    if (multilayerObj && multilayerObj.NAME.toLowerCase().search("multilayered") > -1){
	  multilayerObj.layers.each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().search("jailhouse") > -1){
          childObj.getChildren().each(function(layerChildIndex, layerChildObj){
            if (layerChildObj.userData.datatype.toLowerCase().search("executionorder") > -1){
              childObj.remove(layerChildObj);
            }
          });
        }
      });
    }

    /**********************************************************************************************************************
     *          FEEDBACK NODE PORT INITIALIZATION
     *           Set port userData.execusionOrder to 1 for input and output so feedback is run at beginning, if there area
     *           no data it will put at output default value, Feedback has to run this way and it's correct.
     *
     */

    //  FEEDBACK, SET PORTS OUTPUT INPUT EXECUTION Order
    //FOR MULTILAYER NODES remove executionOrder Label
    nodeObj = portObj.getParent();
    if (nodeObj.NAME.toLowerCase().search("feedback") > -1){
      nodeObj.getInputPort(0).userData.executionOrder = 1;
      nodeObj.getOutputPort(0).userData.executionOrder = 1;
    }


  });
}

/**
 *  @method showPortExecutionOrder
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
 *  @method bringToFront
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
 *  @method bringToBack
 *  @param {draw2d.Canvas} canvas
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
 *  @method showNodes
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
 *  @method getNodeLoopOwner
 *  @param {draw2d.Canvas} canvas - schematic from which is node or loop
 *  @param {draw2d.shape.Node} nodeObj=null - node or loop objec which is inspected for its loop owner
 *  @description Return loop which ownes node, if there's no loop return null.
 *  @returns {GraphLang.Shapes.Basic.Loop|null} Found node owner, if none then return null.
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

      if (loopObj != nodeObj && typeof loopObj.getAboardFigures !== "undefined" && loopObj.getAboardFigures().contains(nodeObj)){        //comparison for one layer loop
        nodeParentLoop = loopObj;
      }else{
        if (loopObj != nodeObj && typeof loopObj.getAssignedFigures !== "undefined" && loopObj.getAssignedFigures().contains(nodeObj)){        //comparison for one layer loop
          nodeParentLoop = loopObj;
        }
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
 *  @method getLoopDirectChildrenNodes
 *  @param {draw2d.Canvas} canvas - schematic in which is loop located
 *  @param {GraphLang.Shapes.Basic.Loop} parentLoop - loop which children are required, default value null
 *  @description Returns nodes which are direct descendant of loop, so there are no nodes nested inside other inner loops. If parent loop is not provided or undefined it return all nodes which are direct children of canvas.
 *  @returns {GraphLang.Shapes.Basic} List of children GraphLang nodes for loop or owned by canvas.
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
 *  @method getDirectChildrenWithoutTunnels
 *  @param {draw2d.Canvas} canvas - schematic in which is loop located
 *  @param {GraphLang.Shapes.Basic.Loop} parentLoop - loop which children are required, default value null
 *  @description Returns direct children of provided object. These returns objects which are not nested inside loop. Also return loops objects. If parent object is not provided it returns direct canvas children.
 *  @returns {GraphLang.Shapes.Basic} List of children GraphLang nodes without tunnels.
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
 *  @method executionOrder
 *  @param {draw2d.Canvas} canvas
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
              //if some parent loop has some input tunnels it's not needed to go higher, because everything inside that loop will
			  //wait for these input tunnels, so we can set nodeParentLoop to undefined what cause end of while loop
              if (leftTunnelCnt == 0) nodeParentLoop = GraphLang.Utils.getNodeLoopOwner(canvas,nodeParentLoop);
              else nodeParentLoop = undefined;
            }
          }

          //IF PORT IS PREPARED SET ITS EXECUTION ORDER
          if (inPortPrepared == true){
            if (portObj.userData == undefined)  portObj.userData = {};
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
        if (nodeObj.userData.executionOrder == -1 &&
			nodeObj.NAME.toLowerCase().search("itemsnode") == -1 &&
			nodeObj.NAME.toLowerCase().search("jailhouse") == -1		//DON'T PUT LABEL FOR jailhouse, they are layers of multilayered structure
		){
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
 *  @method loopsRecalculateAbroadFigures
 *  @param {draw2d.Canvas} canvas - schematic which will be recalculated
 *  @description Reevaluate children nodes of every loop on canvas. This function was implemented because sometimes it looks like there are problems with this when new loops are added.
 */
GraphLang.Utils.loopsRecalculateAbroadFigures = function(canvas){
  canvas.getFigures().each(function(loopIndex, loopObj){
    if (loopObj.NAME.toLowerCase().search("loop") >= 0 &&
        loopObj.NAME.toLowerCase().search("multilayered") == -1 &&
        loopObj.NAME.toLowerCase().search("whilelayer") == -1 &&
        loopObj.NAME.toLowerCase().search("loop2") == -1 &&
		loopObj.NAME.toLowerCase().search("forloop") == -1){
          loopObj.getAboardFigures(true);
    }
  });
}

/**
 *  @method initLoopsZOrder
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
 *  @method showSelectedObjExecutionOrder
 *  @param {draw2d.Canvas} canvas - fromt here is taken selected object
 *  @description Display execution order of current highlighted object.
 */
GraphLang.Utils.showSelectedObjExecutionOrder = function(canvas){
    var element = canvas.getSelection().getAll().first();
    alert(element.getUserData().executionOrder);
}

/**
 * @method setWiresColorByPorts
 * @param {draw2d.Canvas} canvas - schematic where wire will be colorized
 * @description Colorize all wires in schematic according to port datatypes.
 */
GraphLang.Utils.setWiresColorByPorts = function setWiresColorByPorts(canvas){
  //set wires color by connected input ports
  canvas.getLines().each(function(lineIndex, lineObj){
    var color = new GraphLang.Utils.Color();  //GraphLang.Utils.Color is not object so we need to instantiate that class

    if (lineObj.getSource() != undefined && lineObj.getSource().getUserData() != undefined) var lineColor = color.getByName(lineObj.getSource().getUserData().datatype);  //get hexadecimal color string from it's name
    else var lineColor = color.getByName("broken");

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
 * @method getCanvasJson
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @returns {String} jsonStr
 * @description For selected loop show number of tunnels.
 */
GraphLang.Utils.getCanvasJson = function(canvas){
  var writer = new draw2d.io.json.Writer();
  var jsonStr = '';
  writer.marshal(canvas,function(json){
      var clearedJson = [];
      var wrongJson = [];
      for (var k = 0; k < json.length; k++){
        if (json[k].type != undefined && json[k].type.toLowerCase().search("multilayered") > -1){
          var multilayeredJson = canvas.getFigure(json[k].id);
          var multilayerChooser = multilayeredJson.getChildren().get(0);

          var chooserObj =  new draw2d.shape.basic.Label(multilayerChooser);
          //clearedJson.push(chooserObj);
          clearedJson.push(json[k]);
          // alert(multilayerChooser.text);
        }else if (json[k].type != undefined && json[k].type.toLowerCase().search("connection") > -1){
          //alert("connection");
          clearedJson.push(json[k]);
        }else if (json[k].type != undefined && json[k].type.toLowerCase().search("tunnel") == -1){
          clearedJson.push(json[k]);
        }else{
          wrongJson.push(json[k]);
        }
      }

      jsonStr = JSON.stringify(clearedJson, null, 2);
      // jsonStr = JSON.stringify(wrongJson, null, 2);

      var copyElement = document.createElement('textarea');

      copyElement.innerHTML= "var jsonDocument = " + jsonStr + ";";
      jsonStr = copyElement.innerHTML;
      copyElement = document.body.appendChild(copyElement);
      copyElement.select();
      document.execCommand('copy');
      copyElement.remove();
  });

  return jsonStr;
}

/**
 * @method getCanvasAsPNG
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
 * @method setPortsColorByDatatype
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
 *  @method setTunnelColorByWire
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
 *  @method rewriteIDtoNumbers
 *  @param {draw2d.Canvas} canvas
 *  @description Rewrite in output code all IDs to normal numbers to make output code more readible
 *  @returns {String} Translated code with rewiritten ID to something more readible - normal numbers, so code is shorter and nicer looking.
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

/**
 *  @method correctWiresAfterLoad
 *  @param {draw2d.Canvas} canvas
 *  @description Correct wires targets, because some connection have attribute tunnel to which they are attached so need to set this target also here.
 */
GraphLang.Utils.correctWiresAfterLoad = function(canvas){

  /*
   *  Wires has from serialization in userData info about tunnel if they are connected to some so if wire target is assigned bad, this will correct it.
   */
  canvas.getLines().each(function(lineIndex, lineObj){
    if (lineObj.userData.targetTunnel !== undefined){
      canvas.getFigures().each(function(figureIndex, figureObj){
        if (figureObj.NAME.toLowerCase().indexOf("loop") > -1){
          figureObj.getChildren().each(function(childIndex, childObj){
            if (childObj.NAME.toLowerCase().indexOf("tunnel") > -1 &&
                childObj.getId().indexOf(lineObj.userData.targetTunnel) > -1){
                lineObj.setTarget(childObj.getPort(lineObj.userData.targetPortName));
            }
          });
        }
      });
    }
  });

  /*
   *  Same correction as before but this is for wire source.
   */
  canvas.getLines().each(function(lineIndex, lineObj){
    if (lineObj.userData.sourceTunnel !== undefined){
      canvas.getFigures().each(function(figureIndex, figureObj){
        if (figureObj.NAME.toLowerCase().indexOf("loop") > -1){
          figureObj.getChildren().each(function(childIndex, childObj){
            if (childObj.NAME.toLowerCase().indexOf("tunnel") > -1 &&
                childObj.getId().indexOf(lineObj.userData.sourceTunnel) > -1){
                lineObj.setSource(childObj.getPort(lineObj.userData.sourcePortName));
            }
          });
        }
      });
    }
  });
  alert("Wire correction after load DONE.");
}

/**
 *  @method readSingleFile
 *  @param {HTMLInputFileTag} e Javascript object for input file tag placed somewhere in toolbar or else.
 *  @description Registered on some file input, at it change it will read chosen file and display its content.
 */
GraphLang.Utils.readSingleFile = function(e){
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;             //result is read
    GraphLang.Utils.displayContents(contents);  //display as alert
    //GraphLang.Utils.correctWiresAfterLoad(appCanvas)
  };
  reader.readAsText(file);  //this will put result into internal variable named result
}

/**
 *  @method displayContents
 *  @param {String} content String content to display
 *  @description Translates schematic on given canvas to C/C++ code as function which can be called in other diagrams using symbol with assign schematic.
 */
GraphLang.Utils.displayContents = function(contents){
/*
  var element = document.getElementById('file-content');
  element.textContent = contents;
*/
  var element = document.getElementById('file-input');
  var fileName = element.value.split("\\").pop();
  var schematicName = fileName.split(".")[0];  //no extension

  //THIS FOLLOW VIOLATE ALL PROGRAMMING PRINCIPPLES NOW FOR DEBUGGING SUPPOSE VARIABLES ARE GLOBAL!
  eval(contents); //all schematics are saved as JSON assigned to variable jsonDocument
  appCanvas.clear();
  var reader = new draw2d.io.json.Reader();

  //need to do put connection into separate list and create them after all fgures are created to have phzsically on canvas ports to have place for them
  //var connectionList = new draw2d.utils.ArrayList

  reader.unmarshal(appCanvas, jsonDocument);  //this variable was evaluated inside eval() function
  //just for now, uncomment in future //this.initAllPortToDefault();  //this must be here, without this canvas behave non/standard, it's not possible to remove wires etc.

  //here are composite object repaired, they are assigned back to their ownership
  var allFigures = appCanvas.getFigures();
  allFigures.each(function(figureIndex, figureObj){
    //if (figureObj.getComposite)
    if (figureObj.NAME.toLowerCase().search('multilayered') != -1){
      figureObj.getAssignedFigures().each(function(assignedFigureIndex, assignedFigureObj){
        figureObj.layers.push(assignedFigureObj); //THIS ADD EACH LAYER TO PARENT JAILHOUSE COMPOSITE OBJECT, this is needed to be here
      });
      figureObj.renewLayerChooser();
      figureObj.renewLayerSelector(); //NOT RUNNING CORRECTLY
    }
  });

}

/**
 *  @method displayContents2
 *  @param {String} content String content to display
 *  @param {canvas} canvas object where content is displayed
 *  @description Translates schematic on given canvas to C/C++ code as function which can be called in other
 *  diagrams using symbol with assign schematic, this function is general one and newer, using also canvas
 *  reference where content is displayed.
 */
GraphLang.Utils.displayContents2 = function(jsonDocument, canvasObj){

  //THIS FOLLOW VIOLATE ALL PROGRAMMING PRINCIPPLES NOW FOR DEBUGGING SUPPOSE VARIABLES ARE GLOBAL!
  //eval(contents); //all schematics are saved as JSON assigned to variable jsonDocument
  
  canvasObj.clear();
  var reader = new draw2d.io.json.Reader();

  //need to do put connection into separate list and create them after all fgures are created to have phzsically on canvas ports to have place for them
  //var connectionList = new draw2d.utils.ArrayList

  reader.unmarshal(canvasObj, jsonDocument);  //this variable was evaluated inside eval() function
  //just for now, uncomment in future //this.initAllPortToDefault();  //this must be here, without this canvas behave non/standard, it's not possible to remove wires etc.

  //here are composite object repaired, they are assigned back to their ownership
  var allFigures = canvasObj.getFigures();
  allFigures.each(function(figureIndex, figureObj){
    //if (figureObj.getComposite)
    if (figureObj.NAME.toLowerCase().search('multilayered') != -1){
      figureObj.getAssignedFigures().each(function(assignedFigureIndex, assignedFigureObj){
        figureObj.layers.push(assignedFigureObj); //THIS ADD EACH LAYER TO PARENT JAILHOUSE COMPOSITE OBJECT, this is needed to be here
      });
      figureObj.renewLayerChooser();
      figureObj.renewLayerSelector(); //NOT RUNNING CORRECTLY
    }
  });

}


/**
 *  @method hematic
 *  @param {draw2d.Canvas} schematicCanvas  Canvas where is schematic placed
 *  @description This function run directly after click on button "choose file"
 */
GraphLang.Utils.loadSchematic = function(schematicCanvas){
  //DO NOTHING this is triggered after click on "Coose File"
}

/**
 *  @method saveSchematic
 *  @param {draw2d.canvas} canvas - Canvas where schematic is located.
 *  @param {String} filename
 *  @param {String} type
 *  @description Download current schematic as txt file with provided name.
 */
GraphLang.Utils.saveSchematic = function(canvas, filename, type) {
    data = GraphLang.Utils.getCanvasJson(canvas);

    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

/**
 *  @method showUserData
 *  @param {draw2d.canvas} canvas - Canvas where schematic is located.
 *  @description Show userData of current selected object.
 */
GraphLang.Utils.showUserData = function(canvas) {
  canvas.getSelection().each(function(selectionIndex, selectionObj){
    var htmlStr = $('logitem2').html();
    htmlStr += JSON.stringify(selectionObj.getUserData()) + '\n';
    $('logitem2').html(htmlStr);
    alert(JSON.stringify(selectionObj.getUserData()));
  });
}

/**
 *  @method getVisibleLoopsAndMultilayered
 *  @param {draw2d.canvas} canvas - Canvas where schematic is located.
 *  @description Returns visible loops and multilayered structures. So if there are some loops on non active layers they are not returned.
 */
GraphLang.Utils.getVisibleLoopsAndMultilayered = function(canvas) {
    let loopList = new draw2d.util.ArrayList();
    canvas.getFigures().each(function(figureIndex, figureObj){
      if (figureObj.NAME.search("GraphLang.Shapes.Basic.Loop") > -1 &&
          figureObj.getComposite() == null){

        let nestedLayeredList = figureObj.getVisibleLoopAndMultilayered();
        if (!nestedLayeredList.isEmpty()) loopList.addAll(nestedLayeredList);  //add ArrayList to current just in case it's not empty otherwise there will be undefined object and make harm in following code
      }
    });

	return loopList;
}

/**
 * @method translateCanvasToCppCode
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @returns {String} C/C++ code as string
 * @description Copy diagram as C/C++ code into clipboard, uses inside translateToCppCode2() function.
 */
GraphLang.Utils.translateCanvasToCppCode = function(canvas, translateTerminalsDeclaration = true){
  let cCode = "";
  translateToCppCodeDeclarationArray.clear();
  
  //TO BE SURE RECALCULATE NODES OWNERSHIP BY loopsRecalculateAbroadFigures
  GraphLang.Utils.loopsRecalculateAbroadFigures(canvas);
  
  //THIS ADAPT PORT DATATYPES SAME AS CONNECTED Wires
  //this can cause some problems because it's not bullet proof function, beacuse it's running statically, need to rewrite it more adaptive but when clicked at least 3 times it's OK
  GraphLang.Utils.setWiresColorByPorts(canvas);
  
  //ORIGINAL WITHOUT REWRITING IDs
  //copyElement.innerHTML = GraphLang.Utils.translateToCppCode2(canvas, null);
  
  // INITIALIZATION
  // added by LuboJ. this CAN CAUSE SOME ERRORS IT WASN'T HERE UNTIL RECENTLY when I saw that there is not port initialization and execution order done in this task.
  this.initAllPortToDefault(canvas);
  this.executionOrder(canvas);
  
  /*
   *    Now just ticking with clock and run nodes setup to run at that step by execution order.
   */
  
  /*********************************************************************************************************
   *  WIRES DECLARATION
   *
   *  globals at level of canvas
   *  ERROR:
   *    - THERE IS NOT VALUE ASSIGNEMENT WHEN WIRE IS CONNECTED TO CONSTANT
   *********************************************************************************************************/
  
  //FIRST get all top figures (they have no composite set) and then get their input ports and connections connected to them
  //	tunnels doesn't have assigned it's loop as its parent, so iterating over tunnels is done when loop is detected, then if it
  //	has no composite (what means it's most top structure on canvas) it's iterating over it's children and detecting left tunnels
  //
  let allConnections = new draw2d.util.ArrayList();
  canvas.getLines().each(function(lineIndex, lineObj){
  	//here it's looking just for figures skipping loops and tunnels
      if (lineObj.NAME.toLowerCase().search('connection') > -1 &&
          lineObj.getSource().getParent().NAME.toLowerCase().search('tunnel') == -1 &&
          lineObj.getSource().getParent().getComposite() == null
      ){
          sourceDatatype = lineObj.getSource().getUserData().datatype;
          cCode += sourceDatatype + " wire_" + lineObj.getId() + ";\n";
      }
  
      /*
       *  for tunnel it's different little, IMPORTANT are just RIGHT TUNNELs because then wire is outside structure,
       *  in case if source is LEFT TUNNEL we are sure that wire is laying inside some structure
       */
      if (lineObj.NAME.toLowerCase().search('connection') > -1 &&
          lineObj.getSource().getParent().NAME.toLowerCase().search('righttunnel') > -1 &&
          lineObj.getSource().getParent().getParent().getComposite() == null
      ){
          sourceDatatype = lineObj.getSource().getParent().getDatatype();
          cCode += sourceDatatype + " wire_" + lineObj.getId() + ";\n";
      }
  });
  
  /****************************************************************
   *  NODES TRANSLATING
   *  Going through diagram and translate each graphical node into its text representation.
   ****************************************************************/
  
  //obtain list of top level figures, their getComposite() returns null
  let allNodes = new draw2d.util.ArrayList()
  canvas.getFigures().each(function(figureIndex, figureObj){
      if (figureObj.getComposite() == null &&
          figureObj.NAME.toLowerCase().search('tunnel') == -1
      ){
          allNodes.push(figureObj);
      }
  });
  
  //translate nodes based on their execution order
  for (var actualStep = 0; actualStep < 20; actualStep++){
    allNodes.each(function(nodeIndex, nodeObj){
      if (nodeObj.getUserData() !== undefined &&
          nodeObj.getUserData().executionOrder == actualStep
      ){
          if (nodeObj.translateToCppCodeDeclaration && translateTerminalsDeclaration) cCode += nodeObj.translateToCppCodeDeclaration();
          if (nodeObj.translateToCppCode) cCode += nodeObj.translateToCppCode();
          
          /*
           *    Translate node schematic into separate function
           */
          if (nodeObj.jsonDocument) GraphLang.Utils.translateToCppCodeSubNode(nodeObj);
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
  
  /******************************************************************************
   * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
   *******************************************************************************/
  cCode = this.rewriteIDtoNumbers(canvas, cCode);

  return cCode;
},

/**
 * @method getCppCode3
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @param {bool} showCodee - if true there is code showed in alert message after click on button
 * @returns {String} C/C++ code as string
 * @description Copy diagram as C/C++ code into clipboard, uses inside translateToCppCode2() function.
 */
GraphLang.Utils.getCppCode3 = function(canvas, showCode = true){
        /******************************************************************************
         * Translate canvas to C/C++ code
         *******************************************************************************/
        translateToCppCodeFunctionsArray.clear();
        let cCode = GraphLang.Utils.translateCanvasToCppCode(canvas, translateTerminalsDeclaration = true);

        /******************************************************************************
         * LuboJ my template for Arduino stuff
         *******************************************************************************/
        var template_cCode = "";
        template_cCode += "#define error int\n";
        template_cCode += "#define int32 int\n";
        template_cCode += "#define undefined int\n";
        template_cCode += "#define uint unsigned int\n";
        //template_cCode += this.getCppCodeDeclaration() + "\n";
        template_cCode += "void setup() {\n";
        template_cCode += "\n";
        template_cCode += cCode;
        template_cCode += "\n";
        template_cCode += "}\n";
        template_cCode += "void loop() {\n";
        template_cCode += "  // put your main code here, to run repeatedly:\n";
        template_cCode += "}\n";
        cCode = template_cCode;
        /******************************************************************************
         * END MY TEMPLATE
         *******************************************************************************/

        /******************************************************************************
         * SubNode code printed as subfunctions
         *******************************************************************************/
        translateToCppCodeFunctionsArray.unique();  //removes duplicates
        translateToCppCodeFunctionsArray.each(function(functionIndex, functionStr){
            cCode += "\n";
            cCode += "/************* BEGIN SubNode function definition ************/\n";
            cCode += functionStr;
            cCode += "/************* END SubNode function definition ************/\n";
            cCode += "\n";
        });

        /******************************************************************************
         * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
         *******************************************************************************/
        cCode = this.rewriteIDtoNumbers(canvas, cCode);

        var copyElement = document.createElement('textarea');
        copyElement.innerHTML = cCode;
        copyElement = document.body.appendChild(copyElement);
        copyElement.select();
        document.execCommand('copy');
        copyElement.remove();

        if (showCode) alert(cCode); //DEBUG show code in alert message

        return cCode; //return C/C++ code as string
}

/**
 * @method translateToCppCodeSubNode
 * @param {draw2d.Figure} nodeObj - node object to be translated to CPP code
 * @returns {String} C/C++ code as string
 * @description Load node schematic in auxiliary canvas and run translate process for it, result should be function definition for particular node.
 */
GraphLang.Utils.translateToCppCodeSubNode = function(nodeObj){
    let cCode = "";
    cCodeParams = "";
    cCodeReturnDatatype = "";

    GraphLang.Utils.displayContents2(nodeObj.jsonDocument, appCanvas2);
    paramsCounter = 0;
    appCanvas2.getFigures().each(function(figureIndex, figureObj){
      /*
       *  INPUT TERMINAL TRANSCRIPTION AS PARAMS FOR FUNCTION DECLARATION
       */
      if (
          figureObj.userData &&
          figureObj.userData.isTerminal &&
          (figureObj.userData.isTerminal == 1 || figureObj.userData.isTerminal.toLowerCase() == true) &&
          figureObj.translateToCppCodeAsParam != undefined
      ){
          if (paramsCounter > 0) cCodeParams += ', ';
          cCodeParams += figureObj.translateToCppCodeAsParam();
          paramsCounter++;
      }

      /*
       *  RETURN VALUE
       *      - if return node is found it asks for it datatype, if nothing is connected then it's undefined
       *      - in stored files nodes haven't 'NAME' property but have 'type' property
       *  
       */
      if (figureObj.NAME.toLowerCase().search("return") > -1){
          cCodeReturnDatatype = figureObj.getDatatype();
      }
    });

    cCode += cCodeReturnDatatype + ' ' + nodeObj.translateToCppCodeFunctionName() + "(" + cCodeParams + "){\n\t";
    cCode += GraphLang.Utils.translateCanvasToCppCode(appCanvas2, translateTerminalsDeclaration = false).replaceAll('\n','\n\t');
    cCode += "\n";  //to not have separate last curly bracket by tabulator
    cCode += '}' + "\n";

    /******************************************************************************
     * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
     *******************************************************************************/
    cCode = this.rewriteIDtoNumbers(appCanvas2, cCode);

    //don't return any code, these functions are pushed into array and print after template is created
    //return cCode;
    translateToCppCodeFunctionsArray.push(cCode);
}

