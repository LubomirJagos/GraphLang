// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.String.replace = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.String.replace",

      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:110.91469926399986,height:117.8125},attr), setter, getter);
        var port;
        // in1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 35.79208790917774));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);
        // errorIn
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 86.62634035879047));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);
        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.43248886286783, 86.62634035879047));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorOut");
        port.setMaxFanOut(20);
        // in2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 50.9114513044032));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in2");
        port.setMaxFanOut(20);
        // in3
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 63.79001277453581));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in3");
        port.setMaxFanOut(20);
        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.43248886286783, 35.79208790917774));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("out1");
        port.setMaxFanOut(20);
        this.persistPorts=false;
      },

      createShapeElement : function()
      {
         var shape = this._super();
         this.originalWidth = 110.91469926399986;
         this.originalHeight= 117.8125;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L110.91469926399986,0 L110.91469926399986,117.8125 L0,117.8125");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Rectangle
           shape = this.canvas.paper.path('M16.307453951999946 28.8125L94.30745395199995 28.8125L94.30745395199995 117.8125L16.307453951999946 117.8125Z');
           shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
           shape.data("name","Rectangle");

           // Label
           shape = this.canvas.paper.text(0,0,'replace()');
           shape.attr({"x":22.393391451999946,"y":12.5,"text-anchor":"start","text":"replace()","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Label
           shape = this.canvas.paper.text(0,0,'ab..cd..ef');
           shape.attr({"x":22.393391451999946,"y":71.10031723520001,"text-anchor":"start","text":"ab..cd..ef","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Label
           shape = this.canvas.paper.text(0,0,'xy');
           shape.attr({"x":26.8375792639996,"y":49.66755356800002,"text-anchor":"start","text":"xy","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Line_shadow
           shape = this.canvas.paper.path('M0.5 102.5L15.5,102.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M0.5 102.5L15.5,102.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M0.5 41.5L15.5,42.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M0.5 41.5L15.5,42.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M95.5 103.5L102.5,103.5L108.5,103.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M95.5 103.5L102.5,103.5L108.5,103.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M46.5 50.5L59.5,51.5L59.5,63.5L61.5,56.5L55.5,57.5L59.5,63.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M46.5 50.5L59.5,51.5L59.5,63.5L61.5,56.5L55.5,57.5L59.5,63.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M16.5 59.5L0.5,59.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M16.5 59.5L0.5,59.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M15.5 76.5L1.5,75.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M15.5 76.5L1.5,75.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M94.5 42.5L110.5,42.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M94.5 42.5L110.5,42.5');
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
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var in3 = this.getInputPort("in3"); if (in3.getConnections().getSize() > 0) in3 = "wire_" + in3.getConnections().get(0).getId(); else in3 = "/*in3 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + ".replace("+ in2 + "," + in3 + ");";
       return cCode;
     }
 });
