// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.pinMode = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.pinMode",


      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:93.9794281741074,height:95.05718040466309},attr), setter, getter);
        var port;
        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(104.44695083712287, 90.46837380444822));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorOut");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "error";

        // errorIn
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 90.46837380444822));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "error";

        // in2
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 65.81005257925187));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in2");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";

        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 42.97805632114052));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int";

        this.persistPorts=false;
      },

      createShapeElement : function()
      {
         var shape = this._super();
         this.originalWidth = 93.9794281741074;
         this.originalHeight= 95.05718040466309;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L93.9794281741074,0 L93.9794281741074,95.05718040466309 L0,95.05718040466309");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Rectangle
           shape = this.canvas.paper.path('M15.60756623240377 29.057180404663086L79.60756623240377 29.057180404663086L79.60756623240377 95.05718040466309L15.60756623240377 95.05718040466309Z');
           shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
           shape.data("name","Rectangle");

           // Label
           shape = this.canvas.paper.text(0,0,'pinMode');
           shape.attr({"x":13.233668679913535,"y":14.028590202331543,"text-anchor":"start","text":"pinMode","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Line_shadow
           shape = this.canvas.paper.path('M15.5 41.5L1.5,41.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M15.5 41.5L1.5,41.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M15.5 62.5L0.5,62.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M15.5 62.5L0.5,62.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M15.5 86.5L1.5,86.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M15.5 86.5L1.5,86.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M79.5 85.5L93.5,85.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M79.5 85.5L93.5,85.5');
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
       var in1 = this.getInputPort("in2"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in1"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       cCode += "pinMode(" + in1 + "," + in2 + ");";
       return cCode;
     }
});
