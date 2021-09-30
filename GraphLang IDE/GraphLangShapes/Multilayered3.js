/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.Loop.Multilayered3 = GraphLang.Shapes.Basic.Loop2.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.Multilayered3",
  // //This doesn't run, don't know why, so initialization for userData is done in init()
  // userData: {
  //   executionOdrder: -1,
  //   wasTranslatedToCppCode: false
  // },
  init:function(attr, setter, getter){
    // this._super(attr, setter, getter);
    this._super( $.extend({},attr), setter, getter);

    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    // port.setConnectionDirection(3);
    // port.setBackgroundColor("#abcdef");
    // port.setName("iterationTerminal");
    // port.setMaxFanOut(20);
    //COMMON LOOP BOUNDARY SETTINGS
    this.setWidth(420);
    this.setHeight(220);
    this.setStroke(2);

    /**********************************************************************************
     *  LAYERS
     **********************************************************************************/

    this.setParent(null);

    this.activeLayer = 0;
    /*
     *  ADD BY DEFAULT 3 LAYERS, for debugging purposes now
     */
    this.layers = new draw2d.util.ArrayList();
/*  NOT POSSIBLE TO ADD LAYER BECAUSE OBJECT DOESN'T EXISTS ON CANVAS PHYSICALLY SO IT WILL HAVE NO EFFECT THIS
    this.addLayer();
*/

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    //this.layerChooser = new GraphLang.Shapes.Basic.LayerChooser();
    //this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));
    this.renewLayerChooser();
    this.renewLayerSelector();  //NOT WORKING WHEN LOADING FROM FILE

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    /***************************
     *  DRAG options
     */

  },

  removeSelectorPort: function(){
      this.remove(this.getPort("layerSelector"));
  },

  renewLayerSelector: function(){
    //port = this.createPort("input", new draw2d.layout.locator.XYAbsPortLocator(-0.7,17));
    if (this.selectorPort) return;

    port = new GraphLang.InputPort();

    port.setConnectionDirection(3);
    port.setBackgroundColor("#00FF00");
    port.setName("layerSelector");
    port.setMaxFanOut(20);
    this.selectorPort = port;

    this.addPort(port, new draw2d.layout.locator.XYAbsPortLocator(-0.7,17));
  },

  renewLayerChooser: function(){

    if (this.layerChooser != undefined){
      //this.remove(this.layerChooser);
      //this.remove(this.getChildren().get(0));
      this.layerChooser = this.getChildren().get(0);
    }else{
      this.layerChooser = new draw2d.shape.basic.Label();
    }

    //there is no layer 0 in constructor so this is not used now //this.layerChooser.setText(this.layers.get(0).userData.layerText);  //after place structure into diagram, it's layer selector is set to has name as layer 0.
    //this.layerChooser.setText('none');  //after place structure into diagram, it's layer selector is set to has name as layer 0.

    //CLICK ON LAYER NAME AT TOP OF MULTILAYER STRUCTURE WHERE ARE THEIR NAMES
    this.layerChooser.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });

    //RIGHT CLICK ON LAYERS NAME SELECTOR
    this.layerChooser.on("contextmenu", this.layerChooserContextmenu);
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));

    this.on("move", function(emitter, event){
      emitter.moveActiveLayer();
    });

    //luboJ missing condition when jailhouse is not getting smaller because nodes inside it
    //ERROR, MISSING CONDITION TO RESTRICT RESIZE ACCORDING TO NODES INSIDE LAYERS
    this.on("resize", function(emitter){
      emitter.layers.each(function(layerIndex, layerObj){
        layerObj.setWidth(emitter.getWidth()-4);
        layerObj.setHeight(emitter.getHeight()-4);

        //not ideal, but it's someho helpfulwhen this is here, then can structure resized from all corners and it's running ok
        layerObj.setX(emitter.getX()+2);
        layerObj.setY(emitter.getY()+2);
      });
    });

    this.on("show", function(emitter){
      emitter.moveActiveLayer();
    });

  },

  layerChooserContextmenu: function(emitter, event){
      $.contextMenu({
          selector: 'body',
          events:
          {
              hide:function(){ $.contextMenu( 'destroy' ); }
          },

          //these functions are run after user click on some context menu option
          callback: $.proxy(function(key, options)
          {
             switch(key){
             case "rename":                       // <--- Continue here, implement renaming layers, now it's static shit doing nothing
                 emitter.getParent().renameLayer();
                 break;
             case "new":
                /* this was part of code in example but it's not running so it's disabled, I need to change layer name no selector, it's updated based on active layer ID
                 setTimeout(function(){
                     _table.addEntity("_new_").onDoubleClick();
                 },10);
                */
                 //alert("Layers count: " + emitter.getParent().layers.getSize());
                 emitter.getParent().addLayer();

                 break;
             case "delete":
                 // with undo/redo support
                 /*
                 var cmd = new draw2d.command.CommandDelete(emitter);
                 emitter.getCanvas().getCommandStack().execute(cmd);
                 */
                 emitter.getParent().removeLayer(this.activeLayer);
             default:
                 break;
             }

          },this),
          x:event.x,
          y:event.y,
          items:
          {
              "rename": {name: "Rename"},
              "new":    {name: "New Entity"},
              "sep1":   "---------",
              "delete": {name: "Delete"}
          }
      });
  },

  //this function is also called in gui/View.js after placing multilayer node to canvas to right placed layers
  moveActiveLayer: function(){
    var x = this.getX();
    var y = this.getY();
    var width = this.getWidth();
    var height = this.getHeight();
    this.layers.each(function(layerIndex, layerObj){
// layers and protective rectangle are on 0,0 coords relative to parent, so this IS NOT USED INTENTIONALLY
      layerObj.setX(x+2);
      layerObj.setY(y+2);
      layerObj.setWidth(width-4);
      layerObj.setHeight(height-4);
      layerObj.setSelectable(false);
      layerObj.setDraggable(false);
    });
  },

  /**
   * @name switchActiveLayer
   * @description Brings to front next layer from internal array and also all objects on this layer, when last layer is selected, then it starts from beginning.
   */
  switchActiveLayer: function(){
    this.activeLayer++;
    if (this.activeLayer >= this.layers.getSize()) this.activeLayer = 0;
    //var layerObjects = this.layers.get(this.activeLayer).getChildren();
    var activeLayer = this.layers.get(this.activeLayer);
    activeLayer.toFront();
/*
    activeLayer.getChildren().each(function(childIndex, childObj){
      childObj.toFront();
    });
*/
    this.bringsAllTunnelsToFront();

    this.layerChooser.setText(this.layers.get(this.activeLayer).userData.layerText);
  },

/* THIS CAUSED WRONG BEHAVE, AFTER PLACE MULTILAYER STRUCTURE ON CANVAS WASN'T POSSIBLE TO PLACE OTHER NODE THEY WERE DISAPPEARING
   ALSO MAYBE BECAUSE AT BEGINNING THERE IS NO LAYER SO THIS HAS NO OBJECT WHICH IS ACTING ON
  onDragEnd: function(x,y,shiftKey, ctrlKey){
    this.moveActiveLayer();

    var activeLayer = this.layers.get(this.activeLayer);      //set active layer to front
    activeLayer.toFront();
  },
*/

  /**
   * @name bringsAllTunnelsToFront
   * @description Brings all tunnels owned by structure to front, tunnels are owned by Multilayer structure not by layers, so they are common for all layers and always should be displayed at front of structure to be visible. But wires which go from tunnel to particular layer are owned by that layer.
   */
  bringsAllTunnelsToFront: function(){
    var activeLayer = this.layers.get(this.activeLayer);

    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
        childObj.toFront();
      }

/*    THIS WAS MAKING HARM AND CAUSING ORPHANS LINES ON CANVAS,
      IT'S DONE AUTOMATICALLY NOW WHEN LAYERS ARE SWITCHED DUE THEY ARE NOW STRONG COMPOSITE

      //SHOWING WIRES FROM LEFTTUNNELS
      if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
        childObj.getOutputPorts().each(function(portIndex, portObj){
          portObj.getConnections().each(function(wireIndex, wireObj){
            // wireObj.setVisible(activeLayer.contains(wireObj.getTarget().getParent()));
            var insidePort = wireObj.getSource();
            if (insidePort.getParent().NAME.toLowerCase().search("tunnel") >= 0) insidePort = wireObj.getTarget();
            wireObj.setVisible(activeLayer.contains(insidePort.getParent()));
          });
        });
      }

      //SHOWING WIRES GOING INTO RIGHTTUNNELS
      if (childObj.NAME.toLowerCase().search("righttunnel") >= 0){
        childObj.getInputPorts().each(function(portIndex, portObj){
          portObj.getConnections().each(function(wireIndex, wireObj){
            var insidePort = wireObj.getSource();
            if (insidePort.getParent().NAME.toLowerCase().search("tunnel") >= 0) insidePort = wireObj.getTarget();
            wireObj.setVisible(activeLayer.contains(insidePort.getParent()));
          });
        });
      }
*/


    });
  },

  bringsAllTunnelsToBack: function(){
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
        childObj.toBack();
      }
    });
  },  //this comma doesn't matter it's ok and for future at least I don't forget, this has no effect on functionality of this class

  /**
   *  @method getLayer(index)
   *  @description Return layer object at specified index.
   */
  getLayer: function(layerIndex){
    return this.layers.get(layerIndex);
  },

  getAllLayers: function(){
    return this.layers;
  },

  getLayerChooser: function(){
    return this.layerChooser;
  },







  //added by LuboJ, here is showed how to add attributes which
  //then are serialized into json and could be readed to load schematci


  /**
   * @method getPersistentAttributes
   * @description Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();

      // add all decorations to the memento
      //
      memento.labels = [];
      this.children.each(function(i,e){
          var labelJSON = e.figure.getPersistentAttributes();
          labelJSON.locator=e.locator.NAME;
          labelJSON.locatorX=e.locator.x;                         //STORE INFORMATION ABOUT TUNNEL POSITION X
          labelJSON.locatorY=e.locator.y;                         //STORE INFORMATION ABOUT TUNNEL POSITION Y

          memento.labels.push(labelJSON);
      });

      //DONT ERASE SELECTOR PORT THEN THERE IS MESS WHEN SOMETHING CONNECTED TO IT
      //memento.ports = [];       //ERASE ALL PORTS, THERE ARE JUST TUNNELS AND SELECTOR IS ALWAYS RECREATED!

      layerSelectorPort = null;
      for(port in memento.ports){
        if (port.name && port.name.toLowerCase().indexOf("layerselector") > -1){
          alert(port.name)
          layerSelectorPort = port;
        }
      }
      //memento.ports = [this.selectorPort];

      return memento;
  },

  /**
   * @method setPersistentAttributes
   * @descritpiton Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   */
  setPersistentAttributes : function(memento)
  {
      mementoPorts = memento.ports;   //taking ports out, because there is creation of them in parent and I want to create them in my way
      mementoLabels = memento.labels; //taking labels away

      memento.ports = [];
      memento.labels = [];
      this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder

      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();

      // and add all children of the JSON document.
      $.each(mementoLabels, $.proxy(function(i,json){

          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;

          var figure =  eval("new "+json.type+"()");                                                    // create the figure stored in the JSON
          figure.attr(json);                                                                            // apply all attributes

          if (json.locatorX != undefined && json.locatorY != undefined){
            var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")");     // instantiate the locator
          }else{
            var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.x + "," + json.y + ")"); //DEFAULT LOCATOR
          }

          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));

      //RERECREATE JUST SELECTOR PORT
      $.each(mementoPorts, $.proxy(function(i,json){
        if (json.name.toLowerCase().search('layerselector') > -1){
            var figure =  eval("new "+json.type+"()");
            figure.setId(json.id);                                                    // create the figure stored in the JSON
            figure.attr(json);                                                                            // apply all attributes
            if (json.locatorX != undefined &&
                json.locatorY != undefined){
                  var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")"); //NEED TO CHECK IF IS RUNNING GOOD BUT TILL NOW NOT CAUSING HARM    // instantiate the locator
            }else if (json.locator){
              var locator =  eval("new "+json.locator+"()"); //NEED TO CHECK IF IS RUNNING GOOD BUT TILL NOW NOT CAUSING HARM    // instantiate the locator
            }else{
              var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.x + "," + json.y + ")"); //DEFAULT LOCATOR
            }

            this.selectorPort = figure; //assign port which is layerSelector to internal variable
            this.selectorPort.setName("layerSelector");
          }
          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));
  },


  /********************************************************************************************************************
   *  Functions below are implemented by me (LuboJ)
   ********************************************************************************************************************/

  translateToCppCode: function(){
    /*
     *  Going thorugh all layers and ask them to translate into C/C++ code
     */
    cCode = "";

    cCode += this.getTunnelsDeclarationCppCode();

    selectorPortWires = this.selectorPort.getConnections();
    if (selectorPortWires!= null && selectorPortWires.getSize() > 0){
      cCode += "switch(wire_" + selectorPortWires.first().getId() + "){\n";
    }else{
      cCode += "switch(/* selectorPort not connected*/){\n";
    }

    this.getAllLayers().each(function(layerIndex, layerObj){
        //cCode += "case " + layerObj.getId() + ":\n";
        cCode += "case " + layerObj.userData.layerText + ":\n";
        cCode += layerObj.translateToCppCode();
        cCode += "break;\n"
    });
    cCode += "} //end of generated switch \n";

    return cCode;
  },

  /**
  * @method addLayer
  * @description Add new layer at the end of all layers.
   */
  addLayer: function(){
    //var newLayer = new draw2d.shape.composite.Jailhouse();
    var newLayer = new GraphLang.Shapes.Basic.Jailhouse();

    newLayer.setWidth(this.getWidth()-10);
    newLayer.setHeight(this.getHeight()-10);
    newLayer.setColor(new GraphLang.Utils.Color("#eb34c6"));  //layer border color

    newLayer.setBackgroundColor(new GraphLang.Utils.Color("#eb34c6"));
    newLayer.setBackgroundColor(new GraphLang.Utils.Color(
      Math.round(Math.random()*255),
      Math.round(Math.random()*255),
      Math.round(Math.random()*255)
    ));

    if (newLayer.getUserData() == null){
      newLayer.userData = {};
    }
    newLayer.userData.owner = this.getId();
    newLayer.userData.layerText = '---';

    var layerId = "";
    if (this.layers != null){
      layerId = new String(this.layers.getSize());  //size is alwas count so it's +1 in compare with object index inside array
    }else{
      layerId = "0";                      //first element to be create has numebr 0
    }
    newLayer.setId("multilayered_" + this.getId() + "_jailhouseLayer" + layerId);                   //generate uniqe layer id based on its order, FOR NOW IT'S NOT CORRECT WAY, ERROR NEEDS TO BE REPAIRED, ie when user add 3 layers and remove 2, then add, there could be problem

    /*
     *  GraphLang Jailhouse has it's translation function inside object!
     */

    this.layers.push(newLayer);

    //ELEMENTS MUST BE ADDED TO CANVAS TO BE ABLE CATCH NODES WHEN PLACED INTO THEM
    //this.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX(), this.getAbsoluteY()));
    appCanvas.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX()+5, this.getAbsoluteY()+5));
    this.assignFigure(newLayer);

    //newLayer._onDragStart = this.onDragStart; //WRONG

  },

  /**
   * @name removeLayer
   * @param {Number} layer order which should be removed
   * @description Removed layer from structure and also removes all contained nodes and wires. Remove function is call using CommandStack over all nodes contained inside layer. This way would be able to use "Undo" after layer is deleted. Now it's not needed, but it's proper way how to delete objects and have stored information about that for another purposes.
   * NOTE, THERE IS IMPLEMENTED JUST REMOVING NODES INSIDE, NO OTHER ELEMENTS, SO THERE SHOULD BE RECURSIVELY CALL OF REMOVE FUNCTION OVER ALL OBJECTS INSIDE, BECAUSE IT'S OTHER THING TO REMOVE NODE AND REMOVE LOOP OR MULTILAYERED STRUCTURE, NEED TO THINK ABOUT THIS.
   */
  removeLayer: function(layerId){
    if (this.layers.getSize() == 1) return; //DO NOTHING IF THERE IS JUST ONE LAYER, that's default layer it MUST BE THERE

    var nodesToRemove = new draw2d.util.ArrayList();
    this.layers.get(this.activeLayer).getAssignedFigures().each(function(nodeIndex, nodeObj){
      nodesToRemove.push(nodeObj);
    });
    var activeLayerObj = this.layers.get(this.activeLayer);
    for (var i = 0; i < nodesToRemove.getSize(); i++){
      var cmd = new draw2d.command.CommandDelete(nodesToRemove.get(i));
      nodesToRemove.get(i).getCanvas().getCommandStack().execute(cmd);  //remove from canvas

      //delete object assignement to layer, but it will fire events to change layer position and dimension, so here I will reverse this action and set them back after calling function
      var activeLayerX = activeLayerObj.getAbsoluteX();
      var activeLayerY = activeLayerObj.getAbsoluteY();
      var activeLayerWidth = activeLayerObj.getWidth();
      var activeLayerHeight = activeLayerObj.getHeight();
      //remove relation btw node and its layer
      activeLayerObj.unassignFigure(nodesToRemove.get(i));  //remove from multilayer structure (jailhouse object)
      //reversing dimensions and position change
      activeLayerObj.setWidth(activeLayerWidth);
      activeLayerObj.setHeight(activeLayerHeight);
      activeLayerObj.setX(activeLayerX);
      activeLayerObj.setY(activeLayerY);
    }

    var cmd = new draw2d.command.CommandDelete(activeLayerObj);
    this.getCanvas().getCommandStack().execute(cmd);  //remove from canvas
    this.layers.remove(activeLayerObj);
    this.switchActiveLayer();

  },

  renameLayer: function(){
    //this.layerChooser.editor.start(this.layerChooser);
    layerChooserEditor = new draw2d.ui.LabelEditor();
    layerChooserEditor.start(this.layerChooser);

    //this.layers.get(this.activeLayer).setId(this.layerChooser.getText());
    this.layers.get(this.activeLayer).userData.layerText = this.layerChooser.getText();
  },

  /**
   * @method getVisibleLoopAndMultilayered
   * @description Return all loops and multilayered objects from all nested loops and multilayered objects.
   * @returns {draw2d.util.ArrayList}
   */
  getVisibleLoopAndMultilayered: function(){
    if (this.layers.isEmpty()) return new draw2d.util.ArrayList();  //if empty return empty ArrayList

    let childrenList = this.layers.get(this.activeLayer).getAssignedFigures();
    let multilayeredList = new draw2d.util.ArrayList();
    multilayeredList.push(this);
    childrenList.each(function(figureIndex, figureObj){
      if (figureObj.NAME.toLowerCase().search("multilayered") > -1){
          let nestedMultilayeredList = figureObj.getVisibleLoopAndMultilayered();
          if (!nestedMultilayeredList.isEmpty()) multilayeredList.addAll(nestedMultilayeredList); //recursive call to add all nested multilayered figures
      }else{
        if (figureObj.NAME.toLowerCase().search("loop") > -1){
          multilayeredList.push(figureObj); //add also loop into list
        }
      }
    });

    return multilayeredList;
  },

  /**
   * @method getVisibleConnections
   * @description Return all visible connections.
   * @returns {draw2d.util.ArrayList}
   */
  getVisibleConnections: function(){
    if (this.layers.isEmpty()) return new draw2d.util.ArrayList();  //if empty return empty ArrayList
    var layerObjects = this.layers.get(this.activeLayer).getChildren();
    let curLayer = this.layers.get(this.activeLayer);
    let connectionList = new draw2d.util.ArrayList();
    let portList = new draw2d.util.ArrayList();


    var num = "";
    curLayer.getAssignedFigures().each(function(index, obj){
      obj.getPorts().each(function(portIndex, portObj){
        connectionList.addAll(portObj.getConnections());
      });
    });

    return connectionList;
  },



  /*
    THIS IS MODIFIED VERSION TO ALSO LOOK FOR LAYER SELECTOR PORT, BUT THERE IS SOMETHING WRONG WITH ITS CREATION BECAUSE WIRES ARE BROKEN
  */
  getPort: function(name){
    port = this._super(name);
    if (name.indexOf('layerSelector') > -1){
      return this.selectorPort;
    }
    return port;
  }


});
