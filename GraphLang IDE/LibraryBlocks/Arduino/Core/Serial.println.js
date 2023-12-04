// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Serial.println = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Serial.println",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:78.21264823944955, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.488372093023256, 34.58238101418337));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.488372093023256, 82.38971415130648));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3D957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.86446220930233, 82.38971415130648));
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
      this.originalWidth = 86;
      this.originalHeight= 78.21264823944955;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L86,0 L86,78.21264823944955 L0,78.21264823944955");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M14.381039923199978 10.097151279449463L72.2624351231998 10.097151279449463L72.2624351231998 78.21264823944955L14.381039923199978 78.21264823944955Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Serial.println');
        shape.attr({"x":11,"y":11,"text-anchor":"start","text":"Serial.println","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M3.5 63.5L14.5,63.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M3.5 63.5L14.5,63.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 24.5L15.5,24.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 24.5L15.5,24.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M73.5 62.5L80.5,62.5L86.5,62.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M73.5 62.5L80.5,62.5L86.5,62.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 57.5L47.5,57.5L40.5,55.5L41.5,61.5L47.5,58.5L47.5,58.5L48.5,58.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 57.5L47.5,57.5L40.5,55.5L41.5,61.5L47.5,58.5L47.5,58.5L48.5,58.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M51.5 46.5L68.5,46.5L68.5,65.5L52.5,64.5L52.5,46.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M51.5 46.5L68.5,46.5L68.5,65.5L52.5,64.5L52.5,46.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 62.5L66.5,62.5L66.5,52.5L64.5,52.5L63.5,49.5L59.5,49.5L59.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 62.5L66.5,62.5L66.5,52.5L64.5,52.5L63.5,49.5L59.5,49.5L59.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 51.5L56.5,51.5L55.5,61.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 51.5L56.5,51.5L55.5,61.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M42.5 41.5L42.5,46.5L36.5,43.5L28.5,32.5L32.5,27.5L41.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M42.5 41.5L42.5,46.5L36.5,43.5L28.5,32.5L32.5,27.5L41.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M41.5 40.5L37.5,44.5L37.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M41.5 40.5L37.5,44.5L37.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M32.5 27.5L29.5,27.5L27.5,29.5L27.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 27.5L29.5,27.5L27.5,29.5L27.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M29.5 30.5L38.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M29.5 30.5L38.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M39.5 41.5L30.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M39.5 41.5L30.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M40.5 45.5L41.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M40.5 45.5L41.5,43.5');
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
      cCode += "Serial.println(" + in1 + ");\n";
      return cCode;
    },


});