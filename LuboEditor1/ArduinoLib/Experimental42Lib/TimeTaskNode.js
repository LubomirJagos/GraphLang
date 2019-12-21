// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Experimental42Lib.TimeTaskNode = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Experimental42Lib.TimeTaskNode",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:135,height:71},attr), setter, getter);
     var port;
     // in1
     port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(2.962962962962963, 30.985915492957744));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "int";

     // in2
     port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(2.962962962962963, 69.01408450704224));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // out1
     port = this.addPort(new GraphLang.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(100, 74.64788732394365));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // out2
     port = this.addPort(new GraphLang.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(100, 20));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#FFFF00");
     port.setName("out2");
     port.setMaxFanOut(20);
     port.userData = {};
     port.userData.datatype = "int";

     //Label somewhere LuboJ
     var myLabel = new draw2d.shape.basic.Label("");
     myLabel.setFontSize(10);
     myLabel.setHeight(20);
     myLabel.setFontColor("#000000");
     myLabel.setText("out2");
     myLabel.setStroke(0);
     this.add(myLabel, new draw2d.layout.locator.XYRelPortLocator(110, -10));

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 300;
      this.originalHeight= 300;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L135,0 L135,71 L0,71");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M26 0L102 0L102 71L26 71Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");


        // Line
        shape = this.canvas.paper.path("m167.364,48.003v-23.003h10.5c6.903,0 12.5-5.597 12.5-12.5s-5.596-12.5-12.5-12.5h-59.5c-6.903,0-12.5,5.597-12.5,12.5s5.597,12.5 12.5,12.5h10.5v23.003c-59.738,9.285-105.604,61.071-105.604,123.37-3.55271e-15,68.845 56.01,124.854 124.854,124.854s124.854-56.01 124.854-124.854c0-62.299-45.866-114.085-105.604-123.37zm-19.25,223.225c-55.06,0-99.854-44.795-99.854-99.854s44.795-99.854 99.854-99.854 99.854,44.795 99.854,99.854-44.794,99.854-99.854,99.854z");
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":6,"stroke-dasharray":null,"opacity":1,"fill":"#000000"});
        shape.data("name","Line");

        // Line
        shape = this.canvas.paper.path("m160.614,166.18v-58.889c0-6.903-5.597-12.5-12.5-12.5s-12.5,5.597-12.5,12.5v66.1c0,2.033 0.81,3.982 2.25,5.416l34.969,34.822c4.893,4.872 12.806,4.854 17.678-0.037 4.871-4.892 4.854-12.807-0.037-17.678l-29.86-29.734z");
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":6,"stroke-dasharray":null,"opacity":1,"fill":"#000000"});
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
      //1st get input/output wire names
      var in1 = this.getInputPort("in1");
      if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
      var in2 = this.getInputPort("in2");
      if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";

      var out1 = this.getOutputPort("out1");
      if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId();
      else out1 = "/*out1 default value*/";
      var out2 = this.getOutputPort("out2");
      if (out2.getConnections().getSize() > 0) out2 = "wire_" + out2.getConnections().get(0).getId();
      else out2 = "/*out2 default value*/";

      //2nd generate function head
      //in C/C++ there is nothing like multiple output, so for now here is used Matlab syntax as matrix
      cCode = "[" +  out1 + ", " + out2 + "] = func_TimeTaskNode_" + this.getId() + "(" + in1 + ", " + in2 + ");\n";

      return cCode;
    }
});
