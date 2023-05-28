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
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10604948518731057, 43.646848668256546));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // errorIn
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10604948518731057, 84.11892206014826));
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

   symbolPicture: " data:image/png;base64,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",

   translateToCppCode: function(){
     cCode = "";
     var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
     cCode += "analogWrite(" + in1 + ")";
     return cCode;
   }
});
