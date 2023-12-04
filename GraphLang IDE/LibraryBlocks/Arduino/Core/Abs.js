// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Math.Abs = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Math.Abs",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112, height:71.67999999999995, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.6956612114288094, 52.28794642857133));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "numeric";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.6314820948196, 53.683035714285616));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "numeric";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 71.67999999999995;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112,0 L112,71.67999999999995 L0,71.67999999999995");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M27.684000000000196 0L88.09999999999991 0L88.09999999999991 71.67999999999995L27.684000000000196 71.67999999999995Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'A');
        shape.attr({"x":61.5543997688294,"y":45.350887145996126,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
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
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = Math.Abs(" + in1 + ");";
       return cCode;
     },


});