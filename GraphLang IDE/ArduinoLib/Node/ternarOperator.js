// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
GraphLang.ArduinoLib.Node.ternarOperator = GraphLang.UserDefinedNode.extend({

   NAME: "GraphLang.ArduinoLib.Node.ternarOperator",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112, height:74.35328561346955, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.9919423542858194, 19.29134655133726));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.9919423542858194, 83.0851160880089));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in3");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.9919423542858194, 50.742620074834974));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "bool"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.47129796571446, 48.116923646369244));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "int"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 74.35328561346955;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112,0 L112,74.35328561346955 L0,74.35328561346955");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Label
        shape = this.canvas.paper.text(0,0,'true');
        shape.attr({"x":22.29743999999971,"y":16.800000190734863,"text-anchor":"start","text":"true","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'false');
        shape.attr({"x":19.18806499999971,"y":63.55328542273469,"text-anchor":"start","text":"false","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
       cCode += out1 + " = (" + in2 + "?" + in1 + ":" + in3 + ");";
       return cCode;
     }
});