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
  constructor(obj){
    obj && Object.assign(this, obj);
  },
  // //This doesn't run, don't know why, so initialization for userData is done in init()
  // userData: {
  //   executionOdrder: -1,
  //   wasTranslatedToCppCode: false
  // },
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);

    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    // port.setConnectionDirection(3);
    // port.setBackgroundColor("#abcdef");
    // port.setName("iterationTerminal");
    // port.setMaxFanOut(20);

    //COMMON LOOP BOUNDARY SETTINGS
    this.setWidth(420);
    this.setHeight(220);
    this.setStroke(2);

    //TESTING LAYERS
    var x = this.getX();
    var y = this.getY();

    // var rect1 = new draw2d.shape.composite.Raft();
    var rect1 = new draw2d.shape.composite.Jailhouse();
    // rect1.setWidth(this.getWidth() - 70);
    // rect1.setHeight(this.getHeight() - 70);

    rect1.setWidth(this.getWidth());
    rect1.setHeight(this.getHeight());
    rect1.setColor(new GraphLang.Utils.Color("#FF0000"));
    rect1.setBackgroundColor(new GraphLang.Utils.Color("#0000FF"));
    // this.add(rect1, new draw2d.layout.locator.XYRelPortLocator(0,0));
    rect1.translateToCppCode = function(){
      return "{Multilayered Node}";
    };
    rect1.setId("jailhouseLayer1");
    appCanvas.add(rect1, new draw2d.layout.locator.XYAbsPortLocator(x,y));

    var rect2 = new draw2d.shape.composite.Jailhouse();
    // rect2.setWidth(this.getWidth() - 100);
    // rect2.setHeight(this.getHeight() - 100);
    rect2.setWidth(this.getWidth());
    rect2.setHeight(this.getHeight());
    rect2.setColor(new GraphLang.Utils.Color("#FF0000"));
    rect2.setBackgroundColor(new GraphLang.Utils.Color("#FFFF00"));
    // this.add(rect2, new draw2d.layout.locator.XYRelPortLocator(0,0));
    rect2.setId("jailhouseLayer2");
    appCanvas.add(rect2, new draw2d.layout.locator.XYAbsPortLocator(x,y));

    var rect3 = new draw2d.shape.composite.Jailhouse();
    // rect3.setWidth(this.getWidth() - 130);
    // rect3.setHeight(this.getHeight() - 130);
    rect3.setWidth(this.getWidth());
    rect3.setHeight(this.getHeight());
    rect3.setColor(new GraphLang.Utils.Color("#00FF00"));
    rect3.setBackgroundColor(new GraphLang.Utils.Color("#88BB66"));
    // this.add(rect3, new draw2d.layout.locator.XYRelPortLocator(0,0));
    rect3.setId("jailhouseLayer3");
    appCanvas.add(rect3, new draw2d.layout.locator.XYAbsPortLocator(x,y));

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

    // this.rect1 = rect1;
    // this.rect2 = rect2;
    this.layers = new draw2d.util.ArrayList();
    this.layers.push(rect1);
    this.layers.push(rect2);
    this.layers.push(rect3);
    this.activeLayer = 0;

    //TOP LAYER SELECTOR
    this.layerChooser = new draw2d.shape.basic.Label({text: "..choose layer.."});
    this.layerChooser.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });
    this.layerChooser.on("contextmenu", function(emitter, event){
        $.contextMenu({
            selector: 'body',
            events:
            {
                hide:function(){ $.contextMenu( 'destroy' ); }
            },
            callback: $.proxy(function(key, options)
            {
               switch(key){
               case "rename":
                   setTimeout(function(){
                       emitter.onDoubleClick();
                   },10);
                   break;
               case "new":
                   setTimeout(function(){
                       _table.addEntity("_new_").onDoubleClick();
                   },10);
                   break;
               case "delete":
                   // with undo/redo support
                   var cmd = new draw2d.command.CommandDelete(emitter);
                   emitter.getCanvas().getCommandStack().execute(cmd);
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

    //LAYERS Init, into each layer and protective rectangle is added reference to this parent translation function
    var translateToCppCode2FuncRef = this.translateToCppCode;
    this.layers.each(function(layerIndex, layerObj){
      layerObj.translateToCppCode = translateToCppCode2FuncRef;
    });
    this.rect0.translateToCppCode = translateToCppCode2FuncRef;

    //luboJ missing condition when jailhouse is not getting smaller because nodes inside it
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
  },

  onDragEnd: function(x,y,shiftKey, ctrlKey){
    this.moveActiveLayer();
  },

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

  translateToCppCode: function(){
    return "{Multilayered Node}";
  }
});
