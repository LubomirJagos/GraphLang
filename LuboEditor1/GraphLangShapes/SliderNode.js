/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.SliderNode = draw2d.shape.widget.Slider.extend({
  NAME: "GraphLang.Shapes.Basic.SliderNode",

  init : function()
  {
      this._super();

      //LuboJ, set userData to tell something about port, THIS MUST BE HERE
      var port = this.createPort("output");
      port.userData = {};
      port.userData.datatype = "int";

      this.on("change:value", $.proxy(function(element, event){
          var connections = this.getOutputPort(0).getConnections();
          connections.each($.proxy(function(i, conn){
              var targetPort = conn.getTarget();
              targetPort.setValue(event.value);
          },this));

          //update slider label with its actual value
          this.sliderLabel.setText(this.getValue());
      },this));

      this.setDimension(120,20);

      //LuboJ. this add label to slider with it actual value
      this.sliderLabel = new draw2d.shape.basic.Label({text: this.getValue()});
      this.add(
        this.sliderLabel,
        new draw2d.layout.locator.TopLocator()
      );

  },

  translateToCppCode:function(){
    cCode = "";

    var constDatatype = this.getOutputPort(0).userData.datatype;

    cCode += constDatatype + " const_" + this.getId() + " = " + this.getValue() + ";\n";
    var constantId = this.getId();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = const_" + constantId + ";\n";
    });

    return cCode;
  }


});
