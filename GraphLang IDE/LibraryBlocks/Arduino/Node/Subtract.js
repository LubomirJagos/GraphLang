// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Subtract = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Subtract",

      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:84.39610736639997,height:60},attr), setter, getter);

        var port;
        var portColor = new GraphLang.Utils.Color();

        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.8185586856521404, 18.85479492266702));
        port.setConnectionDirection(3);
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";
        port.setBackgroundColor(portColor.getByName(port.userData.datatype));

        // in2
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.8185586856521404, 82.92139042133367));
        port.setConnectionDirection(3);
        port.setName("in2");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";
        port.setBackgroundColor(portColor.getByName(port.userData.datatype));

        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.21706472401709, 48.919565994667));
        port.setConnectionDirection(1);
        port.setName("out1");
        port.setMaxFanOut(20);
        this.persistPorts=false;

        port.userData = {};
        port.userData.datatype = "int";
        port.setBackgroundColor(portColor.getByName(port.userData.datatype));
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
           shape = this.canvas.paper.path('M34.5 29.5L46.5,30.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M34.5 29.5L46.5,30.5');
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

    symbolPicture: "data:image/png;base64,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",

    /*****************************************************************************************
     * NEXT PART ADDED BY LuboJ TO MAKE IT RUNNABLE IN GraphLangUtils
     *****************************************************************************************/
     translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + " - " + in2 + ";\n";
       return cCode;
     }
});
