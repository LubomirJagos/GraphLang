// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
GraphLang.UserDefinedNode = draw2d.SetFigure.extend({            

   NAME: "GraphLang.UserDefinedNode",

   init:function(attr, setter, getter)
   {
    this._super( $.extend({stroke:0, bgColor:null, width:153.60000000000008,height:87},attr), setter, getter);
    this.persistPorts=false;

    if (this.jsonDocument) this.createPortsFromJson(this.jsonDocument);    
   },

   /*
    *   @method createPortsFromJson
    *   @description Automatic port creation for shape, they are automatically aligned, inputs on left, outputs on right.
    *   This function should be used when no ports are defined in init().
    */
   createPortsFromJson: function(){
        var inputPortIndex = 1;
        var outputPortIndex = 1;
        var inputPortCount = 1;     //to have them aligned correctly
        var outputPortCount = 1;
        
        for (var k = 0; k < this.jsonDocument.length; k++){
            var element = this.jsonDocument[k];
            var port;
            if (element.userData && element.userData.isTerminal){
                var node = eval("new " + element.type + "()");
                if (node.getInputPorts().getSize() > 0){
                   outputPortCount++;
                }
                if (node.getOutputPorts().getSize() > 0){
                   inputPortCount++;
                }
            }
            if (element.userData && element.type.toLowerCase().search('.return') > -1){
                   outputPortCount++;
            }
        }
        for (var k = 0; k < this.jsonDocument.length; k++){
            var element = this.jsonDocument[k];
            var port;
            if (element.userData && element.userData.isTerminal){
                var node = eval("new " + element.type + "()");
                if (node.getInputPorts().getSize() > 0){
                   //output port
                   port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100,100/outputPortCount*outputPortIndex));
                   port.setConnectionDirection(31);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);                   
                   outputPortIndex++;
                }
                if (node.getOutputPorts().getSize() > 0){
                   // input port
                   port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0,100/inputPortCount*inputPortIndex));
                   port.setConnectionDirection(3);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);
                   inputPortIndex++;
                }
            }
            if (element.userData && element.type.toLowerCase().search('.return') > -1){
                   //output port for return node
                   port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100,100/outputPortCount*outputPortIndex));
                   port.setConnectionDirection(1);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);                   
                   outputPortIndex++;
            }
        }
        return;
   },

  /*****************************************************************************************************************
   *    THESE FUNCTIONS BELOW ARE SPECIFIC TO TRANSLATE NODE TO C/C++ CODE
   *****************************************************************************************************************/
  
  translateToCppCodeFunctionName: function(){
    return this.NAME.replaceAll('.', '_');
  },
  
  translateToCppCode: function(){

    /*
     *  First translate this node function as spearate function, call IDE method for this, THIS IDE METHOD MUST BE DEFINED!
     *  Passing reference to this object. Schematic in jsonDocument is used.
     */
    let cCode = "";
    
    let paramsCounter = 0;
    let paramsStr = "";
    this.getInputPorts().each(function(portIndex, portObj){
        let connections = portObj.getConnections();
        if (paramsCounter > 0) paramsStr += ', ';

        if (connections.getSize() > 0){
            paramsStr += 'wire_' + connections.first().getId();
        }else{        
            paramsStr += 'null';
        } 

        paramsCounter++;
    });

    let functionCallStr = this.translateToCppCodeFunctionName() + '(' + paramsStr + ')';

    if (this.getOutputPorts().getSize() > 0){
        /*
         *  Node output translation process defined just for first output port! This is for C/C++ there is nothing like multiple rturn values.
         */
        let connections = this.getOutputPorts().first().getConnections()
        if (connections.getSize() > 0){
          connections.each(function(connectionIndex, connectionObj){
              cCode += 'wire_' + connectionObj.getId() + ' = ' + functionCallStr + ";\n";
          });
        }else{
            cCode += functionCallStr + "; /* output not assigned */ \n";    
        }
        
    }else{
        cCode += functionCallStr + "; /* node has no output port */ \n";    
    }
    
    return cCode;
  }
    
});
