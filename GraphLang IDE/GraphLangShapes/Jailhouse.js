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
            
            //ForLoop has iteration terminal input port
  			if (figureObj.NAME.toLowerCase().search('forloop') > -1){
                allConnections.addAll(figureObj.getPort('iterationTerminal').getConnections());	//adding conenction into list of top most connections on canvas			
  			}
  		}
	  }
    });

    //ADD WIRES CONNECTED TO RIGHT TUNNELS for THIS LAYER
    rightTunnelsWires = this.getCanvas().getFigure(this.userData.owner).getRightTunnelsLayerWires();
    rightTunnelsWires.each(function(connectionIndex, connectionObj){
      wireSourceFigure = connectionObj.getSource().getParent()
      if (wireSourceFigure.NAME.toLowerCase().search('tunnel') > -1) wireSourceFigure = wireSourceFigure.getParent();
      if (layerFigures.contains(wireSourceFigure)){
        allConnections.add(connectionObj);
      }
    });

  	allConnections.each(function(connectionindex, connectionObj){
  		cCode += connectionObj.getSource().userData.datatype + " wire_" + connectionObj.getId() + ";\n";
  	});

    //2nd get declaration for wires going from tunnels to figures inside
    leftTunnelsWires = this.getCanvas().getFigure(this.userData.owner).getLeftTunnelsLayerWires();
    leftTunnelsWires.each(function(connectionIndex, connectionObj){
      wireTargetFigure = connectionObj.getTarget().getParent()      
      
      //if (wireTargetFigure.NAME.toLowerCase().search('tunnel') > -1) wireTargetFigure = wireTargetFigure.getParent();
      
      //getting parent() until it's nullso that's node which is part of canvas
      //here must be while() because port can be part fo label which is part of vertical layout which is part of BundleByName
      while(wireTargetFigure.getParent() != null){
        wireTargetFigure = wireTargetFigure.getParent();
      }
    
      if (layerFigures.contains(wireTargetFigure)){
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
      //if there is some declaration translate it
      if (figureObj.translateToCppCodeDeclaration) cCode += figureObj.translateToCppCodeDeclaration() + "\n";

      if (figureObj.NAME.toLowerCase().search("loop") > -1 &&
          figureObj.NAME.toLowerCase().search("multilayered") == -1){
        //cCode += figureObj.getTunnelsDeclarationCppCode();  //NOT NEEDED!
        cCode += figureObj.translateToCppCode() + "\n";
      }else if (figureObj.NAME.toLowerCase().search("connection") == -1){
        cCode += figureObj.translateToCppCode() + "\n";                       //translation of normal nodes except wires
      }else if (figureObj.translateToCppCode){
        cCode += figureObj.translateToCppCode() + "\n";                       //translation of normal nodes except wires        
      }else if (figureObj.translateToCppCode2){
        cCode += figureObj.translateToCppCode2() + "\n";                       //translation of normal nodes except wires
      }
    });

    //4th translate wires going OUTSIDE FIGURE THROUGH TUNNELS
    layerFigures = this.getAssignedFigures();
    cCode += '/* RIGHT TUNNELS output assignment */' + "\n";
    this.getCanvas().getFigure(this.userData.owner).getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search('righttunnel') > -1){
        childObj.getInputPort(0).getConnections().each(function(connectionIndex, connectionObj){
          wireSourceFigure = connectionObj.getSource().getParent()
          if (wireSourceFigure.NAME.toLowerCase().search('tunnel') > -1) wireSourceFigure = wireSourceFigure.getParent();
          if (layerFigures.contains(wireSourceFigure)){
            childObj.getOutputPort(0).getConnections().each(function(outputWireIndex, outputWireObj){
                cCode +=  "wire_" + outputWireObj.getId() + " = wire_" + connectionObj.getId() + ";\n";
            });
          }
        });
      }
    });
    cCode += '/* END RIGHT TUNNELS output assignment */' + "\n";
    
    return cCode;
  },
  
  translateToPythonCode: function(){
    pythonCode = "";

    /*
     *  Going through all nodes and wires inside Jailhouse and translate them into C/C++ code or call appropriate translate function
     */
    layerFigures = this.getAssignedFigures();
    layerFigures.sort(function(figureA, figureB){ return figureA.userData.executionOrder - figureB.userData.executionOrder}); //order figure by their executionOrder

    //2nd get declaration for wires going from tunnels to figures inside
    leftTunnelsWires = this.getCanvas().getFigure(this.userData.owner).getLeftTunnelsLayerWires();
    leftTunnelsWires.each(function(connectionIndex, connectionObj){
      wireTargetFigure = connectionObj.getTarget().getParent()            
      //getting parent() until it's nullso that's node which is part of canvas
      //here must be while() because port can be part fo label which is part of vertical layout which is part of BundleByName
      while(wireTargetFigure.getParent() != null){
        wireTargetFigure = wireTargetFigure.getParent();
      }
    
      if (layerFigures.contains(wireTargetFigure)){
        pythonCode += "wire_" + connectionObj.getId() + " = tunnel_" + connectionObj.getSource().getParent().getId() + ";\n";  //to get tunnel ID first I got port from wire source and its parent is tunnel
      }
    });

    //3rd translate figures inside layer
    layerFigures.each(function(figureIndex, figureObj){
      //if there is some declaration translate it
      if (figureObj.translateToCppCodeDeclaration) pythonCode += figureObj.translateToCppCodeDeclaration() + "\n";

      if (figureObj.NAME.toLowerCase().search("loop") > -1 &&
          figureObj.NAME.toLowerCase().search("multilayered") == -1){
        pythonCode += figureObj.translateToPythonCode() + "\n";
      }else if (figureObj.NAME.toLowerCase().search("connection") == -1){
        pythonCode += figureObj.translateToPythonCode() + "\n";                       //translation of normal nodes except wires
      }else if (figureObj.translateToCppCode){
        pythonCode += figureObj.translateToPythonCode() + "\n";                       //translation of normal nodes except wires        
      }
    });

    //4th translate wires going OUTSIDE FIGURE THROUGH TUNNELS
    layerFigures = this.getAssignedFigures();
    cCode += '/* RIGHT TUNNELS output assignment */' + "\n";
    this.getCanvas().getFigure(this.userData.owner).getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search('righttunnel') > -1){
        childObj.getInputPort(0).getConnections().each(function(connectionIndex, connectionObj){
          wireSourceFigure = connectionObj.getSource().getParent()
          if (wireSourceFigure.NAME.toLowerCase().search('tunnel') > -1) wireSourceFigure = wireSourceFigure.getParent();
          if (layerFigures.contains(wireSourceFigure)){
            childObj.getOutputPort(0).getConnections().each(function(outputWireIndex, outputWireObj){
                pythonCode +=  "wire_" + outputWireObj.getId() + " = wire_" + connectionObj.getId() + ";\n";
            });
          }
        });
      }
    });
    pythonCode += '/* END RIGHT TUNNELS output assignment */' + "\n";
    
    return pythonCode;
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
