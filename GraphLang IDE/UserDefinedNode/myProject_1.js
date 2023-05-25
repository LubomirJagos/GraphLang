// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
myProject_1 = GraphLang.UserDefinedNode.extend({            

   NAME: "myProject_1",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:42, height:42, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // out18
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(128.57142857142858, 71.42857142857143));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out18");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // out13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(128.57142857142858, 11.904761904761905));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out13");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
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
    
    symbolPicture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAclJREFUaEPtWstKw0AUnTQx1tRmZ0NIahaCLxACDZS6Ei0YbFYurCDFjZB8gLuKiX/R/E0/IIV8kgy0WkotgxCa9NxAdoG55547N2fOHYmBPhIobkbA0ZgnxolxkAxQqYMQ/QNTiHHXdW8YY/ytwjPN83z6V6CGYTRqtdqFKPDE87y40+mUGvhsNmNZln3leZ6sC9QwjJYsy4P949NHYeBhGMZRFJUa+GQyYWmargXOmZZl+al+cvV+4PUvYYCbpunVnbNY6w0CrXsvJlld102qzrjtOG+N3iA57D9bypENA1yy2u0P3R99Nv1XRVL2oICPdX8UowFnvNS16yBu3g1tpFJnsM0N9nfGBQikgFkor7lkPYcRMKuSk4BvEuG7oNyI8XkGqNSp1NdkgPZ4hY0Iam7U3ARcNNrjtMcFymQLn2xyWeGbGz+dqaoqPlCoussKex6HdWBgPTdUl5UPFCB9dclqO2PdfwEeKNwObaWFMztbGig8BFrXh5mdcU8dcz4OK2BWBgpYknX5oEIuK7ms5LL+ZgDaetqFC37/aW47c6VzAV6oq2/BPit8SQJeeIpLtgAxXjJCCg+HGC88xSVbgBgvGSGFh/MNvLkJDE3ygUYAAAAASUVORK5CYII=",
    
    jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "8f2df52a-940f-0d78-4519-155b62813848",
    "x": 110,
    "y": 124,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false,
      "nodeLabel": "nodeLabel",
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
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
    "type": "GraphLangTestShape3",
    "id": "80ca940e-ffb7-5ff9-85a4-fb9c09f849e5",
    "x": 264,
    "y": 84,
    "width": 42,
    "height": 42,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLangTestShape3",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "81d8f273-39df-cd13-a1ac-64a14e8ca5ec",
    "x": 565,
    "y": 137,
    "width": 79.59375,
    "height": 25,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_TerminalOutput",
    "bgColor": "#626262",
    "color": "#FF0000",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "out18",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "ConsoleLog",
    "id": "4eb2531c-d1e4-2c34-22f5-104b08a03248",
    "x": 263,
    "y": 204,
    "width": 65.82079999999974,
    "height": 55,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "ConsoleLog",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLangTestShape3",
    "id": "fe7285e2-e4d4-5efd-a6f8-77aaa2336229",
    "x": 294,
    "y": 351,
    "width": 42,
    "height": 42,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLangTestShape3",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "d818100b-954e-940c-b7ff-b11235cb9e2d",
    "x": 490,
    "y": 219,
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
    "text": "out13",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "HoverConnection",
    "id": "878d2c26-5d7c-1fac-7c65-a5f57c16e746",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 327,
        "y": 108
      },
      {
        "x": 446,
        "y": 108
      },
      {
        "x": 446,
        "y": 151
      },
      {
        "x": 565,
        "y": 151
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
      "node": "80ca940e-ffb7-5ff9-85a4-fb9c09f849e5",
      "port": "subtractResult"
    },
    "target": {
      "node": "81d8f273-39df-cd13-a1ac-64a14e8ca5ec",
      "port": "out1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "32f0b47f-69f7-354f-6d59-d70829f81c25",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 327,
        "y": 108
      },
      {
        "x": 347,
        "y": 108
      },
      {
        "x": 347,
        "y": 224.5
      },
      {
        "x": 309.5,
        "y": 224.5
      },
      {
        "x": 309.5,
        "y": 341
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "80ca940e-ffb7-5ff9-85a4-fb9c09f849e5",
      "port": "subtractResult"
    },
    "target": {
      "node": "fe7285e2-e4d4-5efd-a6f8-77aaa2336229",
      "port": "in0"
    }
  },
  {
    "type": "HoverConnection",
    "id": "565ff10e-3adc-ef8a-993f-798622df57e1",
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
        "x": 127.85,
        "y": 136
      },
      {
        "x": 221.425,
        "y": 136
      },
      {
        "x": 221.425,
        "y": 425.5
      },
      {
        "x": 315,
        "y": 425.5
      },
      {
        "x": 315,
        "y": 405.5
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 2
    },
    "source": {
      "node": "8f2df52a-940f-0d78-4519-155b62813848",
      "port": "out1"
    },
    "target": {
      "node": "fe7285e2-e4d4-5efd-a6f8-77aaa2336229",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "422806bc-6665-7efe-9cbe-da707d122c09",
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
        "x": 127.85,
        "y": 136
      },
      {
        "x": 203.675,
        "y": 136
      },
      {
        "x": 203.675,
        "y": 54
      },
      {
        "x": 279.5,
        "y": 54
      },
      {
        "x": 279.5,
        "y": 74
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "8f2df52a-940f-0d78-4519-155b62813848",
      "port": "out1"
    },
    "target": {
      "node": "80ca940e-ffb7-5ff9-85a4-fb9c09f849e5",
      "port": "in0"
    }
  },
  {
    "type": "HoverConnection",
    "id": "3aa37f19-909a-8e76-a91a-5f846b79cf13",
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
        "x": 127.85,
        "y": 136
      },
      {
        "x": 206.425,
        "y": 136
      },
      {
        "x": 206.425,
        "y": 158.5
      },
      {
        "x": 285,
        "y": 158.5
      },
      {
        "x": 285,
        "y": 138.5
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 2
    },
    "source": {
      "node": "8f2df52a-940f-0d78-4519-155b62813848",
      "port": "out1"
    },
    "target": {
      "node": "80ca940e-ffb7-5ff9-85a4-fb9c09f849e5",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "6243de2f-b293-1e83-43e3-1d0261b6e97b",
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
        "x": 127.85,
        "y": 136
      },
      {
        "x": 192.83539999999988,
        "y": 136
      },
      {
        "x": 192.83539999999988,
        "y": 232
      },
      {
        "x": 257.82079999999974,
        "y": 232
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
      "node": "8f2df52a-940f-0d78-4519-155b62813848",
      "port": "out1"
    },
    "target": {
      "node": "4eb2531c-d1e4-2c34-22f5-104b08a03248",
      "port": "msgStr"
    }
  },
  {
    "type": "HoverConnection",
    "id": "a4a4d7b3-3350-8a1a-27a6-92ad44a49cd3",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 357,
        "y": 375
      },
      {
        "x": 423.5,
        "y": 375
      },
      {
        "x": 423.5,
        "y": 233
      },
      {
        "x": 490,
        "y": 233
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
      "node": "fe7285e2-e4d4-5efd-a6f8-77aaa2336229",
      "port": "subtractResult"
    },
    "target": {
      "node": "d818100b-954e-940c-b7ff-b11235cb9e2d",
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