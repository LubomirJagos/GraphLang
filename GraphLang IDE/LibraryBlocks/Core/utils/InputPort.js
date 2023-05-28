/**
 *  @class draw2d.InputPort
 *  @description Overriding some parameters of original draw2d input port. Size, color, ...
 */
draw2d.InputPort = draw2d.InputPort.extend({
  NAME: "draw2d.InputPort",
  
  init:function(attr, setter, getter){
    this._super( $.extend({radius: 4},attr), setter, getter);
    //this.setColor("#00FF00");
  },
});

/**
 *  @class GraphLang.InputPort
 *  @description Custom GraphLang input port.
 */
GraphLang.InputPort = draw2d.InputPort.extend({
  NAME: "GraphLang.InputPort",
  constructor(obj){
    obj && Object.assign(this, obj);
  },

  getPersistentAttributes: function(){
    var memento = this._super();

    memento.locatorX = this.getLocator().x;
    memento.locatorY = this.getLocator().y;

    return memento;
  }
});