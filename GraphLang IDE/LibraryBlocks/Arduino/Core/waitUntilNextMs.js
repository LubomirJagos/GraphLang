// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.waitUntilNextMs = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.waitUntilNextMs",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:135,height:71},attr), setter, getter);
     var port;
     // in1
     port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(2.962962962962963, 30.985915492957744));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // in2
     port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(2.962962962962963, 69.01408450704224));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // out1
     port = this.addPort(new GraphLang.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(100, 74.64788732394365));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

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
        shape = this.canvas.paper.path('M26 0L102 0L102 71L26 71Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":14,"ry":14,"cx":64,"cy":26,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":13,"ry":13,"cx":64,"cy":46,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
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
      var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      cCode += "delay(" + in1 + ");";
      return cCode;
    }
});
