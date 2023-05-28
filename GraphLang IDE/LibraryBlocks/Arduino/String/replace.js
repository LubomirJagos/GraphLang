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
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 35.79208790917774));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);
        port.userData = {datatype: "string"};
        // errorIn
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 86.62634035879047));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);
        port.userData = {datatype: "error"};
        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.43248886286783, 86.62634035879047));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorOut");
        port.setMaxFanOut(20);
        port.userData = {datatype: "error"};
        // in2
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 50.9114513044032));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in2");
        port.setMaxFanOut(20);
        port.userData = {datatype: "string"};
        // in3
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.10320967514639391, 63.79001277453581));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in3");
        port.setMaxFanOut(20);
        port.userData = {datatype: "string"};
        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.43248886286783, 35.79208790917774));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("out1");
        port.setMaxFanOut(20);
        port.userData = {datatype: "string"};
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

     symbolPicture: " data:image/png;base64,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",

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
