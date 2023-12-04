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

    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(2, 10));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#0000FF");
    port.setName("iterationTerminalOutput");
    port.setMaxFanOut(20);

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.persistPorts=false;    /*??what's this??*/
  },

  /*
   *    This event is called when figure is dropped on layer.
   */
  onCatch(droppedFigure, x, y, shiftKey, ctrlKey){
    //run super() or continue just in case there is not dropped tunnel inside layer, tunnel is possible to move
    if (droppedFigure.NAME.toLowerCase().search('tunnel') == -1){
      this._super(droppedFigure, x, y, shiftKey, ctrlKey);
      if (droppedFigure.getComposite() && droppedFigure.getComposite().getId() == this.getId()){
        //alert('no layer change')
      }else{
        //alert('new layer assignment')
        droppedFigure.getPorts().each(function(portIndex, portObj){
          portObj.getConnections().each(function(connectionIndex, connectionObj){
            GraphLang.Utils.detectTunnels2(droppedFigure.getCanvas(), connectionObj);
          });
        });
      }
    }
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
  },

  symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABSCAIAAABBpbS2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGSSURBVHhe7dw/SwJxHMdxUfyHwyG4hSL0QBxtaxAdBIXWpp5A2z2Lc2lxcQ7aFHKwVdpuiWaDzClL6iP+Og4hiuuG++X7zXdSvOP74tBz0NT64IMAAggUBBBAoCD4BcFg8G71+P6b2eSbfiBYrVbt9kO1uqzVNjZOKvURnWAymbRa3aOvms3T0Wj0bFXz+Ut0As/ztHa5fJHP32Yyj7ncneNc6hHXdc3hbSg6wXQ61bal0pVeH55i8VqPD4dDc4bEF52g1zurVM7DywfjOG6jcWLOkPiiE9Trx4XCTXjzYLLZe10Ivu+bkyS7iASLxUJLatXw5sGk00s9O5vNzEmSHVcB7wV/IeATYduh3xfsGo/HB313GLT7jtDpPJmjWlU8BKrf33S7r+aoVgUBBBAoCCCAQEEAAQQKAgggUBBAAIGCAAIIFAQQQKAggAACBQEEECgIIIBAQQABBAoCCCBQEEAAgYIAAggUBBBAoCCAAAIVJ8Hez8EtmngI9v4OwLqJgeDfBwEEECgIIIBAQQDBev0J+WznB2v5Ek4AAAAASUVORK5CYII=",

  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;
    // return "for (TBD){";

    var cCode = "";
    var iterationCount = "/* forLoop iterationCount value */"
    var iterationTerminal = this.getInputPort("iterationTerminal");
    if (iterationTerminal.getConnections().getSize() > 0){
      iterationCount = "wire_" + iterationTerminal.getConnections().get(0).getId(); //getting wire name connected to iteration terminal, how many times has this for loop go
    }

    var forLoopIteratorVariable = 'forLoopIterator_' + this.getId();

    cCode += this.getTunnelsDeclarationCppCode();
    cCode += "for (int " + forLoopIteratorVariable + " = 0; " + forLoopIteratorVariable + " < " + iterationCount + "; " + forLoopIteratorVariable+ "++){\n";
    cCode += "\t" + this.getWiresInsideLoopDeclarationCppCode().replaceAll("\n", "\n\t") + "\n";
    cCode += "\t" + this.getLeftTunnelsWiresAssignementCppCode().replaceAll("\n", "\n\t") + "\n";

    /*  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     *          RECURSION CALL
     *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */
    cCode += "\t/*code inside FOR LOOP */\n";
    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToCppCodeDeclaration && figObj.NAME.toLowerCase().search("feedbacknode") == -1) cCode += "\t" + figObj.translateToCppCodeDeclaration().replaceAll("\n", "\n\t") + "\n";

      if (figObj.translateToCppCode){
        cCode += "\t" + figObj.translateToCppCode().replaceAll("\n", "\n\t") + "\n";
      }else if (figObj.translateToCppCode2){
        cCode += "\t" + figObj.translateToCppCode2().replaceAll("\n", "\n\t") + "\n";
      }

      /* in case of post C/C++ code run it */
      if (figObj.translateToCppCodePost) cCode += "\t" + figObj.translateToCppCodePost().replaceAll("\n", "\n\t") + "\n"; //if there is defined to put somethin after let's do it

    });

    return cCode;

  },

  translateToCppCodePost: function(){
    var cCode = "";
    cCode += this.getRightTunnelsAssignementOutputCppCode();    //first assign values to output wires
    cCode += "} /* END FOR LOOP */" + "\n";                     //then finish loop

    return cCode;
  }

});
