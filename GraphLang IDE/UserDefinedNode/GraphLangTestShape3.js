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
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-9.523809523809524, 13.095238095238095));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in0");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-9.523809523809524, 90.47619047619048));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     // subtractResult
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(107.14285714285714, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("subtractResult");
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
    
    symbolPicture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAABrZJREFUaEPtmmlQU1cUgE8IWcjCEhIMScBCBURQwyKVjlK3at3r2qFqp9YiMizaH27QsUp/VOuPItNxYLRax3Y6lTqCtVMVaRFsSytLKgUZRSiBxJCEICRkJdB5kYBjSV5eEiYJcGf4Q84573z33HPPufc9HEzRgZui3DANPtUiPx3x6YhPkRmYXupTJNCjmP+LOIfDmT08PMxCJHA4nEwsFrfw+fwlAID8ecKoFAgElWiOjoJzOJwoHIG8Fh/AjCaww0IQRYOkvdPYK3/oRyWHJScnZyUmJqLZc+nvtbW1UFdXd0IgEBxHc8QEjkB7eRM+pry2aiMxfB7gGUFk5P9GhVSrb3sA+rqK9g8/2D0vLy8PzZ5Lfy8qKoLi4mLbwbmhrxRTFizf4/vWe3jvIFOwR8egtBP6b14eijLIvK6XXkOWv0vhrD0cEziS096BMypYOWc43kG8ce0OSrtAe/4oXLt8ESIiIiYHOJfL3esTt/RkYFp+gDWigUv5cHjzCti5Y8ekAc+jrXg3z39zho9V8LIiSJvPhZycnMkBHhwcnEZJWHaKmfap9Yh/fQKObHkTdkyWiJtyPGBGBetAAefljc0cWmSD05zLhdJvJlGOI3BTcld3lzpuMOpAqhRCz4AIdIYBIBGoEEjlAoseAkS8qa1AHZjKmdnaWOfGmk1gzwwFwIFB8q/Q2CtrQTq37OzsrH379qE+3B4BSX87tMkaxsAH1UDypoyCv8qKB7ZvGKppu8BfmIDxevXj6enpn0wE+DO1FO61loCwt9kiWEhANCyetR38KUFW4R0CH88yn8+fMPCa9jKoF95GjWZ8yEpYGL5xcoCr9f1wteE0KLUKVHAaKQC2xh8CCtHXoqzHRLxd/gB+bipGhTYLrI5JhzDmPM8HbxTdherWKzaDI3k+l/uGVfDCwsLzKp2uYchgCDQJ4glyo1ZdJ5FI/npR0aaj1kTluLMjnpmzH27d+7MZPyeJiaf6MRFQ40CfXNt0vxJUihvC1keXzfAuBceS43QyA7bEHbSY4+Xl5ZBbeA50sSl6YmQ80ZsxA7lDAqNCArrWv1Wq6rJO3ZPGI2Kx+DoC71JwxIGa9utQL7yFutzjQ1fCwrDxd/Wenh7Yk7YXhPz1QOSPnwpqwV1d74X8eoNW/XZ3d7fU5eB9GilUI3VcYX8dr6iogAMnC4CSWQA4L69xJ3F4aAhkp9OV+o6WVJFI9JPLwREvu/vb4Ym8AaT9Iy2ruXOjcSGIFgrhrDirndvZs2eh6H4bUDZlWl05z0rO6AYqrx7r6ur63C3AEW8t9epB9BAgoPTqHg2OmuRWBDx2qTsCjeiaN7cO/nogWdrcGqq0vRdPNLjN5uYotFn/zp07kFtQDJrYFD0pKmGknAEMKrpB91igUt/7UahrazwsEoluuEU5cxY4Yidr/wG4WV3ThI9ewMLT/EcamGdybVOtcxsYjUEFPaouUKgloBvZiRkUtukc7UOkO5PJJlvIIWVCW9ah4SFT3RUqmkw3JoqBp2Pg1GAT+ExGDIQwosELh7fJaWcITfjprEXyBzSKq0CmFFr0N4geCjGcFIhmJzuDySYbEwouUwnhdvNX0KeRozrjS2bCqjl7gEUPRZV1hsCEglc++haan/5us59IxJdG7bRZ3hHBCQPftTsVSuo/A7VeabN/PgQ6bE84AlSSv8069graDc7j8ZJwRGLisF5vKgU4IlE+rNfXMpnMNchl46qtr2O6MTEDrI7ZC2HM+fby2KxnF3jorMhdQGOsI8csWPLyIZ6sUxE+ysnctGjDHKh6/L3NjpgFUyLegVhOCmY9rAqYwblc7jpS+NxTlEXrQ0kRfNrzQ/xY16OpKtNsSIphZee+b2fErd+VYQW0JI8JnM1ms/Akcilj9/F4SlzKuK8sNPW/DvqUX/C+UnIJfuk4Z0eOHwUqyc9ZfBbtYAVf4xMW8x3rULGvtUN83xeZ8OWxg4DnSeChZBLs6jwe7xB1yZZ8/237SdZCorxaCFkLI2HrzrVw++EF6NPIUCPo58OElUgdp7lhHedwOAfpy7Yh4FbfzCl/KISs5EjIyMiAFkkN/COuAqmyw0rnNhNiOYthtrt2bmw2G9NSX7F8OSC9eqeiGTo8uVfHsrndKCsFJtNU4k1Do1c+P6S40ekM2+deNpQzLl7LSk1NRc1rVwpg/sAPcdZaA+M10P+bP5XIcCUUhmdj+6QTMcxms5PwZEoCGA3P17OF904YnHBbUZuul93WewccmwZ3YPI8UnU64h4ZNgecno64A5PnkapTNuL/AXeUDnto/1zBAAAAAElFTkSuQmCC",
    
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
        return this.translateToCppCodeTemplate();
    }
});