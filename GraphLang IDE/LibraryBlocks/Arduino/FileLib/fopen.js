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
     // fileName
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.2725813581395478, 25.4533352941178));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileName");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "String";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.2725813581395478, 90.65890168067247));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3E957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.24801160930247, 90.65890168067247));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3E957");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     // fileRef
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.24801160930247, 25.4533352941178));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "FILE*";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

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
        shape = this.canvas.paper.path('M11.324910591999924 0L72.25291059199981 0L72.25291059199981 60.928L11.324910591999924 60.928Z');
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
            cCode = `FILE* ${filePtr} = fopen(${fileName}.c_str(), "w+");\n`

            connections = this.getOutputPort("fileRef").getConnections().each(function(connIndex, connObj){
                cCode += `wire_${connObj.getId()} = ${filePtr};\n`;
            });
        }
        return cCode;
    },


});