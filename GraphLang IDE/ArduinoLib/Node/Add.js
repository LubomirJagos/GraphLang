// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Add = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Add",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:130.8515625,height:83},attr), setter, getter);
     var port;
     // Port
     //port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.46790853185264, 46.98795180722892));
     port = this.addPort(new draw2d.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(87.46790853185264, 46.98795180722892));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // Port
     // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(28.622604334587137, 33.734939759036145));
     port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(28.622604334587137, 33.734939759036145));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // Port
     // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(28.622604334587137, 60.24096385542169));
     port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(28.622604334587137, 60.24096385542169));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 130.8515625;
      this.originalHeight= 83;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L130.8515625,0 L130.8515625,83 L0,83");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Label
        shape = this.canvas.paper.text(0,0,'in1');
        shape.attr({"x":5.0546875,"y":13.5,"text-anchor":"start","text":"in1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'in2');
        shape.attr({"x":5,"y":69.5,"text-anchor":"start","text":"in2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'out');
        shape.attr({"x":103.0546875,"y":22.5,"text-anchor":"start","text":"out","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M59.5 15.5L59.5,67.5L93.5,39.5L58.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M59.5 15.5L59.5,67.5L93.5,39.5L58.5,15.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M59.5 30.5L40.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M59.5 30.5L40.5,30.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M57.5 48.5L39.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M57.5 48.5L39.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M91.5 38.5L110.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M91.5 38.5L110.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M70.5 48.5L70.5,42.5L70.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M70.5 48.5L70.5,42.5L70.5,33.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M63.5 40.5L77.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M63.5 40.5L77.5,40.5');
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

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
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

    /*****************************************************************************************
     * NEXT PART ADDED BY LuboJ TO MAKE IT RUNNABLE IN GraphLangUtils
     *****************************************************************************************/
     translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + " + " + in2 + ";\n";
       return cCode;
     }
});
