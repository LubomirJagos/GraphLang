// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.Shapes.Basic.FeedbackNode = draw2d.SetFigure.extend({

   NAME: "GraphLang.Shapes.Basic.FeedbackNode",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:80,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-0.22916799999975979, 16.393442622950822));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#3F81F3");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined", executionOrder: 1};

     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(99.90984000000026, 16.393442622950822));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F3D92E");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined",  executionOrder: 0};

     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(50, 95));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#F3D92E");
     port.setName("in2");
     port.setMaxFanOut(20);
     port.userData = {datatype: "undefined",  executionOrder: 0};

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L80,0 L80,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0 0L80 0L80 20L0 20Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Rectangle
        shape = this.canvas.paper.path('M80 20L0 20L0 61L80 61Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'z');
        shape.attr({"x":33.14338559999999,"y":45.5625,"text-anchor":"start","text":"z","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'-1');
        shape.attr({"x":44.03316480000001,"y":40.5,"text-anchor":"start","text":"-1","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M67.5 35.5L15.5,35.5L27.5,30.5L27.5,40.5L15.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M67.5 35.5L15.5,35.5L27.5,30.5L27.5,40.5L15.5,35.5');
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
      //get all necessary port to have more readable code
      var out0 = this.getOutputPort(0);                               //for right numbering have to take look at init part and think how numbers are :)
      var in0 = this.getInputPort(0);
      var inDefault = this.getInputPort(1);

      var feedbackDatatype = inDefault.getConnections().get(0).getSource().userData.datatype;
      in0.userData.datatype = feedbackDatatype;
      out0.userData.datatype = feedbackDatatype;

      cCode = "";

      //assign default value to feeback node value, this is little fiddling with C/C++ preprocessor
      cCode += "#ifndef feedbackNodeFlag_" + this.getId() + "\n";
      cCode += "\t#define feedbackNodeFlag_" + this.getId() + "\n";
      cCode += "\tfeedBackNode_" + this.getId() + " = wire_" + inDefault.getConnections().get(0).getId() + ";\n";
      cCode += "#endif\n";

      //assign output value to output wire
      feedbackObj = this;
      out0.getConnections().each(function(wireIndex, wireObj){
        cCode += "wire_" + out0.getConnections().get(0).getId() + " = feedBackNode_" + feedbackObj.getId() + ";\n";
      });

      //assign input value for feedback node value, this makes buffer effect
      cCode += "\tfeedBackNode_" + this.getId() + " = wire_" + in0.getConnections().get(0).getId() + ";\n";

      return cCode;
    },

    symbolPicture: " data:image/png;base64,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",

    /**
     *  @name getDeclaration
     *  @desc Just feedback declaration to define its datatype.
     *  @returns {String} C code string, each line is finished with newline symbol \n
     */
    translateToCppCodeDeclaration:function(){
      cCode = "";
      var inDefault = this.getInputPort(1);
      
      var feedbackDatatype = inDefault.getConnections().get(0).getSource().userData.datatype;
      cCode += feedbackDatatype + " feedBackNode_" + this.getId() + ";\n";

      return cCode;
    }

});
