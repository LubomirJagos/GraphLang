// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.waitUntilNextMs = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.waitUntilNextMs",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:135, height:71, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.0740740740740735, 35.2112676056338));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.0740740740740735, 73.2394366197183));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.1111111111111, 78.87323943661971));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 135;
      this.originalHeight= 71;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L135,0 L135,71 L0,71");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M24.5 0L100.5 0L100.5 71L24.5 71Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":14,"ry":14,"cx":62.5,"cy":26,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":13,"ry":13,"cx":62.5,"cy":46,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M79.5 55.5L45.5,55.5L44.5,55.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":6,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M79.5 55.5L45.5,55.5L44.5,55.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":6,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M26.5 23.5L3.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M26.5 23.5L3.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M26.5 48.5L0.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M26.5 48.5L0.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M135.5 52.5L101.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M135.5 52.5L101.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M43.5 13.5L80.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":5,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M43.5 13.5L80.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":5,"stroke-dasharray":null,"opacity":1});
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
      cCode = "";
      var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      cCode += "delay(" + in1 + ");";
      return cCode;
    },


});