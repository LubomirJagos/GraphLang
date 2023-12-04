// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
Convolution = GraphLang.UserDefinedNode.extend({            

   NAME: "Convolution",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:82.0480456433105, height:73.0480003814697, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.9315511875683344, 12.30305409192257));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3A07C");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "float[]";
     port.userData.allowMultipleConnections = undefined;
     port.userData.connectionMandatory = undefined;

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.5321754347021197, 52.63388429418691));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3ED3A");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = undefined;
     port.userData.connectionMandatory = undefined;

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(88.99546531240671, 54.13417998325191));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3ED3A");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = undefined;
     port.userData.connectionMandatory = undefined;

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(88.99546531240671, 15.89170810888454));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3A07C");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "float[]";
     port.userData.allowMultipleConnections = undefined;
     port.userData.connectionMandatory = undefined;

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.9315511875683344, 30.950299641241394));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3A07C");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "float[]";
     port.userData.allowMultipleConnections = undefined;
     port.userData.connectionMandatory = undefined;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 82.0480456433105;
      this.originalHeight= 73.0480003814697;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L82.0480456433105,0 L82.0480456433105,73.0480003814697 L0,73.0480003814697");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M11.832479999999919 0L52.792479999999955 0L52.792479999999955 40.44799999999998L11.832479999999919 40.44799999999998Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'[1.13, ...]*');
        shape.attr({"x":26.354686268310502,"y":30.648000286102274,"text-anchor":"start","text":"[1.13, ...]*","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'convolution');
        shape.attr({"x":14.080288914184507,"y":62.048000381469706,"text-anchor":"start","text":"convolution","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
    },


});