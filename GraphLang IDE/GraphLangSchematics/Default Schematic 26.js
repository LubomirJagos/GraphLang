var jsonDocument = [
  {
    "type": "GraphLang.Shapes.Basic.Loop.WhileLoop",
    "id": "86e1758e-267d-6aca-4c82-18c205be91ff",
    "x": 397,
    "y": 40,
    "width": 444,
    "height": 262,
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
    "dasharray": null,
    "labels": [
      {
        "type": "GraphLang.Shapes.Basic.LeftTunnel",
        "id": "a94f3222-2bd5-aaeb-0344-4aa9dc8be30b",
        "x": -7.5,
        "y": 87.5,
        "width": 15,
        "height": 15,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "GraphLang_Shapes_Basic_LeftTunnel",
        "ports": [
          {
            "type": "draw2d.InputPort",
            "id": "d546bd6a-3392-c19d-e503-2e41bf94f5e3",
            "width": 10,
            "height": 10,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "undefined"
            },
            "cssClass": "draw2d_InputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "input0",
            "port": "draw2d.InputPort",
            "locator": "draw2d.layout.locator.InputPortLocator"
          },
          {
            "type": "draw2d.OutputPort",
            "id": "36c60b4b-0e04-c934-d2e1-65231307d272",
            "width": 10,
            "height": 10,
            "alpha": 1,
            "angle": 0,
            "userData": {
              "datatype": "undefined"
            },
            "cssClass": "draw2d_OutputPort",
            "bgColor": "#4F6870",
            "color": "#1B1B1B",
            "stroke": 1,
            "dasharray": null,
            "maxFanOut": 9007199254740991,
            "name": "output0",
            "port": "draw2d.OutputPort",
            "locator": "draw2d.layout.locator.OutputPortLocator"
          }
        ],
        "bgColor": "#FDC11D",
        "color": "#000000",
        "stroke": 1,
        "radius": 0,
        "dasharray": null,
        "locator": "GraphLang.Utils.LeftRelPortLocator",
        "locatorX": 7.5,
        "locatorY": 33.396946564885496
      }
    ]
  },
  {
    "type": "GraphLang.Shapes.Basic.SliderNode",
    "id": "f0a90f63-3143-0d08-fdf7-84d1512a06d4",
    "x": 135,
    "y": 224,
    "width": 120,
    "height": 20,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_Shapes_Basic_SliderNode",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "cf40112f-5e47-945e-0e79-5082843aee67",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {
          "datatype": "int"
        },
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "output0",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.OutputPortLocator"
      }
    ],
    "bgColor": "#D3D3D3",
    "color": "#BDDF69",
    "stroke": 1,
    "radius": 4,
    "dasharray": null
  },
  {
    "type": "GraphLang.ArduinoLib.Experimental42Lib.Dragon1Node",
    "id": "38be40eb-9bbe-db27-02b9-554fd94b40a9",
    "x": 554,
    "y": 147,
    "width": 70,
    "height": 40,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Experimental42Lib_Dragon1Node",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": [
      {
        "type": "draw2d.shape.basic.Label",
        "id": "a06c8b58-a1b9-93bd-8355-010ff32c365d",
        "x": 77,
        "y": 20,
        "width": 27.46875,
        "height": 20,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_shape_basic_Label",
        "ports": [],
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "text": "out1",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 10,
        "fontColor": "#000000",
        "fontFamily": null,
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      },
      {
        "type": "draw2d.shape.basic.Label",
        "id": "847cba0f-49ce-69c9-e224-b0088431e907",
        "x": 77,
        "y": -4,
        "width": 27.90625,
        "height": 20,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_shape_basic_Label",
        "ports": [],
        "bgColor": "none",
        "color": "#1B1B1B",
        "stroke": 0,
        "radius": 0,
        "dasharray": null,
        "text": "out2",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 10,
        "fontColor": "#000000",
        "fontFamily": null,
        "locator": "draw2d.layout.locator.XYRelPortLocator"
      }
    ]
  },
  {
    "type": "draw2d.Connection",
    "id": "7cad8183-13a2-3934-775e-d5201c418fa6",
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
        "x": 255,
        "y": 234
      },
      {
        "x": 322.25,
        "y": 234
      },
      {
        "x": 322.25,
        "y": 135
      },
      {
        "x": 389.5,
        "y": 135
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
      "node": "f0a90f63-3143-0d08-fdf7-84d1512a06d4",
      "port": "output0"
    },
    "target": {
      "node": "86e1758e-267d-6aca-4c82-18c205be91ff",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "61337cad-023c-b51b-f9e9-65236a42ae6e",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "sourceTunnel": "a94f3222-2bd5-aaeb-0344-4aa9dc8be30b",
      "sourcePortName": "output0"
    },
    "cssClass": "draw2d_Connection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 404.5,
        "y": 135
      },
      {
        "x": 480.287037037037,
        "y": 135
      },
      {
        "x": 480.287037037037,
        "y": 159.3943661971831
      },
      {
        "x": 556.074074074074,
        "y": 159.3943661971831
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
      "node": "86e1758e-267d-6aca-4c82-18c205be91ff",
      "port": "output0"
    },
    "target": {
      "node": "38be40eb-9bbe-db27-02b9-554fd94b40a9",
      "port": "in1"
    }
  }
];
