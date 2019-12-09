/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.Loop.Multilayered = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.Multilayered",
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

    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#00FF00");
    port.setName("layerSelector");
    port.setMaxFanOut(20);

    /**********************************************************************************
     *  LAYERS
     **********************************************************************************/

    var x = 20;//this.getX();
    var y = 20;//this.getY();

    //PROTECTIVE RECTANGLE
    var rect0 = new draw2d.shape.basic.Rectangle();
    rect0.setWidth(this.getWidth());
    rect0.setHeight(this.getHeight());
    rect0.setColor(new GraphLang.Utils.Color("#000000"));
    rect0.setBackgroundColor(new GraphLang.Utils.Color("#FFFFFF"));
    rect0.setId("jalihouseLayerProtection0");
    appCanvas.add(rect0, new draw2d.layout.locator.XYAbsPortLocator(x,y));
    rect0.toBack();
    this.rect0 = rect0;
    this._onDragStart = this.onDragStart;

    /*
     *  ADD BY DEFAULT 3 LAYERS, for debugging purposes now
     */
    this.layers = new draw2d.util.ArrayList();
    this.addLayer();
    this.addLayer();
    this.addLayer();
    this.activeLayer = 0;

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    // this.layerChooser = new draw2d.shape.basic.Label({text: "..choose layer.."});
    this.layerChooser = new draw2d.shape.basic.Label();
    this.layerChooser.setText(this.layers.get(0).getId());  //after place structure into diagram, it's layer selector is set to has name as layer 0.

    //CLICK ON LAYER NAME AT TOP OF MULTILAYER STRUCTURE WHERE ARE THEIR NAMES
    this.layerChooser.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });

    //RIGHT CLICK ON LAYERS NAME SELECTOR
    this.layerChooser.on("contextmenu", function(emitter, event){
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
    });
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    //luboJ missing condition when jailhouse is not getting smaller because nodes inside it
    //ERROR, MISSING CONDITION TO RESTRICT RESIZE ACCORDING TO NODES INSIDE LAYERS
    this.on("resize", function(emitter){
      emitter.layers.each(function(layerIndex, layerObj){
        layerObj.setWidth(emitter.getWidth());
        layerObj.setHeight(emitter.getHeight());

        //not ideal, but it's someho helpfulwhen this is here, then can structure resized from all corners and it's running ok
        layerObj.setX(emitter.getX());
        layerObj.setY(emitter.getY());
      });
      emitter.rect0.setWidth(emitter.getWidth());
      emitter.rect0.setHeight(emitter.getHeight());
      emitter.rect0.setX(emitter.getX());
      emitter.rect0.setY(emitter.getY());
    });

    this.on("show", function(emitter){
      emitter.moveActiveLayer();
    });

  },

  //this function is also called in gui/View.js after placing multilayer node to canvas to right placed layers
  moveActiveLayer: function(){
    var x = this.getX();
    var y = this.getY();
    var width = this.getWidth();
    var height = this.getHeight();
    this.layers.each(function(layerIndex, layerObj){
      layerObj.setX(x);
      layerObj.setY(y);
      layerObj.setWidth(width);
      layerObj.setHeight(height);
      layerObj.setSelectable(false);
      layerObj.setDraggable(false);
    });
    this.rect0.setX(x);
    this.rect0.setY(y);
    this.rect0.setWidth(width);
    this.rect0.setHeight(height);
    this.rect0.setSelectable(false);
    this.rect0.setDraggable(false);
    this.rect0.toBack();
  },

  onDragStart: function(x,y,shiftKey, ctrlKey){
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
    this.activeLayer++;
    if (this.activeLayer >= this.layers.getSize()) this.activeLayer = 0;
    var layerObjects = this.layers.get(this.activeLayer).getChildren();
    var activeLayer = this.layers.get(this.activeLayer);
    activeLayer.toFront();
    activeLayer.getChildren().each(function(childIndex, childObj){
      childObj.toFront();
    });

    this.bringsAllTunnelsToFront();

    this.layerChooser.setText(this.layers.get(this.activeLayer).getId());
  },

  onDragEnd: function(x,y,shiftKey, ctrlKey){
    this.moveActiveLayer();
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
   * @method getPersistentAttributes()
   * @description Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes: function()
  {
      var memento = this._super();

      this.myLabel = "myLabel changed";
      this.graphlangLayerOwner = "...here should be id of owner parent.....";

      memento.myLabel = this.myLabel;
      memento.graphlangLayerOwner = this.graphlangLayerOwner;

      return memento;
  },

  /**
   * @method setPersistentAttributes(memento)
   * @description Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   */
  setPersistentAttributes: function(memento)
  {
      this._super(memento);
      if(typeof memento.myLabel !=="undefined"){
          this.setText(memento.myLabel);
      }
      if(typeof memento.graphlangLayerOwner !=="undefined"){
          //          ...do something with value...
      }

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

    newLayer.setWidth(this.getWidth());
    newLayer.setHeight(this.getHeight());
    newLayer.setColor(new GraphLang.Utils.Color("#eb34c6"));  //layer border color

    newLayer.setBackgroundColor(new GraphLang.Utils.Color("#eb34c6"));
    newLayer.setBackgroundColor(new GraphLang.Utils.Color(
      Math.round(Math.random()*255),
      Math.round(Math.random()*255),
      Math.round(Math.random()*255)
    ));

    var layerId = "";
    if (this.layers != null){
      layerId = new String(this.layers.getSize());  //size is alwas count so it's +1 in compare with object index inside array
    }else{
      layerId = "0";                      //first element to be create has numebr 0
    }
    newLayer.setId("jailhouseLayer" + layerId);                   //generate uniqe layer id based on its order, FOR NOW IT'S NOT CORRECT WAY, ERROR NEEDS TO BE REPAIRED, ie when user add 3 layers and remove 2, then add, there could be problem

    /*
     *  GraphLang Jailhouse has it's translation function inside object!
     */

    this.layers.push(newLayer);
    appCanvas.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX(), this.getAbsoluteY()));
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
    this.layers.get(this.activeLayer).setId(this.layerChooser.getText());
  }

});
