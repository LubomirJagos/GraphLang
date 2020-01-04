// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Serial.println = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Serial.println",


      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:96.92204284667969,height:94.89934667618655},attr), setter, getter);
        var port;
        // in1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(5.158785198027105, 43.144880429889014));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "string";

        // errorIn
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(5.158785198027105, 83.65090986585969));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "error";

        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(97.123410113951, 83.65090986585969));
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
         this.originalWidth = 96.92204284667969;
         this.originalHeight= 94.89934667618655;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L96.92204284667969,0 L96.92204284667969,94.89934667618655 L0,94.89934667618655");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Rectangle
           shape = this.canvas.paper.path('M19.381039923199978 26.783849716186523L77.26243512319991 26.783849716186523L77.26243512319991 94.89934667618655L19.381039923199978 94.89934667618655Z');
           shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
           shape.data("name","Rectangle");

           // Label
           shape = this.canvas.paper.text(0,0,'Serial.println');
           shape.attr({"x":4,"y":12.891924858093262,"text-anchor":"start","text":"Serial.println","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Line_shadow
           shape = this.canvas.paper.path('M5.5 79.5L18.5,80.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M5.5 79.5L18.5,80.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M4.5 41.5L19.5,41.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M4.5 41.5L19.5,41.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M77.5 79.5L84.5,79.5L90.5,79.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M77.5 79.5L84.5,79.5L90.5,79.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M28.5 74.5L51.5,74.5L44.5,72.5L45.5,78.5L51.5,75.5L51.5,75.5L52.5,75.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M28.5 74.5L51.5,74.5L44.5,72.5L45.5,78.5L51.5,75.5L51.5,75.5L52.5,75.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M55.5 63.5L72.5,63.5L72.5,82.5L56.5,81.5L56.5,63.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M55.5 63.5L72.5,63.5L72.5,82.5L56.5,81.5L56.5,63.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M59.5 79.5L70.5,79.5L70.5,69.5L68.5,69.5L67.5,66.5L63.5,66.5L63.5,68.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M59.5 79.5L70.5,79.5L70.5,69.5L68.5,69.5L67.5,66.5L63.5,66.5L63.5,68.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M63.5 68.5L60.5,68.5L59.5,78.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M63.5 68.5L60.5,68.5L59.5,78.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M46.5 58.5L46.5,63.5L40.5,60.5L32.5,49.5L36.5,44.5L45.5,57.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M46.5 58.5L46.5,63.5L40.5,60.5L32.5,49.5L36.5,44.5L45.5,57.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M45.5 57.5L41.5,61.5L41.5,60.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M45.5 57.5L41.5,61.5L41.5,60.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M36.5 44.5L33.5,44.5L31.5,46.5L31.5,49.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M36.5 44.5L33.5,44.5L31.5,46.5L31.5,49.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M33.5 47.5L42.5,59.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M33.5 47.5L42.5,59.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M43.5 58.5L34.5,46.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M43.5 58.5L34.5,46.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M44.5 62.5L45.5,60.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M44.5 62.5L45.5,60.5');
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
      cCode += "Serial.println(" + in1 + ")";
      return cCode;
    }

});
