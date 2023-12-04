// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.String.replace = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.String.replace",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:110, height:111.3125, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 32.94109248107806));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 86.74376843139805));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 48.943338410331286));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 62.573932667041035));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in3");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.72217544145455, 86.74376843139805));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.72217544145455, 32.94109248107806));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 110;
      this.originalHeight= 111.3125;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L110,0 L110,111.3125 L0,111.3125");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.807453951999946 22.3125L93.80745395199995 22.3125L93.80745395199995 111.3125L15.807453951999946 111.3125Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'replace()');
        shape.attr({"x":25.893391451999946,"y":11,"text-anchor":"start","text":"replace()","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'ab..cd..ef');
        shape.attr({"x":25.893391451999946,"y":69.60031723520001,"text-anchor":"start","text":"ab..cd..ef","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'xy');
        shape.attr({"x":30.3375792639996,"y":48.16755356800002,"text-anchor":"start","text":"xy","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 96.5L15.5,96.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 96.5L15.5,96.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 35.5L15.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 35.5L15.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M95.5 97.5L102.5,97.5L108.5,97.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M95.5 97.5L102.5,97.5L108.5,97.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M46.5 44.5L59.5,45.5L59.5,57.5L61.5,50.5L55.5,51.5L59.5,57.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M46.5 44.5L59.5,45.5L59.5,57.5L61.5,50.5L55.5,51.5L59.5,57.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 53.5L0.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 53.5L0.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 70.5L1.5,69.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 70.5L1.5,69.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M94.5 36.5L110.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M94.5 36.5L110.5,36.5');
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
       var in3 = this.getInputPort("in3"); if (in3.getConnections().getSize() > 0) in3 = "wire_" + in3.getConnections().get(0).getId(); else in3 = "/*in3 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + ".replace("+ in2 + "," + in3 + ");";
       return cCode;
     },


});