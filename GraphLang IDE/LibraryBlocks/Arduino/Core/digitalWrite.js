// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.digitalWrite = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.digitalWrite",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:98, height:76.78911304473877, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(5.544218725087691, 42.70021067392095));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(5.544218725087691, 67.44330151927326));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "bool";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(5.544218725087691, 88.27958854693837));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42176974549585, 88.27958854693837));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 98;
      this.originalHeight= 76.78911304473877;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L98,0 L98,76.78911304473877 L0,76.78911304473877");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M77.43333435058594 76.78911304473877L16.433334350585938 76.78911304473877L16.433334350585938 15.78911304473877L77.43333435058594 15.78911304473877Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10,"ry":10,"cx":43.43333435058594,"cy":41.78911304473877,"stroke":"none","stroke-width":0,"fill":"#C0AF1B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'DIG WRITE');
        shape.attr({"x":8,"y":11,"text-anchor":"start","text":"DIG WRITE","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M17.5 31.5L2.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M17.5 31.5L2.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M17.5 50.5L1.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M17.5 50.5L1.5,50.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 66.5L17.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 66.5L17.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M77.5 66.5L79.5,66.5L98.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M77.5 66.5L79.5,66.5L98.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M37.5 49.5L50.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M37.5 49.5L50.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M37.5 36.5L43.5,42.5L49.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M37.5 36.5L43.5,42.5L49.5,48.5');
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
      cCode = "";
      var in1 = this.getInputPort("in2"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      var in2 = this.getInputPort("in1"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
      cCode += "digitalWrite(" + in1 + ", " + in2 + ");\n";
      return cCode;
    },


});