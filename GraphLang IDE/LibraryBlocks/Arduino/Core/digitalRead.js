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

    port.userData = {};
    port.userData.datatype = "bool";

    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 79.76190476190476));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out2");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "error";

    // Port
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.2024699382515438, 79.76190476190476));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in2");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "error";

    // Port
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.2024699382515438, 52.38095238095238));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in1");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "int";

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

   symbolPicture: " data:image/png;base64,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",

   translateToCppCode: function(){
     cCode = "";
     var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
     var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = null;
     if (out1 != null) cCode += out1 + " = digitalRead(" + in1 + ")";
     else  cCode += "digitalRead(" + in1 + ");\n";
     return cCode;
   }
});
