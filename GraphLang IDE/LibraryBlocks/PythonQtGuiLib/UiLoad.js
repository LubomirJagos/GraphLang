// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.PythonQtGuiLib.UiLoad = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.PythonQtGuiLib.UiLoad",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112, height:46.28480000000002, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-0.7756331428571985, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "QtUiObject"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.13461142857149, 30.000000000000025));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "String"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.13461142857149, 69.99999999999997));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#70DB70");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "QtUiApplication"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 46.28480000000002;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112,0 L112,46.28480000000002 L0,46.28480000000002");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.515554559999941 0L97.02595455999995 0L97.02595455999995 46.28480000000002L15.515554559999941 46.28480000000002Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M68.14915455999994 36.6592L44.392354559999944 36.6592L44.392354559999944 9.62560000000002L68.14915455999994 9.62560000000002Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#1900FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10.649599999999992,"ry":10.649599999999992,"cx":42.95875456000002,"cy":15.155200000000008,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M97.5 23.5L112.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M97.5 23.5L112.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 23.5L0.5,22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 23.5L0.5,22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M58.5 33.5L78.5,33.5L70.5,6.5L58.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M58.5 33.5L78.5,33.5L70.5,6.5L58.5,32.5');
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
    
    jsonDocument: [],
    
    
});