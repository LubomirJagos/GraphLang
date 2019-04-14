/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.Loop.Multilayered = draw2d.shape.composite.Raft.extend({
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
    // var rect1 = new draw2d.shape.basic.Rectangle();
    var rect1 = new draw2d.shape.composite.Raft();
    rect1.setWidth(this.getWidth() - 70);
    rect1.setHeight(this.getHeight() - 70);
    this.add(rect1, new draw2d.layout.locator.XYRelPortLocator(5,5));

    // var rect2 = new draw2d.shape.basic.Rectangle();
    var rect2 = new draw2d.shape.composite.Raft();
    rect2.setWidth(this.getWidth() - 100);
    rect2.setHeight(this.getHeight() - 100);
    rect2.setColor(new GraphLang.Utils.Color("#FF0000"));
    rect2.setBackgroundColor(new GraphLang.Utils.Color("#FFFF00"));
    this.add(rect2, new draw2d.layout.locator.XYRelPortLocator(8,8));

    this.rect1 = rect1;
    this.rect2 = rect2;
    this.activeLayer = 0;

    //TOP LAYER SELECTOR
    this.layerChooser = new draw2d.shape.basic.Label({text: "..choose layer.."});
    this.layerChooser.on("click", function(emitter, event){
      alert("..choose layer..");
      emitter.getParent().switchActiveLayer();
    });
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

  },

  switchActiveLayer: function(){
    if (this.activeLayer == 0){
      this.rect1.toFront();
      this.activeLayer = 1;
    }else{
      this.rect2.toFront();
      this.activeLayer = 0;
    }
  },  //this comma doesn't matter it's ok and for future at least I don't forget, this has no effect on functionality of this class
});
