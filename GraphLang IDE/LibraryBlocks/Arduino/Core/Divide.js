// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Divide = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Divide",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:84, height:60, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.2271805561904438, 19.688128256000446));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.2271805561904438, 83.754723754667));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);
     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.28959835428573, 49.75289932800043));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
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
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.5,"ry":2.5,"cx":37.93323046146463,"cy":20.351739596800144,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.5,"ry":2.5,"cx":37.93323046146463,"cy":37.351739596800144,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
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
        shape = this.canvas.paper.path('M32.5 29.5L45.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 29.5L45.5,29.5');
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
               cCode += out1 + " = " + in1 + " / " + in2 + ";\n";
           });
       }else{
           cCode += "/* MISSING OUTPUT WIRES CONNECTED TO DIVIDE OUTPUT, NO CODE GENERATED. */\n";
       }

       return cCode;
     },


});