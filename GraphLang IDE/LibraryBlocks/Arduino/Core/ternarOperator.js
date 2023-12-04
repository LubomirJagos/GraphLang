// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.ternarOperator = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.ternarOperator",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112, height:83.26417237799592, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8847994971429622, 18.427793805892517));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "polymorphic";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8847994971429622, 75.3943885759319));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in3");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "polymorphic";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8847994971429622, 46.51316902086278));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#00FF00");
     port.setName("in2");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "bool";
     port.userData.allowMultipleConnections = false;
     port.userData.connectionMandatory = false;

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.36415510857161, 44.16847320627288));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "polymorphic";
     port.userData.allowMultipleConnections = true;
     port.userData.connectionMandatory = false;

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 83.26417237799592;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112,0 L112,83.26417237799592 L0,83.26417237799592");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'true');
        shape.attr({"x":29.29743999999971,"y":25.510887145996094,"text-anchor":"start","text":"true","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'false');
        shape.attr({"x":26.18806499999971,"y":72.26417237799592,"text-anchor":"start","text":"false","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 13.5L16.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 13.5L16.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 60.5L0.5,60.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 60.5L0.5,60.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M93.5 34.5L112.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M93.5 34.5L112.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 72.5L94.5,34.5L16.5,0.5L17.5,72.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 72.5L94.5,34.5L16.5,0.5L17.5,72.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 37.5L0.5,37.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 37.5L0.5,37.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M16.5 30.5L22.5,36.5L16.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M16.5 30.5L22.5,36.5L16.5,44.5');
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
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var in3 = this.getInputPort("in3"); if (in3.getConnections().getSize() > 0) in3 = "wire_" + in3.getConnections().get(0).getId(); else in3 = "/*in3 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = (" + in2 + "?" + in1 + ":" + in3 + ");\n";
       return cCode;
     },


});