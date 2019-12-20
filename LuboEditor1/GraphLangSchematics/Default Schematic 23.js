var jsonDocument = [
  {
    "type": "GraphLang.Shapes.Basic.Loop.WhileLoop",
    "id": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2",
    "x": 97,
    "y": 43,
    "width": 645,
    "height": 413,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop_WhileLoop",
    "bgColor": "#F0F0F0",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "GraphLang.Shapes.Basic.NumericConstantNode",
    "id": "d3fc7ab9-50ba-5ed4-51c5-65128195203b",
    "x": 125,
    "y": 155,
    "width": 164.4375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1
    },
    "cssClass": "GraphLang_Shapes_Basic_NumericConstantNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "64ec3960-855b-5b6f-3195-b5eff263c552",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "bool",
          "value": 0,
          "status": 0,
          "executionOrder": 1
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#37B1DE",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "out1",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "none",
    "color": "#75FF33",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "1",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.digitalWrite",
    "id": "c47df17e-ab31-71ab-0a40-5c59619a6ec8",
    "x": 169,
    "y": 189,
    "width": 102.43333435058594,
    "height": 89,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 2
    },
    "cssClass": "GraphLang_ArduinoLib_Node_digitalWrite",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": [
      {
        "type": "draw2d.shape.basic.Label",
        "id": "fc367b35-5af4-92b1-81a9-b24918566b1b",
        "x": 42.5,
        "y": 32.5,
        "width": 16.015625,
        "height": 21,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "executionOrder"
        },
        "cssClass": "draw2d_shape_basic_Label",
        "ports": [],
        "bgColor": "#FF0000",
        "color": "#FF0000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "text": "2",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 12,
        "fontColor": "#0D0D0D",
        "fontFamily": null,
        "locator": "draw2d.layout.locator.CenterLocator"
      }
    ]
  },
  {
    "type": "GraphLang.ArduinoLib.Node.waitUntilNextMs",
    "id": "9b6e3227-e267-d42a-781c-057e53168011",
    "x": 344,
    "y": 242,
    "width": 135,
    "height": 71,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 3
    },
    "cssClass": "GraphLang_ArduinoLib_Node_waitUntilNextMs",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": [
      {
        "type": "draw2d.shape.basic.Label",
        "id": "9ca555a5-eda8-eb55-0fe8-1f6a2b973690",
        "x": 59.5,
        "y": 23.5,
        "width": 16.015625,
        "height": 21,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "executionOrder"
        },
        "cssClass": "draw2d_shape_basic_Label",
        "ports": [],
        "bgColor": "#FF0000",
        "color": "#FF0000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "text": "3",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 12,
        "fontColor": "#0D0D0D",
        "fontFamily": null,
        "locator": "draw2d.layout.locator.CenterLocator"
      }
    ]
  },
  {
    "type": "GraphLang.Shapes.Basic.NumericConstantNode",
    "id": "9b1af3a9-35f8-6d96-5514-49b933fb5915",
    "x": 231,
    "y": 122,
    "width": 164.4375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1
    },
    "cssClass": "GraphLang_Shapes_Basic_NumericConstantNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "8094d523-6f5b-e133-da8a-a75e4372779e",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "int32",
          "value": 0,
          "status": 0,
          "executionOrder": 1
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#37B1DE",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "out1",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "none",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "4200",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.digitalWrite",
    "id": "a633cb85-d928-9c38-6c66-594ac5eefaea",
    "x": 569,
    "y": 186,
    "width": 102.43333435058594,
    "height": 89,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 4
    },
    "cssClass": "GraphLang_ArduinoLib_Node_digitalWrite",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": [
      {
        "type": "draw2d.shape.basic.Label",
        "id": "48e97bfa-fccc-20eb-7fdd-2e705010640a",
        "x": 42.5,
        "y": 32.5,
        "width": 16.015625,
        "height": 21,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "executionOrder"
        },
        "cssClass": "draw2d_shape_basic_Label",
        "ports": [],
        "bgColor": "#FF0000",
        "color": "#FF0000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "text": "4",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 12,
        "fontColor": "#0D0D0D",
        "fontFamily": null,
        "locator": "draw2d.layout.locator.CenterLocator"
      }
    ]
  },
  {
    "type": "GraphLang.Shapes.Basic.NumericConstantNode",
    "id": "ac88979d-2a46-68b9-0bac-5f79109a63fd",
    "x": 624,
    "y": 366,
    "width": 164.4375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1
    },
    "cssClass": "GraphLang_Shapes_Basic_NumericConstantNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "d4e5295e-cff5-f124-980e-6d811bb3fbae",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "bool",
          "value": 0,
          "status": 0,
          "executionOrder": 1
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#37B1DE",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "out1",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "none",
    "color": "#75FF33",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "false",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.NumericConstantNode",
    "id": "53086e60-032e-e68f-4155-c1a58a7339c6",
    "x": 110,
    "y": 203,
    "width": 164.4375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1
    },
    "cssClass": "GraphLang_Shapes_Basic_NumericConstantNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "b3705a23-2e24-d228-c1ae-acc0f28d6633",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "uint",
          "value": 0,
          "status": 0,
          "executionOrder": 1
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#37B1DE",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "out1",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "none",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "7",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.NumericConstantNode",
    "id": "c5e46d07-c8d7-de39-2db3-0b312cccf12c",
    "x": 470,
    "y": 145,
    "width": 164.4375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1
    },
    "cssClass": "GraphLang_Shapes_Basic_NumericConstantNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "e81cf46d-3f76-b5de-f7af-5aea50640f9b",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "bool",
          "value": 0,
          "status": 0,
          "executionOrder": 1
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#37B1DE",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "out1",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "none",
    "color": "#75FF33",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "draw2d.Connection",
    "id": "944e08db-8bc5-9e40-b939-77f72eecf059",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 269.8828125,
        "y": 134
      },
      {
        "x": 308.94140625,
        "y": 134
      },
      {
        "x": 308.94140625,
        "y": 264
      },
      {
        "x": 348,
        "y": 264
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
      "node": "9b1af3a9-35f8-6d96-5514-49b933fb5915",
      "port": "out1"
    },
    "target": {
      "node": "9b6e3227-e267-d42a-781c-057e53168011",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "f55be0c0-7c71-6202-741c-0b4827ada245",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 127.85,
        "y": 215
      },
      {
        "x": 152.64166717529298,
        "y": 215
      },
      {
        "x": 152.64166717529298,
        "y": 251
      },
      {
        "x": 177.43333435058594,
        "y": 251
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
      "node": "53086e60-032e-e68f-4155-c1a58a7339c6",
      "port": "out1"
    },
    "target": {
      "node": "c47df17e-ab31-71ab-0a40-5c59619a6ec8",
      "port": "in2"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "eaaca4ac-7cce-28d0-ad81-2b80a5bffa20",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 127.85,
        "y": 215
      },
      {
        "x": 521.1416671752929,
        "y": 215
      },
      {
        "x": 521.1416671752929,
        "y": 248
      },
      {
        "x": 577.4333343505859,
        "y": 248
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": true,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "53086e60-032e-e68f-4155-c1a58a7339c6",
      "port": "out1"
    },
    "target": {
      "node": "a633cb85-d928-9c38-6c66-594ac5eefaea",
      "port": "in2"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "4a99bdba-a6a6-fd60-5e48-6c10aa7c12ac",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 142.521875,
        "y": 167
      },
      {
        "x": 159.97760467529298,
        "y": 167
      },
      {
        "x": 159.97760467529298,
        "y": 232
      },
      {
        "x": 177.43333435058594,
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
      "node": "d3fc7ab9-50ba-5ed4-51c5-65128195203b",
      "port": "out1"
    },
    "target": {
      "node": "c47df17e-ab31-71ab-0a40-5c59619a6ec8",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "4c09cc81-cddd-0ab3-62d2-19827aa0c334",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 662.521875,
        "y": 378
      },
      {
        "x": 699.0359375,
        "y": 378
      },
      {
        "x": 699.0359375,
        "y": 414.7
      },
      {
        "x": 735.5500000000001,
        "y": 414.7
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
      "node": "ac88979d-2a46-68b9-0bac-5f79109a63fd",
      "port": "out1"
    },
    "target": {
      "node": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2",
      "port": "stopTerminal"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "aa01d95e-740a-4b84-a305-9dce7aae860a",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#CCCC00",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 269.43333435058594,
        "y": 267
      },
      {
        "x": 308.71666717529297,
        "y": 267
      },
      {
        "x": 308.71666717529297,
        "y": 291
      },
      {
        "x": 348,
        "y": 291
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
      "node": "c47df17e-ab31-71ab-0a40-5c59619a6ec8",
      "port": "errorOut"
    },
    "target": {
      "node": "9b6e3227-e267-d42a-781c-057e53168011",
      "port": "in2"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "885ea330-04c9-b408-ba42-0d878bb2b9bc",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#CCCC00",
    "outlineStroke": 0,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 479,
        "y": 295
      },
      {
        "x": 528.216667175293,
        "y": 295
      },
      {
        "x": 528.216667175293,
        "y": 264
      },
      {
        "x": 577.4333343505859,
        "y": 264
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
      "node": "9b6e3227-e267-d42a-781c-057e53168011",
      "port": "out1"
    },
    "target": {
      "node": "a633cb85-d928-9c38-6c66-594ac5eefaea",
      "port": "errorIn"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "a5c04fd5-fa7b-678a-ce68-6da7ffdb1672",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "wireOwnerId": "5f5a493a-35c2-fcb1-0db5-b3d2b425b8d2"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 487.85,
        "y": 157
      },
      {
        "x": 532.6416671752929,
        "y": 157
      },
      {
        "x": 532.6416671752929,
        "y": 229
      },
      {
        "x": 577.4333343505859,
        "y": 229
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
      "node": "c5e46d07-c8d7-de39-2db3-0b312cccf12c",
      "port": "out1"
    },
    "target": {
      "node": "a633cb85-d928-9c38-6c66-594ac5eefaea",
      "port": "in1"
    }
  }
];
