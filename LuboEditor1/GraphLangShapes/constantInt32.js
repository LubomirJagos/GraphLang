/**
 * @class GraphLang.Shapes.Basic.Constant.i32
 * @author Lubomir Jagos
 * @extend draw2d.shape.basic.Rectangle
 * @description Experimental int32 constant.
 */
GraphLang.Shapes.Basic.Constant.int32 = draw2d.shape.basic.Rectangle.extend({

    NAME: "GraphLang.Shapes.Basic.Constant.int32",

    init:function(attr)
    {
      this._super(attr);

      var color = new GraphLang.Utils.Color();
      this.setBackgroundColor(color.getByName("int32"));

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
      port.userData.datatype = "int32";

      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
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
