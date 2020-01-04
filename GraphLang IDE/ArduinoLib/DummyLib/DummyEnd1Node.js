/**
 *  Here is important difference between inheritance in this framework, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.ArduinoLib.DummyLib.DummyEnd1Node = draw2d.SetFigure.extend({
  NAME: "GraphLang.ArduinoLib.DummyLib.DummyEnd1Node",
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

    this.setPersistPorts(false);
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
