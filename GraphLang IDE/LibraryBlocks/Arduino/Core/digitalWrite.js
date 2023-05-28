// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.digitalWrite = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.digitalWrite",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:102.43333435058594,height:89},attr), setter, getter);
     var port;

     // Port
     //port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 48.31460674157304));
     port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 48.31460674157304));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // Port
     // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 69.66292134831461));
     port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 69.66292134831461));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "bool";

     // Port
     // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 87.64044943820225));
     port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(8.232997982592467, 87.64044943820225));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.0475105953743, 87.64044943820225));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 102.43333435058594;
      this.originalHeight= 89;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L102.43333435058594,0 L102.43333435058594,89 L0,89");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M82.43333435058594 89L21.433334350585938 89L21.433334350585938 28L82.43333435058594 28Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10,"ry":10,"cx":48.43333435058594,"cy":54,"stroke":"none","stroke-width":0,"fill":"#C0AF1B","dasharray":null,"opacity":1});
        shape.data("name","Circle");

        // Label
        shape = this.canvas.paper.text(0,0,'DIG WRITE');
        shape.attr({"x":5,"y":13.5,"text-anchor":"start","text":"DIG WRITE","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M21.5 43.5L6.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M21.5 43.5L6.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M21.5 62.5L5.5,62.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M21.5 62.5L5.5,62.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M4.5 78.5L21.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M4.5 78.5L21.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M81.5 78.5L83.5,78.5L102.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M81.5 78.5L83.5,78.5L102.5,78.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M41.5 61.5L54.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M41.5 61.5L54.5,48.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M41.5 48.5L47.5,54.5L53.5,60.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M41.5 48.5L47.5,54.5L53.5,60.5');
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

    symbolPicture: " data:image/png;base64,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",

    translateToCppCode: function(){
      cCode = "";
      var in1 = this.getInputPort("in2"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      var in2 = this.getInputPort("in1"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
      cCode += "digitalWrite(" + in1 + ", " + in2 + ");";
      return cCode;
    }

});
