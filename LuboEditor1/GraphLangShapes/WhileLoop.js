GraphLang.Shapes.Basic.Loop.WhileLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.WhileLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(100, 90));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#FF0000");
    port.setName("stopTerminal");
    port.setMaxFanOut(20);

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;  /*??what's this??*/
  },
  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;

    var cCode = "";
    var endCondition = "";
    var stopTerminal = this.getInputPort("stopTerminal");
    if (stopTerminal.getConnections().getSize() > 0){
      endCondition = stopTerminal.getConnections().get(0).getId();
    }
    cCode += "while(!" + endCondition + "){";
    return cCode;
  },
  translateToCppCodePost: function(){
    return "} //hello world";
  }
/*
  NEEDS TO BE DONE STOP TERMINAL it will go to end condition
*/
});
