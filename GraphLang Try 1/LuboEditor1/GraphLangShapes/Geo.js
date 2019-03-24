GraphLang.geo = new Object();
GraphLang.geo.Point = draw2d.geo.Point.extend({
  NAME: "GraphLang.geo.Point",
  constructor(obj){
    obj && Object.assign(this, obj);
  }
});
