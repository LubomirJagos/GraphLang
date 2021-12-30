/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.Return = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.Return",

  /**
   *  @method init
   *  @description Constant initialization, create port, assign default datatype to constant and assign events to constant what has happen when user
   *  click on it, assign menu for change its datatype.
   */
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.persistPorts = false;  //IMPORTANT, if ports are in json code it's loaded wrong

    //INIT USER DATA
    this.userData = {};

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 50.0));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "undefined"; //default datatype is INT, because it's called NumericConstant

    /*****************************************************************************
     *  DEFAULT DATATYPE of this constant
     *****************************************************************************/

    this.setColor(new draw2d.util.Color("#0000FF"));
    this.setFontColor(new draw2d.util.Color("#FFFFFF"));
    this.setBackgroundColor(new draw2d.util.Color("#AAAAAA"));
    this.getInputPort(0).userData.datatype = "int";
    this.setText("return");
  },

  /**
   *  @method translateToCppCode
   *  @description SThis function translates block into C/C++ code. here is defined template which get wires names connected to inputs and outputs,
   *  and translate content of nummeric constant as assignement to wire.
   */
  translateToCppCode:function(){
    cCode = "";

    this.getInputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "return wire_" + connectionObj.getId() + ";\n";
    });

    return cCode;
  },
  
  getDatatype: function(){
    let cCode = "undefined";

    if (this.getInputPort(0).getConnections().getSize() > 0){
        cCode = this.getInputPort(0).getConnections().first().getSource().userData.datatype;
    }

    return cCode;    
  }
    
});
