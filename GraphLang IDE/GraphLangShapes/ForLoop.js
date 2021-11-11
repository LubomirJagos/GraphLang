GraphLang.Shapes.Basic.Loop2.ForLoop = GraphLang.Shapes.Basic.Loop2.extend({
  NAME: "GraphLang.Shapes.Basic.Loop2.ForLoop",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({color: "#0000FF"},attr), setter, getter);
    var port;

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
    cCode += "for (var hardwiredForLoopIterator = 0; hardwiredForLoopIterator < " + iterationCount + "; hardwiredForLoopIterator++){\n";
    cCode += this.getWiresInsideLoopDeclarationCppCode();
    cCode += this.getLeftTunnelsWiresAssignementCppCode()

    /*  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     *          RECURSION CALL
     *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */
    cCode += "/*code inside FOR LOOP */\n";
    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToCppCode){
        cCode += figObj.translateToCppCode() + "\n"
      }else if (figObj.translateToCppCode2){
        cCode += figObj.translateToCppCode2() + "\n"
      }

     /* in case of post C/C++ code run it */
     if (figObj.translateToCppCodePost) cCode += figObj.translateToCppCodePost() + "\n"; //if there is defined to put somethin after let's do it

    });
    cCode += "/*END code inside FOR LOOP */\n";

    return cCode;

  },
  translateToCppCodePost: function(){
    var cCode = "";
    cCode += "} /* END FOR LOOP */" + "\n";
    cCode += this.getRightTunnelsAssignementOutputCppCode();

    return cCode;
  },

    /**
   * @method setPersistentAttributes
   * @descritpiton Read all attributes from the serialized properties and transfer them into the shape.
   * This is used when file is lOADED.
   *
   * @param {Object} memento
   */
  setPersistentAttributes : function(memento)
  {
      mementoPorts = memento.ports;   //taking ports out, because there is creation of them in parent and I want to create them in my way
      mementoLabels = memento.labels; //taking labels away

      memento.ports = [];
      memento.labels = [];
      this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder

      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();

      // and add all children of the JSON document.
      $.each(mementoLabels, $.proxy(function(i,json){

          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;


          /*
           *  HERE IS REALLY IMPORTANT TO SET SAME ID TO TUNNEL AS IT WAS SAVED, it then creates ports for that tunnel with same id as from file and wires can be connected to that
           */
          var figure =  eval("new "+json.type+"({id: '" + json.id + "'})"); // create the figure stored in the JSON, SET SAME ID AS SAVED IN FILE, THIS IS IMPORTANT!!! (for tunnels, look at its init() function)
          figure.attr(json);

          if (json.locatorX != undefined && json.locatorY != undefined){
            var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")");     // instantiate the locator
          }else{
            var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.x + "," + json.y + ")"); //DEFAULT LOCATOR
          }

          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));
      
	//rerecreate iteration terminal
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#0000FF");
    port.setName("iterationTerminal");
    port.setMaxFanOut(20);
  },

  getPort: function(name){
    if (name.indexOf('iterationTerminal') > -1){
      return this.getInputPort(name);
    }else{
      port = this._super(name); //THIS IS NOT RUNNING, TESTED
      return port;
    }
  }

});
