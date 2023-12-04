/**
 *  @class draw2d.OutputPort
 *  @description Overriding some parameters of original draw2d input port. Size, color, ...
 */
draw2d.OutputPort = draw2d.OutputPort.extend({
  NAME: "draw2d.OutputPort",
  
  init:function(attr, setter, getter){
    this._super( $.extend({radius: 4},attr), setter, getter);
    //this.setColor("#00FF00");

    /*
     *  Basic userData definitions
     */
    if (!this.userData) this.userData = {}
    this.userData.allowMultipleConnections = true;
    this.userData.connectionMandatory = false;
  },
});

/**
 *  @class GraphLang.OutputPort
 *  @description Custom GraphLang output port as extension of draw2d.OutputPort
 */
GraphLang.OutputPort = draw2d.OutputPort.extend({
  NAME: "GraphLang.OutputPort",
  constructor(obj){
    obj && Object.assign(this, obj);
  }
});
