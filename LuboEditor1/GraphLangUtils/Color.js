/**
 *  @class GraphLang.Utils.Color
 *  @description This is wrapper around draw2d.util.Color class, to provide my method and my functionality for GraphLang.
 */
GraphLang.Utils.Color = draw2d.util.Color.extend({
  NAME: "GraphLang.Utils.Color",
  init: function(attr, setter, getter){
    this._super(attr, setter, getter);
  },
  getByName: function(colorName){
    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else if (colorName == "blue") return "#0000FF";

    else if (colorName == "char") return "#4286f4";
    else if (colorName == "long") return "#4286f4";
    else if (colorName == "word") return "#4286f4";
    else if (colorName == "int") return "#4286f4";
    else if (colorName == "int8") return "#4286f4";
    else if (colorName == "uint8" || colorName == "uint") return "#4286f4";
    else if (colorName == "int16") return "#4286f4";
    else if (colorName == "uint16") return "#4286f4";
    else if (colorName == "int32") return "#4286f4";
    else if (colorName == "uint32") return "#4286f4";
    else if (colorName == "single") return "#AA2200";
    else if (colorName == "float") return "#AA2200";
    else if (colorName == "double") return "#AA2200";
    else if (colorName == "bool" || colorName == "boolean") return "#009900";
    else if (colorName == "string" || colorName == "String") return "#ff3385";
    else if (colorName == "cluster") return "#7D1A4C";
    else if (colorName == "error") return "#cccc00";
    else if (colorName == "broken") return "#666666";
    else if (colorName == "undefined" || colorName == "unknown") return "#666666";

    else return "#000000";
  },
  getColorObjByName: function(colorName){
    return new GraphLang.Utils.Color(GraphLang.Utils.getByName(colorName));
  }
});
