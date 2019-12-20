/**
 *  Here is important difference between inheritance in this framework, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.ArduinoLib.DummyLib.DummyEnd1Node = draw2d.SetFigure.extend({
  NAME: "GraphLang.Shapes.ArduinoLib.DummyLib.DummyEnd1Node",
  init:function(attr, setter, getter){
    this._super($.extend(attr,{color: "#004200", bgColor: "#FFFF00", width: "42", height: "42"}), setter, getter);
    this.createPort("input");
    this.createPort("input");
    this.createPort("input");
    this.createPort("output");
  },


  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:130.8515625,height:83},attr), setter, getter);

    var port;
    // Port
    port = this.addPort(new draw2d.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(110, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "int32";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "int32";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 90));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in2");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "error";

    this.persistPorts=false;
  },

  createShapeElement : function()
  {
     var shape = this._super();

/* don't know now what it is doing, just comment it seems running fine for now, LuboJ
     this.originalWidth = 60;
     this.originalHeight= 60;
*/

     return shape;
  },

  createSet: function()
  {
      this.canvas.paper.setStart();

       // BoundingBox
       shape = this.canvas.paper.path(
"m15.59101,0.49192l17.085301,0l12.821278,13.09446l0,17.89365l-12.648598,12.016899l-17.430342,0l-12.92426,-12.838669l0,-17.19418l13.09662,-12.97216z"
       );
       shape.attr({"stroke-width":1,"fill":"#0000FF","stroke":"#0000FF"});
       shape.data("name","mainPicture");



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
      var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
      var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";

      //cCode += "/* DummyEnd1(...) */";
      cCode += out1 + " = DummyLib.DummyEnd1(" + in1 + ", " + in2 + ");";

      return cCode;
    }

});
