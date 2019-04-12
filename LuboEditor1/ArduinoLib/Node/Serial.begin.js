// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Serial.begin = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Serial.begin",










      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:89.1493148803711,height:91.44835072000024},attr), setter, getter);
        var port;
        // in1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.4054173256036195, 40.99933284832907));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int32";

        // errorIn
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.4054173256036195, 83.03394254500562));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "error";

        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.38823074868866, 83.03394254500562));
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
         this.originalWidth = 89.1493148803711;
         this.originalHeight= 91.44835072000024;
         return shape;
      },

      createSet: function()
        {
            this.canvas.paper.setStart();

             // BoundingBox
             shape = this.canvas.paper.path("M0,0 L92.50048828125,0 L92.50048828125,91.44835072000024 L0,91.44835072000024");
             shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
             shape.data("name","BoundingBox");

             // Rectangle
             shape = this.canvas.paper.path('M15.63395984018564 23.332853760000205L73.51535504018557 23.332853760000205L73.51535504018557 91.44835072000024L15.63395984018564 91.44835072000024Z');
             shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
             shape.data("name","Rectangle");

             // Label
             shape = this.canvas.paper.text(0,0,'Serial.begin');
             shape.attr({"x":4,"y":13.2160005569458,"text-anchor":"start","text":"Serial.begin","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
             shape.data("name","Label");

             // Line_shadow
             shape = this.canvas.paper.path('M1.5 76.5L14.5,76.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M1.5 76.5L14.5,76.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M0.5 37.5L15.5,37.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M0.5 37.5L15.5,37.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M74.5 76.5L80.5,76.5L86.5,76.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M74.5 76.5L80.5,76.5L86.5,76.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M24.5 71.5L47.5,71.5L41.5,68.5L41.5,75.5L48.5,71.5L48.5,71.5L49.5,71.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M24.5 71.5L47.5,71.5L41.5,68.5L41.5,75.5L48.5,71.5L48.5,71.5L49.5,71.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M52.5 60.5L68.5,60.5L68.5,78.5L53.5,78.5L53.5,60.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M52.5 60.5L68.5,60.5L68.5,78.5L53.5,78.5L53.5,60.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M55.5 76.5L67.5,75.5L67.5,65.5L64.5,65.5L64.5,62.5L60.5,62.5L59.5,65.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M55.5 76.5L67.5,75.5L67.5,65.5L64.5,65.5L64.5,62.5L60.5,62.5L59.5,65.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M59.5 65.5L56.5,65.5L56.5,75.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M59.5 65.5L56.5,65.5L56.5,75.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M60.5 32.5L61.5,42.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M60.5 32.5L61.5,42.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M55.5 37.5L66.5,37.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M55.5 37.5L66.5,37.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M65.5 32.5L57.5,41.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M65.5 32.5L57.5,41.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line");

             // Line_shadow
             shape = this.canvas.paper.path('M56.5 32.5L65.5,42.5');
             shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
             shape.data("name","Line_shadow");

             // Line
             shape = this.canvas.paper.path('M56.5 32.5L65.5,42.5');
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
      cCode += "Serial.begin(" + in1 + ")";
      return cCode;
    }

});
