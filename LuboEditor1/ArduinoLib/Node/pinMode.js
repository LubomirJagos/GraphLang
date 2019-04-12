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
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 90.46837380444822));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "error";

        // in2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 65.81005257925187));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in2");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int32";

        // in1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.5168198327560168, 42.97805632114052));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        port.userData = {};
        port.userData.datatype = "int32";

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
    /*****************************************************************************************
     * NEXT PART ADDED BY LuboJ TO MAKE IT RUNNABLE IN GraphLangUtils
     *****************************************************************************************/
     translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       cCode += "pinMode(" + in1 + "," + in2 + ")";
       return cCode;
     }
});
