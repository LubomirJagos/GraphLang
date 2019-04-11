GraphLang.Utils.Color = draw2d.util.Color.extend({
  NAME: "GraphLang.Color",
  init: function(attr, setter, getter){
    this._super(attr, setter, getter);
  },
  getByName: function(colorName){
    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else return "#000000";
  }
});
