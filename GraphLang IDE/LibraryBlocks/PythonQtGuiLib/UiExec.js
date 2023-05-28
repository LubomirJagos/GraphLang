// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.PythonQtGuiLib.UiExec = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.PythonQtGuiLib.UiExec",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:84.69680000000005, height:53.79456003875731, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0.47699558897147953, 44.5427938861038));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#70DB70");
     port.setName("Port");
     port.setMaxFanOut(20);
     port.userData = {datatype: "QtUiApplication"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 84.69680000000005;
      this.originalHeight= 53.79456003875731;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L84.69680000000005,0 L84.69680000000005,53.79456003875731 L0,53.79456003875731");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.064799999999991 0L84.69680000000005 0L84.69680000000005 47.92320000000001L15.064799999999991 47.92320000000001Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":9.011200000000002,"ry":9.011200000000002,"cx":33.08719999999991,"cy":14.336000000000041,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10.649599999999992,"ry":10.649599999999992,"cx":49.88080000000005,"cy":23.96160000000006,"stroke":"none","stroke-width":0,"fill":"#C02911","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":11,"ry":11,"cx":64.97680000000003,"cy":29.961600000000033,"stroke":"none","stroke-width":0,"fill":"#C0AF11","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'exec');
        shape.attr({"x":24.06479999999999,"y":42.99455984802245,"text-anchor":"start","text":"exec","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M14.5 22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M14.5 22.5L0.5,22.5');
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