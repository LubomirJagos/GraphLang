/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered2
 *  @author Ing. Lubomir Jagos
 *  @description This is almost identical copy of Multilayered class, but layers are children of this object instead  canvas, what means
 *  that during toggle between layers have to bring actual layer to Canvas. Also during moving all layers must become again direct children
 *  of this object to move together with parent. It makes easier changing height, width, position of layers due they are children of
 *  multilayered, but there is error during moving, that layers becomes part of  multilayered object but not nodes which are placed in layers
 *  and moving is chaotic and not running ok. MAYBE IS BETTER TO CONTINUE WITH ORIGINAL OBJECT DUE THERE I HAVE TO MAKE WORKING SAVING AND
 *  LOADING ON DRIVE THAN START TO SOLVE THIS, MAYBE FOR LATER WE WILL SEE.
 */
GraphLang.Shapes.Basic.Loop.Multilayered2 = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.Multilayered2",
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
     *  LAYER SELECTOR
     **********************************************************************************/
    this.renewLayerSelector();

    /**********************************************************************************
     *  LAYERS
     **********************************************************************************/

    //PROTECTIVE RECTANGLE
    var rect0 = new draw2d.shape.basic.Rectangle();
    rect0.setWidth(this.getWidth()-4);
    rect0.setHeight(this.getHeight()-4);
    rect0.setColor(new GraphLang.Utils.Color("#000000"));
    rect0.setBackgroundColor(new GraphLang.Utils.Color("#FFFFFF"));
    rect0.setId("multilayered_"+ this.getId() + "_jalihouseLayerProtection0");
    rect0.userData = {};
    rect0.userData.multilayeredOwner = this.getId();
    //ELEMENTS MUST BE ADDED TO CANVAS TO BE ABLE CATCH NODES WHEN PLACED INTO THEM
    this.add(rect0, new draw2d.layout.locator.XYAbsPortLocator(0,0));
    //appCanvas.add(rect0, new draw2d.layout.locator.XYAbsPortLocator(0,0));    //NOT SURE IF COORDS HAS SOME INFLUENCE, IT WAS RUNNING EVEN WITH POSITION 20,20
    rect0.toBack();
    this.rect0 = rect0;

    this.setParent(null);

    this.activeLayer = 0;
    /*
     *  ADD BY DEFAULT 3 LAYERS, for debugging purposes now
     */
    this.layers = new draw2d.util.ArrayList();
/*
    this.addLayer();
    this.addLayer();
*/
    this.addLayer();

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    // this.layerChooser = new draw2d.shape.basic.Label({text: "..choose layer.."});
    this.renewLayerChooser();

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
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#00FF00");
    port.setName("layerSelector");
    port.setMaxFanOut(20);
  },

  renewLayerChooser: function(){

    if (this.layerChooser != undefined){
      this.remove(this.layerChooser);
      this.remove(this.getChildren().get(0));
    }

    this.layerChooser = new draw2d.shape.basic.Label();
    this.layerChooser.setText(this.layers.get(0).userData.layerText);  //after place structure into diagram, it's layer selector is set to has name as layer 0.
    //CLICK ON LAYER NAME AT TOP OF MULTILAYER STRUCTURE WHERE ARE THEIR NAMES
    this.layerChooser.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });

    //RIGHT CLICK ON LAYERS NAME SELECTOR
    this.layerChooser.on("contextmenu", this.layerChooserContextmenu);
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));

    this.on("move", function(emitter, event){
      //emitter.moveActiveLayer();
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
      emitter.rect0.setWidth(emitter.getWidth()-4);
      emitter.rect0.setHeight(emitter.getHeight()-4);
      emitter.rect0.setX(emitter.getX()+2);
      emitter.rect0.setY(emitter.getY()+2);
    });

    this.on("show", function(emitter){
      emitter.moveActiveLayer();
    });

    this._onDragStart = this.onDragStart;

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
/*
  Layers are children of Multilayered so they are moving together wit it.
*/
  },

  onDragStart: function(x,y,shiftKey, ctrlKey){
    var parent = this;
    this.layers.each(function(layerIndex, layerObj){
      parent.getCanvas().remove(layerObj);
      parent.add(layerObj, new draw2d.layout.locator.XYAbsPortLocator(2,2));
    });

    this.rect0.toFront(); //LuboJ, this is what I added here I must copy whole code, because don't know how to call original overloaded function

    this.isInDragDrop =false;

    // Check whenever the figures has a drag-handle. Allow drag&drop
    // operation only if the x/y is inside this area.
    //
    // @since 5.6.0
    var bbox = this.getHandleBBox();
    if(bbox!==null && bbox.translate(this.getAbsolutePosition().scale(-1)).hitTest(x,y)===false){
        // design failure: we must catch the figure below the mouse to forward
        // the panning event to this figure. Special handling to provide sliders
        // and other UI elements which requires the panning event. Hack.
        this.panningDelegate = this.getBestChild(this.getX()+x,this.getY()+y);
        if(this.panningDelegate!==null){
            // transform x/y relative to the panning figure and request the dragStart event
            this.panningDelegate.onDragStart(x-this.panningDelegate.x, y-this.panningDelegate.y, shiftKey, ctrlKey);
        }
        return false;
    }

    this.command = this.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.MOVE));

    if(this.command!==null){
       this.ox = this.getX();
       this.oy = this.getY();
       this.isInDragDrop =true;

       // notify all installed policies
       //
       var _this = this;
       var canStartDrag = true;

       this.editPolicy.each(function(i,e){
           if(e instanceof draw2d.policy.figure.DragDropEditPolicy){
               canStartDrag = canStartDrag && e.onDragStart(_this.canvas, _this, x,y,shiftKey,ctrlKey);
           }
       });

        if(canStartDrag) {
            // fire an event
            // @since 5.3.3
            this.fireEvent("dragstart", {x: x, y: y, shiftKey: shiftKey, ctrlKey: ctrlKey});
        }
        return canStartDrag;
    }

    return false;
  },

  /**
   * @name switchActiveLayer
   * @description Brings to front next layer from internal array and also all objects on this layer, when last layer is selected, then it starts from beginning.
   */
  switchActiveLayer: function(){
    var parent = this;
    this.layers.each(function(layerIndex, layerObj){
      parent.getCanvas().remove(layerObj);
      parent.add(layerObj, new draw2d.layout.locator.XYAbsPortLocator(2,2));
    });

    this.activeLayer++;
    if (this.activeLayer >= this.layers.getSize()) this.activeLayer = 0;
    var layerObjects = this.layers.get(this.activeLayer).getChildren();
    var activeLayer = this.layers.get(this.activeLayer);
    parent.getCanvas().remove(activeLayer);
    parent.add(activeLayer, new draw2d.layout.locator.XYAbsPortLocator(2,2));
    activeLayer.toFront();
    activeLayer.getChildren().each(function(childIndex, childObj){
      childObj.toFront();
    });

    this.bringsAllTunnelsToFront();

    this.layerChooser.setText(this.layers.get(this.activeLayer).userData.layerText);
  },

  onDragEnd: function(x,y,shiftKey, ctrlKey){
    this.moveActiveLayer();

    this.rect0.toBack();                                      //hide protection
    var activeLayer = this.layers.get(this.activeLayer);      //set active layer to front
    activeLayer.toFront();
    var parent = this;
    this.layers.each(function(layerIndex, layerObj){
      parent.remove(layerObj);
      parent.getCanvas().add(layerObj, new draw2d.layout.locator.XYAbsPortLocator(2,2));
      layerObj.setX(parent.getX()+2);
      layerObj.setY(parent.getY()+2);
      //layerObj.setWidth(parent.getWidth()-4);
      //layerObj.setHeight(parent.getHeight-4);
      layerObj.toFront();
    });
  },

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
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
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

      return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
      this._super(memento);

      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();

      // and add all children of the JSON document.
      $.each(memento.labels, $.proxy(function(i,json){

          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;
          if (curDatatype.toLowerCase().search("tunnel") > -1){
            var msg = JSON.stringify(json);
            //alert("tunnel:" + msg);
          }

          var figure =  eval("new "+json.type+"()");                                                    // create the figure stored in the JSON
          figure.attr(json);                                                                            // apply all attributes
          var locator =  eval("new "+json.locator+"()");     // instantiate the locator

          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));

      $.each(memento.ports, $.proxy(function(i,json){
          var figure =  eval("new "+json.type+"()");
          figure.setId(json.id);                                                    // create the figure stored in the JSON
          figure.attr(json);                                                                            // apply all attributes
          var locator =  eval("new "+json.locator+"(-0.7, 10)");     // instantiate the locator

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

    selectorPort = this.getInputPort("layerSelector");
    selectorPortWires = selectorPort.getConnections();
    if (selectorPortWires.getSize() > 0){
      cCode = "switch(" + selectorPortWires.first().getId() + "){\n";
    }else{
      cCode = "switch(/* selectorPort not connected*/){\n";
    }

    this.getAllLayers().each(function(layerIndex, layerObj){
        cCode += "case " + layerObj.getId() + ":\n";
        cCode += layerObj.translateToCppCode();
        cCode += "break;\n"
    });
    cCode += "}\n";

    return cCode;
  },

  /**
  * @method addLayer
  * @description Add new layer at the end of all layers.
   */
  addLayer: function(){
    //var newLayer = new draw2d.shape.composite.Jailhouse();
    var newLayer = new GraphLang.Shapes.Basic.Jailhouse();

    newLayer.setWidth(this.getWidth()-4);
    newLayer.setHeight(this.getHeight()-4);
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
    this.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(2,2));
    //this.add(newLayer, new draw2d.layout.locator.XYRelPortLocator());
    //
    //appCanvas.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX(), this.getAbsoluteY()));

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
  }

});
