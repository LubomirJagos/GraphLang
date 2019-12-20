GraphLang.Shapes.Basic.Loop.WhileLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.WhileLoop",

  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(99, 90));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#FF0000");
    port.setName("stopTerminal");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "bool";

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;  /*??what's this??*/
  },

  translateToCppCode: function(){
    var cCode = "";
    this.getUserData().wasTranslatedToCppCode = true;
    var stopTerminal = this.getInputPort("stopTerminal");
    var wireStop = stopTerminal.getConnections().first();
    if (wireStop != undefined){
      cCode += wireStop.getSource().userData.datatype + " wire_" + wireStop.getId() + ";\n";
    }

    cCode += this.getTunnelsDeclarationCppCode();

    cCode += "do{\n";

    cCode += this.getWiresInsideLoopDeclarationCppCode();
    cCode += this.getLeftTunnelsWiresAssignementCppCode()

    /*  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     *          RECURSION CALL
     *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */
    cCode += GraphLang.Utils.translateToCppCode2(this.getCanvas(), this, 1);

    return cCode;
  },

  translateToCppCodePost: function(){
    var cCode = "";
    var endCondition = "";
    var stopTerminal = this.getInputPort("stopTerminal");
    if (stopTerminal.getConnections().getSize() > 0){
      endCondition = "wire_" + stopTerminal.getConnections().get(0).getId();
    }

    cCode += this.getRightTunnelsAssignementOutputCppCode();
    cCode += "}while(!" + endCondition + ");";

    return cCode;
  }
/*
  NEEDS TO BE DONE STOP TERMINAL it will go to end condition
*/
});
