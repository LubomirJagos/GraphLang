// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Add = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Add",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:123.40234375, height:78, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(27.108986736728813, 27.564102564102566));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(27.108986736728813, 55.769230769230774));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(89.50650501725174, 41.66666666666667));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "int";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 123.40234375;
      this.originalHeight= 78;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L123.40234375,0 L123.40234375,78 L0,78");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in1');
        shape.attr({"x":4.0546875,"y":11,"text-anchor":"start","text":"in1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in2');
        shape.attr({"x":4,"y":67,"text-anchor":"start","text":"in2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'out');
        shape.attr({"x":102.0546875,"y":20,"text-anchor":"start","text":"out","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 8.5L54.5,60.5L88.5,32.5L53.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 8.5L54.5,60.5L88.5,32.5L53.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M54.5 23.5L35.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M54.5 23.5L35.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M52.5 41.5L34.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M52.5 41.5L34.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M86.5 31.5L105.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M86.5 31.5L105.5,31.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M65.5 41.5L65.5,35.5L65.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M65.5 41.5L65.5,35.5L65.5,26.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M58.5 33.5L72.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M58.5 33.5L72.5,33.5');
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
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var out1 = this.getOutputPort("out1");
       if (out1.getConnections().getSize() > 0){
           out1.getConnections().each(function(connIndex, connObj){
               out1 = "wire_" + connObj.getId();
               cCode += out1 + " = " + in1 + " + " + in2 + ";\n";
           });
       }else{
           cCode += "/* MISSING OUTPUT WIRES CONNECTED TO ADD OUTPUT, NO CODE GENERATED. */\n";
       }
       return cCode;
     },


});