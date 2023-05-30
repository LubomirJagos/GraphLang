// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Serial.begin = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Serial.begin",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:86, height:90.71549734146976, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-9.883720930232558, 38.14047574440821));
     port.setBackgroundColor("#37B1DE");
     port.setConnectionDirection(3);
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "string"};
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(104.06976744186048, 89.9508073607178));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3D957");
     port.setName("errorOut");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-6.395348837209303, 84.43906995472743));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F3D957");
     port.setName("errorIn");
     port.setMaxFanOut(20);
     port.userData = {datatype: "error"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 86;
      this.originalHeight= 90.71549734146976;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L86,0 L86,90.71549734146976 L0,90.71549734146976");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M14.63395984018564 22.600000381469727L72.51535504018557 22.600000381469727L72.51535504018557 90.71549734146976L14.63395984018564 90.71549734146976Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Serial.begin');
        shape.attr({"x":14,"y":10.800000190734863,"text-anchor":"start","text":"Serial.begin","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M1.5 75.5L14.5,75.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M1.5 75.5L14.5,75.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 36.5L15.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 36.5L15.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M74.5 75.5L80.5,75.5L86.5,75.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M74.5 75.5L80.5,75.5L86.5,75.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M24.5 70.5L47.5,70.5L41.5,67.5L41.5,74.5L48.5,70.5L48.5,70.5L49.5,70.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M24.5 70.5L47.5,70.5L41.5,67.5L41.5,74.5L48.5,70.5L48.5,70.5L49.5,70.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M52.5 59.5L68.5,59.5L68.5,77.5L53.5,77.5L53.5,59.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M52.5 59.5L68.5,59.5L68.5,77.5L53.5,77.5L53.5,59.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 75.5L67.5,74.5L67.5,64.5L64.5,64.5L64.5,61.5L60.5,61.5L59.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 75.5L67.5,74.5L67.5,64.5L64.5,64.5L64.5,61.5L60.5,61.5L59.5,64.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M59.5 64.5L56.5,64.5L56.5,74.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M59.5 64.5L56.5,64.5L56.5,74.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M60.5 31.5L61.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M60.5 31.5L61.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M55.5 36.5L66.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M55.5 36.5L66.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M65.5 31.5L57.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M65.5 31.5L57.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M56.5 31.5L65.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M56.5 31.5L65.5,41.5');
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
    
    symbolPicture: " data:image/png;base64,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",

    translateToCppCodeTypeDefinition: function(){
        return "SerialClass Serial;\n";
    },

    translateToCppCode: function(){
      cCode = "";
      var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      cCode += "Serial.begin(" + in1 + ");\n";
      return cCode;
    }
});