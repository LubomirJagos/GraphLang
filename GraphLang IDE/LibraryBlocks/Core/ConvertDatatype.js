// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
ConvertDatatype = GraphLang.UserDefinedNode.extend({            

   NAME: "ConvertDatatype",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:68, height:38.467302572204574, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // variableIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-1.0646941176469897, 52.16716706957266));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3F3F3");
     port.setName("variableIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "void*"};
     // castDatatype
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(50.014835294117646, -4.054295195439298));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#FFFFFF");
     port.setName("castDatatype");
     port.setMaxFanOut(20);
     port.userData = {datatype: "polymorphic"};
     // convertedVariable
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.33511764705882, 52.16716706957266));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#FFFFFF");
     port.setName("convertedVariable");
     port.setMaxFanOut(20);
     port.userData = {datatype: "polymorphic"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 68;
      this.originalHeight= 38.467302572204574;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L68,0 L68,38.467302572204574 L0,38.467302572204574");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'conv.');
        shape.attr({"x":21.76513896252436,"y":27.66730238146971,"text-anchor":"start","text":"conv.","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M9.5 9.5L9.5,29.5L49.5,28.5L59.5,18.5L49.5,7.5L10.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M9.5 9.5L9.5,29.5L49.5,28.5L59.5,18.5L49.5,7.5L10.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M60.5 18.5L68.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M60.5 18.5L68.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M9.5 18.5L0.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M9.5 18.5L0.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 7.5L33.5,0.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 7.5L33.5,0.5');
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
    
    translateToCppCode: function(){
        return this.translateToCppCodeTemplate();
    }
});