// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:92, height:45.87519999999995, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in3
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(1.2613349558952667, 22.69112723214303));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F30000");
     port.setName("in3");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // in2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(1.2613349558952667, 60.89913504464287));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#08F300");
     port.setName("in2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // in1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(1.2613349558952667, 103.04827008928605));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F0F3F3");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // out2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.43524799937362, 45.0125558035714));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F30000");
     port.setName("out2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.43524799937362, 84.87723214285718));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#EBF300");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 92;
      this.originalHeight= 45.87519999999995;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L92,0 L92,45.87519999999995 L0,45.87519999999995");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M12.459628159423573 0L63.250028159423664 0L63.250028159423664 45.87519999999995L12.459628159423573 45.87519999999995Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M17.64834774015253 40.262869760000285L44.827437660152555 40.262869760000285L44.827437660152555 33.54333685435938L44.46907779526373 33.5746892799998L42.05101141794239 33.36313588433097L39.706416763895504 32.73490364020074L37.506533155263924 31.709081066446174L35.51820294230106 30.316837262879517L33.801840532384176 28.600474852962748L32.409596728817405 26.612144639999883L31.383774155062838 24.41226103136819L30.755541910932607 22.06766637732119L30.54398851526389 19.649599999999964L30.755541910932607 17.23153362267874L31.37243062477569 14.929273600000329L17.64834774015253 14.929273600000329L17.64834774015253 40.262869760000285Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.9205777612801285,"ry":2.9205777612801285,"cx":35.351666063352695,"cy":18.295454218240366,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.380866641919965,"ry":4.380866641919965,"cx":41.53641896959266,"cy":26.799489464320345,"stroke":"none","stroke-width":0,"fill":"#C00808","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    },
    
    symbolPicture: "data:image/png;base64,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",
    
    jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.Loop2.WhileLayer",
    "id": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "x": 304,
    "y": 133,
    "width": 548,
    "height": 280,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop2_WhileLayer",
    "bgColor": "#F0F0F0",
    "color": "#333333",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "labels": [],
    "ports": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "3bfdb6a1-19f7-c139-a603-73f1a3251f0f",
    "x": 727,
    "y": 362,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "bool",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "#009900",
    "color": "#009900",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "false",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Multiply",
    "id": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
    "x": 472,
    "y": 199,
    "width": 84.39610736639997,
    "height": 60,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Multiply",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "31a41cb9-314f-87d0-011f-a411acfcb857",
    "x": 389,
    "y": 185,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "#0000FF",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Serial.println",
    "id": "40225412-b7fc-93ee-2440-eed7ac96bbf6",
    "x": 567,
    "y": 259,
    "width": 96.92204284667969,
    "height": 94.89934667618655,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Serial_println",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "HoverConnection",
    "id": "06f0f3cd-21b3-2bba-a31f-ea7f07bcd98d",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 557.4232626176,
        "y": 228.3517395968002
      },
      {
        "x": 564.7116313088,
        "y": 228.3517395968002
      },
      {
        "x": 564.7116313088,
        "y": 299.94420965218654
      },
      {
        "x": 572,
        "y": 299.94420965218654
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
      "port": "out1"
    },
    "target": {
      "node": "40225412-b7fc-93ee-2440-eed7ac96bbf6",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "186f245f-9f0c-bc82-0e02-5c4c537d0f43",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 406.85,
        "y": 197
      },
      {
        "x": 439.0795841664,
        "y": 197
      },
      {
        "x": 439.0795841664,
        "y": 210.3128769536002
      },
      {
        "x": 471.3091683328,
        "y": 210.3128769536002
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "31a41cb9-314f-87d0-011f-a411acfcb857",
      "port": "out1"
    },
    "target": {
      "node": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "52c20e34-6f84-aaa2-65ab-734b5f5652e0",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 765.50751953125,
        "y": 374
      },
      {
        "x": 806.0137597656251,
        "y": 374
      },
      {
        "x": 806.0137597656251,
        "y": 385
      },
      {
        "x": 846.5200000000001,
        "y": 385
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "3bfdb6a1-19f7-c139-a603-73f1a3251f0f",
      "port": "out1"
    },
    "target": {
      "node": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
      "port": "stopTerminal"
    }
  }
],
    
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