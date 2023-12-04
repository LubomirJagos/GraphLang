// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.String.replace2 = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.String.replace2",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:110, height:106.51249980926514, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0131588189090672, 30.857930699328236));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0131588189090672, 87.0852315085713));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3C200");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0131588189090672, 47.58132000283471));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0131588189090672, 61.826178830831374));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in3");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.176720896, 87.0852315085713));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3C200");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.176720896, 30.857930699328236));
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
      this.originalHeight= 106.51249980926514;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L110,0 L110,106.51249980926514 L0,106.51249980926514");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.307453951999946 17.512499809265137L93.30745395199995 17.512499809265137L93.30745395199995 106.51249980926514L15.307453951999946 106.51249980926514Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'replace()');
        shape.attr({"x":29.393391451999946,"y":11,"text-anchor":"start","text":"replace()","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'ab..cd..ef');
        shape.attr({"x":29.393391451999946,"y":69.60031723520001,"text-anchor":"start","text":"ab..cd..ef","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'xy');
        shape.attr({"x":33.8375792639996,"y":48.16755356800002,"text-anchor":"start","text":"xy","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 91.5L15.5,91.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 91.5L15.5,91.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 30.5L15.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 30.5L15.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M95.5 92.5L102.5,92.5L108.5,92.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M95.5 92.5L102.5,92.5L108.5,92.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M46.5 39.5L59.5,40.5L59.5,52.5L61.5,45.5L55.5,46.5L59.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M46.5 39.5L59.5,40.5L59.5,52.5L61.5,45.5L55.5,46.5L59.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 48.5L0.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 48.5L0.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 65.5L1.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 65.5L1.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M94.5 31.5L110.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M94.5 31.5L110.5,31.5');
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