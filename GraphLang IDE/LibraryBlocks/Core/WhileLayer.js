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
  },

  symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABUCAIAAABm9wwmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJrSURBVHhe7dw/aBphHMZxW86huWpIMlSF0EDWZGoX61QKtcVJt0IzmYKboUsXN8FSJ6d2sEqIiKTdnATBLZRASEEslLYujX8okuCg5BRieugbnir+K81yb5/PcN7vvZu+cC+3nDe63a6J+m6KX2KLP7EFsAWwBbAFsAWwBcx+16rX64lEQgzGFAqFxNlUc7Xw+Xxut1vMRqMoyjW3SKfTNptNLBlHNBqdvwX3C2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAtgC2ALYAuQtkWz2SwUCuVyuVqtiqVZ5GwRiURcLterYPDHwUEul7u3uZlMJsW1ySRs8WJr69P+/vuzs28nJ0eVyvdaLVithsNhPZC4YwLZWsRisZ/F4sdK5cn5+WDl1uWlv9VKnZ7G4/F8Pj9YHEu2FplU6mWjcefiQsxXHmras3Y7s7sr5nGkalEqlVqa9ljTxDzsUadzdHwshnGkatHpdPSjtdcbjCMsvV67f8MkUrVwOBz68YvZPBhHfDWb7079xFaqFna7/f7Gxp6qinlYZmXlqdcrhnFk2zsDOzsZVX1nsYi5T39mgsvLraWlQCAglsaRrYXT6dTfI14vLnpXV/UiHxYW3litD9bWPq+vv00kLMONRvzF9+xiNoJarZbNZouHh78ajduq+nx72+/3K4oiLk8wbwsxGJDH47nO/zkQZ4al76nibKrZLf4fsu2d/4ItgC2ALYAtgC2ALYAtgC2umEy/AQJRu3dzYW7lAAAAAElFTkSuQmCC",

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ functions
   *****************************************************************************************************************************************************/ 
  
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

    cCode += "\t" + this.getWiresInsideLoopDeclarationCppCode().replaceAll("\n", "\n\t");
    cCode += "\n";
    cCode += "\t" + this.getLeftTunnelsWiresAssignementCppCode().replaceAll("\n", "\n\t");
    cCode += "\n";

    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToCppCodeDeclaration) cCode += "\t" + figObj.translateToCppCodeDeclaration().replaceAll("\n", "\n\t") + "\n";

      if (figObj.translateToCppCode){
        cCode += "\t" + figObj.translateToCppCode().replaceAll("\n", "\n\t") + "\n"
      }else if (figObj.translateToCppCode2){
        cCode += "\t" + figObj.translateToCppCode2().replaceAll("\n", "\n\t") + "\n"
      }
      
     /* in case of post C/C++ code run it */
     if (figObj.translateToCppCodePost) cCode += "\t" + figObj.translateToCppCodePost().replaceAll("\n", "\n\t") + "\n"; //if there is defined to put somethin after let's do it

    });

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

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 
  
  translateToPythonCode: function(){
    var pythonCode = "";
    this.getUserData().wasTranslatedToPythonCode = true;

    pythonCode += this.getTunnelsDeclarationPythonCode();
    pythonCode += "while True:\n";
    pythonCode += "\t" + this.getLeftTunnelsWiresAssignementCppCode().replaceAll("\n", "\n\t") + "\n";

    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToPythonCodeDeclaration) pythonCode += "\t" + figObj.translateToPythonCodeDeclaration().replaceAll("\n", "\n\t") + "\n";
      if (figObj.translateToPythonCode) pythonCode += "\t" + figObj.translateToPythonCode().replaceAll("\n", "\n\t") + "\n";
      if (figObj.translateToPythonCodePost) cCode += "\t" + figObj.translateToPythonCodePost().replaceAll("\n", "\n\t") + "\n";

    });
    pythonCode += this.translateToPythonCodePost();

    return pythonCode;
  },

  translateToPythonCodePost: function(){
    var pythonCode = "";
    var endCondition = "";
    var stopTerminal = this.getInputPort("stopTerminal");

    if (stopTerminal.getConnections().getSize() > 0){
      endCondition = "wire_" + stopTerminal.getConnections().get(0).getId();
    }

    //pay attention to indentation
    pythonCode += "\tif " + endCondition + ":\n";
    pythonCode +="\t\tbreak"
    pythonCode += this.getRightTunnelsAssignementOutputPythonCode();

    return pythonCode;
  }
  
});
