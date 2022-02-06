// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.LJ42 = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.LJ42",

      init:function(attr, setter, getter)
      {
        this._super( $.extend({stroke:0, bgColor:null, width:213,height:111.39193600000004},attr), setter, getter);
        var port;
        // in7
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.567436619718329, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in7");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in2
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(74.78393990610326, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in2");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in3
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(56.266846948356864, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in3");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in5
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(20.206662910798144, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in5");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in6
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(12.453107981220665, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in6");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in4
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(48.01628544600943, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in4");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(93.18853708920193, -3.7826508374898684));
        port.setConnectionDirection(0);
        port.setBackgroundColor("#F3F342");
        port.setName("in1");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "int";
        // out5
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(4.567436619718329, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#2EB8F3");
        port.setName("out5");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "string";
        // out4
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(15.042343661971854, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#2EB8F3");
        port.setName("out4");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "string";
        // out3
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(25.370982159624436, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#2EB8F3");
        port.setName("out3");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "string";
        // out2
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(56.266846948356864, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#2EB8F3");
        port.setName("out2");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "string";
        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(74.78393990610326, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#2EB8F3");
        port.setName("out1");
        port.setMaxFanOut(20);
        port.userData = {};
        port.userData.datatype = "string";
        // in8
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(94.7747154929578, 104.47136137395069));
        port.setConnectionDirection(2);
        port.setBackgroundColor("#F3F342");
        port.setName("in8");
        port.setMaxFanOut(20);
        this.persistPorts=false;
        port.userData = {};
        port.userData.datatype = "int";
      },

      createShapeElement : function()
      {
         var shape = this._super();
         this.originalWidth = 213;
         this.originalHeight= 111.39193600000004;
         return shape;
      },

      createSet: function()
      {
          this.canvas.paper.setStart();

           // BoundingBox
           shape = this.canvas.paper.path("M0,0 L213,0 L213,111.39193600000004 L0,111.39193600000004");
           shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
           shape.data("name","BoundingBox");

           // Rectangle
           shape = this.canvas.paper.path('M0 7.798143999999866L213 7.798143999999866L213 103.79814399999987L0 103.79814399999987Z');
           shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
           shape.data("name","Rectangle");

           // Circle
           shape = this.canvas.paper.path('M177.39459227988357 46.360959999999864L176.9810554596802 46.25015314298582L175.251264 46.09881599999983L173.5214725403198 46.25015314298582L171.84423991882534 46.6995662694344L170.2705279999999 47.43340018891246L168.84815322416057 48.42935772911454L167.6203337291147 49.65717722416048L166.6243761889126 51.079551999999865L165.8905422694345 52.653263918825246L165.44112914298591 54.33049654031976L165.28979199999992 56.0602879999999L165.44112914298591 57.790079459680044L165.8905422694345 59.467312081174555L166.6243761889126 61.041023999999936L167.6203337291147 62.46339877583932L168.84815322416057 63.69121827088526L170.270528 64.68717581108734L171.84423991882534 65.4210097305654L173.5214725403198 65.87042285701398L175.251264 66.02175999999997L175.51340800000003 65.99882537178866L175.51340800000003 66.54604799999987L213 66.54604799999987L213 46.360959999999864L177.39459227988357 46.360959999999864Z');
           shape.attr({"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
           shape.data("name","Circle");

           // Circle
           shape = this.canvas.paper.ellipse();
           shape.attr({"rx":5.242880000000014,"ry":5.242880000000014,"cx":198.4915840000001,"cy":22.78063999999972,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
           shape.data("name","Circle");

           // Label
           shape = this.canvas.paper.text(0,0,'LJ42');
           shape.attr({"x":73.16088400000012,"y":55.532319999999686,"text-anchor":"start","text":"LJ42","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
           shape.data("name","Label");

           // Line_shadow
           shape = this.canvas.paper.path('M77.5 7.5L78.5,1.5L84.5,1.5L84.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M77.5 7.5L78.5,1.5L84.5,1.5L84.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M6.5 7.5L7.5,1.5L12.5,1.5L13.5,8.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M6.5 7.5L7.5,1.5L12.5,1.5L13.5,8.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M23.5 7.5L23.5,1.5L29.5,1.5L29.5,8.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M23.5 7.5L23.5,1.5L29.5,1.5L29.5,8.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M39.5 7.5L40.5,1.5L45.5,1.5L46.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M39.5 7.5L40.5,1.5L45.5,1.5L46.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M59.5 7.5L59.5,0.5L65.5,0.5L65.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M59.5 7.5L59.5,0.5L65.5,0.5L65.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M98.5 6.5L98.5,0.5L104.5,0.5L104.5,6.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M98.5 6.5L98.5,0.5L104.5,0.5L104.5,6.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M116.5 7.5L117.5,0.5L122.5,0.5L123.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M116.5 7.5L117.5,0.5L122.5,0.5L123.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M135.5 6.5L136.5,0.5L141.5,0.5L142.5,6.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M135.5 6.5L136.5,0.5L141.5,0.5L142.5,6.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M174.5 7.5L174.5,0.5L180.5,0.5L180.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M174.5 7.5L174.5,0.5L180.5,0.5L180.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M154.5 6.5L155.5,0.5L161.5,0.5L161.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M154.5 6.5L155.5,0.5L161.5,0.5L161.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M195.5 7.5L195.5,1.5L201.5,1.5L202.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M195.5 7.5L195.5,1.5L201.5,1.5L202.5,7.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M29.5 103.5L29.5,110.5L34.5,110.5L34.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M29.5 103.5L29.5,110.5L34.5,110.5L34.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M7.5 103.5L7.5,110.5L12.5,110.5L12.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M7.5 103.5L7.5,110.5L12.5,110.5L12.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M51.5 103.5L51.5,110.5L56.5,110.5L57.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M51.5 103.5L51.5,110.5L56.5,110.5L57.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M73.5 104.5L73.5,111.5L78.5,111.5L78.5,105.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M73.5 104.5L73.5,111.5L78.5,111.5L78.5,105.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M95.5 104.5L95.5,111.5L100.5,111.5L100.5,105.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M95.5 104.5L95.5,111.5L100.5,111.5L100.5,105.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M117.5 104.5L117.5,111.5L122.5,110.5L122.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M117.5 104.5L117.5,111.5L122.5,110.5L122.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M137.5 104.5L137.5,111.5L142.5,110.5L142.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M137.5 104.5L137.5,111.5L142.5,110.5L142.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M156.5 103.5L156.5,110.5L161.5,110.5L161.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M156.5 103.5L156.5,110.5L161.5,110.5L161.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M177.5 104.5L177.5,111.5L182.5,110.5L182.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M177.5 104.5L177.5,111.5L182.5,110.5L182.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line");

           // Line_shadow
           shape = this.canvas.paper.path('M199.5 104.5L199.5,111.5L204.5,110.5L205.5,104.5');
           shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
           shape.data("name","Line_shadow");

           // Line
           shape = this.canvas.paper.path('M199.5 104.5L199.5,111.5L204.5,110.5L205.5,104.5');
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
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       //cCode += out1 + " = " + in1 + " + " + in2 + ";";
       cCode += "{LJ42 part code by LuboJ}";
       return cCode;
     }
});
