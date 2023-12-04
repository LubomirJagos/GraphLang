// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Arduino.File.fileSize = GraphLang.UserDefinedNode.extend({            

   NAME: "Arduino.File.fileSize",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:79.19611838052651, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // fileRef
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.760953451162804, 20.869043162680978));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "FILE*";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.760953451162804, 70.04066455565014));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3E957");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.4689232372094, 70.04066455565014));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3E957");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     // fileSize
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.4689232372094, 20.869043162680978));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#0028F3");
     port.setName("fileSize");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "uint";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 86;
      this.originalHeight= 79.19611838052651;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L86,0 L86,79.19611838052651 L0,79.19611838052651");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M11.732782591999921 0L72.66078259200003 0L72.66078259200003 60.928L11.732782591999921 60.928Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'size');
        shape.attr({"x":58.79476620406058,"y":68.19611838052651,"text-anchor":"start","text":"size","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M29.5 16.5L49.5,16.5L55.5,22.5L54.5,49.5L29.5,49.5L29.5,17.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M29.5 16.5L49.5,16.5L55.5,22.5L54.5,49.5L29.5,49.5L29.5,17.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M31.5 24.5L45.5,24.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M31.5 24.5L45.5,24.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 27.5L44.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 27.5L44.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 30.5L49.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 30.5L49.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M32.5 32.5L46.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 32.5L46.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 34.5L46.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 34.5L46.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 36.5L46.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 36.5L46.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M34.5 40.5L46.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M34.5 40.5L46.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 21.5L49.5,22.5L48.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 21.5L49.5,22.5L48.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 52.5L86.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 52.5L86.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 52.5L0.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 52.5L0.5,52.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 12.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 12.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 12.5L86.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 12.5L86.5,12.5');
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
        let connections = this.getInputPort("fileRef").getConnections();

        let cCode = "";
        if (connections.getSize() > 0){
            let fileRef = "wire_" + connections.first().getId();
            cCode = `
// Determine the file size
fseek(${fileRef}, 0, SEEK_END);
long fileSize = ftell(${fileRef});
rewind(${fileRef});
`;

            connections = this.getOutputPort("fileSize").getConnections().each(function(connIndex, connObj){
                cCode += `wire_${connObj.getId()} = fileSize;\n`;
            });
        }
        return cCode;
    },


});