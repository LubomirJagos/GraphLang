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
      let sourcePort = connections.first().getSource();
      if (sourcePort.userData && sourcePort.userData.datatype && sourcePort.getParent().NAME.toLowerCase().search("tunnel") == -1){
        datatypeStr = sourcePort.userData.datatype;
      }else if(sourcePort.getParent().getDatatype){
        datatypeStr = sourcePort.getParent().getDatatype();
      }else if(sourcePort.userData && sourcePort.userData.datatype){
        datatypeStr = sourcePort.userData.datatype;
      }
    }

    return datatypeStr;
  },

  getVariableName: function(){
    let variableName = this.getText();
    if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
    return variableName
  },

  symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAsCAIAAADU52DUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOfSURBVGhD7ZlPaxNBFMD7BXrvB1BQG1MitI1NsQ2290I9KY0QiyAFwaqgaCqePRX8EO1Nzzkl9VAveks99KiLB1sKZUFTJc5782b2ZTbJ5s+M4HZ+PJbJ7JuZN7/dbBIy1vS4xPt1i/frFu/XLd6vW7xftyT4PatWf1cqPYLymk2jnwdlpDenBwl+/1QqrbGxHkF5zabRz4My0pvTg4SkRL9lhdHPgzJSl3N6ekqautOv3y8TE+9zuXhQFeWy0c+DMlKXY8GvhJbytOP9ukLcvPJtLd7f5KgL3u8wWPOrn79iRprb4/26xvt1i/frFmt+P6yvvx0fF/Emk6G5B6cetMKDXXrRFzCisVMu7wWtGMEeJQ3DTiNsBXV60Qdd8i34PT4+vrVWys4vXHv8SsSV2cJUfq5UKtEKgzC8X4V4PZAWa7jzK+TmnrxePvwlYunwpzhmH21N5a/TChJYnu4qKkLccWFDutw9gNrgiIBiPNugm1IO2YUd0C0ptUIPEilu96sT1EAoIwyhM6ijkQYtKmaAoYAcrn1BJUFgLqSSBUZ+O6P6rdVq2eLyzUZoxMX8/MrKCi2C1cgbE1uoNeZXnqX7F9/v0RA4G/fLG4RKbm/DbJiGl5m5ZktECbqBg7ESHIJXS1VCdcbzOzH877ft7e2ph1uLn08WP53wY2bjRbFYpOn52rqgZL98iGgP6heblK/G6tUFrK0LiCbUNbNKWJomlt+JkfxmN14u7B9BfDy6sf9DtjMPnkd+uSxdUKJfdXYUvxyYmVtg7QS/sTpxRxqXfsXz4erC0nztO0QdjxgXZgrR88HclelXS4HNxe9fajO/ehKtQ6Gnip8CzEqoPaBfXMS40nxmhoXPt9U7a5n7z+aqXwvVb/J4+d7T7EyeVgCgICkOW1guWNOOOvqlPcBpOAt+ZRrsMxrbJlElt7dh8/r5oE7b8BtV4s6v+H62enstM12YvLs5Wdq8lJvNTufN72e4QyQqAsrEHvgQx24sFxXDrtSnttqeniQ8EN8spFaUTm2A+1VnAbps3AJrD+iX6sRp65BnXDmGBb8SK78vItiu/mus+RXj5URiRpp7FLxfA8t+04L36xbv1y3er1u833+Bhf+Pvd8e2Px//l0u1y3kYgKjnwdlpCvHpl95F3cMWYTA6OdBGanLGfX5qzHm5UEZ5zLHml8xUbegjHOZc1atUlIX+vXrGQ7v1y3er1u8X7d4v27xfl3SbP4FZCifmzAWjDsAAAAASUVORK5CYII=",

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
