GraphLang.Shapes.Basic.Loop.ForLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.ForLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({color: "#0000FF"},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#0000FF");
    port.setName("iterationTerminal");
    port.setMaxFanOut(20);

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;    /*??what's this??*/
  },
  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;
    // return "for (TBD){";

    var cCode = "";
    var endCondition = "";
    var iterationTerminal = this.getInputPort("iterationTerminal");
    if (iterationTerminal.getConnections().getSize() > 0){
      iterationCount = "wire_" + iterationTerminal.getConnections().get(0).getId(); //getting wire name connected to iteration terminal, how many times has this for loop go
    }
    cCode += "for (var hardwiredForLoopIterator = 0; hardwiredForLoopIterator < " + iterationCount + "; hardwiredForLoopIterator++){";
    return cCode;

  },

  translateToCppCodePost: function(){
    return "}";
  }
/*
  NEEDS TO BE DONE n TERMINAL AND maybe some other stuff
*/

});
