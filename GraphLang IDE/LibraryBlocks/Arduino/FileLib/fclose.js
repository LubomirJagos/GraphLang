// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Arduino.File.fclose = GraphLang.UserDefinedNode.extend({            

   NAME: "Arduino.File.fclose",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:60.928, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // name
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.4716046883720802, 20.529490756302582));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("fileRef");
     port.setMaxFanOut(20);
     port.userData = {datatype: "FILE*"};
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
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":8.72415232000003,"ry":8.72415232000003,"cx":57.750493952000056,"cy":47.57883289600005,"stroke":"none","stroke-width":0,"fill":"#C02626","dasharray":null,"opacity":1});
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
        shape = this.canvas.paper.path('M53.5 44.5L62.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M53.5 44.5L62.5,51.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FFFFFF","stroke-width":2,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M61.5 43.5L55.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M61.5 43.5L55.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#FFFFFF","stroke-width":2,"stroke-dasharray":null,"opacity":1});
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

        let cCode = "";
        connections = this.getInputPort("fileRef").getConnections().each(function(connIndex, connObj){
            cCode += `fclose(wire_${connObj.getId()});\n`;
        });
        return cCode;
    },
});