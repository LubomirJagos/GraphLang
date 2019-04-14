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
    var x = 10;
    var y = 10;

    // var rect1 = new draw2d.shape.composite.Raft();
    var rect1 = new draw2d.shape.composite.Jailhouse();
    // rect1.setWidth(this.getWidth() - 70);
    // rect1.setHeight(this.getHeight() - 70);

    rect1.setWidth(this.getWidth());
    rect1.setHeight(this.getHeight());
    rect1.setColor(new GraphLang.Utils.Color("#FF0000"));
    rect1.setBackgroundColor(new GraphLang.Utils.Color("#0000FF"));
    // this.add(rect1, new draw2d.layout.locator.XYRelPortLocator(0,0));
    appCanvas.add(rect1, new draw2d.layout.locator.XYAbsPortLocator(x,y));

    var rect2 = new draw2d.shape.composite.Jailhouse();
    // rect2.setWidth(this.getWidth() - 100);
    // rect2.setHeight(this.getHeight() - 100);
    rect2.setWidth(this.getWidth());
    rect2.setHeight(this.getHeight());
    rect2.setColor(new GraphLang.Utils.Color("#FF0000"));
    rect2.setBackgroundColor(new GraphLang.Utils.Color("#FFFF00"));
    // this.add(rect2, new draw2d.layout.locator.XYRelPortLocator(0,0));
    appCanvas.add(rect2, new draw2d.layout.locator.XYAbsPortLocator(x,y));

    var rect3 = new draw2d.shape.composite.Jailhouse();
    // rect3.setWidth(this.getWidth() - 130);
    // rect3.setHeight(this.getHeight() - 130);
    rect3.setWidth(this.getWidth());
    rect3.setHeight(this.getHeight());
    rect3.setColor(new GraphLang.Utils.Color("#00FF00"));
    rect3.setBackgroundColor(new GraphLang.Utils.Color("#88BB66"));
    // this.add(rect3, new draw2d.layout.locator.XYRelPortLocator(0,0));
    appCanvas.add(rect3, new draw2d.layout.locator.XYAbsPortLocator(x,y));

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
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

  },

  moveActiveLayer: function(){
    var x = this.getX();
    var y = this.getY();
    this.layers.get(this.activeLayer).setX(x);
    this.layers.get(this.activeLayer).setY(y);
    this.layers.get(this.activeLayer).setSelectable(false);
    this.layers.get(this.activeLayer).setDraggable(false);
  },

  switchActiveLayer: function(){
    // this.toBack();

    // var abFig = this.layers.get(this.activeLayer).getAboardFigures(true);
    // alert(abFig.getSize());

    this.activeLayer++;
    if (this.activeLayer >= this.layers.getSize()) this.activeLayer = 0;

    // var layerObjects = this.layers.get(this.activeLayer).getAboardFigures();
    var layerObjects = this.layers.get(this.activeLayer).getChildren();

    this.layers.get(this.activeLayer).toFront();

    // layerObjects.each(function(figureIndex, figureObj){
    //   figureObj.toFront();
    // });
    // this.layers.get(this.activeLayer).repaint();

    this.bringsAllTunnelsToFront();
  },

  onDragEnd: function(x,y,shiftKey, ctrlKey){
    // draggedFigure.
    this.activeLayer = 0;
    this.moveActiveLayer();
    this.activeLayer = 1;
    this.moveActiveLayer();
    this.activeLayer = 2;
    this.moveActiveLayer();
  },

  bringsAllTunnelsToFront: function(){
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
        childObj.toFront();
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
});
