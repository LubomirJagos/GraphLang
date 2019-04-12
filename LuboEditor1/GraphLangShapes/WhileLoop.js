GraphLang.Shapes.Basic.Loop.WhileLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.WhileLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 90));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#FF0000");
    port.setName("out1");
    port.setMaxFanOut(20);

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;  /*??what's this??*/
  },
  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;
    return "while(TBD){";
  },
  translateToCppCodePost: function(){
    return "} //hello world";
  }
/*
  NEEDS TO BE DONE STOP TERMINAL it will go to end condition
*/
});
