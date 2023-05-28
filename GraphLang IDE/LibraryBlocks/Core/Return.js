/**
 *  @class GraphLang.Shapes.Basic.Return
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
    port.userData.datatype = "undefined";

    /*****************************************************************************
     *  DEFAULT DATATYPE of this constant
     *****************************************************************************/

    this.setColor(new draw2d.util.Color("#0000FF"));
    this.setFontColor(new draw2d.util.Color("#FFFFFF"));
    this.setBackgroundColor(new draw2d.util.Color("#AAAAAA"));
    this.getInputPort(0).userData.datatype = "int";
    this.setText("return");    
  },

  symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAxCAIAAADoa0iqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOCSURBVGhD7ZhfSFNRHMfPjOl0pExjoC7dzVpDjJVMqAeTYGQ+NFR2yx5SGPbic2QFxSR8yL2EkNB6EQpCpqYSwRAfpNFDG9ZeRIe0aeWfoZkb7q7d7a5z787+3Jm6Bdqu3A+Hs9/vnN89nO/9nXN2NkEwGARHixz0eYTgJXEBXhIX4CVxAV4SF9jr9rC4KEBWtlJZGUFWMlDSbrS3hwGAz2RpGR4OoYmy2StLnZ3HlpaWcHwW+dlEd/fVwUGBVkshP4n9JXV12ZCfTej1LbtJ4k88LsBL4gK8JC6wq6S5ubm1tXGfb3J5eRk1cYS/SJqZmWm5cbOpqWn++5N1YsBoND57PuB2u1F3RtSp1cg6PFIlWa1WnU7nPnGy6vWk4t2ns+9tVa8mt06f6+/vdzqdKChN6hpxeQmyD5FUSfcfPZY03y699zS3HKPIEBUM58qw0m4jbBwafYuCshvWhWhiYuLug4fY0MecPBHsYm6HqKZ+E1/xi7dwXW1trfoaLiM8hFRaCIDXbbbACxOdEOjRkB7H2LQzuYWO2WpoVkk2mR4aRdxVN+KyQGwwl3mjBMeA2wXkWPRhNNoO0r0QwV0kPn8JCIThIMxPKBwMMzVtRwRC2BXfUUKpJOAwQ6AeOD1cDly0B3ERUlVzgwLYLGa3l5klo3kvEoPZGb9QXrLBjAVHEEqr4WAZwZLk9/upvAIqFI6QFEXCOszUyI6IxImUkpsr6N0pSiVCrxvNBgC7hZ4HltGpkBiMgfS40Gi2DS8QioqiTrqwJFVUVES+LcCc0LtoRwktOouLi1FoYDs2iUKREL5XPEFsvaUP4WctrRQ3U1iSNBqNb2HWb7fSOUGFihp++we/a76mpgaFxlGI85ndwiaetP8AS5JSqezo6Pj1soeY/QzPOjpdTCFmv/x8Yaivry8rK0OhcZzbBAD5BRmu9yKY2oOCJQliMBiua66s9t5ZNxm8U6O+qZF1U89qb+cF5ZnW1lYUxMLu8pDJmxiehzh9PgCwFSBBvjjaTisXSk9Ft5iioTzjxZk+qZIgfX19JpPpsiQnMG72jbw5Tazq9fq2tjbUvQPn9JjDA6QqtJUwUezcda5sQrGqqEC7xeEhj2NMSDX44SGjDx8A/A91LsBL4gK8JC7AS+IC+38vISfLsNtl//ifOLKyEq02krEkjsIfD1yAl8QFeEnZDwB/ANXZR28HsmCkAAAAAElFTkSuQmCC",

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
