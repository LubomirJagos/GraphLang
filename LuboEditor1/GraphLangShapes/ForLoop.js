GraphLang.Shapes.Basic.Loop.ForLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.ForLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({color: "#0000FF"},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 10));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#0000FF");
    port.setName("out1");
    port.setMaxFanOut(20);

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;    /*??what's this??*/
  },
  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;
    return "while(TBD){";
  },
  translateToCppCodePost: function(){
    return "} //hello world";
  }
/*
  NEEDS TO BE DONE n TERMINAL AND maybe some other stuff
*/

});
