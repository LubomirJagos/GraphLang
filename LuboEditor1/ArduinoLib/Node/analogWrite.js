// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.analogWrite = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.analogWrite",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:107.94460774400022,height:96.96875},attr), setter, getter);
     var port;
     // in1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.10604948518731057, 43.646848668256546));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // errorIn
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.10604948518731057, 84.11892206014826));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorIn");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // errorOut
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.19588473542026, 84.11892206014826));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("errorOut");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10604948518731057, 63.12225206574263));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 107.94460774400022;
      this.originalHeight= 96.96875;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L107.94460774400022,0 L107.94460774400022,96.96875 L0,96.96875");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M16.307453951999946 28.96875L94.30745395199995 28.96875L94.30745395199995 96.96875L16.307453951999946 96.96875Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'analogWrite');
        shape.attr({"x":11.114474700799974,"y":13.984375,"text-anchor":"start","text":"analogWrite","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M0.5 82.5L15.5,81.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M0.5 82.5L15.5,81.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M0.5 42.5L15.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M0.5 42.5L15.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M95.5 81.5L101.5,81.5L107.5,81.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M95.5 81.5L101.5,81.5L107.5,81.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M27.5 58.5L28.5,90.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M27.5 58.5L28.5,90.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M28.5 80.5L61.5,79.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M28.5 80.5L61.5,79.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M28.5 80.5L30.5,62.5L31.5,90.5L33.5,68.5L36.5,86.5L37.5,63.5L40.5,90.5L43.5,70.5L47.5,86.5L48.5,72.5L52.5,86.5L55.5,59.5L57.5,86.5L59.5,80.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M28.5 80.5L30.5,62.5L31.5,90.5L33.5,68.5L36.5,86.5L37.5,63.5L40.5,90.5L43.5,70.5L47.5,86.5L48.5,72.5L52.5,86.5L55.5,59.5L57.5,86.5L59.5,80.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M72.5 40.5L74.5,38.5L77.5,38.5L79.5,40.5L78.5,43.5L76.5,45.5L65.5,57.5L59.5,57.5L60.5,51.5L72.5,40.5L76.5,45.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M72.5 40.5L74.5,38.5L77.5,38.5L79.5,40.5L78.5,43.5L76.5,45.5L65.5,57.5L59.5,57.5L60.5,51.5L72.5,40.5L76.5,45.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M60.5 52.5L65.5,57.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M60.5 52.5L65.5,57.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M61.5 53.5L72.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M61.5 53.5L72.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M63.5 54.5L74.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M63.5 54.5L74.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M63.5 55.5L75.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M63.5 55.5L75.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M73.5 38.5L78.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M73.5 38.5L78.5,42.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M0.5 61.5L16.5,61.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M0.5 61.5L16.5,61.5');
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
     cCode = "";
     var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
     cCode += "analogWrite(" + in1 + ")";
     return cCode;
   }
});
