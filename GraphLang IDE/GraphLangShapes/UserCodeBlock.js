/**
 *  @class GraphLang.Shapes.Basic.UserCodeBlock
 *  @descritpition User written own code directly included in generated source code. This class is here to have parent obj for similar things. User defined source code is lowest level way for programmer how to put hand written code directly into generated code.
 */
GraphLang.Shapes.Basic.UserCodeBlock = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.Node.UserCodeBlock",
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.installEditor(new draw2d.ui.LabelInplaceEditor());

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105, 50.0));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#eb34d2");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "String"
    
    this.userData = {};
  },
  
  translateToCppCode: function(){
    cCode = '/*** user code block ****/';
    nodeText = this.getText();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
        cCode += "wire_" + connectionObj.getId() + " = '" +  nodeText + "';\n";
    });
    return cCode;
  }
  
});
