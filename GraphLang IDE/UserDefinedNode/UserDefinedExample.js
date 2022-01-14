GraphLang.UserDefinedNode.UserDefinedExample = GraphLang.UserDefinedNode.extend({
NAME: "GraphLang.UserDefinedNode.UserDefinedExample",
createShapeElement : function()
{
var shape = this._super();
  this.originalWidth = 153.60000000000008;
  this.originalHeight= 87;
  return shape;
},
createSet: function()
{
    this.canvas.paper.setStart();
    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L153.60000000000008,0 L153.60000000000008,87 L0,87");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");
    // Rectangle
    shape = this.canvas.paper.path("M33.44544999999988 0L127.44544999999988 0L127.44544999999988 87L33.44544999999988 87Z");
    shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");
    // Line_shadow
    shape = this.canvas.paper.path("M33.5 20.5L0.5,20.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line_shadow");
    // Line
    shape = this.canvas.paper.path("M33.5 20.5L0.5,20.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line");
    // Line_shadow
    shape = this.canvas.paper.path("M32.5 50.5L16.5,40.5L1.5,40.5L1.5,40.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line_shadow");
    // Line
    shape = this.canvas.paper.path("M32.5 50.5L16.5,40.5L1.5,40.5L1.5,40.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line");
    // Line_shadow
    shape = this.canvas.paper.path("M32.5 63.5L22.5,74.5L5.5,74.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line_shadow");
    // Line
    shape = this.canvas.paper.path("M32.5 63.5L22.5,74.5L5.5,74.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line");
    // Line_shadow
    shape = this.canvas.paper.path("M127.5 42.5L153.5,42.5L153.5,42.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line_shadow");
    // Line
    shape = this.canvas.paper.path("M127.5 42.5L153.5,42.5L153.5,42.5");
    shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
    shape.data("name","Line");
    return this.canvas.paper.setFinish();
},
applyAlpha: function(){},
layerGet: function(name, attributes){
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
layerAttr: function(name, attributes){
 if(this.svgNodes===null) return;
 this.svgNodes.forEach(function(shape){
         if(shape.data("name")===name){
              shape.attr(attributes);
         }
 });
},
layerShow: function(name, flag, duration){
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
getParameterSettings: function(){
    return [];
},
addPort: function(port, locator){
    this._super(port, locator);
    return port;
},
getPersistentAttributes : function(){
    var memento = this._super();
    memento.labels = [];
    this.children.each(function(i,e){
        var labelJSON = e.figure.getPersistentAttributes();
        labelJSON.locator=e.locator.NAME;
        memento.labels.push(labelJSON);
    });
    return memento;
},
setPersistentAttributes : function(memento){
    this._super(memento);
    this.resetChildren();
    $.each(memento.labels, $.proxy(function(i,json){
        var figure =  eval("new "+json.type+"()");
        figure.attr(json);
        var locator =  eval("new "+json.locator+"()");
        this.add(figure, locator);
    },this));
},
jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "e3e3da69-c037-a45a-8164-f199b7c80d8b",
    "x": 95,
    "y": 59,
    "width": 19.59999990463257,
    "height": 25.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "uint",
      "isTerminal": true
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#FFFFFF",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#000000",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "54f2a889-4458-d12e-044d-3464477923ab",
    "x": 78,
    "y": 189,
    "width": 27.939844131469727,
    "height": 25.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "float",
      "isTerminal": true
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#FFC300",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "0.0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#000000",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Add",
    "id": "cf4bb9e3-879a-69ad-3afe-f137f2a2b5b8",
    "x": 167,
    "y": 99,
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
    "id": "5fc76736-c8c6-baf7-6445-0d26d06c5927",
    "x": 401,
    "y": 116,
    "width": 36.16152381896973,
    "height": 21.199999809265137,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_Return",
    "bgColor": "#AAAAAA",
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
    "id": "833dd1ba-c973-06ed-24e6-60e25ba3a865",
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
        "x": 110.22187500000001,
        "y": 202.80000019073486
      },
      {
        "x": 157.3375,
        "y": 202.80000019073486
      },
      {
        "x": 157.3375,
        "y": 149
      },
      {
        "x": 204.453125,
        "y": 149
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
      "node": "54f2a889-4458-d12e-044d-3464477923ab",
      "port": "out1"
    },
    "target": {
      "node": "cf4bb9e3-879a-69ad-3afe-f137f2a2b5b8",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "e099b8ca-f42a-dcc8-a2e1-4047ceffbd61",
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
        "x": 281.453125,
        "y": 138
      },
      {
        "x": 341.2265625,
        "y": 138
      },
      {
        "x": 341.2265625,
        "y": 127.80000019073486
      },
      {
        "x": 401,
        "y": 127.80000019073486
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
      "node": "cf4bb9e3-879a-69ad-3afe-f137f2a2b5b8",
      "port": "out1"
    },
    "target": {
      "node": "5fc76736-c8c6-baf7-6445-0d26d06c5927",
      "port": "out1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "8143157e-ab37-b170-cd87-990575ce0405",
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
        "x": 116.70875020027161,
        "y": 72.80000019073486
      },
      {
        "x": 160.5809376001358,
        "y": 72.80000019073486
      },
      {
        "x": 160.5809376001358,
        "y": 127
      },
      {
        "x": 204.453125,
        "y": 127
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
      "node": "e3e3da69-c037-a45a-8164-f199b7c80d8b",
      "port": "out1"
    },
    "target": {
      "node": "cf4bb9e3-879a-69ad-3afe-f137f2a2b5b8",
      "port": "in1"
    }
  }
]
});
