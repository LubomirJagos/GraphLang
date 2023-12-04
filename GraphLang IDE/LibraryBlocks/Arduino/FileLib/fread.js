// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Arduino.File.fread = GraphLang.UserDefinedNode.extend({            

   NAME: "Arduino.File.fread",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:60.928, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // fileRef
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8539767069767572, 27.094616806722655));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "FILE*";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8539767069767572, 92.30018319327752));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3E957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // bytesCountToRead
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8539767069767572, 54.923844537815036));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("bytesCountToRead");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "undefined";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.82940695813967, 92.30018319327752));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3E957");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     // fileContent
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.82940695813967, 27.094616806722655));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F300AA");
     port.setName("fileContent");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "String";
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
        shape = this.canvas.paper.path('M10.824910591999924 0L71.75291059199981 0L71.75291059199981 60.928L10.824910591999924 60.928Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.5,"ry":2.5,"cx":52.93192166400013,"cy":54.15550156800009,"stroke":"#1B1B1B","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.5,"ry":2.5,"cx":56.018929408000076,"cy":56.97407385600013,"stroke":"#1B1B1B","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
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
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 11.5L86.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 11.5L86.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M61.5 46.5L61.5,45.5L52.5,52.5L54.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M61.5 46.5L61.5,45.5L52.5,52.5L54.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 57.5L61.5,58.5L67.5,53.5L68.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 57.5L61.5,58.5L67.5,53.5L68.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 29.5L0.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 29.5L0.5,30.5');
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
        let connectionsIn = this.getInputPort("fileRef").getConnections();
        let connectionsOut = this.getOutputPort("fileContent").getConnections();

        let cCode = "";
        if (connectionsIn.getSize() > 0 && connectionsOut.getSize() > 0){
            let filePtr = "wire_" + connectionsIn.first().getId();

            cCode += "// Allocate a buffer to hold the file content\n";
            cCode += `char* fileContentBuffer_internal = new char[wire_${this.getInputPort("bytesCountToRead").getConnections().first().getId()} + 1];\n`;
            cCode += `fileSize = wire_${this.getInputPort("bytesCountToRead").getConnections().first().getId()};\n`;
            cCode += `// Read the file content into the buffer\n`;
            cCode += `fread(fileContentBuffer_internal, 1, fileSize, ${filePtr});\n`
            this.getOutputPort("fileContent").getConnections().each(function(connIndex, connObj){
                cCode += `wire_${connObj.getId()} = fileContentBuffer_internal;\n`;
            });
        }
        return cCode;
    },


});