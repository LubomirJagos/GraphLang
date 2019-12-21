// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.Shapes.Basic.FeedbackNode = draw2d.SetFigure.extend({

   NAME: "GraphLang.Shapes.Basic.FeedbackNode",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:80,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-0.22916799999975979, 16.393442622950822));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#3F81F3");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined", executionOrder: 1};

     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(99.90984000000026, 16.393442622950822));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3D92E");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined",  executionOrder: 0};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L80,0 L80,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0 0L80 0L80 20L0 20Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Rectangle
        shape = this.canvas.paper.path('M80 20L0 20L0 61L80 61Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'z');
        shape.attr({"x":33.14338559999999,"y":45.5625,"text-anchor":"start","text":"z","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'-1');
        shape.attr({"x":44.03316480000001,"y":40.5,"text-anchor":"start","text":"-1","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M67.5 35.5L15.5,35.5L27.5,30.5L27.5,40.5L15.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M67.5 35.5L15.5,35.5L27.5,30.5L27.5,40.5L15.5,35.5');
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

    translateToCppCode: function(){
      return "/* FeedbackNode */";
    }
});
