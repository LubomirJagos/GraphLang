/**
 *  @class GraphLang.Shapes.Basic.TerminalOutput
 *  @descritpition Output terminal. There could be multiple instances of this on canvas.
 */
GraphLang.Shapes.Basic.TerminalOutput = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.TerminalOutput",

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
    port.userData.datatype = "undefined";

    /*****************************************************************************
     *  DEFAULT DATATYPE of this constant
     *****************************************************************************/

    this.setColor(new draw2d.util.Color("#0000FF"));
    this.setFontColor(new draw2d.util.Color("#FFFFFF"));
    this.setBackgroundColor(new draw2d.util.Color("#626262"));
    this.setStroke(3);
    this.setColor("#FF0000");
    this.setDashArray("-");
    this.setText("outputTerminal");

    this.installEditor(new draw2d.ui.LabelInplaceEditor());
  },

  getConnectedDatatype: function(){
    let connections = this.getInputPort(0).getConnections();
    let datatypeStr = "undefined";

    if (connections.getSize() > 0){
      datatypeStr = connections.first().getSource().userData.datatype;
    }
    return datatypeStr;
  },

  getVariableName: function(){
    let variableName = this.getText();
    if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
    return variableName
  },

  /**
   * Get C/C++ code to be assign as function call output call arguments as pointers for connected wires.
   * Return pointer to it's variable ie.:
   *    void someBlockName(int inputVariableA, int inputVariableB, int &outputPortVariableA, int &outputPortVariableB){...}
   * @returns {string}
   */
  translateToCppCodeAsParam:function(){
    cCode = this.getDatatype() + " &" + this.getText();
    return cCode;
  },

  /**
   *  @method translateToCppCode
   *  @description SThis function translates block into C/C++ code. here is defined template which get wires names connected to inputs and outputs,
   *  and translate content of nummeric constant as assignement to wire.
   */
  translateToCppCode:function(){
    terminalObj = this;
    datatype = this.getDatatype();
    cCode = "";

    cCode += this.getText() + ' = wire_' + this.getInputPort(0).getConnections().first().getId() + ';\n';

    return cCode;
  },
  
  getDatatype: function(){
    return this.getConnectedDatatype();
  }
    
});
