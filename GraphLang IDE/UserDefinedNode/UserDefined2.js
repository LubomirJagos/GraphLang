// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
GraphLang.UserDefinedNode.UserDefined2 = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.UserDefinedNode.UserDefined2",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:120.2750015258789,height:87.60000038146973},attr), setter, getter);
     var port;
     // outUser1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.43421197442258, 68.03652981955588));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("outUser1");
     port.setMaxFanOut(20);
     // inUser1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.6628559340069275, 61.18721478088929));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("inUser1");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 120.2750015258789;
      this.originalHeight= 87.60000038146973;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L120.2750015258789,0 L120.2750015258789,87.60000038146973 L0,87.60000038146973");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M33 28.600000381469727L87 28.600000381469727L87 87.60000038146973L33 87.60000038146973Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'UserDefined 1');
        shape.attr({"x":13,"y":13.800000190734863,"text-anchor":"start","text":"UserDefined 1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M31.5 50.5L0.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M31.5 50.5L0.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M85.5 55.5L116.5,55.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M85.5 55.5L116.5,55.5');
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

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
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

    jsonDocument: [
      {
        "type": "GraphLang.Shapes.Basic.ConstantNode",
        "id": "d9815314-35bd-19cd-66a8-8b8608cfbd7d",
        "x": 125,
        "y": 46.80000305175781,
        "width": 23.939844131469727,
        "height": 21.199999809265137,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "isTerminal": true
        },
        "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
        "bgColor": "#FFC300",
        "color": "#DD2241",
        "stroke": 3,
        "radius": 0,
        "dasharray": "-",
        "text": "7.7",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 12,
        "fontColor": "#000000",
        "fontFamily": null,
        "editor": "draw2d.ui.LabelInplaceEditor"
      },
      {
        "type": "GraphLang.Shapes.Basic.ConstantNode",
        "id": "91a2ea91-3389-7704-2270-03e781048f71",
        "x": 137,
        "y": 93.80000305175781,
        "width": 21.161523818969727,
        "height": 21.199999809265137,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "isTerminal": true
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
        "type": "GraphLang.ArduinoLib.Node.Add",
        "id": "bdf6fc7e-f166-4257-dc59-0ce453f902b2",
        "x": 270,
        "y": 66.80000305175781,
        "width": 130.8515625,
        "height": 83,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "GraphLang_ArduinoLib_Node_Add",
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "labels": []
      },
      {
        "type": "GraphLang.Shapes.Basic.Return",
        "id": "75afb636-6697-fa23-2347-d3bc062e2215",
        "x": 465,
        "y": 84.80000305175781,
        "width": 36.16152381896973,
        "height": 21.199999809265137,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "GraphLang_Shapes_Basic_Return",
        "bgColor": "#0000FF",
        "color": "#0000FF",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "text": "return",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 12,
        "fontColor": "#FFFFFF",
        "fontFamily": null
      },
      {
        "type": "HoverConnection",
        "id": "3175808e-d725-270c-81e4-124308fe8eb5",
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
            "x": 384.453125,
            "y": 105.80000305175781
          },
          {
            "x": 424.7265625,
            "y": 105.80000305175781
          },
          {
            "x": 424.7265625,
            "y": 96.60000324249268
          },
          {
            "x": 465,
            "y": 96.60000324249268
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
          "node": "bdf6fc7e-f166-4257-dc59-0ce453f902b2",
          "port": "out1"
        },
        "target": {
          "node": "75afb636-6697-fa23-2347-d3bc062e2215",
          "port": "out1"
        }
      },
      {
        "type": "HoverConnection",
        "id": "e7fac89d-aa3b-8c76-87b5-5907d79a11b4",
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
            "x": 161.5175004005432,
            "y": 105.60000324249268
          },
          {
            "x": 234.4853127002716,
            "y": 105.60000324249268
          },
          {
            "x": 234.4853127002716,
            "y": 116.80000305175781
          },
          {
            "x": 307.453125,
            "y": 116.80000305175781
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
          "node": "91a2ea91-3389-7704-2270-03e781048f71",
          "port": "out1"
        },
        "target": {
          "node": "bdf6fc7e-f166-4257-dc59-0ce453f902b2",
          "port": "in2"
        }
      },
      {
        "type": "HoverConnection",
        "id": "99ae69cb-e660-6554-92a7-b9ec180cc937",
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "HoverConnection",
        "stroke": 1.35,
        "color": "#AA2200",
        "outlineStroke": 0,
        "outlineColor": "none",
        "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
        "vertex": [
          {
            "x": 153.021875,
            "y": 58.600003242492676
          },
          {
            "x": 230.2375,
            "y": 58.600003242492676
          },
          {
            "x": 230.2375,
            "y": 94.80000305175781
          },
          {
            "x": 307.453125,
            "y": 94.80000305175781
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
          "node": "d9815314-35bd-19cd-66a8-8b8608cfbd7d",
          "port": "out1"
        },
        "target": {
          "node": "bdf6fc7e-f166-4257-dc59-0ce453f902b2",
          "port": "in1"
        }
      }
    ]  

});
