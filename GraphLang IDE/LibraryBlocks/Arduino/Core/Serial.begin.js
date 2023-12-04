// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Serial.begin = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Serial.begin",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:88.701171875, height:80.91549715073495, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.945832874600903, 34.73999797201068));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.945832874600903, 82.11038479494071));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3D957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(95.40266727733125, 82.11038479494071));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3D957");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 88.701171875;
      this.originalHeight= 80.91549715073495;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L88.701171875,0 L88.701171875,80.91549715073495 L0,80.91549715073495");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M13.633959840185526 12.800000190734863L71.51535504018557 12.800000190734863L71.51535504018557 80.91549715073495L13.633959840185526 80.91549715073495Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Serial.begin');
        shape.attr({"x":21,"y":11,"text-anchor":"start","text":"Serial.begin","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M1.5 65.5L14.5,65.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M1.5 65.5L14.5,65.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 26.5L15.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 26.5L15.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M72.5 66.5L84.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M72.5 66.5L84.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 60.5L47.5,60.5L41.5,57.5L41.5,64.5L48.5,60.5L48.5,60.5L49.5,60.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 60.5L47.5,60.5L41.5,57.5L41.5,64.5L48.5,60.5L48.5,60.5L49.5,60.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M52.5 49.5L68.5,49.5L68.5,67.5L53.5,67.5L53.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M52.5 49.5L68.5,49.5L68.5,67.5L53.5,67.5L53.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 65.5L67.5,64.5L67.5,54.5L64.5,54.5L64.5,51.5L60.5,51.5L59.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 65.5L67.5,64.5L67.5,54.5L64.5,54.5L64.5,51.5L60.5,51.5L59.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 54.5L56.5,54.5L56.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 54.5L56.5,54.5L56.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M60.5 21.5L61.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M60.5 21.5L61.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 26.5L66.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 26.5L66.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M65.5 21.5L57.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M65.5 21.5L57.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M56.5 21.5L65.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M56.5 21.5L65.5,31.5');
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
    
    translateToCppCodeImport: function(){
        return "SerialClass Serial;\n";
    },

translateToCppCode: function(){
      cCode = "";
      var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      cCode += "Serial.begin(" + in1 + ");\n";
      return cCode;
    },


});