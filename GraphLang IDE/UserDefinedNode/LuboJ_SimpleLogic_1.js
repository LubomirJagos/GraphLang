// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
LuboJ_SimpleLogic_1 = GraphLang.UserDefinedNode.extend({            

   NAME: "LuboJ_SimpleLogic_1",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:42, height:42, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // A
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(114.28571428571428, 45.23809523809524));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("A");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined"};
     // inputStr_1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-14.285714285714285, 45.23809523809524));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("inputStr_1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "String"};
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
    
    symbolPicture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAArtJREFUaENjZBihgHGE+pth1OMjLeZHY3w0xkdICIwm9RES0XBvEhXjBgYGDgwMDCA8FMCBCxcuHCDkUGI93mBsbFxvYmJCyLwBlT9z5gzD2bNnGy9cuNBAyCFEezw9Pb0+IyODkHkDKj9jxgyGmTNnjnocXyyMxji+0DEwMGgYTeoDmovxWz6ax0dLddwpZLRwGy3csITAaKk+2nIbnHUaydWZhISEGTMHlzHD398iYC8xs75h/PPr7JMnT06BuEM1qWPz198f386+ePHiFKOcilosA4+QD4e2qQMzNz/Y43+/fnzz89qpg/+/ftry6Nb1RUPR47j89ePq6QMMX95tYVSy9bjKZeMrx65qwMMiJA6O8D/vXjL8unPxy5fDGx//vHu5XExMzHgoNVlfv359hl1JtxObv37evvDl25HNjxh1G+Z/5zK058CWa79dOPjz/bymcwK83Eezs7NLhkK3dOrUqd3vP3+xFkpsMOIytMPur/OHfjCarb/zn5GJCXtp9f8/w6uutM9sb59sLigoiBoKHp8wYcKyX8IyPmJls/gYGHG0z/7/Z2A033jvP74y+sPqST//HN98uKSkxGUoeLynp2cPi6WPrUBoPjve/jhhj0/8+ef4liHj8e7u7t2sVr4gj2NN5rDAwJ/U//1neNU9tJJ6X1/fsj8icj6iZTP5cGXh///+MYzcwm3EVWd3Lnz5dnjzo5HXgLl++gDDp3dbwOW9hISEKbTJKgprssKadkO8yQrzF6hFyghqisObrMR0N4Zik5WQv0ZHYEZHYEZHYBAhMJrHR4eeCJWZAyNP8tATIWeOJvXRpE4ojQyM/GhSH500HJ00xAiB0bb6aFt9tK2O2lYfqQv8RuaSzoFpjtDWVqJKddo6YWBMH/X4wIT7wNk6GuMDF/YDY/NojA9MuA+crSM2xgFwJbJ02oxzGQAAAABJRU5ErkJggg==",
    
    jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.TerminalOutput",
    "id": "03de2366-39cd-beed-2bde-13e45393272d",
    "x": 529,
    "y": 184,
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
    "text": "A",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "645eef26-331e-362f-0690-2f686ad6e600",
    "x": 62,
    "y": 253,
    "width": 270.3583984375,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "String",
      "isTerminal": true,
      "nodeLabel": "nodeLabel"
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "bgColor": "#FF3385",
    "color": "#DD2241",
    "stroke": 3,
    "radius": 0,
    "dasharray": "-",
    "text": "Hello world from first reasonable application in GraphLang.",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#000000",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "HoverConnection",
    "id": "126dac74-3153-ae5c-e92d-7516f0bb3c3b",
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
        "x": 400.28046875,
        "y": 265
      },
      {
        "x": 464.640234375,
        "y": 265
      },
      {
        "x": 464.640234375,
        "y": 198
      },
      {
        "x": 529,
        "y": 198
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
      "node": "645eef26-331e-362f-0690-2f686ad6e600",
      "port": "out1"
    },
    "target": {
      "node": "03de2366-39cd-beed-2bde-13e45393272d",
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