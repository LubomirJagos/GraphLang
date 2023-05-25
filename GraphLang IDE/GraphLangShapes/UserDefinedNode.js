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
    this._super( $.extend({stroke:0, bgColor:null, width: 42, height: 42},attr), setter, getter);
    this.persistPorts=false;

    //alert(JSON.stringify(attr));
    
    //flagAutoCreatePorts indicate if flags should be created from JSON schematic
    if (this.jsonDocument && attr && ("flagAutoCreatePorts" in attr) && attr.flagAutoCreatePorts) this.createPortsFromJson(this.jsonDocument);
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
                node.getInputPorts().each(function(nodePortIndex, nodePortObj){
                   //output port
                   port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100,100/outputPortCount*outputPortIndex));
                   port.setConnectionDirection(31);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);
                   port.setName(nodePortObj.getName());                   
                   outputPortIndex++;
                });
                node.getOutputPorts().each(function(nodePortIndex, nodePortObj){
                   // input port
                   port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0,100/inputPortCount*inputPortIndex));
                   port.setConnectionDirection(3);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);
                   port.setName(nodePortObj.getName());                   
                   inputPortIndex++;
                });
            }
            if (
                element.userData && element.type.toLowerCase().search('.return') > -1 ||
                element.userData && element.type.toLowerCase().search('.terminaloutput') > -1
            ){
                   //output port for return node
                   port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100,100/outputPortCount*outputPortIndex));
                   port.setConnectionDirection(1);
                   port.setBackgroundColor("#37B1DE");
                   port.setMaxFanOut(20);                   
                   port.setName(element.userData.nodeLabel);                   
                   outputPortIndex++;
            }
        }
        return;
   },

  getObjectAsString: function(){
    var objStr = "";
    
    //generate init()
    objStr += "init: function(attr,setter,getter){\n";
    objStr += "\tthis._super( $.extend({stroke:0, bgColor:null, width:" + this.width + ", height:" + this.height + ", flagAutoCreatePorts: false},attr), setter, getter);\n";
    objStr += "\tvar port;\n";

    this.getInputPorts().each(function(portIndex, portObj){
        objStr += '\tport = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(' + portObj.getLocator().x + ', ' + portObj.getLocator().y + '));' + "\n";
        objStr += '\tport.setConnectionDirection(' + portObj.getConnectionDirection() + ');' + "\n";
        objStr += '\tport.setBackgroundColor("' + portObj.getBackgroundColor().hash() + '");' + "\n";
        objStr += '\tport.setName("' + portObj.getName() + '");' + "\n";
        objStr += '\tport.setMaxFanOut(' + portObj.getMaxFanOut() + ');' + "\n";
        objStr += "\n";        
    });
    this.getOutputPorts().each(function(portIndex, portObj){
        objStr += '\tport = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(' + portObj.getLocator().x + ', ' + portObj.getLocator().y + '));' + "\n";
        objStr += '\tport.setConnectionDirection(' + portObj.getConnectionDirection() + ');' + "\n";
        objStr += '\tport.setBackgroundColor("' + portObj.getBackgroundColor().hash() + '");' + "\n";
        objStr += '\tport.setName("' + portObj.getName() + '");' + "\n";
        objStr += '\tport.setMaxFanOut(' + portObj.getMaxFanOut() + ');' + "\n";
        objStr += "\n";        
    });

    objStr += "\tthis.persistPorts=false;\n";
    objStr += "},\n";

    //generate createShapeElement()
    objStr += "createShapeElement: function(){\n";
    objStr += "\tvar shape = this._super();\n";
    objStr += "\tthis.originalWidth = " + this.width + ";\n";
    objStr += "\tthis.originalHeight = " + this.height + ";\n";
    objStr += "\treturn shape;\n";
    objStr += "},\n";
    objStr += "\n";

    //this is running OK
    objStr += "createSet: " + this.createSet + ",\n\n";
    
    //json schematic is not included, because is taken from canvas
    //objStr += "jsonDocument: " + JSON.stringify(this.jsonDocument) + ",\n\n";
      
    return objStr; 
  },

  /*****************************************************************************************************************
   *    Default node shape, width, height and rectangle shape is defined
   *****************************************************************************************************************/

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = this.width;
      this.originalHeight= this.height;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L"+this.width+",0 L"+this.width+","+this.height+" L0,"+this.height);
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path("M0,0 L"+this.width+",0 L"+this.width+","+this.height+" L0,"+this.height+"Z");
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        return this.canvas.paper.setFinish();
   },

  /*****************************************************************************************************************
   *    JSON schematic, by default empty
   *****************************************************************************************************************/

  jsonDocument: [],

  /*****************************************************************************************************************
   *    THESE FUNCTIONS BELOW ARE SPECIFIC TO TRANSLATE NODE TO C/C++ CODE
   *****************************************************************************************************************/

  getVariableName: function(){
      let variableName = "outputTerminal_" + this.getId();
      if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
      return variableName
  },

    translateToCppCodeAsParam:function(){
        cCode = "";
        var constDatatype = this.getDatatype();

        //create param definition using also default value, if there is string use quotes
        if (this.getDatatype().toLowerCase().search("string") == -1){
            cCode += constDatatype + " " + this.getVariableName() + ' = ' + this.getText();
        }else{
            cCode += constDatatype + " " + this.getVariableName() + ' = "' + this.getText() + '"';
        }

        return cCode;
    },

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
