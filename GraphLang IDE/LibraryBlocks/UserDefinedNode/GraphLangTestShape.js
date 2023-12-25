GraphLangTestShape = GraphLang.UserDefinedNode.extend({
NAME: "GraphLangTestShape",
/******************************************* STORED FROM PREVIOUS NODE **********************************/
init: function(attr,setter,getter){
	this._super( $.extend({stroke:0, bgColor:null, width:42, height:42, flagAutoCreatePorts: false},attr), setter, getter);
	var port;
	this.persistPorts=false;
},
createShapeElement: function(){
	var shape = this._super();
	this.originalWidth = 42;
	this.originalHeight = 42;
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


/********************************************************************************************************/
jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.Loop2.WhileLayer",
    "id": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "x": 569,
    "y": 207,
    "width": 798,
    "height": 301,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop2_WhileLayer",
    "ports": [],
    "bgColor": "#F0F0F0",
    "color": "#333333",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "labels": [
      {
        "type": "GraphLang.Shapes.Basic.LeftTunnel",
        "id": "50f2f3f7-af3a-5d49-48b6-7632228dfdee",
        "x": -15,
        "y": 239.87114468661585,
        "width": 30,
        "height": 15,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "executionOrder": -1
        },
        "cssClass": "GraphLang_Shapes_Basic_LeftTunnel",
        "ports": [
          {
            "type": "draw2d.InputPort",
            "id": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-in0",
            "width": 8,
            "height": 8,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "errorDatatype",
              "value": 0,
              "status": 0,
              "executionOrder": -1
            },
            "cssClass": "draw2d_InputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-in0",
            "port": "draw2d.InputPort",
            "locator": "draw2d.layout.locator.InputPortLocator"
          },
          {
            "type": "draw2d.OutputPort",
            "id": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-out0",
            "width": 8,
            "height": 8,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "errorDatatype",
              "value": 0,
              "status": 0,
              "executionOrder": -1
            },
            "cssClass": "draw2d_OutputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-out0",
            "port": "draw2d.OutputPort",
            "locator": "draw2d.layout.locator.OutputPortLocator"
          }
        ],
        "bgColor": "#000000",
        "color": "#000000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "locator": "GraphLang.Utils.LeftRelPortLocator",
        "locatorX": 15,
        "locatorY": 79.69141019488899
      },
      {
        "type": "GraphLang.Shapes.Basic.LeftTunnel",
        "id": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8",
        "x": -15,
        "y": 217.9286699127882,
        "width": 30,
        "height": 15,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "executionOrder": -1
        },
        "cssClass": "GraphLang_Shapes_Basic_LeftTunnel",
        "ports": [
          {
            "type": "draw2d.InputPort",
            "id": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-in0",
            "width": 8,
            "height": 8,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "int",
              "executionOrder": -1,
              "value": 0,
              "status": 0
            },
            "cssClass": "draw2d_InputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-in0",
            "port": "draw2d.InputPort",
            "locator": "draw2d.layout.locator.InputPortLocator"
          },
          {
            "type": "draw2d.OutputPort",
            "id": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-out0",
            "width": 8,
            "height": 8,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "int",
              "value": 0,
              "status": 0,
              "executionOrder": -1
            },
            "cssClass": "draw2d_OutputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-out0",
            "port": "draw2d.OutputPort",
            "locator": "draw2d.layout.locator.OutputPortLocator"
          }
        ],
        "bgColor": "#4286F4",
        "color": "#000000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "locator": "GraphLang.Utils.LeftRelPortLocator",
        "locatorX": 15,
        "locatorY": 72.40155146604259
      }
    ]
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "8a3deb74-af34-4338-f05d-e4d4d8cbb03e",
    "x": 1056,
    "y": 308,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "String",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "#FF3385",
    "color": "#FF3385",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "some text",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#000000",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Serial.println",
    "id": "62ef5ef7-b8f0-5042-b357-3be382a78449",
    "x": 1149,
    "y": 365,
    "width": 86,
    "height": 78.21264823944955,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Serial_println",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.ArduinoLib.Node.digitalWrite",
    "id": "701a4f5a-465f-6e21-6dae-19279b7dcde4",
    "x": 744,
    "y": 382,
    "width": 98,
    "height": 76.78911304473877,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_ArduinoLib_Node_digitalWrite",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "8340120f-087c-5caa-3fd1-a04129f213b6",
    "x": 635,
    "y": 269,
    "width": 32.5615234375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "bool",
      "isTerminal": false,
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
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
    "type": "GraphLang.ArduinoLib.Node.Not",
    "id": "3baaeb6e-0c1b-1dec-f10c-638167ad2d35",
    "x": 770,
    "y": 328,
    "width": 87,
    "height": 27.840000000000032,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_ArduinoLib_Node_Not",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.FeedbackNode",
    "id": "864d9afa-48ad-47dc-f74b-71230222f5e8",
    "x": 764,
    "y": 226,
    "width": 80,
    "height": 61,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_FeedbackNode",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "46a4753d-810b-ae04-c557-978a03dbfa66",
    "x": 946,
    "y": 469,
    "width": 32.5615234375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "bool",
      "isTerminal": false,
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
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
    "type": "GraphLang.ArduinoLib.Node.waitUntilNextMs",
    "id": "27b35025-09cf-7ac3-9856-cd2c6fa76545",
    "x": 906,
    "y": 382,
    "width": 135,
    "height": 71,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_ArduinoLib_Node_waitUntilNextMs",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "a7ad82f3-a78c-1bda-84f6-3144234afe06",
    "x": 955,
    "y": 279,
    "width": 32.6845703125,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false,
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "16444971-f8a3-01c6-9c37-2dc3214abb37",
    "bgColor": "#0000FF",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "1000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.pinMode",
    "id": "ed79e79a-4f6e-f3d8-4bc8-9c6d99e2e808",
    "x": 284,
    "y": 371,
    "width": 93,
    "height": 87.02859020233154,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": -1
    },
    "cssClass": "GraphLang_ArduinoLib_Node_pinMode",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "fe507291-1cb4-72ee-954b-80bc4ead3a60",
    "x": 220,
    "y": 226,
    "width": 21.5615234375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false,
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "13",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "c5117c0b-0391-a0cf-dfe5-2b418586314e",
    "x": 161,
    "y": 352,
    "width": 28.669921875,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "bool",
      "isTerminal": false,
      "executionOrder": -1
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#009900",
    "color": "#009900",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "true",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Serial.begin",
    "id": "d1fe42b1-af92-a2a8-6182-4888900cc981",
    "x": 448,
    "y": 323,
    "width": 88.701171875,
    "height": 80.91549715073495,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Serial_begin",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "68fe7d8a-e7cb-24b4-32f8-026df9fda2fe",
    "x": 338,
    "y": 125,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#0000FF",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "9600",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "HoverConnection",
    "id": "b6909650-e53c-db6d-c8c3-980078ee4978",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 1042.5,
        "y": 438
      },
      {
        "x": 1097.25,
        "y": 438
      },
      {
        "x": 1097.25,
        "y": 429.4391773146493
      },
      {
        "x": 1152,
        "y": 429.4391773146493
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
      "node": "27b35025-09cf-7ac3-9856-cd2c6fa76545",
      "port": "out1"
    },
    "target": {
      "node": "62ef5ef7-b8f0-5042-b357-3be382a78449",
      "port": "errorIn"
    }
  },
  {
    "type": "HoverConnection",
    "id": "710b07b1-8534-9c21-73c4-106ed9051b70",
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
        "x": 376.87255859375,
        "y": 137
      },
      {
        "x": 414.186279296875,
        "y": 137
      },
      {
        "x": 414.186279296875,
        "y": 351.1100420692077
      },
      {
        "x": 451.5,
        "y": 351.1100420692077
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
      "node": "68fe7d8a-e7cb-24b4-32f8-026df9fda2fe",
      "port": "out1"
    },
    "target": {
      "node": "d1fe42b1-af92-a2a8-6182-4888900cc981",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "f89f401e-a56a-23d2-98c1-130516440b7f",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 841.4333343505859,
        "y": 449.78911304473877
      },
      {
        "x": 876.466667175293,
        "y": 449.78911304473877
      },
      {
        "x": 876.466667175293,
        "y": 434
      },
      {
        "x": 911.5,
        "y": 434
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
      "node": "701a4f5a-465f-6e21-6dae-19279b7dcde4",
      "port": "errorOut"
    },
    "target": {
      "node": "27b35025-09cf-7ac3-9856-cd2c6fa76545",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "fbbee574-68fa-e23d-d198-a9770fc81586",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "sourceTunnel": "50f2f3f7-af3a-5d49-48b6-7632228dfdee",
      "sourcePortName": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-out0"
    },
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 584,
        "y": 454.3711446866158
      },
      {
        "x": 666.716667175293,
        "y": 454.3711446866158
      },
      {
        "x": 666.716667175293,
        "y": 449.78911304473877
      },
      {
        "x": 749.4333343505859,
        "y": 449.78911304473877
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
      "node": "16444971-f8a3-01c6-9c37-2dc3214abb37",
      "port": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-out0"
    },
    "target": {
      "node": "701a4f5a-465f-6e21-6dae-19279b7dcde4",
      "port": "errorIn"
    }
  },
  {
    "type": "HoverConnection",
    "id": "8756ad1c-b05e-9775-441a-60cd4c057369",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "sourceTunnel": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8",
      "sourcePortName": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-out0"
    },
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 584,
        "y": 432.4286699127882
      },
      {
        "x": 666.716667175293,
        "y": 432.4286699127882
      },
      {
        "x": 666.716667175293,
        "y": 433.78911304473877
      },
      {
        "x": 749.4333343505859,
        "y": 433.78911304473877
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
      "node": "16444971-f8a3-01c6-9c37-2dc3214abb37",
      "port": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-out0"
    },
    "target": {
      "node": "701a4f5a-465f-6e21-6dae-19279b7dcde4",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "946c1a99-4d95-2361-2773-a11a5084e825",
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
        "x": 863.2578108581718,
        "y": 340.84000000000003
      },
      {
        "x": 883.2578108581718,
        "y": 340.84000000000003
      },
      {
        "x": 883.2578108581718,
        "y": 236
      },
      {
        "x": 843.9278720000002,
        "y": 236
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 1
    },
    "source": {
      "node": "3baaeb6e-0c1b-1dec-f10c-638167ad2d35",
      "port": "out1"
    },
    "target": {
      "node": "864d9afa-48ad-47dc-f74b-71230222f5e8",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "95954b89-e301-0441-620b-15b43c267f3d",
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
        "x": 993.87255859375,
        "y": 291
      },
      {
        "x": 1013.87255859375,
        "y": 291
      },
      {
        "x": 1013.87255859375,
        "y": 349
      },
      {
        "x": 891.5,
        "y": 349
      },
      {
        "x": 891.5,
        "y": 407
      },
      {
        "x": 911.5,
        "y": 407
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
      "node": "a7ad82f3-a78c-1bda-84f6-3144234afe06",
      "port": "out1"
    },
    "target": {
      "node": "27b35025-09cf-7ac3-9856-cd2c6fa76545",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "35380cea-7cd9-d235-05e6-4de99cc8d8a5",
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
        "x": 984.50751953125,
        "y": 481
      },
      {
        "x": 1171.7637597656249,
        "y": 481
      },
      {
        "x": 1171.7637597656249,
        "y": 477.9
      },
      {
        "x": 1359.02,
        "y": 477.9
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
      "node": "46a4753d-810b-ae04-c557-978a03dbfa66",
      "port": "out1"
    },
    "target": {
      "node": "16444971-f8a3-01c6-9c37-2dc3214abb37",
      "port": "stopTerminal"
    }
  },
  {
    "type": "HoverConnection",
    "id": "899059b9-c3e2-d1ec-e2b9-69a5e6d38186",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "targetTunnel": "50f2f3f7-af3a-5d49-48b6-7632228dfdee",
      "targetPortName": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-in0"
    },
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 532.623283875,
        "y": 389.44002606920776
      },
      {
        "x": 543.3116419375,
        "y": 389.44002606920776
      },
      {
        "x": 543.3116419375,
        "y": 454.3711446866158
      },
      {
        "x": 554,
        "y": 454.3711446866158
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
      "node": "d1fe42b1-af92-a2a8-6182-4888900cc981",
      "port": "errorOut"
    },
    "target": {
      "node": "16444971-f8a3-01c6-9c37-2dc3214abb37",
      "port": "50f2f3f7-af3a-5d49-48b6-7632228dfdee-in0"
    }
  },
  {
    "type": "HoverConnection",
    "id": "70aa64b8-aa53-bcdd-4970-745147c13a37",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "targetTunnel": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8",
      "targetPortName": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-in0"
    },
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 244.85751953125,
        "y": 238
      },
      {
        "x": 399.428759765625,
        "y": 238
      },
      {
        "x": 399.428759765625,
        "y": 432.4286699127882
      },
      {
        "x": 554,
        "y": 432.4286699127882
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
      "node": "fe507291-1cb4-72ee-954b-80bc4ead3a60",
      "port": "out1"
    },
    "target": {
      "node": "16444971-f8a3-01c6-9c37-2dc3214abb37",
      "port": "4edde792-2e9b-3fdd-9bf7-7760ed8702f8-in0"
    }
  },
  {
    "type": "HoverConnection",
    "id": "3fd3ef3a-a6b2-09c3-e97b-79a6bc3366bf",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 382.65864714201916,
        "y": 449.96809509412776
      },
      {
        "x": 417.0793235710096,
        "y": 449.96809509412776
      },
      {
        "x": 417.0793235710096,
        "y": 389.44002606920776
      },
      {
        "x": 451.5,
        "y": 389.44002606920776
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
      "node": "ed79e79a-4f6e-f3d8-4bc8-9c6d99e2e808",
      "port": "errorOut"
    },
    "target": {
      "node": "d1fe42b1-af92-a2a8-6182-4888900cc981",
      "port": "errorIn"
    }
  },
  {
    "type": "HoverConnection",
    "id": "5fd4e2ef-38af-6fa4-6dcd-d35884f8d79f",
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
        "x": 244.85751953125,
        "y": 238
      },
      {
        "x": 264.92161192738223,
        "y": 238
      },
      {
        "x": 264.92161192738223,
        "y": 426.52859020233154
      },
      {
        "x": 284.9857043235145,
        "y": 426.52859020233154
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
      "node": "fe507291-1cb4-72ee-954b-80bc4ead3a60",
      "port": "out1"
    },
    "target": {
      "node": "ed79e79a-4f6e-f3d8-4bc8-9c6d99e2e808",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "8a382cb4-46f4-7d7e-895a-5befe90d83e8",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 194.6041015625,
        "y": 364
      },
      {
        "x": 239.79490294300723,
        "y": 364
      },
      {
        "x": 239.79490294300723,
        "y": 404.8251383292727
      },
      {
        "x": 284.9857043235145,
        "y": 404.8251383292727
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
      "node": "c5117c0b-0391-a0cf-dfe5-2b418586314e",
      "port": "out1"
    },
    "target": {
      "node": "ed79e79a-4f6e-f3d8-4bc8-9c6d99e2e808",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "3ae393ab-5083-dea7-24ba-7eec7c7a9da5",
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
        "x": 763.8166656000002,
        "y": 236
      },
      {
        "x": 743.8166656000002,
        "y": 236
      },
      {
        "x": 743.8166656000002,
        "y": 340.84000000000003
      },
      {
        "x": 764.7222250841056,
        "y": 340.84000000000003
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 3,
      "toDir": 3
    },
    "source": {
      "node": "864d9afa-48ad-47dc-f74b-71230222f5e8",
      "port": "out1"
    },
    "target": {
      "node": "3baaeb6e-0c1b-1dec-f10c-638167ad2d35",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "7a38aebf-b002-cff7-7197-df3530275dc9",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 673.50751953125,
        "y": 281
      },
      {
        "x": 738.753759765625,
        "y": 281
      },
      {
        "x": 738.753759765625,
        "y": 303.95
      },
      {
        "x": 804,
        "y": 303.95
      },
      {
        "x": 804,
        "y": 283.95
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
      "node": "8340120f-087c-5caa-3fd1-a04129f213b6",
      "port": "out1"
    },
    "target": {
      "node": "864d9afa-48ad-47dc-f74b-71230222f5e8",
      "port": "in2"
    }
  },
  {
    "type": "HoverConnection",
    "id": "2b9dab24-2bca-7a27-7d53-dd170fdc77c3",
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
        "x": 763.8166656000002,
        "y": 236
      },
      {
        "x": 729.4333343505859,
        "y": 236
      },
      {
        "x": 729.4333343505859,
        "y": 414.78911304473877
      },
      {
        "x": 749.4333343505859,
        "y": 414.78911304473877
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 3,
      "toDir": 3
    },
    "source": {
      "node": "864d9afa-48ad-47dc-f74b-71230222f5e8",
      "port": "out1"
    },
    "target": {
      "node": "701a4f5a-465f-6e21-6dae-19279b7dcde4",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "7c562968-b75f-d030-89c9-c531afb3e9c1",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#FF3385",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 1121.81982421875,
        "y": 320
      },
      {
        "x": 1136.909912109375,
        "y": 320
      },
      {
        "x": 1136.909912109375,
        "y": 392.0477960154494
      },
      {
        "x": 1152,
        "y": 392.0477960154494
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
      "node": "8a3deb74-af34-4338-f05d-e4d4d8cbb03e",
      "port": "out1"
    },
    "target": {
      "node": "62ef5ef7-b8f0-5042-b357-3be382a78449",
      "port": "in1"
    }
  }
],
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
}
});
