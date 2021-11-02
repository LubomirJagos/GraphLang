/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.NumericConstantNode = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.NumericConstantNode",

  /**
   *  @method init
   *  @description Constant initialization, create port, assign default datatype to constant and assign events to constant what has happen when user
   *  click on it, assign menu for change its datatype.
   */
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.installEditor(new draw2d.ui.LabelInplaceEditor());
    this.persistPorts = false;  //IMPORTANT, if ports are in json code it's loaded wrong

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
               //set label colors
               var colorObj = new GraphLang.Utils.Color();
               emitter.setColor(colorObj.getByName(key));
               emitter.setFontColor(colorObj.getByNameFontColor(key));
               emitter.setBackgroundColor(colorObj.getByNameBackgroundColor(key));

               switch(key){
               case "int":
                   emitter.setText("0");                                                //<-- default value
                   emitter.getOutputPort(0).userData.datatype = "int";
                   break;
               case "uint":
                   emitter.getOutputPort(0).userData.datatype = "uint";
                   emitter.setText("0");                                                //<-- default value
                   break;
               case "float":
                   emitter.getOutputPort(0).userData.datatype = "float";
                   emitter.setText("0.0");                                                //<-- default value
                   break;
               case "double":
                   emitter.getOutputPort(0).userData.datatype = "double";
                   emitter.setText("0.0");                                                //<-- default value
                   break;
               case "bool":
                   emitter.getOutputPort(0).userData.datatype = "bool";
                   emitter.setText("false");                                                //<-- after change set default value as text to false
                   break;
               case "String":
                   emitter.getOutputPort(0).userData.datatype = "String";
                   emitter.setText("defaultString");                                                //<-- default value
                   break;
               default:
                   emitter.setBackgroundColor(colorObj.getByNameBackgroundColor("unknown"));
                   emitter.getOutputPort(0).userData.datatype = "unknown";
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
                "String": {name: "String"}
            }
        });
    });
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
   *  @method translateToCppCode
   *  @description SThis function translates block into C/C++ code. here is defined template which get wires names connected to inputs and outputs,
   *  and translate content of nummeric constant as assignement to wire.
   */
  translateToCppCode:function(){
    cCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;

    if (constDatatype.toLowerCase().search("string") > -1){
      cCode += constDatatype + " const_" + this.getId() + " = \"" + this.getText() + "\";\n";
    }else{
      cCode += constDatatype + " const_" + this.getId() + " = " + this.getText() + ";\n";
    }

    var constantId = this.getId();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = const_" + constantId + ";\n";
    });

    return cCode;
  },

  /**
   *  @name getDeclaration
   *  @desc Returns constant declaration. NOW INTENTIONALLY SAME AS TRANLSATE TO CPP, BECAUSE it's used during translating function to have translate them before wires declaration
   *  @returns {String} C code string, each line is finished with newline symbol \n
   */
  getDeclaration:function(){
    cCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;

    if (constDatatype.toLowerCase().search("string") > -1){
      cCode += constDatatype + " const_" + this.getId() + " = \"" + this.getText() + "\";\n";
    }else{
      cCode += constDatatype + " const_" + this.getId() + " = " + this.getText() + ";\n";
    }
    return cCode;
  }
});
