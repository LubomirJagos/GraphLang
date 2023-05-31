// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Convolution = GraphLang.UserDefinedNode.extend({

   NAME: "Convolution",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:78.34804488037105, height:67.84800057220457, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.3845910279654645, 11.77210077325717));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3A07C");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "float[]"};
     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.9663546820549591, 55.19396251057895));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3ED3A");
     port.setName("errorIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // errorOut
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(92.56011443645941, 56.809243714783435));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3ED3A");
     port.setName("errorOut");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // out1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(92.56011443645941, 15.635796059620462));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3A07C");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "float[]"};
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.3845910279654645, 31.84850668812849));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3A07C");
     port.setName("in2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "float[]"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 78.34804488037105;
      this.originalHeight= 67.84800057220457;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L78.34804488037105,0 L78.34804488037105,67.84800057220457 L0,67.84800057220457");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M12.332479999999919 0L53.292479999999955 0L53.292479999999955 40.44799999999998L12.332479999999919 40.44799999999998Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'[1.13, ...]*');
        shape.attr({"x":22.854686268310502,"y":25.648000286102274,"text-anchor":"start","text":"[1.13, ...]*","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'convolution');
        shape.attr({"x":10.580288914184507,"y":57.048000381469706,"text-anchor":"start","text":"convolution","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 9.5L68.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 9.5L68.5,9.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 34.5L66.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 34.5L66.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 34.5L0.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 34.5L0.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 5.5L5.5,5.5L0.5,5.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 5.5L5.5,5.5L0.5,5.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M12.5 19.5L1.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M12.5 19.5L1.5,18.5');
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