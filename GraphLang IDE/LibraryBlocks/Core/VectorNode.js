/**
 *  @class GraphLang.Shapes.Basic.Array
 *  @descritpition Generic array implementation. It's TableLayout from draw2d.
 */
GraphLang.Shapes.Basic.VectorNode = GraphLang.Shapes.Basic.ArrayNode.extend({
  NAME: "GraphLang.Shapes.Basic.VectorNode",
  init:function(attr, setter, getter) {
      this._super($.extend({padding: 10}, attr), setter, getter);
  },

  /*************************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ code functions
   *************************************************************************************************************************************************************/
  translateToCppCodeImport: function(){
      return "#include<vector>\n";
  },

});
