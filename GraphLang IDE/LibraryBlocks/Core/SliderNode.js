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
               case "showNodeLabel":
                    if (emitter.userData.nodeLabel != null) labelText = emitter.userData.nodeLabel;
                    else{
                        labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), 'nodeLabel');
                        emitter.userData.nodeLabel = labelText;
                    }

                    emitter.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
                    emitter.add(emitter.nodeLabel, new draw2d.layout.locator.TopLocator());
                    emitter.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
                    emitter.nodeLabel.on('change:text', function(nodeEmitter, event){
                      labelText = nodeEmitter.getText();
                      labelText = labelText.replaceAll(" ","_");
                      if (labelText != nodeEmitter.getParent().userData.nodeLabel) labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), labelText); 
                      nodeEmitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
                      nodeEmitter.text = labelText;                                                   //this will not fire another event!
                    });

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
                "showNodeLabel": {name: "Show node label"},
                "setTerminal": {name: "Set as terminal"},
                "unsetTerminal": {name: "Unset terminal"}
            }
        });
    });

  },

  getVariableName: function(){
      let variableName = "const_" + this.getId();
      if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
      return variableName   
  },

  getDatatype: function(){
    let cCode = "";
    cCode = this.getOutputPort(0).userData.datatype;
    return cCode;
  },

  symbolPicture: "data:image/png;base64,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",

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ functions
   *****************************************************************************************************************************************************/ 

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    var constDatatype = this.getDatatype();
    cCode += constDatatype + " const_" + this.getId() + " = " + this.getValue() + ";\n";

    return cCode;
  },

  translateToCppCode:function(){
    var cCode = "";
    var variableName = this.getVariableName();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = " + variableName + ";\n";
    });

    return cCode;
  },
  
  translateToCppCodeAsParam:function(){
    cCode = "";
    cCode += this.getDatatype() + " " + this.getVariableName() + ' = ' + this.getValue() ;
    return cCode;
  }

});
