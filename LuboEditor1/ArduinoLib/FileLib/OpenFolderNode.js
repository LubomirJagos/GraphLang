/**
 *  Here is important difference between inheritance in this framework, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.ArduinoLib.FileLib.OpenFolderNode = draw2d.SetFigure.extend({
  NAME: "GraphLang.Shapes.ArduinoLib.FileLib.Node.OpenFolderNode",
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
"M 61.429,28.112 A 4.944,4.944 0 0 0 57.347,26 H 54 V 19 A 5.006,5.006 0 0 0 49,14 H 30.657 A 3.02,3.02 0 0 1 28.536,13.122 L 24.878,9.464 A 4.966,4.966 0 0 0 21.343,8 H 7 a 5.006,5.006 0 0 0 -5,5 v 44 a 5.006,5.006 0 0 0 5,5 h 41.17 a 5.009,5.009 0 0 0 4.716,-3.336 l 9.176,-26 A 4.948,4.948 0 0 0 61.429,28.112 Z M 4,13 a 3,3 0 0 1 3,-3 h 14.343 a 3.02,3.02 0 0 1 2.121,0.878 l 3.658,3.658 A 4.966,4.966 0 0 0 30.657,16 H 49 a 3,3 0 0 1 3,3 v 7 H 48 V 23 A 3,3 0 0 0 45,20 H 11 A 3,3 0 0 0 8,23 V 38.048 L 4,49.233 Z M 46,26 H 15.83 a 5.005,5.005 0 0 0 -4.713,3.332 L 10,32.455 V 23 a 1,1 0 0 1 1,-1 h 34 a 1,1 0 0 1 1,1 z M 60.175,32 51,58 a 3,3 0 0 1 -2.829,2 H 7 A 3,3 0 0 1 4,57 V 55.173 L 13,30 a 3,3 0 0 1 2.829,-2 h 41.518 a 3,3 0 0 1 2.828,4 z"
       );
       shape.attr({"stroke-width":1,"fill":"#000000"});
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

      //cCode += "/* OpenFolder(...) */";
      cCode += out1 + " = FileLib.OpenFolder(" + in1 + ", " + in2 + ");";

      return cCode;
    }

});
