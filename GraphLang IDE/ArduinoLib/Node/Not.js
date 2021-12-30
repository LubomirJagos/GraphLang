// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
GraphLang.ArduinoLib.Node.Not = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.Not",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:87.41317991740112,height:27.975107192993164},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-6.609729701349388, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {"datatype":"bool", "executionOrder": -1};
     
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(106.11421635252368, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {"datatype":"bool", "executionOrder": -1};

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 87.41317991740112;
      this.originalHeight= 27.975107192993164;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L87.41317991740112,0 L87.41317991740112,27.975107192993164 L0,27.975107192993164");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Circle
        shape = this.canvas.paper.path('M62.35749420410542 25.225552287021685L64.27815434387094 25.05751629830607L66.1707789441258 24.550389065092503L67.94658860410556 23.722315421218326L69.55162624589485 22.598455965327133L70.93712361293609 21.212958598285866L72.06098306882728 19.60792095649657L72.88905671270152 17.832111296516786L73.39618394591508 15.93948669626198L73.56695596410555 13.987553596496582L73.39618394591508 12.035620496731184L72.88905671270152 10.142995896476378L72.06098306882728 8.367186236496593L70.93712361293609 6.762148594707298L69.55162624589485 5.376651227666031L67.94658860410556 4.252791771774838L66.1707789441258 3.424718127900661L64.27815434387094 2.9175908946870948L62.35749420410542 2.749554905971479L62.35749420410542 2.1475535964965786L11.79749420410542 2.1475535964965786L11.79749420410542 25.827553596496585L62.35749420410542 25.827553596496585L62.35749420410542 25.225552287021685Z');
        shape.attr({"stroke":"#1B1B1B","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'not');
        shape.attr({"x":32.061282014647475,"y":13.987553596496582,"text-anchor":"start","text":"not","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M87.5 13.5L73.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M87.5 13.5L73.5,13.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 13.5L0.5,12.5L0.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 13.5L0.5,12.5L0.5,12.5');
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
    
    translateToCppCode: function(){
      cCode = "";

      inputVariable = "false";
      if (this.getInputPort("in1").getConnections().getSize() > 0) inputVariable = "wire_" + this.getInputPort("in1").getConnections().first().getId();
      this.getOutputPort("out1").getConnections().each(function(connectionIndex, connectionObj){
        cCode += "wire_" + connectionObj.getId() + " = !" + inputVariable + ";\n";
      });

      return cCode;    
    }
    
});

