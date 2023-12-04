/**
 *  Here is important difference between inheritance in this framework, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.ArduinoLib.FileLib.SearchDirectoryNode = draw2d.SetFigure.extend({
  NAME: "GraphLang.ArduinoLib.FileLib.SearchDirectoryNode",
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
    port = this.addPort(new draw2d.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(110, 90));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out2");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "errorDatatype";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 10));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "string";

    // Port
    port = this.addPort(new draw2d.InputPort(), new draw2d.layout.locator.XYRelPortLocator(-10, 90));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("in2");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "errorDatatype";

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
"M 457.1875,80.90625 H 262.39844 L 213.58984,20.769531 C 203.16797,8.085938 187.87891,0.5 171.46094,0.5 H 54.699219 C 24.6875,0.5 0,25.414062 0,55.425781 V 378.29687 c 0,29.89844 24.6875,54.81641 54.699219,54.81641 H 457.30078 C 487.3125,433.11328 512,408.19531 512,378.18359 V 135.15234 C 511.88672,105.14063 487.19922,80.90625 457.1875,80.90625 Z M 22.648438,378.18359 V 55.425781 c 0,-17.554687 14.496093,-32.277343 32.050781,-32.277343 H 171.46094 c 9.51172,0 18.57031,4.53125 24.57422,12.003906 l 37.03125,45.753906 h -120.4961 c -29.898435,0 -54.812498,24.23438 -54.812498,54.24609 v 275.3086 h -3.058593 c -17.554688,0 -32.050781,-14.72266 -32.050781,-32.27735 z m 466.589842,0 c 0,17.44141 -14.49609,32.27735 -32.05078,32.27735 H 80.40625 v -275.3086 c 0,-17.4414 14.722656,-31.59765 32.16406,-31.59765 H 457.1875 c 17.44141,0 32.05078,14.15625 32.05078,31.59765 z m 0,0"
       );
       shape.attr({"stroke-width":1,"fill":"#FF0000","stroke":"#FF0000"});
       shape.data("name","mainPicture");

       shape = this.canvas.paper.path(
 "m 329.89453,295.96875 c 10.19141,-13.47656 16.30859,-30.35156 16.30859,-48.47266 0,-44.50781 -36.23828,-80.63281 -80.85937,-80.63281 -44.62109,0 -80.85938,36.125 -80.85938,80.63281 0,44.50782 36.23829,80.63282 80.85938,80.63282 18.23437,0 34.99219,-6 48.47266,-16.19532 l 33.29296,33.1836 c 2.26563,2.15234 5.09766,3.28515 8.04297,3.28515 2.94141,0 5.77344,-1.13281 8.03907,-3.28515 4.41796,-4.41797 4.41796,-11.55078 0,-15.96875 z M 207.13281,247.38281 c 0,-31.9375 26.16016,-57.98437 58.21094,-57.98437 32.05078,0 58.21094,26.04687 58.21094,57.98437 0,15.85547 -6.34375,30.125 -16.76172,40.65625 -0.11328,0.11328 -0.33985,0.22656 -0.45313,0.45313 -0.11328,0.11328 -0.22656,0.22656 -0.33984,0.33984 -10.53125,10.19141 -24.91406,16.53516 -40.65625,16.53516 -32.05078,0.11328 -58.21094,-25.9336 -58.21094,-57.98438 z m 0,0"
       );
       shape.attr({"stroke-width":1,"fill":"#FF0000","stroke":"#FF0000"});
       shape.data("name","layer1Picture");

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

      //cCode += "/* SearchDirectory(...) */";
      cCode += out1 + " = FileLib.SearchDirectory(" + in1 + ", " + in2 + ");";

      return cCode;
    }

});
