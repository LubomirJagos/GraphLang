// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape2 = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape2",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:72, height:42, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // nodeLabel
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-1.0569777777781217, 90.47619047619048));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("nodeLabel");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // nodeLabel
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-1.0569777777781217, 26.19047619047619));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("nodeLabel");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // heyVar_A
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.33191111111077, 26.19047619047619));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("heyVar_A");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // world_445
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.33191111111077, 90.47619047619048));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("world_445");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 72;
      this.originalHeight= 42;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L72,0 L72,42 L0,42");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M17.238975999999752 0L59.23897599999975 0L59.23897599999975 42L17.238975999999752 42Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M60.5 9.5L71.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M60.5 9.5L71.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 37.5L72.5,37.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 37.5L72.5,37.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 36.5L0.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 36.5L0.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M17.5 9.5L0.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M17.5 9.5L0.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 9.5L32.5,4.5L26.5,19.5L42.5,7.5L28.5,28.5L49.5,15.5L33.5,34.5L51.5,25.5L44.5,36.5L52.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 9.5L32.5,4.5L26.5,19.5L42.5,7.5L28.5,28.5L49.5,15.5L33.5,34.5L51.5,25.5L44.5,36.5L52.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M44.5 4.5L55.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M44.5 4.5L55.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M21.5 27.5L28.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M21.5 27.5L28.5,36.5');
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
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "87c7c431-9133-aec3-e286-02345ccb1d94",
    "x": 72,
    "y": 381,
    "width": 20,
    "height": 25.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": true,
      "nodeLabel": "varB"
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "73d43d4e-400a-8d40-f997-a36661edb7a0",
    "x": 126,
    "y": 165,
    "width": 20,
    "height": 25.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": true,
      "nodeLabel": "varA"
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "f2e1770c-c846-c90f-c304-e22fa8d82b2e",
    "x": 784,
    "y": 118,
    "width": 79.7691421508789,
    "height": 25.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_TerminalOutput",
    "bgColor": "#626262",
    "color": "#FF0000",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "heyVar_A",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "2073436e-6e29-8d78-1912-18281c88cd28",
    "x": 845,
    "y": 323,
    "width": 79.7691421508789,
    "height": 25.199999809265137,
    "alpha": 0.4,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_TerminalOutput",
    "bgColor": "#626262",
    "color": "#FF0000",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "world_445",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Multiply",
    "id": "8d74856f-0bf5-31ad-28b6-1fb899356e63",
    "x": 327,
    "y": 309,
    "width": 84.39610736639997,
    "height": 60,
    "alpha": 0.4,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Multiply",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Subtract",
    "id": "dc85acd8-ef5e-95b7-010f-a948dd7c1331",
    "x": 470,
    "y": 154,
    "width": 84.39610736639997,
    "height": 60,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Subtract",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "HoverConnection",
    "id": "04a5ae78-40cd-5db4-cce6-bae8dcc60ad8",
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
        "x": 94.05,
        "y": 395
      },
      {
        "x": 210.17958416640002,
        "y": 395
      },
      {
        "x": 210.17958416640002,
        "y": 358.7528342528002
      },
      {
        "x": 326.3091683328,
        "y": 358.7528342528002
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
      "node": "87c7c431-9133-aec3-e286-02345ccb1d94",
      "port": "out1"
    },
    "target": {
      "node": "8d74856f-0bf5-31ad-28b6-1fb899356e63",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "f961d5c1-7637-7d94-afcf-c2d36c6b09ca",
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
        "x": 148.05,
        "y": 179
      },
      {
        "x": 237.17958416640002,
        "y": 179
      },
      {
        "x": 237.17958416640002,
        "y": 320.3128769536002
      },
      {
        "x": 326.3091683328,
        "y": 320.3128769536002
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
      "node": "73d43d4e-400a-8d40-f997-a36661edb7a0",
      "port": "out1"
    },
    "target": {
      "node": "8d74856f-0bf5-31ad-28b6-1fb899356e63",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "c717c036-8e53-98e3-e5f5-193fea8b73e8",
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
        "x": 468.4232626176,
        "y": 336.3517395968002
      },
      {
        "x": 656.7116313088,
        "y": 336.3517395968002
      },
      {
        "x": 656.7116313088,
        "y": 337
      },
      {
        "x": 845,
        "y": 337
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
      "node": "8d74856f-0bf5-31ad-28b6-1fb899356e63",
      "port": "out1"
    },
    "target": {
      "node": "2073436e-6e29-8d78-1912-18281c88cd28",
      "port": "out1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "8a137738-a5b3-8372-8c65-bb75561d9993",
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
        "x": 148.05,
        "y": 179
      },
      {
        "x": 308.6795841664,
        "y": 179
      },
      {
        "x": 308.6795841664,
        "y": 165.3128769536002
      },
      {
        "x": 469.3091683328,
        "y": 165.3128769536002
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
      "node": "73d43d4e-400a-8d40-f997-a36661edb7a0",
      "port": "out1"
    },
    "target": {
      "node": "dc85acd8-ef5e-95b7-010f-a948dd7c1331",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "39d06e20-452b-e930-da07-38bf64c6a626",
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
        "x": 555.4232626176,
        "y": 183.3517395968002
      },
      {
        "x": 669.7116313088,
        "y": 183.3517395968002
      },
      {
        "x": 669.7116313088,
        "y": 132
      },
      {
        "x": 784,
        "y": 132
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
      "node": "dc85acd8-ef5e-95b7-010f-a948dd7c1331",
      "port": "out1"
    },
    "target": {
      "node": "f2e1770c-c846-c90f-c304-e22fa8d82b2e",
      "port": "out1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "0b5750d1-ecb7-0f76-da1c-58e17ae905e7",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 409.4232626176,
        "y": 368.3517395968002
      },
      {
        "x": 439.3662154752,
        "y": 368.3517395968002
      },
      {
        "x": 439.3662154752,
        "y": 203.7528342528002
      },
      {
        "x": 469.3091683328,
        "y": 203.7528342528002
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
      "node": "8d74856f-0bf5-31ad-28b6-1fb899356e63",
      "port": "out1"
    },
    "target": {
      "node": "dc85acd8-ef5e-95b7-010f-a948dd7c1331",
      "port": "in2"
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