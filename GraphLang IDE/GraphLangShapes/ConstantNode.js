/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.ConstantNode = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.ConstantNode",

  /**
   *  @method init
   *  @description Constant initialization, create port, assign default datatype to constant and assign events to constant what has happen when user
   *  click on it, assign menu for change its datatype.
   */
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.installEditor(new draw2d.ui.LabelInplaceEditor());
    this.persistPorts = false;  //IMPORTANT, if ports are in json code it's loaded wrong

    //INIT USER DATA
    this.userData = {};
    this.userData.datatype = "int";
    this.userData.isTerminal = false
    //this.userData.nodeLabel = "nodeLabel";    //do not intialize, therefore it will be translated as const_..., if node label available it's used as variable name

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105, 50.0));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "int"; //default datatype is INT, because it's called NumericConstant

    /*****************************************************************************
     *  DEFAULT DATATYPE of this constant
     *****************************************************************************/

    this.setColor(new draw2d.util.Color("#0000FF"));
    this.setFontColor(new draw2d.util.Color("#FFFFFF"));
    this.setBackgroundColor(new draw2d.util.Color("#0000FF"));
    this.getOutputPort(0).userData.datatype = "int";
    this.setText("0");                                                //<-- default value

    /*****************************************************************************
     *  LEFT CLICK ON LABEL
     *****************************************************************************/
     this.on("click",function(emitter,event){
       emitter.changeConstantValueOnClick();
     });

    /*****************************************************************************
     *  RIGHT CLICK CONTEXT MENU
     *****************************************************************************/
    this.on("contextmenu", function(emitter, event){
        $.contextMenu({
            selector: 'body',
            events:
            {
                hide:function(){ $.contextMenu( 'destroy' ); }
            },

            //these functions are run after user click on some context menu option
            callback: $.proxy(function(key, options)
            {
               switch(key){
               case "int":
                   emitter.changeDatatype(key);
                   emitter.setText("0");                                                //<-- default value
                   break;
               case "uint":
                   emitter.changeDatatype(key);
                   emitter.setText("0");                                                //<-- default value
                   break;
               case "float":
                   emitter.changeDatatype(key);
                   emitter.setText("0.0");                                                //<-- default value
                   break;
               case "double":
                   emitter.changeDatatype(key);
                   emitter.setText("0.0");                                                //<-- default value
                   break;
               case "bool":
                   emitter.changeDatatype(key);
                   emitter.setText("false");                                                //<-- after change set default value as text to false
                   break;
               case "String":
                   emitter.changeDatatype(key);
                   emitter.setText("defaultString");                                                //<-- default value
                   break;
               case "showNodeLabel":
                    if (emitter.userData.nodeLabel != null) labelText = emitter.userData.nodeLabel;
                    else{
                        labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), 'nodeLabel');
                        emitter.userData.nodeLabel = labelText;
                    }

                    emitter.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
                    emitter.add(emitter.nodeLabel, new draw2d.layout.locator.TopLocator());
                    emitter.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
                    emitter.nodeLabel.on('change:text', function(nodeEmitter, event){
                      labelText = nodeEmitter.getText();
                      labelText = labelText.replaceAll(" ","_");
                      if (labelText != nodeEmitter.getParent().userData.nodeLabel) labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), labelText); 
                      nodeEmitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
                      nodeEmitter.text = labelText;                                                   //this will not fire another event!
                    });

                   break;
               case "setTerminal":
                   emitter.setStroke(3);
                   emitter.setColor("#DD2241");
                   emitter.setDashArray("-");
                   emitter.userData.isTerminal = true;
                   break;
               case "unsetTerminal":
                   emitter.setStroke(2);
                   emitter.setDashArray("");
                   emitter.setColor("#AA4A4C"); //stroke color
                   emitter.userData.isTerminal = false;
                   break;
               default:
                   //emitter.setBackgroundColor(colorObj.getByNameBackgroundColor("unknown"));
                   //emitter.getOutputPort(0).userData.datatype = "unknown";
                   break;
               }

            },this),
            x:event.x,
            y:event.y,
            items:
            {
                "int": {name: "int"},
                "uint":    {name: "uint"},
                "float":    {name: "float"},
                "double": {name: "double"},
                "bool": {name: "bool"},
                "String": {name: "String"},
                "sep1":   "---------",
                "showNodeLabel": {name: "Show node label"},
                "sep2":   "---------",
                "setTerminal": {name: "Set as terminal"},
                "unsetTerminal": {name: "Unset terminal"}
            }
        });
    });

  },

 /*
  *   Set label colors if item in menu was choosed, if there was terminal setting choosed, do nothing
  *   there are two options set/unset terminal, so it's enough to just search for setTerminal string
  */
  changeDatatype: function(datatype){
    this.userData.datatype = datatype;
    this.getOutputPort(0).userData.datatype = datatype;

    var colorObj = new GraphLang.Utils.Color();
    this.setColor(colorObj.getByName(datatype));
    this.setFontColor(colorObj.getByNameFontColor(datatype));
    this.setBackgroundColor(colorObj.getByNameBackgroundColor(datatype));
  },

  /**
   *  @method changeConstantValueOnClick
   *  @description Set actual text of constant after click if something like that is defined for particular datatype. Mostly for true/false constant but
   *  maybe useful in future., it's defined in function inside class, because Label has assign this function so program is always jumping into this
   *  function and here it's defined for all datatypes.
   *  For comparison datatype is used string search("^datatype$") function what means, that getOutputPort(0).userData.datatype must have appropriate value.
   *  Constant datatype is stored in its port, that how it's done node datatype information sotred in GraphLang it's always read from ports to which wires
   *  are connected.
   */
  changeConstantValueOnClick: function(){
    if (this.getOutputPort(0).userData.datatype != undefined &&
        this.getOutputPort(0).userData.datatype.toLowerCase().search("^bool$") != -1){
      currentValue = this.getText();
      if (currentValue.search("true") != -1) this.setText("false");
      else this.setText("true");
    }else if (this.getOutputPort(0).userData.datatype != undefined &&
              this.getOutputPort(0).userData.datatype.toLowerCase().search("^int$") != -1){
                /* do nothing it's here just as example how to add another datatype with toggle effect on click */
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
    this._super(memento);                                               //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder
    this.setId(memento.id);                                             //set ID same as in saved file
    this.getOutputPort(0).userData.datatype = this.userData.datatype;   //set output port ID same as cluster when loading from file, MUST BE HERE
  },

  getVariableName: function(){
      let variableName = "const_" + this.getId();
      if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
      return variableName   
  },

  getDatatype: function(){
    let cCode = "";
    //cCode += this.getOutputPort(0).userData.datatype;     //datatype from port
    cCode += this.userData.datatype;                        //from node userData
    return cCode;    
  },

  symbolPicture: "data:image/png;base64,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",

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ functions
   *****************************************************************************************************************************************************/ 

  /**
   *  @method translateToCppCode
   *  @description SThis function translates block into C/C++ code. here is defined template which get wires names connected to inputs and outputs,
   *  and translate content of nummeric constant as assignement to wire.
   */
  translateToCppCode:function(){
    cCode = "";

    var variableName = this.getVariableName();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = " + variableName + ";\n";
    });

    return cCode;
  },

  /**
   *  @name translateToCppCodeDeclaration
   *  @desc Returns constant declaration. NOW INTENTIONALLY SAME AS TRANLSATE TO CPP, BECAUSE it's used during translating function to have translate them before wires declaration
   *  @returns {String} C code string, each line is finished with newline symbol \n
   */
  translateToCppCodeDeclaration:function(){
    cCode = "";
    var constDatatype = this.getDatatype();
    
    if (constDatatype.toLowerCase().search("string") > -1){
      cCode += constDatatype + " " + this.getVariableName() + " = \"" + this.getText() + "\";\n";
    }else{
      cCode += constDatatype + " " + this.getVariableName() + " = " + this.getText() + ";\n";
    }
    return cCode;
  },
  
  translateToCppCodeAsParam:function(){
    cCode = "";
    var constDatatype = this.getDatatype();

    //create param definition using also default value, if there is string use quotes
    if (this.getDatatype().toLowerCase().search("string") == -1){ 
        cCode += constDatatype + " " + this.getVariableName() + ' = ' + this.getText();
    }else{
        cCode += constDatatype + " " + this.getVariableName() + ' = "' + this.getText() + '"';
    }

    return cCode;
  },

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 

  translateToPythonCode:function(){
    pythonCode = "";

    var variableName = this.getVariableName();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      pythonCode += "wire_" + connectionObj.getId() + " = " + variableName + "\n";
    });

    return pythonCode;
  },
  
  translateToPythonCodeDeclaration:function(){
    pythonCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;

    if (constDatatype.toLowerCase().search("string") > -1){
      pythonCode += this.getVariableName() + " = \"" + this.getText() + "\"\n";
    }else if (constDatatype.toLowerCase().search("bool") > -1){
      pythonCode += this.getVariableName() + " = " + (this.getText() == 'true' ? 'True' : 'False') + "\n";
    }else{
      pythonCode += this.getVariableName() + " = " + this.getText() + "\n";
    }
    return pythonCode;
  },

  translateToPythonCodeAsParam:function(){
    pythonCode = "";
    //create param definition using also default value, if there is string use quotes
    if (this.getDatatype().toLowerCase().search("string") == -1){ 
        pythonCode += this.getVariableName() + ' = ' + this.getText();
    }else{
        pythonCode += this.getVariableName() + ' = "' + this.getText() + '"';
    }

    return pythonCode;
  }
  
    
});
