/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.ClusterDatatypeNode = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.ClusterDatatypeNode",
  // //This doesn't run, don't know why, so initialization for userData is done in init()
  // userData: {
  //   executionOdrder: -1,
  //   wasTranslatedToCppCode: false
  // },
  init:function(attr, setter, getter){
    // this._super(attr, setter, getter);
    this._super( $.extend({},attr), setter, getter);

    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    // port.setConnectionDirection(3);
    // port.setBackgroundColor("#abcdef");
    // port.setName("iterationTerminal");
    // port.setMaxFanOut(20);

    //COMMON LOOP BOUNDARY SETTINGS
    this.setWidth(220);
    this.setHeight(220);
    this.setStroke(2);
    this.setDashArray("-");
    this.setColor("#7D1A4C"); //stroke color

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#7D1A4C");
    port.setName("layerSelector");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "cluster";

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.setPersistPorts(false);
  },

  //added by LuboJ, here is showed how to add attributes which
  //then are serialized into json and could be readed to load schematci



  /********************************************************************************************************************
   *  Functions below are implemented by me (LuboJ)
   ********************************************************************************************************************/

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    cCode += "struct{\n"
    this.getAboardFigures().each(function(figureIndex, figureObj){
      cCode += figureObj.translateToCppCode() + "\n";
    });
    cCode += "} cluster_" + this.getId()+ "\n";
    return cCode;
  },

  translateToCppCode: function(){
    cCode = "";
    cCode += "/* Cluster assignment */\n";
    return cCode;
  }
});
