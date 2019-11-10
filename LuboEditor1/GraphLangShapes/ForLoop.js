GraphLang.Shapes.Basic.Loop.ForLoop = GraphLang.Shapes.Basic.Loop.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.ForLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({color: "#0000FF"},attr), setter, getter);
    var port;
    // Port
    //port is little pushed to the left, connected wire is thne not crossing loop border and tunnel is not generated
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
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
    var iterationCount = "/* forLoop iterationCount value */"
    var iterationTerminal = this.getInputPort("iterationTerminal");
    if (iterationTerminal.getConnections().getSize() > 0){
      iterationCount = "wire_" + iterationTerminal.getConnections().get(0).getId(); //getting wire name connected to iteration terminal, how many times has this for loop go
    }

    cCode += this.getTunnelsDeclarationCppCode();
    cCode += "for (var hardwiredForLoopIterator = 0; hardwiredForLoopIterator < " + iterationCount + "; hardwiredForLoopIterator++){";
    cCode += this.getWiresInsideLoopDeclarationCppCode();
    cCode += this.getLeftTunnelsWiresAssignementCppCode()

    return cCode;

  },
  translateToCppCodePost: function(){
    cCode = "";
    cCode += this.getRightTunnelsAssignementOutputCppCode();
    cCode += "}";

    return cCode;
  }

/*
  NEEDS TO BE DONE n TERMINAL AND maybe some other stuff
*/

});
