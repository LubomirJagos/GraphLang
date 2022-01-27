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
