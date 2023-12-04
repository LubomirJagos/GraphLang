// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Not = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Not",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:87, height:27.840000000000032, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-6.0664079493039536, 46.12068965517248));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "bool";

     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(107.19288604387563, 46.12068965517248));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     if (!port.userData) port.userData = {}
     port.userData.datatype = "bool";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 87;
      this.originalHeight= 27.840000000000032;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L87,0 L87,27.840000000000032 L0,27.840000000000032");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Circle
        shape = this.canvas.paper.path('M61.85749420410542 23.077998690525078L63.77815434387094 22.90996270180949L65.6707789441258 22.40283546859598L67.44658860410556 21.574761824721804L69.05162624589485 20.45090236883061L70.43712361293609 19.065405001789372L71.56098306882728 17.460367360000077L72.38905671270152 15.684557700020264L72.89618394591508 13.791933099765401L73.06695596410555 11.840000000000032L72.89618394591508 9.888066900234662L72.38905671270152 7.9954422999798L71.56098306882728 6.219632639999986L70.43712361293609 4.614594998210691L69.05162624589485 3.229097631169452L67.44658860410556 2.1052381752782594L65.6707789441258 1.2771645314040825L63.77815434387094 0.770037298190573L61.85749420410542 0.6020013094749856L61.85749420410542 0L11.29749420410542 0L11.29749420410542 23.680000000000064L61.85749420410542 23.680000000000064L61.85749420410542 23.077998690525078Z');
        shape.attr({"stroke":"#1B1B1B","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'not');
        shape.attr({"x":35.561282014647475,"y":16.840000000000032,"text-anchor":"start","text":"not","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M87.5 11.5L73.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M87.5 11.5L73.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 11.5L0.5,10.5L0.5,10.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 11.5L0.5,10.5L0.5,10.5');
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

      inputVariable = "false";
      if (this.getInputPort("in1").getConnections().getSize() > 0) inputVariable = "wire_" + this.getInputPort("in1").getConnections().first().getId();
      this.getOutputPort("out1").getConnections().each(function(connectionIndex, connectionObj){
        cCode += "wire_" + connectionObj.getId() + " = !" + inputVariable + ";\n";
      });

      return cCode;    
    },


});