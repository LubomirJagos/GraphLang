// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape3 = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape3",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:42, height:42, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in0
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-11.904761904761905, 10.714285714285714));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in0");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     // subtractResult
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(154.76190476190476, 61.904761904761905));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("subtractResult");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-11.904761904761905, 88.09523809523809));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 42;
      this.originalHeight= 42;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L42,0 L42,42 L0,42");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0 0L42 0L42 42L0 42Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":27.5,"cy":15.5,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":7,"ry":7,"cx":8.5,"cy":33.5,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        

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
    "id": "0c0cc4d5-7837-43ac-7d91-81a1efbdffc8",
    "x": 130,
    "y": 129,
    "width": 25.5615234375,
    "height": 25,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": true,
      "nodeLabel": "in0"
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "42",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "792e1d0a-5567-a002-74f0-f35ecbb3b938",
    "x": 132,
    "y": 200,
    "width": 31.123046875,
    "height": 25,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": true,
      "nodeLabel": "in1"
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "789",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Subtract",
    "id": "5571162b-6dcb-bdcd-7bd7-7631d5e7fd88",
    "x": 269,
    "y": 190,
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
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "650266dd-29dd-ed58-bfce-ce058a32f58a",
    "x": 474,
    "y": 216,
    "width": 79.59375,
    "height": 25,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_TerminalOutput",
    "bgColor": "#626262",
    "color": "#FF0000",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "subtractResult",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "HoverConnection",
    "id": "57e142b1-2f28-741f-89d0-5c1b0df6b207",
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
        "x": 159.05751953125,
        "y": 143
      },
      {
        "x": 213.68334393202502,
        "y": 143
      },
      {
        "x": 213.68334393202502,
        "y": 201.3128769536002
      },
      {
        "x": 268.3091683328,
        "y": 201.3128769536002
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
      "node": "0c0cc4d5-7837-43ac-7d91-81a1efbdffc8",
      "port": "out1"
    },
    "target": {
      "node": "5571162b-6dcb-bdcd-7bd7-7631d5e7fd88",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "f4e4b87a-865d-0aa8-3d31-fecefee13466",
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
        "x": 168.0650390625,
        "y": 214
      },
      {
        "x": 218.18710369765,
        "y": 214
      },
      {
        "x": 218.18710369765,
        "y": 239.7528342528002
      },
      {
        "x": 268.3091683328,
        "y": 239.7528342528002
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
      "node": "792e1d0a-5567-a002-74f0-f35ecbb3b938",
      "port": "out1"
    },
    "target": {
      "node": "5571162b-6dcb-bdcd-7bd7-7631d5e7fd88",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "2bf27e39-a703-8814-cdd0-167b61eb1235",
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
        "x": 354.4232626176,
        "y": 219.3517395968002
      },
      {
        "x": 414.2116313088,
        "y": 219.3517395968002
      },
      {
        "x": 414.2116313088,
        "y": 230
      },
      {
        "x": 474,
        "y": 230
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
      "node": "5571162b-6dcb-bdcd-7bd7-7631d5e7fd88",
      "port": "out1"
    },
    "target": {
      "node": "650266dd-29dd-ed58-bfce-ce058a32f58a",
      "port": "out1"
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