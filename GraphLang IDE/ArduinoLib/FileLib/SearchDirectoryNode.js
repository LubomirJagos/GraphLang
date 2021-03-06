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
    port.userData.datatype = "error";

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
