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
