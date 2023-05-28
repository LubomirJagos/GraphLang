// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.toStr = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.toStr",

      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:88.44948275199988,height:27.91806411743164},attr), setter, getter);
        var port;
        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.4329139582124353, 50));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "string";

        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.20681380646752, 56.73058197766178));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("out1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "string";

        this.persistPorts=false;
      },

      createShapeElement : function()
      {
         var shape = this._super();
         this.originalWidth = 88.44948275199988;
         this.originalHeight= 27.91806411743164;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L88.44948275199988,0 L88.44948275199988,27.91806411743164 L0,27.91806411743164");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Label
           shape = this.canvas.paper.text(0,0,'toStr');
           shape.attr({"x":27.469116279687228,"y":13.95903205871582,"text-anchor":"start","text":"toStr","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Line_shadow
           shape = this.canvas.paper.path('M0.5 13.5L10.5,14.5L20.5,14.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M0.5 13.5L10.5,14.5L20.5,14.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M70.5 15.5L88.5,14.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M70.5 15.5L88.5,14.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M13.5 2.5L58.5,3.5L65.5,7.5L69.5,11.5L69.5,17.5L65.5,20.5L58.5,24.5L12.5,24.5L17.5,21.5L20.5,17.5L20.5,11.5L17.5,8.5L12.5,3.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M13.5 2.5L58.5,3.5L65.5,7.5L69.5,11.5L69.5,17.5L65.5,20.5L58.5,24.5L12.5,24.5L17.5,21.5L20.5,17.5L20.5,11.5L17.5,8.5L12.5,3.5');
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
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = (String) " + in1 + ";";
       return cCode;
     }
});
