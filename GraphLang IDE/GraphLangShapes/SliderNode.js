/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.SliderNode = draw2d.shape.widget.Slider.extend({
  NAME: "GraphLang.Shapes.Basic.SliderNode",

  init : function()
  {
      this._super();

      this.userData = {};
      this.userData.isTerminal = false;

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
               /*
                *   Set label colors if item in menu was choosed, if there was terminal setting choosed, do nothing
                *   there are two options set/unset terminal, so it's enough to just search for setTerminal string
                */
               if (key.search("setTerminal") > -1){
               }

               switch(key){
               case "setTerminal":
                   emitter.setStroke(3);
                   emitter.setDashArray("-");
                   emitter.setColor("#DD2241");
                   emitter.userData.isTerminal = true;
                   break;
               case "unsetTerminal":
                   emitter.setStroke(1);
                   emitter.setDashArray("");
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
                "setTerminal": {name: "Set as terminal"},
                "unsetTerminal": {name: "Unset terminal"}
            }
        });
    });

  },

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    var constDatatype = this.getOutputPort(0).userData.datatype;
    cCode += constDatatype + " const_" + this.getId() + " = " + this.getValue() + ";\n";

    return cCode;
  },

  translateToCppCode:function(){
    var cCode = "";
    var constantId = this.getId();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = const_" + constantId + ";\n";
    });

    return cCode;
  },
  
  getDatatype: function(){
    cCode = "";
    cCode = this.getOutputPort(0).userData.datatype;
    return cCode;
  }

});
