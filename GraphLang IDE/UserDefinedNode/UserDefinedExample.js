// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:42,height:42},attr), setter, getter);
     var port;
     // input0
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(2.380952380952381, 33.333333333333336));
     port.setConnectionDirection(undefined);
     port.setBackgroundColor("#37B1DE");
     port.setName("input0");
     port.setMaxFanOut(20);
     // input1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(2.380952380952381, 66.66666666666667));
     port.setConnectionDirection(undefined);
     port.setBackgroundColor("#37B1DE");
     port.setName("input1");
     port.setMaxFanOut(20);
     // output0
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.38095238095238, 50));
     port.setConnectionDirection(undefined);
     port.setBackgroundColor("#37B1DE");
     port.setName("output0");
     port.setMaxFanOut(20);
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
        
        // Line_shadow
        shape = this.canvas.paper.path('M10.5 38.5L13.5,26.5L26.5,34.5L18.5,7.5L32.5,10.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M10.5 38.5L13.5,26.5L26.5,34.5L18.5,7.5L32.5,10.5');
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
    
    jsonDocument: [{"type":"GraphLang.ArduinoLib.Node.Add","id":"bf115c63-d04a-08b1-8b43-af0db06d5e87","x":283,"y":91,"width":130.8515625,"height":83,"alpha":1,"angle":0,"userData":{},"cssClass":"GraphLang_ArduinoLib_Node_Add","bgColor":"none","color":"#1B1B1B","stroke":0,"radius":0,"dasharray":null,"labels":[]},{"type":"GraphLang.Shapes.Basic.ConstantNode","id":"6420c6a9-54f2-6037-f12d-d600b110114e","x":153,"y":36,"width":25.161523818969727,"height":25.199999809265137,"alpha":1,"angle":0,"userData":{"datatype":"int","isTerminal":true},"cssClass":"GraphLang_Shapes_Basic_ConstantNode","bgColor":"#0000FF","color":"#DD2241","stroke":3,"radius":0,"dasharray":"-","text":"42","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#FFFFFF","fontFamily":null,"editor":"draw2d.ui.LabelInplaceEditor"},{"type":"GraphLang.Shapes.Basic.ConstantNode","id":"987b11dd-d9cc-b205-0903-9257ba0fab60","x":193,"y":117,"width":27.939844131469727,"height":25.199999809265137,"alpha":1,"angle":0,"userData":{"datatype":"float","isTerminal":true},"cssClass":"GraphLang_Shapes_Basic_ConstantNode","bgColor":"#FFC300","color":"#DD2241","stroke":3,"radius":0,"dasharray":"-","text":"7.5","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#000000","fontFamily":null,"editor":"draw2d.ui.LabelInplaceEditor"},{"type":"GraphLang.Shapes.Basic.Return","id":"b41f1035-18fd-c478-1c9e-0aedaf87a7b8","x":494,"y":105,"width":36.16152381896973,"height":21.199999809265137,"alpha":1,"angle":0,"userData":{},"cssClass":"GraphLang_Shapes_Basic_Return","bgColor":"#AAAAAA","color":"#0000FF","stroke":1,"radius":0,"dasharray":null,"text":"return","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#FFFFFF","fontFamily":null},{"type":"HoverConnection","id":"d34b4379-4037-1c0e-fba2-617a4b326f34","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"none","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":397.453125,"y":130},{"x":445.7265625,"y":130},{"x":445.7265625,"y":116.80000019073486},{"x":494,"y":116.80000019073486}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"bf115c63-d04a-08b1-8b43-af0db06d5e87","port":"out1"},"target":{"node":"b41f1035-18fd-c478-1c9e-0aedaf87a7b8","port":"out1"}},{"type":"HoverConnection","id":"dfe043a4-110c-85e3-1196-ddad3c071385","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#FAB700","outlineStroke":0,"outlineColor":"none","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":225.221875,"y":130.80000019073486},{"x":272.8375,"y":130.80000019073486},{"x":272.8375,"y":141},{"x":320.453125,"y":141}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"987b11dd-d9cc-b205-0903-9257ba0fab60","port":"out1"},"target":{"node":"bf115c63-d04a-08b1-8b43-af0db06d5e87","port":"in2"}},{"type":"HoverConnection","id":"2a91bff4-d82e-15ba-d283-625245bbc22d","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"#303030","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":181.7175004005432,"y":49.80000019073486},{"x":251.0853127002716,"y":49.80000019073486},{"x":251.0853127002716,"y":119},{"x":320.453125,"y":119}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"6420c6a9-54f2-6037-f12d-d600b110114e","port":"out1"},"target":{"node":"bf115c63-d04a-08b1-8b43-af0db06d5e87","port":"in1"}}]
    
});