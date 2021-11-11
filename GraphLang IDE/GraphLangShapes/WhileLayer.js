GraphLang.Shapes.Basic.Loop2.WhileLayer = GraphLang.Shapes.Basic.Loop2.extend({
  NAME: "GraphLang.Shapes.Basic.Loop2.WhileLayer",

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
    cCode += "/*code inside WHILE LOOP */\n";
    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToCppCode){
        cCode += figObj.translateToCppCode() + "\n"
      }else if (figObj.translateToCppCode2){
        cCode += figObj.translateToCppCode2() + "\n"
      }
      
     /* in case of post C/C++ code run it */
     if (figObj.translateToCppCodePost) cCode += figObj.translateToCppCodePost() + "\n"; //if there is defined to put somethin after let's do it

    });
    cCode += "/*END code inside WHILE LOOP */\n";

    return cCode;
  },

  translateToCppCodePost: function(){
    var cCode = "";
    var endCondition = "";
    var stopTerminal = this.getInputPort("stopTerminal");
    if (stopTerminal.getConnections().getSize() > 0){
      endCondition = "wire_" + stopTerminal.getConnections().get(0).getId();
    }

    cCode += "}while(!" + endCondition + "); /* END WHILE LOOP */" + "\n";
    cCode += this.getRightTunnelsAssignementOutputCppCode();

    return cCode;
  },

  /**
   * @method getPersistentAttributes
   * @description Return an objects with all important attributes for XML or JSON serialization.
   * This is used when file IS SAVED.
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();

      // add all decorations to the memento
      //
      memento.labels = [];                                        //custom labels save, here will be tunnles and label for switch layers saved
      memento.ports = [];                                         //custom ports save

      this.children.each(function(i,e){
          var labelJSON = e.figure.getPersistentAttributes();
          labelJSON.locator=e.locator.NAME;
          labelJSON.locatorX=e.locator.x;                         //STORE INFORMATION ABOUT TUNNEL POSITION X
          labelJSON.locatorY=e.locator.y;                         //STORE INFORMATION ABOUT TUNNEL POSITION Y

          memento.labels.push(labelJSON);
      });

      return memento;
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
      
	//rerecreate stop terminal
	port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(99, 90));
	port.setConnectionDirection(3);
	port.setBackgroundColor("#FF0000");
	port.setName("stopTerminal");
	port.setMaxFanOut(20);
	port.userData = {};
	port.userData.datatype = "bool";
  },
    
  getPort: function(name){
    if (name.indexOf('stopTerminal') > -1){
      return this.getInputPort(name);
    }else{
      port = this._super(name); //THIS IS NOT RUNNING, TESTED
      return port;
    }
  }
  
});
