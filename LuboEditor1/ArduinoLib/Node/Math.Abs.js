// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.Math.Abs = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Math.Abs",

    init:function(attr, setter, getter)
    {
      this._super( $.extend({stroke:0, bgColor:null, width:112.00997489540259,height:71.68},attr), setter, getter);
      var port;
      // in1
      port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(1.356254706974869, 48.102678571428434));
      port.setConnectionDirection(3);
      port.setBackgroundColor("#37B1DE");
      port.setName("in1");
      port.setMaxFanOut(20);

      port.userData = {};
      port.userData.datatype = "double";

      // out1
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.28326499590028, 49.49776785714272));
      port.setConnectionDirection(1);
      port.setBackgroundColor("#37B1DE");
      port.setName("out1");
      port.setMaxFanOut(20);

      port.userData = {};
      port.userData.datatype = "double";
      
      this.persistPorts=false;
    },

    createShapeElement : function()
    {
       var shape = this._super();
       this.originalWidth = 112.00997489540259;
       this.originalHeight= 71.68;
       return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

         // BoundingBox
         shape = this.canvas.paper.path("M0,0 L112.00997489540259,0 L112.00997489540259,71.68 L0,71.68");
         shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
         shape.data("name","BoundingBox");

         // Rectangle
         shape = this.canvas.paper.path('M29.184000000000083 0L89.60000000000002 0L89.60000000000002 71.68L29.184000000000083 71.68Z');
         shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
         shape.data("name","Rectangle");

         // Label
         shape = this.canvas.paper.text(0,0,'A');
         shape.attr({"x":54.0543997688294,"y":35.84000000000003,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
         shape.data("name","Label");

         // Line_shadow
         shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line_shadow");

         // Line
         shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line");

         // Line_shadow
         shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line_shadow");

         // Line
         shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line");

         // Line_shadow
         shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line_shadow");

         // Line
         shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line");

         // Line_shadow
         shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
         shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
         shape.data("name","Line_shadow");

         // Line
         shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
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
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = Math.Abs(" + in1 + ");";
       return cCode;
     }
});
