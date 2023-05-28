// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Divide = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Divide",


      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:84.39610736639997,height:60},attr), setter, getter);
        var port;
        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.8185586856521404, 18.85479492266702));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";

        // in2
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.8185586856521404, 82.92139042133367));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in2");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";

        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.21706472401709, 48.919565994667));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("out1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";

        this.persistPorts=false;
      },

      createShapeElement : function()
      {
         var shape = this._super();
         this.originalWidth = 84.39610736639997;
         this.originalHeight= 60;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L84.39610736639997,0 L84.39610736639997,60 L0,60");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Circle
           shape = this.canvas.paper.ellipse();
           shape.attr({"rx":2.5,"ry":2.5,"cx":38.43323046146463,"cy":20.8517395968002,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
           shape.data("name","Circle");

           // Circle
           shape = this.canvas.paper.ellipse();
           shape.attr({"rx":2.5,"ry":2.5,"cx":38.43323046146463,"cy":37.8517395968002,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
           shape.data("name","Circle");

           // Line_shadow
           shape = this.canvas.paper.path('M23.5 1.5L23.5,60.5L63.5,29.5L23.5,0.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M23.5 1.5L23.5,60.5L63.5,29.5L23.5,0.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M23.5 11.5L0.5,11.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M23.5 11.5L0.5,11.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M24.5 49.5L0.5,49.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M24.5 49.5L0.5,49.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M64.5 29.5L84.5,29.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M64.5 29.5L84.5,29.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M32.5 29.5L45.5,29.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M32.5 29.5L45.5,29.5');
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

    /*****************************************************************************************
     * NEXT PART ADDED BY LuboJ TO MAKE IT RUNNABLE IN GraphLangUtils
     *****************************************************************************************/
     translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + " / " + in2 + ";";
       return cCode;
     }
});
