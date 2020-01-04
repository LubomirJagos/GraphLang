var jsonDocument = [
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "jalihouseLayerProtection0",
    "x": 315,
    "y": 51,
    "width": 391,
    "height": 132,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [],
    "bgColor": "#FFFFFF",
    "color": "#000000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "GraphLang.Shapes.Basic.Loop.Multilayered",
    "id": "da4a1dc2-17e2-0285-9a16-c030655dae10",
    "x": 315,
    "y": 51,
    "width": 391,
    "height": 132,
    "alpha": 0.4,
    "angle": 0,
    "userData": {
      "executionOrder": 1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop_Multilayered",
    "ports": [
      {
        "type": "draw2d.InputPort",
        "id": "ff0070ec-0391-b712-0838-1fba740c0827",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_InputPort",
        "bgColor": "#00FF00",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 20,
        "name": "layerSelector",
        "port": "draw2d.InputPort",
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ],
    "bgColor": "#F0F0F0",
    "color": "#1B1B1B",
    "stroke": 2,
    "radius": 0,
    "dasharray": null,
    "myLabel": "myLabel changed",
    "graphlangLayerOwner": "...here should be id of owner parent....."
  },
  {
    "type": "draw2d.shape.composite.Jailhouse",
    "id": "jailhouseLayer2",
    "x": 315,
    "y": 51,
    "width": 391,
    "height": 132,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_composite_Jailhouse",
    "ports": [],
    "bgColor": "#88BB66",
    "color": "#00FF00",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.composite.Jailhouse",
    "id": "jailhouseLayer1",
    "x": 315,
    "y": 51,
    "width": 391,
    "height": 132,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_composite_Jailhouse",
    "ports": [],
    "bgColor": "#FFFF00",
    "color": "#FF0000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.composite.Jailhouse",
    "id": "jailhouseLayer0",
    "x": 315,
    "y": 51,
    "width": 391,
    "height": 132,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_composite_Jailhouse",
    "ports": [],
    "bgColor": "#0000FF",
    "color": "#FF0000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Math.Abs",
    "id": "315185ae-8f80-831e-dbfd-fe3401b27266",
    "x": 453,
    "y": 76,
    "width": 112.00997489540259,
    "height": 71.68,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Math_Abs",
    "composite": "jailhouseLayer0",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.ArduinoLib.Node.pinMode",
    "id": "db7a152b-90f4-1adc-663d-0f33c2f42939",
    "x": 119,
    "y": 46,
    "width": 93.9794281741074,
    "height": 95.05718040466309,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_pinMode",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "draw2d.Connection",
    "id": "79a4b368-fc7b-51b8-5727-8d5f78d4ff92",
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
        "x": 322.5,
        "y": 131
      },
      {
        "x": 388.50957027840013,
        "y": 131
      },
      {
        "x": 388.50957027840013,
        "y": 110.4799999999999
      },
      {
        "x": 454.51914055680027,
        "y": 110.4799999999999
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
      "node": "da4a1dc2-17e2-0285-9a16-c030655dae10",
      "port": "output0"
    },
    "target": {
      "node": "315185ae-8f80-831e-dbfd-fe3401b27266",
      "port": "in1"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "fb576ec0-1afe-5c9c-913a-31de4a71fc35",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#00A8F0",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 217.15864714201916,
        "y": 131.9966852964593
      },
      {
        "x": 262.3293235710096,
        "y": 131.9966852964593
      },
      {
        "x": 262.3293235710096,
        "y": 131
      },
      {
        "x": 307.5,
        "y": 131
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
      "node": "db7a152b-90f4-1adc-663d-0f33c2f42939",
      "port": "errorOut"
    },
    "target": {
      "node": "da4a1dc2-17e2-0285-9a16-c030655dae10",
      "port": "input0"
    }
  }
];
