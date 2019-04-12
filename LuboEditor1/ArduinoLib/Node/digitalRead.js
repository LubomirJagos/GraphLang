// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.digitalRead = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.digitalRead",

  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:96.15625,height:84},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 52.38095238095238));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 79.76190476190476));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out2");
    port.setMaxFanOut(20);
    // Port
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.2024699382515438, 79.76190476190476));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in2");
    port.setMaxFanOut(20);
    // Port
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.2024699382515438, 52.38095238095238));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in1");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
     var shape = this._super();
     this.originalWidth = 96.15625;
     this.originalHeight= 84;
     return shape;
  },

  createSet: function()
  {
      this.canvas.paper.setStart();

       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L96.15625,0 L96.15625,84 L0,84");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");

       // Rectangle
       shape = this.canvas.paper.path('M21.15625 28L80.15625 28L80.15625 84L21.15625 84Z');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");

       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":10.5,"ry":10.5,"cx":37.65625,"cy":67.5,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
       shape.data("name","Circle");

       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.5,"ry":8.5,"cx":37.65625,"cy":67.5,"stroke":"none","stroke-width":0,"fill":"#FFFF14","dasharray":null,"opacity":1});
       shape.data("name","Circle");

       // Label
       shape = this.canvas.paper.text(0,0,'?');
       shape.attr({"x":58.15625,"y":44,"text-anchor":"start","text":"?","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'digitalRead');
       shape.attr({"x":5,"y":13.5,"text-anchor":"start","text":"digitalRead","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Line_shadow
       shape = this.canvas.paper.path('M19.5 66.5L0.5,66.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M19.5 66.5L0.5,66.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M79.5 65.5L95.5,65.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M79.5 65.5L95.5,65.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M19.5 43.5L0.5,43.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M19.5 43.5L0.5,43.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M80.5 41.5L86.5,41.5L96.5,41.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M80.5 41.5L86.5,41.5L96.5,41.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M30.5 75.5L45.5,60.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M30.5 75.5L45.5,60.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M29.5 61.5L42.5,74.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M29.5 61.5L42.5,74.5');
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
      var in1ConnectionsCount = this.getInputPort("in1").getConnections().getSize();
      // return "{ArduinoLib.Node.digitalRead: " + this.getUserData().executionOrder + ", in1 connections num: " + in1ConnectionsCount + "}";
      return "digitalRead(TBD);";
   }
});
