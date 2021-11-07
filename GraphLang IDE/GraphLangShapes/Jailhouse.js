/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 *  Jailhouse is NOT PART OF LOOP, becasue loops has tunnels when wires enter them.
 *  Jailhouse is just layer and part of some object, now Multilayered node which provides
 *  tunnels to enter these layers.
 */
GraphLang.Shapes.Basic.Jailhouse = draw2d.shape.composite.Jailhouse.extend({
  NAME: "GraphLang.Shapes.Basic.Jailhouse",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
    this.userData = {};
  },

  /*
   *  Layer has own translate fucntion, it's not translate recursively as loop, because layer
   *  has no tunnels they are owned parent object instead, so this just order elements and
   *  call their translation function.
   */
  translateToCppCode: function(){
    cCode = "";

    //cCode += "{BEGIN Multilayered Jailhouse layer id: " + this.getId() + "}\n";

    //this is not running
    //    cCode += GraphLang.Utils.translateToCppCode2(this.getCanvas(), this)

    /*
     *  Going through all nodes and wires inside Jailhouse and translate them into C/C++ code or call appropriate translate function
     */
    layerFigures = this.getAssignedFigures();
    layerFigures.sort(function(figureA, figureB){ return figureA.userData.executionOrder - figureB.userData.executionOrder}); //order figure by their executionOrder

    //1st define all wires inside layer which are direct children, means not part of nested multilayered structure or loop
    //	here is looking on assigned figures and theirs input ports, if there is loop in layer it's iterated over its tunnels and asking for left tunnels input ports
	allConnections = new draw2d.util.ArrayList();
	thisId = this.getComposite();
    layerFigures.each(function(figureIndex, figureObj){
	  if (figureObj.getPorts){
		if (figureObj.NAME.toLowerCase().search('loop') == -1 && figureObj.NAME.toLowerCase().search('tunnel') == -1){
			figureObj.getInputPorts().each(function(inputPortIndex, inputPortObj){
				allConnections.addAll(inputPortObj.getConnections());				//adding conenction into list of top most connections on canvas
			});
		}else{
			//if loop is found, then it's going to iterate over it's children left tunnels and add connections to their input ports
			if (figureObj.NAME.toLowerCase().search('loop') > -1){
				figureObj.getChildren().each(function(childIndex, childObj){
					if (childObj.NAME.toLowerCase().search('lefttunnel') > -1){
						allConnections.addAll(childObj.getInputPort(0).getConnections());	//adding conenction into list of top most connections on canvas			
					}
				});
			}
		}
	  }
    });
	allConnections.each(function(connectionindex, connectionObj){
		cCode += connectionObj.getSource().userData.datatype + " wire_" + connectionObj.getId() + ";\n";
	});

    //2nd get declaration for wires going from tunnels to figures inside
    leftTunnelsWires = this.getCanvas().getFigure(this.userData.owner).getLeftTunnelsLayerWires();
    leftTunnelsWires.each(function(connectionIndex, connectionObj){
      if (layerFigures.contains(connectionObj.getTarget().getParent())){
        cCode += "wire_" + connectionObj.getId() + " = tunnel_" + connectionObj.getSource().getParent().getId() + ";\n";  //to get tunnel ID first I got port from wire source and its parent is tunnel
      }
    });

    /*
     *  ...................ToDo.......................
     *    NEED TO FINISH TRANSLATION PROCESS TILL NOW WIRES AND ASSIGNMENT FROM TUNNELS ARE DONE, HERE BELOW SHOULD BE RIGHT TRANSLATE
     *    PROCESS FOR FIGURES AND LOOPS AND OTHERS ITEMS BASED ON executionOrder OF NODES
     */

    //3rd translate figures inside layer
    layerFigures.each(function(figureIndex, figureObj){
      if (figureObj.NAME.toLowerCase().search("loop") > -1 &&
          figureObj.NAME.toLowerCase().search("multilayered") == -1){
        //cCode += figureObj.getTunnelsDeclarationCppCode();  //NOT NEEDED!
        cCode += figureObj.translateToCppCode() + "\n";
        cCode += figureObj.translateToCppCodePost() + "\n";                   //because translating loop adding end of loop code
      }else if (figureObj.NAME.toLowerCase().search("connection") == -1){
        cCode += figureObj.translateToCppCode() + "\n";                       //translation of normal nodes except wires
      }else if (figureObj.translateToCppCode){
        cCode += figureObj.translateToCppCode() + "\n";                       //translation of normal nodes except wires        
      }else if (figureObj.translateToCppCode2){
        cCode += figureObj.translateToCppCode2() + "\n";                       //translation of normal nodes except wires
      }
    });

    //4th translate figures inside
    //directChildren = GraphLang.Utils.getDirectChildrenWithoutTunnels(this.getCanvas(), this.getCanvas().getFigure(this.getId()));
    directChildren = this.getAssignedFigures();

    return cCode;
  },
  
  /*
   *    This event is called when figure is dropped on layer.
   */
  onCatch(droppedFigure, x, y, shiftKey, ctrlKey){
    //run super() or continue just in case there is not dropped tunnel inside layer, tunnel is possible to move
    if (droppedFigure.NAME.toLowerCase().search('tunnel') == -1){
      this._super(droppedFigure, x, y, shiftKey, ctrlKey);
      if (droppedFigure.getComposite() && droppedFigure.getComposite().getId() == this.getId()){
          //alert('no layer change')
      }else{
        //alert('new layer assignment')
        droppedFigure.getPorts().each(function(portIndex, portObj){
    			portObj.getConnections().each(function(connectionIndex, connectionObj){
    				GraphLang.Utils.detectTunnels2(droppedFigure.getCanvas(), connectionObj);
    			});
  		  });
      }
    }
  }    
});
