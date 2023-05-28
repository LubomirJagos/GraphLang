// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.PythonQtGuiLib.UiShow = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.PythonQtGuiLib.UiShow",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:70.38766976, height:46, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-1.7108869267957456, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "QtUiObject"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 70.38766976;
      this.originalHeight= 46;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L70.38766976,0 L70.38766976,46 L0,46");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M18.387669759999994 0L70.38766976 0L70.38766976 46L18.387669759999994 46Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":12.5,"ry":9,"cx":44.387669759999994,"cy":23,"stroke":"none","stroke-width":0,"fill":"#B4C09A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.523215360000023,"ry":3.523215360000023,"cx":47.66055936000012,"cy":23.50000000000003,"stroke":"none","stroke-width":0,"fill":"#0C7EC0","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 23.5L19.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 23.5L19.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M30.5 21.5L24.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M30.5 21.5L24.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M32.5 17.5L28.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M32.5 17.5L28.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M35.5 14.5L32.5,10.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M35.5 14.5L32.5,10.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M39.5 12.5L37.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M39.5 12.5L37.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M43.5 11.5L42.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M43.5 11.5L42.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M46.5 11.5L46.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M46.5 11.5L46.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M49.5 12.5L51.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M49.5 12.5L51.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M52.5 13.5L54.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M52.5 13.5L54.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 15.5L57.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 15.5L57.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M57.5 17.5L60.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M57.5 17.5L60.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M58.5 21.5L62.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M58.5 21.5L62.5,18.5');
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
    
    
});