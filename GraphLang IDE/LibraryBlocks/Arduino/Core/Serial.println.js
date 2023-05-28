// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Serial.println = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Serial.println",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86.5, height:88.00742181809329, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.3121387283236996, 39.828782698059776));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "string"};
     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.3121387283236996, 83.50686859705742));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3D957");
     port.setName("errorIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105.35721753156072, 83.50686859705742));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3D957");
     port.setName("errorOut");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 86.5;
      this.originalHeight= 88.00742181809329;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L86.5,0 L86.5,88.00742181809329 L0,88.00742181809329");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.381039923199978 19.89192485809326L73.26243512319991 19.89192485809326L73.26243512319991 88.00742181809329L15.381039923199978 88.00742181809329Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Serial.println');
        shape.attr({"x":4,"y":10.794773578643799,"text-anchor":"start","text":"Serial.println","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M1.5 72.5L14.5,73.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M1.5 72.5L14.5,73.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 34.5L15.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 34.5L15.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M73.5 72.5L80.5,72.5L86.5,72.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M73.5 72.5L80.5,72.5L86.5,72.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 67.5L47.5,67.5L40.5,65.5L41.5,71.5L47.5,68.5L47.5,68.5L48.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 67.5L47.5,67.5L40.5,65.5L41.5,71.5L47.5,68.5L47.5,68.5L48.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M51.5 56.5L68.5,56.5L68.5,75.5L52.5,74.5L52.5,56.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M51.5 56.5L68.5,56.5L68.5,75.5L52.5,74.5L52.5,56.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 72.5L66.5,72.5L66.5,62.5L64.5,62.5L63.5,59.5L59.5,59.5L59.5,61.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 72.5L66.5,72.5L66.5,62.5L64.5,62.5L63.5,59.5L59.5,59.5L59.5,61.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 61.5L56.5,61.5L55.5,71.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 61.5L56.5,61.5L55.5,71.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M42.5 51.5L42.5,56.5L36.5,53.5L28.5,42.5L32.5,37.5L41.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M42.5 51.5L42.5,56.5L36.5,53.5L28.5,42.5L32.5,37.5L41.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M41.5 50.5L37.5,54.5L37.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M41.5 50.5L37.5,54.5L37.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M32.5 37.5L29.5,37.5L27.5,39.5L27.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 37.5L29.5,37.5L27.5,39.5L27.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M29.5 40.5L38.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M29.5 40.5L38.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M39.5 51.5L30.5,39.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M39.5 51.5L30.5,39.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M40.5 55.5L41.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M40.5 55.5L41.5,53.5');
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
    
    symbolPicture: " data:image/png;base64,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",
    
    translateToCppCode: function(){
      cCode = "";
      var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      cCode += "Serial.println(" + in1 + ")";
      return cCode;
    }
});