// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Arduino.File.fopen = GraphLang.UserDefinedNode.extend({            

   NAME: "Arduino.File.fopen",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:60.928, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // name
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.4716046883720802, 20.529490756302582));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileName");
     port.setMaxFanOut(20);
     port.userData = {datatype: "String"};
     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.4716046883720802, 85.73505714285726));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3E957");
     port.setName("errorIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.5038255627907, 85.73505714285726));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3E957");
     port.setName("errorOut");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // fileRef
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.5038255627907, 20.529490756302582));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);
     port.userData = {datatype: "FILE*"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 86;
      this.originalHeight= 60.928;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L86,0 L86,60.928 L0,60.928");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M12.824910591999924 0L73.75291059199992 0L73.75291059199992 60.928L12.824910591999924 60.928Z');
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
        shape = this.canvas.paper.path('M56.5 5.5L64.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M56.5 5.5L64.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M63.5 4.5L56.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M63.5 4.5L56.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 8.5L63.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 8.5L63.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 4.5L60.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 4.5L60.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 11.5L86.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 11.5L86.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 51.5L86.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 51.5L86.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 51.5L0.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 51.5L0.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 11.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 11.5L0.5,12.5');
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
        let connectionsIn = this.getInputPort("fileName").getConnections();
        let connectionsOut = this.getOutputPort("fileRef").getConnections();

        let cCode = "";
        if (connectionsIn.getSize() > 0 && connectionsOut.getSize() > 0){
            let fileName = "wire_" + connectionsIn.first().getId();
            let filePtr = "filePtr_" + connectionsOut.first().getId();
            cCode = `FILE* ${filePtr} = fopen(${fileName}.c_str(), "rb");\n`

            connections = this.getOutputPort("fileRef").getConnections().each(function(connIndex, connObj){
                cCode += `wire_${connObj.getId()} = ${filePtr};\n`;
            });
        }
        return cCode;
    },
});