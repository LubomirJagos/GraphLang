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
                    else labelText = 'nodeLabel';

                    emitter.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
                    emitter.add(emitter.nodeLabel, new draw2d.layout.locator.TopLocator());
                    emitter.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
                    emitter.nodeLabel.on('change:text', function(nodeEmitter, event){
                      labelText = nodeEmitter.getText();
                      labelText = labelText.replaceAll(" ","_"); 
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
    var constDatatype = this.getOutputPort(0).userData.datatype;
    
    if (constDatatype.toLowerCase().search("string") > -1){
      cCode += constDatatype + " " + this.getVariableName() + " = \"" + this.getText() + "\";\n";
    }else{
      cCode += constDatatype + " " + this.getVariableName() + " = " + this.getText() + ";\n";
    }
    return cCode;
  },
  
  translateToCppCodeAsParam:function(){
    cCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;
    //cCode += constDatatype + " const_" + this.getId();              //maybe add default value
    
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
      pythonCode += "wire_" + connectionObj.getId() + " = " + variableName + ";\n";
    });

    return pythonCode;
  },
  
  translateToPythonCodeDeclaration:function(){
    pythonCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;

    if (constDatatype.toLowerCase().search("string") > -1){
      pythonCode += this.getVariableName() + " = \"" + this.getText() + "\";\n";
    }else{
      pythonCode += this.getVariableName() + " = " + this.getText() + ";\n";
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
