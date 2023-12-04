// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.toStr = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.toStr",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:88, height:28.626804218715847, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.1396706327273955, 47.60155592151922));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.42829922909107, 54.165502695471076));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "string";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 88;
      this.originalHeight= 28.626804218715847;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L88,0 L88,28.626804218715847 L0,28.626804218715847");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'toStr');
        shape.attr({"x":30.083824759687218,"y":17.626804218715847,"text-anchor":"start","text":"toStr","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 11.5L10.5,12.5L20.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 11.5L10.5,12.5L20.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M70.5 13.5L88.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M70.5 13.5L88.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.5 0.5L58.5,1.5L65.5,5.5L69.5,9.5L69.5,15.5L65.5,18.5L58.5,22.5L12.5,22.5L17.5,19.5L20.5,15.5L20.5,9.5L17.5,6.5L12.5,1.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.5 0.5L58.5,1.5L65.5,5.5L69.5,9.5L69.5,15.5L65.5,18.5L58.5,22.5L12.5,22.5L17.5,19.5L20.5,15.5L20.5,9.5L17.5,6.5L12.5,1.5');
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
    
    translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = (String) " + in1 + ";\n";
       return cCode;
     },


});