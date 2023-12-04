// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Multiply = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Multiply",

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
           shape = this.canvas.paper.path('M33.5 35.5L44.5,24.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M33.5 35.5L44.5,24.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M32.5 24.5L44.5,35.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M32.5 24.5L44.5,35.5');
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
       var out1 = this.getOutputPort("out1");

       if (out1.getConnections().getSize() > 0){
           out1.getConnections().each(function(connIndex, connObj){
               out1 = "wire_" + connObj.getId();
               cCode += out1 + " = " + in1 + " * " + in2 + ";\n";
           });
       }else{
           cCode += "/* MISSING OUTPUT WIRES CONNECTED TO MULTIPLY OUTPUT, NO CODE GENERATED. */\n";
       }

       return cCode;
     }
});
