// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.analogWrite = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.analogWrite",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:107, height:84.27348804473877, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0415651409345552, 37.53083246767709));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0415651409345552, 84.09976485405895));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0415651409345552, 59.94008082105504));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105.04148877158879, 84.09976485405895));
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
      this.originalWidth = 107;
      this.originalHeight= 84.27348804473877;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L107,0 L107,84.27348804473877 L0,84.27348804473877");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.307453951999832 16.27348804473877L93.30745395199983 16.27348804473877L93.30745395199983 84.27348804473877L15.307453951999832 84.27348804473877Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'analogWrite');
        shape.attr({"x":18.114474700799974,"y":11,"text-anchor":"start","text":"analogWrite","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 69.5L15.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 69.5L15.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 29.5L15.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 29.5L15.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M95.5 68.5L101.5,68.5L107.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M95.5 68.5L101.5,68.5L107.5,68.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M27.5 45.5L28.5,77.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M27.5 45.5L28.5,77.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M28.5 67.5L61.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M28.5 67.5L61.5,66.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M28.5 67.5L30.5,49.5L31.5,77.5L33.5,55.5L36.5,73.5L37.5,50.5L40.5,77.5L43.5,57.5L47.5,73.5L48.5,59.5L52.5,73.5L55.5,46.5L57.5,73.5L59.5,67.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M28.5 67.5L30.5,49.5L31.5,77.5L33.5,55.5L36.5,73.5L37.5,50.5L40.5,77.5L43.5,57.5L47.5,73.5L48.5,59.5L52.5,73.5L55.5,46.5L57.5,73.5L59.5,67.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M72.5 27.5L74.5,25.5L77.5,25.5L79.5,27.5L78.5,30.5L76.5,32.5L65.5,44.5L59.5,44.5L60.5,38.5L72.5,27.5L76.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M72.5 27.5L74.5,25.5L77.5,25.5L79.5,27.5L78.5,30.5L76.5,32.5L65.5,44.5L59.5,44.5L60.5,38.5L72.5,27.5L76.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M60.5 39.5L65.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M60.5 39.5L65.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M61.5 40.5L72.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M61.5 40.5L72.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M63.5 41.5L74.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M63.5 41.5L74.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M63.5 42.5L75.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M63.5 42.5L75.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M73.5 25.5L78.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M73.5 25.5L78.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 48.5L16.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 48.5L16.5,48.5');
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
     var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
     cCode += "analogWrite(" + in1 + ")";
     return cCode;
   },


});