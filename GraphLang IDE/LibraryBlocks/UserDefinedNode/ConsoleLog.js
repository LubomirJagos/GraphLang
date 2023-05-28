// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
ConsoleLog = GraphLang.UserDefinedNode.extend({

   NAME: "ConsoleLog",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:65.82079999999974, height:55, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // msgStr
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-7.868637269678104, 50.90909090909091));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F300A2");
     port.setName("msgStr");
     port.setMaxFanOut(20);
     port.userData = {datatype: "String"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 65.82079999999974;
      this.originalHeight= 55;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L65.82079999999974,0 L65.82079999999974,55 L0,55");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M12.820799999999736 0L65.82079999999974 0L65.82079999999974 55L12.820799999999736 55Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 27.5L0.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 27.5L0.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 12.5L53.5,13.5L52.5,38.5L26.5,33.5L26.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 12.5L53.5,13.5L52.5,38.5L26.5,33.5L26.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M28.5 15.5L28.5,30.5L48.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M28.5 15.5L28.5,30.5L48.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M47.5 34.5L49.5,15.5L27.5,15.5L32.5,20.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M47.5 34.5L49.5,15.5L27.5,15.5L32.5,20.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M43.5 35.5L45.5,41.5L32.5,39.5L34.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M43.5 35.5L45.5,41.5L32.5,39.5L34.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M20.5 40.5L58.5,42.5L57.5,51.5L19.5,50.5L20.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M20.5 40.5L58.5,42.5L57.5,51.5L19.5,50.5L20.5,40.5');
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

    translateToCppCode: function(){
        cCode = `console.log(wire_${this.getInputPort(0).getConnections().first().getId()});\n`;
        return cCode;
    }

    
});