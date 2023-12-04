// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Arduino.File.fwrite = GraphLang.UserDefinedNode.extend({            

   NAME: "Arduino.File.fwrite",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:81, height:60.928, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // fileRef
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.4101137382716513, 26.273976050420135));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "FILE*";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // stringToWrite
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.4101137382716513, 59.847689075630164));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#E300F3");
     port.setName("stringToWrite");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "String";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(3.4101137382716513, 95.5827462184876));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3E957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.78343316543216, 95.5827462184876));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3E957");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 81;
      this.originalHeight= 60.928;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L81,0 L81,60.928 L0,60.928");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M9.99268275199995 0L70.92068275199983 0L70.92068275199983 60.928L9.99268275199995 60.928Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M29.5 15.5L49.5,15.5L55.5,21.5L54.5,48.5L29.5,48.5L29.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M29.5 15.5L49.5,15.5L55.5,21.5L54.5,48.5L29.5,48.5L29.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M31.5 23.5L45.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M31.5 23.5L45.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 26.5L44.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 26.5L44.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 29.5L49.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 29.5L49.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M32.5 31.5L46.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 31.5L46.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 33.5L46.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 33.5L46.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 35.5L46.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 35.5L46.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 39.5L46.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 39.5L46.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 20.5L49.5,21.5L48.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 20.5L49.5,21.5L48.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 12.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 12.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 33.5L0.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 33.5L0.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 55.5L2.5,55.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 55.5L2.5,55.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M73.5 54.5L77.5,54.5L81.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M73.5 54.5L77.5,54.5L81.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M58.5 48.5L58.5,54.5L62.5,52.5L68.5,41.5L64.5,39.5L58.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M58.5 48.5L58.5,54.5L62.5,52.5L68.5,41.5L64.5,39.5L58.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M62.5 51.5L58.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M62.5 51.5L58.5,49.5');
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
        return "#include<cstdlib>\n";
    },

translateToCppCode: function(){
        let cCode = "";
        let filePtr = "wire_" + this.getInputPort("fileRef").getConnections().first().getId();
        let stringIn = "wire_" + this.getInputPort("stringToWrite").getConnections().first().getId();

        cCode += `fwrite(${stringIn}.data(), sizeof(char), ${stringIn}.length(), ${filePtr});\n`

        return cCode;
    },


});