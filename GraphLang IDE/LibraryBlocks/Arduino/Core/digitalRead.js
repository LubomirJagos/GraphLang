// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.digitalRead = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.digitalRead",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:96, height:71.78911304473877, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.24609375, 79.10546688235019));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.24609375, 47.067182768620484));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.20442708333334, 47.067182768620484));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "bool";

     // out2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.20442708333334, 79.10546688235019));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "errorDatatype";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 96;
      this.originalHeight= 71.78911304473877;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L96,0 L96,71.78911304473877 L0,71.78911304473877");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M20.15625 15.78911304473877L79.15625 15.78911304473877L79.15625 71.78911304473877L20.15625 71.78911304473877Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10.5,"ry":10.5,"cx":36.65625,"cy":55.28911304473877,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":8.5,"ry":8.5,"cx":36.65625,"cy":55.28911304473877,"stroke":"none","stroke-width":0,"fill":"#FFFF14","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'?');
        shape.attr({"x":65.15625,"y":41.5,"text-anchor":"start","text":"?","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'digitalRead');
        shape.attr({"x":12,"y":11,"text-anchor":"start","text":"digitalRead","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M19.5 54.5L0.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M19.5 54.5L0.5,54.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M79.5 53.5L95.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M79.5 53.5L95.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M19.5 31.5L0.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M19.5 31.5L0.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M80.5 29.5L86.5,29.5L96.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M80.5 29.5L86.5,29.5L96.5,29.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M30.5 63.5L45.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M30.5 63.5L45.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M29.5 49.5L42.5,62.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M29.5 49.5L42.5,62.5');
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
     var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = null;
     if (out1 != null) cCode += out1 + " = digitalRead(" + in1 + ")";
     else  cCode += "digitalRead(" + in1 + ");\n";
     return cCode;
   },


});