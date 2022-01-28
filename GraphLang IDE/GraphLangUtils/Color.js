/**
 *  @class GraphLang.Utils.Color
 *  @description This is wrapper around draw2d.util.Color class, to provide my method and my functionality for GraphLang.
 */
GraphLang.Utils.Color = draw2d.util.Color.extend({
  NAME: "GraphLang.Utils.Color",

  /**
   *  @method init
   *  @param attr
   *  @param setter
   *  @param getter
   *  @description Call parent init function.
   */
  init: function(attr, setter, getter){
    this._super(attr, setter, getter);
  },

  /**
   *  @method getByNameFontColor
   *  @param {String} colorName Datatype or some word like int, float, bool, String, undefined, unknown, ...
   *  @description Returns color for font (this is used at least in ArrayNode) to have consistent color through
   *  whole core of GraphLang somehow. At least to know how colors should be to be right.
   *  @returns {String} Hexadecimal color representation ie. #FFFFFF for bool
   */
  getByName: function(colorName){
  
    /*
     *  Use just lower case letters, if colorName object is undefined then replace it with ""
     */
    if(colorName) colorName = colorName.toLowerCase();
    else colorName = "";
  
    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else if (colorName == "blue") return "#0000FF";

    else if (colorName == "char") return "#4286f4";
    else if (colorName == "long") return "#4286f4";
    else if (colorName == "word") return "#4286f4";
    else if (colorName == "uint") return "#4286f4";
    else if (colorName == "int") return "#4286f4";
    else if (colorName == "int8") return "#4286f4";
    else if (colorName == "uint8" || colorName == "uint") return "#4286f4";
    else if (colorName == "int16") return "#4286f4";
    else if (colorName == "uint16") return "#4286f4";
    else if (colorName == "int32") return "#4286f4";
    else if (colorName == "uint32") return "#4286f4";
    else if (colorName == "single") return "#AA2200";
    else if (colorName == "float") return "#FAB700";
    else if (colorName == "double") return "#AA2200";
    else if (colorName == "bool" || colorName == "boolean") return "#009900";
    else if (colorName == "string" || colorName == "String") return "#ff3385";
    else if (colorName.toLowerCase().search("cluster") > -1) return "#7D1A4C";
    else if (colorName == "error") return "#cccc00";
    else if (colorName == "broken") return "#666666";
    else if (colorName == "qtuiobject") return "#7C2FE3";
    else if (colorName == "qtuiapplication") return "#70db70";    
    else if (colorName == "undefined" || colorName == "unknown") return "#666666";

    else return "#000000";
  },

  /**
   *  @method getByNameFontColor
   *  @param {String} colorName Datatype or some word like int, float, bool, String, undefined, unknown, ...
   *  @description Returns color for font (this is used at least in ArrayNode) to have consistent color through
   *  whole core of GraphLang somehow. At least to know how colors should be to be right.
   *  @returns {String} Hexadecimal color representation ie. #FFFFFF for bool
   */
  getByNameFontColor: function(colorName){

    /*
     *  Use just lower case letters
     */
    if(colorName) colorName = colorName.toLowerCase();
    else colorName = "";

    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else if (colorName == "blue") return "#0000FF";

    else if (colorName == "char") return "#000000";
    else if (colorName == "long") return "#000000";
    else if (colorName == "word") return "#000000";
    else if (colorName == "uint") return "#000000";
    else if (colorName == "int") return "#FFFFFF";
    else if (colorName == "int8") return "#000000";
    else if (colorName == "uint8" || colorName == "uint") return "#000000";
    else if (colorName == "int16") return "#000000";
    else if (colorName == "uint16") return "#000000";
    else if (colorName == "int32") return "#000000";
    else if (colorName == "uint32") return "#000000";
    else if (colorName == "single") return "#000000";
    else if (colorName == "float") return "#000000";
    else if (colorName == "double") return "#000000";
    else if (colorName == "bool" || colorName == "boolean") return "#FFFFFF";
    else if (colorName == "string" || colorName == "String") return "#000000";
    else if (colorName.toLowerCase().search("cluster") > -1) return "#AAAAAA";
    else if (colorName == "error") return "#000000";
    else if (colorName == "broken") return "#666666";
    else if (colorName == "qtuiobject") return "#7C2FE3";
    else if (colorName == "qtuiapplication") return "#000000";    
    else if (colorName == "undefined" || colorName == "unknown") return "#666666";

    else return "#000000";
  },

  /**
   *  @method getByNameFontColor
   *  @param {String} colorName Datatype or some word like int, float, bool, String, undefined, unknown, ...
   *  @description Returns color for font (this is used at least in ArrayNode) to have consistent color through
   *  whole core of GraphLang somehow. At least to know how colors should be to be right.
   *  @returns {String} Hexadecimal color representation ie. #009900 for bool
   */
  getByNameBackgroundColor: function(colorName){

    /*
     *  Use just lower case letters
     */
    if(colorName) colorName = colorName.toLowerCase();
    else colorName = "";

    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else if (colorName == "blue") return "#0000FF";

    else if (colorName == "char") return "#FFFFFF";
    else if (colorName == "long") return "#FFFFFF";
    else if (colorName == "word") return "#FFFFFF";
    else if (colorName == "int") return "#0000FF";
    else if (colorName == "int8") return "#FFFFFF";
    else if (colorName == "uint8" || colorName == "uint") return "#FFFFFF";
    else if (colorName == "int16") return "#FFFFFF";
    else if (colorName == "uint16") return "#FFFFFF";
    else if (colorName == "int32") return "#FFFFFF";
    else if (colorName == "uint32") return "#FFFFFF";
    else if (colorName == "single") return "#FFFFFF";
    else if (colorName == "float") return "#FFC300";
    else if (colorName == "double") return "#FFFFFF";
    else if (colorName == "bool" || colorName == "boolean") return "#009900";
    else if (colorName == "string" || colorName == "String") return "#ff3385";
    else if (colorName.toLowerCase().search("cluster") > -1) return "#7D1A4C";
    else if (colorName == "error") return "#cccc00";
    else if (colorName == "broken") return "#666666";
    else if (colorName == "qtuiobject") return "#FFFFFF";
    else if (colorName == "qtuiapplication") return "#FFFFFF";    
    else if (colorName == "undefined" || colorName == "unknown") return "#666666";

    else return "#000000";
  },

  /**
   *  @method getColorObjByName
   *  @param {String} colorName Datatype or some word like int, float, bool, String, undefined, unknown, ...
   *  @description Returns whole GraphLang color object if somewhere needed.
   *  @returns {GraphLang.Utils.Color} GraphLang color object
   */
  getColorObjByName: function(colorName){
    return new GraphLang.Utils.Color(GraphLang.Utils.getByName(colorName));
  }
});
