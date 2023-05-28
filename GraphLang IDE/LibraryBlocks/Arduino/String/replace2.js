// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.String.replace2 = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.String.replace2",

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
     port.userData = {datatype: "string"};
     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 86.74376843139811));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3C200");
     port.setName("errorIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 48.943338410331286));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "string"};
     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5586133643636128, 62.573932667040985));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in3");
     port.setMaxFanOut(20);
     port.userData = {datatype: "string"};
     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.72217544145455, 86.74376843139811));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3C200");
     port.setName("errorOut");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.72217544145455, 32.94109248107806));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "string"};
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
        shape.attr({"x":25.893391451999946,"y":10.800000190734863,"text-anchor":"start","text":"replace()","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'ab..cd..ef');
        shape.attr({"x":25.893391451999946,"y":69.40031742593487,"text-anchor":"start","text":"ab..cd..ef","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'xy');
        shape.attr({"x":30.3375792639996,"y":47.96755375873488,"text-anchor":"start","text":"xy","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
     }
});