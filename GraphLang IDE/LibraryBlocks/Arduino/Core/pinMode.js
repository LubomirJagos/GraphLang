// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.pinMode = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.pinMode",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:93, height:87.02859020233154, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0598971220585838, 90.73810676530087));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0598971220585838, 63.80499795898556));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0598971220585838, 38.86669685287688));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(106.08456681937544, 90.73810676530087));
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
      this.originalWidth = 93;
      this.originalHeight= 87.02859020233154;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L93,0 L93,87.02859020233154 L0,87.02859020233154");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.10756623240377 21.028590202331543L79.10756623240377 21.028590202331543L79.10756623240377 87.02859020233154L15.10756623240377 87.02859020233154Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'pinMode');
        shape.attr({"x":16.733668679913535,"y":11,"text-anchor":"start","text":"pinMode","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 33.5L1.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 33.5L1.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 54.5L0.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 54.5L0.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 78.5L1.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 78.5L1.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M79.5 77.5L93.5,77.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M79.5 77.5L93.5,77.5');
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
       cCode += "pinMode(" + in1 + "," + in2 + ");\n";
       return cCode;
     },


});