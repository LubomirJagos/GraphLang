/**
 *  Here is important difference between inheritance in this framework, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.ArduinoLib.FileLib.OpenFolderNode = draw2d.SetFigure.extend({
  NAME: "GraphLang.ArduinoLib.FileLib.OpenFolderNode",

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
    port.userData.datatype = "int";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "int";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 90));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in2");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "error";

    this.setPersistPorts(false);
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

  symbolPicture: " data:image/png;base64,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",

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
