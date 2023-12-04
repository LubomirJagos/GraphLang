// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Subtract = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Subtract",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:84, height:60, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.2271805561904438, 19.688128256000446));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#4F6870");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.2271805561904438, 83.754723754667));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#4F6870");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.28959835428573, 49.75289932800043));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#4F6870");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 84;
      this.originalHeight= 60;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L84,0 L84,60 L0,60");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Line_shadow
        shape = this.canvas.paper.path('M23.5 1.5L23.5,60.5L63.5,29.5L23.5,0.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M23.5 1.5L23.5,60.5L63.5,29.5L23.5,0.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M23.5 11.5L0.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M23.5 11.5L0.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 49.5L0.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 49.5L0.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M64.5 29.5L84.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M64.5 29.5L84.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 29.5L46.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 29.5L46.5,30.5');
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
    
    symbolPicture: "data:image/png;base64,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",
    
    jsonDocument: [],
    
    translateToCppCode: function(){
         cCode = "";
         var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
         var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
         var out1 = this.getOutputPort("out1");

         if (out1.getConnections().getSize() > 0){
             out1.getConnections().each(function(connIndex, connObj){
                 out1 = "wire_" + connObj.getId();
                 cCode += out1 + " = " + in1 + " - " + in2 + ";\n";
             });
         }else{
             cCode += "/* MISSING OUTPUT WIRES CONNECTED TO SUBTRACT OUTPUT, NO CODE GENERATED. */\n";
         }
         return cCode;
     },


});