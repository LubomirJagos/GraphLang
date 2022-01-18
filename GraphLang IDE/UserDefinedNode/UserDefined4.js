// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
GraphLang.UserDefinedNode.UserDefined3 = GraphLang.UserDefinedSymbol.UserDefined3.extend({            

    NAME: "GraphLang.UserDefinedNode.UserDefined3",

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
          "isTerminal": true,
          "datatype": "float"
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
          "isTerminal": true,
          "datatype": "int"
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
