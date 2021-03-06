/**
 * @class GraphLang.Shapes.Basic.Constant.String
 * @author Lubomir Jagos
 * @extend draw2d.shape.basic.Rectangle
 * @description Experimental class, root of whole constants, gateway to real world defined by user. For now label which is editable by user, it's value would be taken as it is and assign to wire connected to output.
 */
 GraphLang.Shapes.Basic.Constant = {};
GraphLang.Shapes.Basic.Constant.String = draw2d.shape.basic.Rectangle.extend({

    NAME: "GraphLang.Shapes.Basic.Constant.String",

    init:function(attr)
    {
      this._super(attr);

      var color = new GraphLang.Utils.Color();
      this.setBackgroundColor(color.getByName("string"));

      // Create any Draw2D figure as decoration for the connection
      this.label = new draw2d.shape.basic.Label({text:"", color:"#0d0d0d", fontColor:"#0d0d0d"});

      // add the new decoration to the connection with a position locator.
      this.add(this.label, new draw2d.layout.locator.CenterLocator(this));

      //LuboJ port :)
      // Port
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 50.0));
      port.setConnectionDirection(1);
      port.setBackgroundColor("#37B1DE");
      port.setName("out1");
      port.setMaxFanOut(20);

      port.userData = {};
      port.userData.datatype = "string";

      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
      this.persistPorts=false;  //LuboJ, don't know but THIS MUST BE HERE to ports be saved correctly
    },

    //LuboJ function to return value inside label
    getNodeValue: function(){
      return this.label.getText();
    },

    translateToCppCode: function(){
      cCode = "";
      var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
      cCode += out1 + " = " + this.getNodeValue() + ";";
      return cCode;
    }
});
