var jsonDocument = [
  {
    "type": "GraphLang.Shapes.Basic.Loop.ForLoop",
    "id": "a387e8c4-851d-ed60-fc4e-8cb75d047fd7",
    "x": 664,
    "y": 39,
    "width": 160,
    "height": 351,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop_ForLoop",
    "bgColor": "#F0F0F0",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "GraphLang.Shapes.Basic.Loop.WhileLoop",
    "id": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
    "x": 294,
    "y": 33,
    "width": 208,
    "height": 227,
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
    "type": "GraphLang.Shapes.Basic.Loop.NumericConstant",
    "id": "391aa028-5d65-f4d8-1b4a-63f5c79e4f9d",
    "x": 24,
    "y": 71,
    "width": 140.3125,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_Loop_NumericConstant",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "c28645d2-571a-6496-0258-20ef1febfe35",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "bool"
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#009900",
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
    "text": "GraphLang NumericConstant",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Math.Abs",
    "id": "bacbdfb2-0fb7-4510-12fd-21fa97b5c434",
    "x": 335,
    "y": 56,
    "width": 112.00997489540259,
    "height": 71.68,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Math_Abs",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Math.Abs",
    "id": "b81c5da9-604c-1fe0-ec3f-5c610b6dea68",
    "x": 690,
    "y": 248,
    "width": 112.00997489540259,
    "height": 71.68,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Math_Abs",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Serial.println",
    "id": "ff77a021-36fb-2d2e-18ba-be8f49dcdbb2",
    "x": 348,
    "y": 151,
    "width": 96.92204284667969,
    "height": 94.89934667618655,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Serial_println",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "draw2d.Connection",
    "id": "f6db3b7f-d065-5ff1-02ea-e1ed089674ee",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 301.5,
        "y": 190.09973045822102
      },
      {
        "x": 327.25,
        "y": 190.09973045822102
      },
      {
        "x": 327.25,
        "y": 191.94420965218654
      },
      {
        "x": 353,
        "y": 191.94420965218654
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
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "output0"
    },
    "target": {
      "node": "ff77a021-36fb-2d2e-18ba-be8f49dcdbb2",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "c1cbf680-58c3-c918-ab13-2f205349bb88",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 301.5,
        "y": 136.25606469002696
      },
      {
        "x": 319.00957027840013,
        "y": 136.25606469002696
      },
      {
        "x": 319.00957027840013,
        "y": 90.4799999999999
      },
      {
        "x": 336.51914055680027,
        "y": 90.4799999999999
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
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "output0"
    },
    "target": {
      "node": "bacbdfb2-0fb7-4510-12fd-21fa97b5c434",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "40bf276d-090a-4ea2-71d3-68fc9c6dd795",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#AA2200",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 447.32725994619796,
        "y": 91.4799999999999
      },
      {
        "x": 470.913629973099,
        "y": 91.4799999999999
      },
      {
        "x": 470.913629973099,
        "y": 196.83018867924528
      },
      {
        "x": 494.5,
        "y": 196.83018867924528
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "bacbdfb2-0fb7-4510-12fd-21fa97b5c434",
      "port": "out1"
    },
    "target": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "1f6aa14e-2c97-4596-52dc-9e670f06d2e7",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#009900",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 199.0875,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 223.7520215633423
      },
      {
        "x": 286.5,
        "y": 223.7520215633423
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "391aa028-5d65-f4d8-1b4a-63f5c79e4f9d",
      "port": "out1"
    },
    "target": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "e4d11752-ba39-9e90-86e2-f970d1d84a8a",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#009900",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 199.0875,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 190.09973045822102
      },
      {
        "x": 286.5,
        "y": 190.09973045822102
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "391aa028-5d65-f4d8-1b4a-63f5c79e4f9d",
      "port": "out1"
    },
    "target": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "fc760cc3-78d6-51cb-5524-fea9b4217e5b",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#009900",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 199.0875,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 83
      },
      {
        "x": 242.79375,
        "y": 136.25606469002696
      },
      {
        "x": 286.5,
        "y": 136.25606469002696
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "391aa028-5d65-f4d8-1b4a-63f5c79e4f9d",
      "port": "out1"
    },
    "target": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "f351ccb0-c516-28e2-11ea-12da9188c378",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#666666",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 509.5,
        "y": 196.83018867924528
      },
      {
        "x": 583,
        "y": 196.83018867924528
      },
      {
        "x": 583,
        "y": 282
      },
      {
        "x": 656.5,
        "y": 282
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "output0"
    },
    "target": {
      "node": "a387e8c4-851d-ed60-fc4e-8cb75d047fd7",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "84945126-7c78-958b-2fdd-78ea03f5057b",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 509.5,
        "y": 186.42857142857144
      },
      {
        "x": 583,
        "y": 186.42857142857144
      },
      {
        "x": 583,
        "y": 282
      },
      {
        "x": 656.5,
        "y": 282
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
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "output0"
    },
    "target": {
      "node": "a387e8c4-851d-ed60-fc4e-8cb75d047fd7",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "cf6baf36-f73b-5a8f-1a5e-c1256d3cdadf",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 671.5,
        "y": 282
      },
      {
        "x": 681.5095702784001,
        "y": 282
      },
      {
        "x": 681.5095702784001,
        "y": 282.4799999999999
      },
      {
        "x": 691.5191405568003,
        "y": 282.4799999999999
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
      "node": "a387e8c4-851d-ed60-fc4e-8cb75d047fd7",
      "port": "output0"
    },
    "target": {
      "node": "b81c5da9-604c-1fe0-ec3f-5c610b6dea68",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "b419846d-9537-5dba-5fcb-55b9bcf39f92",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 671.5,
        "y": 282
      },
      {
        "x": 681.5095702784001,
        "y": 282
      },
      {
        "x": 681.5095702784001,
        "y": 282.4799999999999
      },
      {
        "x": 691.5191405568003,
        "y": 282.4799999999999
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
      "node": "a387e8c4-851d-ed60-fc4e-8cb75d047fd7",
      "port": "output0"
    },
    "target": {
      "node": "b81c5da9-604c-1fe0-ec3f-5c610b6dea68",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "3775d8b3-8fbf-60d6-a249-677f10b96d4e",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#CCCC00",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 442.1339931648,
        "y": 230.38416695138653
      },
      {
        "x": 468.3169965824,
        "y": 230.38416695138653
      },
      {
        "x": 468.3169965824,
        "y": 186.42857142857144
      },
      {
        "x": 494.5,
        "y": 186.42857142857144
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
      "node": "ff77a021-36fb-2d2e-18ba-be8f49dcdbb2",
      "port": "errorOut"
    },
    "target": {
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "fa1b1283-0841-793a-db0d-fe037a6fafec",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#666666",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 301.5,
        "y": 223.7520215633423
      },
      {
        "x": 327.25,
        "y": 223.7520215633423
      },
      {
        "x": 327.25,
        "y": 230.38416695138653
      },
      {
        "x": 353,
        "y": 230.38416695138653
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
      "node": "1bbf47b7-37be-1c72-f3f1-4fff15426576",
      "port": "output0"
    },
    "target": {
      "node": "ff77a021-36fb-2d2e-18ba-be8f49dcdbb2",
      "port": "errorIn"
    }
  }
];
