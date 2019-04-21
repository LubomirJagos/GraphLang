// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.ArduinoNano = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Node.ArduinoNano",

  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:118,height:341.9331737116525},attr), setter, getter);
    var port;
    // A6
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 64.17428625884003));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A6");
    port.setMaxFanOut(20);
    // A5
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 58.325190137834305));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A5");
    port.setMaxFanOut(20);
    // A4
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 52.4760940168286));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A4");
    port.setMaxFanOut(20);
    // A3
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 46.62699789582288));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A3");
    port.setMaxFanOut(20);
    // A2
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 40.77790177481717));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A2");
    port.setMaxFanOut(20);
    // RST2
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 87.57067074286289));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("RST2");
    port.setMaxFanOut(20);
    // GND2
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 81.72157462185717));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("GND2");
    port.setMaxFanOut(20);
    // 5V
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 75.87247850085146));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("5V");
    port.setMaxFanOut(20);
    // VIN
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 93.4197668638686));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("VIN");
    port.setMaxFanOut(20);
    // A1
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 34.92880565381145));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A1");
    port.setMaxFanOut(20);
    // A7
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 70.02338237984574));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A7");
    port.setMaxFanOut(20);
    // A0
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 29.079709532805737));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("A0");
    port.setMaxFanOut(20);
    // REF
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(0, 23.23061341180002));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("REF");
    port.setMaxFanOut(20);
    // 3V3
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-0.3796610169490385, 17.381517290794307));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("3V3");
    port.setMaxFanOut(20);
    // D13
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(-0.3796610169490385, 11.532421169788591));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("D13");
    port.setMaxFanOut(20);
    // D12
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 11.824875975838877));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D12");
    port.setMaxFanOut(20);
    // D11
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 17.381517290794307));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D11");
    port.setMaxFanOut(20);
    // D3
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 64.17428625884003));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D3");
    port.setMaxFanOut(20);
    // GND
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 75.87247850085146));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("GND");
    port.setMaxFanOut(20);
    // RX
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 87.57067074286289));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("RX");
    port.setMaxFanOut(20);
    // D9
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 29.079709532805737));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D9");
    port.setMaxFanOut(20);
    // D7
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 40.77790177481717));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D7");
    port.setMaxFanOut(20);
    // D4
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 58.325190137834305));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D4");
    port.setMaxFanOut(20);
    // D2
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 70.02338237984574));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D2");
    port.setMaxFanOut(20);
    // D10
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 23.23061341180002));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D10");
    port.setMaxFanOut(20);
    // D8
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 34.92880565381145));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D8");
    port.setMaxFanOut(20);
    // D6
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 46.62699789582288));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D6");
    port.setMaxFanOut(20);
    // D5
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 52.4760940168286));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("D5");
    port.setMaxFanOut(20);
    // RST
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 81.72157462185717));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("RST");
    port.setMaxFanOut(20);
    // TX
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 93.4197668638686));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("TX");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
     var shape = this._super();
     this.originalWidth = 118;
     this.originalHeight= 341.9331737116525;
     return shape;
  },

  createSet: function()
  {
      this.canvas.paper.setStart();

       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L118,0 L118,341.9331737116525 L0,341.9331737116525");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");

       // Rectangle
       shape = this.canvas.paper.path('M0 16.933173711652728L118 16.933173711652728L118 341.9331737116525L0 341.9331737116525Z');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");

       // Rectangle
       shape = this.canvas.paper.path('M38.997982214380045 0L79.00201778562007 0L79.00201778562007 49.1941518511195L38.997982214380045 49.1941518511195Z');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#B0B0B0","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");

       // Label
       shape = this.canvas.paper.text(0,0,'D12');
       shape.attr({"x":89,"y":40.105048711652614,"text-anchor":"start","text":"D12","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D11');
       shape.attr({"x":89,"y":60.105048711652614,"text-anchor":"start","text":"D11","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D10');
       shape.attr({"x":89,"y":80.10504871165261,"text-anchor":"start","text":"D10","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D9');
       shape.attr({"x":89,"y":100.10504871165261,"text-anchor":"start","text":"D9","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D8');
       shape.attr({"x":89,"y":120.10504871165261,"text-anchor":"start","text":"D8","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D7');
       shape.attr({"x":89,"y":140.1050487116526,"text-anchor":"start","text":"D7","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D6');
       shape.attr({"x":89,"y":160.1050487116526,"text-anchor":"start","text":"D6","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D5');
       shape.attr({"x":89,"y":180.1050487116526,"text-anchor":"start","text":"D5","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D4');
       shape.attr({"x":89,"y":200.1050487116526,"text-anchor":"start","text":"D4","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D3');
       shape.attr({"x":89,"y":220.1050487116526,"text-anchor":"start","text":"D3","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D2');
       shape.attr({"x":89,"y":240.1050487116526,"text-anchor":"start","text":"D2","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'RST');
       shape.attr({"x":89,"y":280.1050487116526,"text-anchor":"start","text":"RST","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'GND');
       shape.attr({"x":90,"y":260.1050487116526,"text-anchor":"start","text":"GND","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'TX');
       shape.attr({"x":89,"y":320.1050487116526,"text-anchor":"start","text":"TX","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'RX');
       shape.attr({"x":89,"y":300.1050487116526,"text-anchor":"start","text":"RX","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'D13');
       shape.attr({"x":9,"y":40.105048711652614,"text-anchor":"start","text":"D13","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'3V3');
       shape.attr({"x":9,"y":60.105048711652614,"text-anchor":"start","text":"3V3","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'REF');
       shape.attr({"x":9,"y":80.10504871165261,"text-anchor":"start","text":"REF","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A1');
       shape.attr({"x":9,"y":120.10504871165261,"text-anchor":"start","text":"A1","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A2');
       shape.attr({"x":9,"y":139.4331737116526,"text-anchor":"start","text":"A2","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A5');
       shape.attr({"x":9,"y":200.1050487116526,"text-anchor":"start","text":"A5","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A7');
       shape.attr({"x":9,"y":240.1050487116526,"text-anchor":"start","text":"A7","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A6');
       shape.attr({"x":9,"y":220.1050487116526,"text-anchor":"start","text":"A6","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A4');
       shape.attr({"x":9,"y":180.1050487116526,"text-anchor":"start","text":"A4","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A3');
       shape.attr({"x":9,"y":160.1050487116526,"text-anchor":"start","text":"A3","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'A0');
       shape.attr({"x":9,"y":100.10504871165261,"text-anchor":"start","text":"A0","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'5V');
       shape.attr({"x":9,"y":260.1050487116526,"text-anchor":"start","text":"5V","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'GND2');
       shape.attr({"x":9,"y":280.1050487116526,"text-anchor":"start","text":"GND2","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'RST2');
       shape.attr({"x":9,"y":300.1050487116526,"text-anchor":"start","text":"RST2","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Label
       shape = this.canvas.paper.text(0,0,'VIN');
       shape.attr({"x":9,"y":320.1050487116526,"text-anchor":"start","text":"VIN","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");

       // Line_shadow
       shape = this.canvas.paper.path('M42.5 244.5L54.5,232.5Q60.185558795022075,226.96861909582412 65.5, 232.5L69.5,237.5Q75.48314304451094,242.96762310086586 76.5, 243.5L76.5,243.5Q77.50191959466872,244.88756471226742 78.5, 245.5L78.5,245.5Q79.5206961448265,246.80750632366897 81.5, 248.5L81.5,248.5Q83.55824924514206,250.64738954647208 87.5, 254.5L87.5,254.5Q91.63335544577308,258.3271559920781 85.5, 263.5L64.5,284.5Q59.153809891162155,290.4665065120907 53.5, 284.5L33.5,264.5Q27.30287443277018,259.2489519995923 32.5, 253.5L49.5,237.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M42.5 244.5L54.5,232.5Q60.185558795022075,226.96861909582412 65.5, 232.5L69.5,237.5Q75.48314304451094,242.96762310086586 76.5, 243.5L76.5,243.5Q77.50191959466872,244.88756471226742 78.5, 245.5L78.5,245.5Q79.5206961448265,246.80750632366897 81.5, 248.5L81.5,248.5Q83.55824924514206,250.64738954647208 87.5, 254.5L87.5,254.5Q91.63335544577308,258.3271559920781 85.5, 263.5L64.5,284.5Q59.153809891162155,290.4665065120907 53.5, 284.5L33.5,264.5Q27.30287443277018,259.2489519995923 32.5, 253.5L49.5,237.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M53.5 232.5L49.5,227.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M53.5 232.5L49.5,227.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M51.5 235.5L47.5,230.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M51.5 235.5L47.5,230.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M48.5 238.5L44.5,234.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M48.5 238.5L44.5,234.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M45.5 240.5L41.5,236.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M45.5 240.5L41.5,236.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M42.5 243.5L38.5,240.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M42.5 243.5L38.5,240.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M39.5 246.5L35.5,242.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M39.5 246.5L35.5,242.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M36.5 251.5L32.5,245.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M36.5 251.5L32.5,245.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M32.5 253.5L29.5,250.5L29.5,250.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M32.5 253.5L29.5,250.5L29.5,250.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M64.5 230.5L67.5,227.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M64.5 230.5L67.5,227.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M67.5 233.5L70.5,229.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M67.5 233.5L70.5,229.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M69.5 236.5L72.5,232.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M69.5 236.5L72.5,232.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M72.5 238.5L75.5,235.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M72.5 238.5L75.5,235.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M74.5 241.5L77.5,237.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M74.5 241.5L77.5,237.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M76.5 243.5L79.5,240.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M76.5 243.5L79.5,240.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M78.5 245.5L81.5,242.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M78.5 245.5L81.5,242.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M80.5 247.5L83.5,244.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M80.5 247.5L83.5,244.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M83.5 250.5L86.5,247.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M83.5 250.5L86.5,247.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M85.5 252.5L89.5,249.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M85.5 252.5L89.5,249.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M87.5 262.5L91.5,265.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M87.5 262.5L91.5,265.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M85.5 264.5L89.5,267.5L89.5,267.5L89.5,267.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M85.5 264.5L89.5,267.5L89.5,267.5L89.5,267.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M83.5 265.5L87.5,269.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M83.5 265.5L87.5,269.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M81.5 268.5L85.5,271.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M81.5 268.5L85.5,271.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M79.5 270.5L82.5,273.5L82.5,273.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M79.5 270.5L82.5,273.5L82.5,273.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M77.5 272.5L80.5,275.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M77.5 272.5L80.5,275.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M74.5 274.5L77.5,278.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M74.5 274.5L77.5,278.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M71.5 277.5L75.5,281.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M71.5 277.5L75.5,281.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M69.5 280.5L72.5,283.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M69.5 280.5L72.5,283.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M66.5 283.5L69.5,286.5L69.5,286.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M66.5 283.5L69.5,286.5L69.5,286.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M63.5 286.5L66.5,289.5L66.5,289.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M63.5 286.5L66.5,289.5L66.5,289.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M30.5 262.5L26.5,265.5L26.5,265.5L26.5,265.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M30.5 262.5L26.5,265.5L26.5,265.5L26.5,265.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M33.5 264.5L29.5,267.5L29.5,267.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M33.5 264.5L29.5,267.5L29.5,267.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M35.5 267.5L32.5,270.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M35.5 267.5L32.5,270.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M38.5 269.5L35.5,272.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M38.5 269.5L35.5,272.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M40.5 272.5L37.5,275.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M40.5 272.5L37.5,275.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M42.5 273.5L39.5,277.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M42.5 273.5L39.5,277.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M45.5 276.5L41.5,280.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M45.5 276.5L41.5,280.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M47.5 279.5L45.5,281.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M47.5 279.5L45.5,281.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M50.5 281.5L47.5,284.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M50.5 281.5L47.5,284.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M52.5 284.5L49.5,287.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M52.5 284.5L49.5,287.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");

       // Line_shadow
       shape = this.canvas.paper.path('M54.5 286.5L51.5,289.5L51.5,289.5L51.5,289.5');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");

       // Line
       shape = this.canvas.paper.path('M54.5 286.5L51.5,289.5L51.5,289.5L51.5,289.5');
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











    /*****************************************************************************************
     * NEXT PART ADDED BY LuboJ TO MAKE IT RUNNABLE IN GraphLangUtils
     *****************************************************************************************/
     translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var in2 = this.getInputPort("in2"); if (in2.getConnections().getSize() > 0) in2 = "wire_" + in2.getConnections().get(0).getId(); else in2 = "/*in2 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = " + in1 + " + " + in2 + ";";
       return cCode;
     }
});
