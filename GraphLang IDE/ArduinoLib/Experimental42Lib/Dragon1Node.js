// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Experimental42Lib.Dragon1Node = draw2d.SetFigure.extend({

   NAME: "GraphLang.ArduinoLib.Experimental42Lib.Dragon1Node",

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
     port.on('contextmenu',function(emitter,event){
       $.contextMenu({
           selector: 'body',
           events:
           {
               hide:function(){ $.contextMenu( 'destroy' ); }
           },

           //these functions are run after user click on some context menu option
           callback: $.proxy(function(key, options)
           {
             switch(key){
               case "Create Constant":
                   alert("Clicked on Create Constant on Dragon1Node.");
                   break;
               case "Do Something...":
                   alert("Clicked Do Something... in Dragon1Node so this is doing something.");
                   break;
               default:
                   alert("Clicked on some action but THIS IS DEFAULT, this is where it all goes when key not match name defined in context menu.");
                   break;
             }
           },this),
           x:event.x,
           y:event.y,
           items:
           {
               "Create Constant": {name: "Create Constant"},
               "Do Something...":    {name: "Do Something..."},
               "separator": "--------------",
               "Add Something...": {name: "Add Something..."}
           }
       });
     });

     // in2
     port = this.addPort(new GraphLang.InputPort(), new draw2d.layout.locator.XYRelPortLocator(2.962962962962963, 69.01408450704224));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in2");
     port.setMaxFanOut(20);

     port.userData = {};
     port.userData.datatype = "error";

     // out1
     port = this.addPort(new GraphLang.OutputPort(), new draw2d.layout.locator.XYRelPortLocator(100, 74));
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
     var myLabel = new draw2d.shape.basic.Label();
     myLabel.setFontSize(10);
     myLabel.setHeight(20);
     myLabel.setFontColor("#000000");
     myLabel.setText("out1");
     myLabel.setStroke(0);
     this.add(myLabel, new draw2d.layout.locator.XYRelPortLocator(110, 50));

     //Label somewhere LuboJ
     var myLabel = new draw2d.shape.basic.Label();
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
      this.originalWidth = 600;
      this.originalHeight= 500;
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
        shape = this.canvas.paper.path("M503.983,273.637c-4.427,0-8.017,3.589-8.017,8.017c0,5.786-5.068,16.712-14.754,26.398c-6.309,6.309-19.516,16.892-37.087,16.892h-36.75c4.725-2.873,9.215-6.094,13.442-9.62h6.205c38.708,0,59.324-29.487,59.324-50.772c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017c0,10.661-9.843,29.459-33.06,33.813c14.679-18.775,23.44-42.392,23.44-68.018c0-30.057-12.044-58.24-32.99-78.824c7.724,0.121,15.801,0.529,24.248,1.297c3.509,0.315,6.813-1.689,8.146-4.949c1.334-3.26,0.383-7.009-2.343-9.24c-0.719-0.588-14.554-11.794-35.509-21.565c8.292-10.788,21.346-31.872,21.346-57.742c0-37.099-18.656-56.182-19.451-56.975c-2.292-2.294-5.741-2.978-8.736-1.738c-2.996,1.241-4.949,4.163-4.949,7.406c0,39.792-25.543,64.11-44.636,78.839C333.722,63.585,295.876,51.307,256,51.307c-39.865,0-77.721,12.278-109.82,35.549c-19.093-14.73-44.635-39.049-44.635-78.839c0-3.243-1.953-6.165-4.949-7.406c-2.993-1.24-6.443-0.556-8.736,1.738c-0.794,0.793-19.451,19.876-19.451,56.975c0,25.869,13.053,46.953,21.347,57.743c-20.955,9.771-34.79,20.977-35.509,21.565c-2.726,2.231-3.677,5.979-2.343,9.24c1.333,3.26,4.635,5.266,8.146,4.949c8.446-0.768,16.524-1.176,24.248-1.297c-20.947,20.584-32.991,48.767-32.991,78.823c0,25.626,8.761,49.243,23.44,68.018c-23.216-4.355-33.06-23.152-33.06-33.813c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017c0,21.286,20.616,50.772,59.324,50.772h6.205c4.227,3.526,8.718,6.747,13.442,9.62h-36.75c-17.572,0-30.779-10.583-37.087-16.892c-9.686-9.686-14.754-20.612-14.754-26.398c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017c0,11.108,7.635,25.92,19.451,37.735c13.921,13.921,31.119,21.588,48.424,21.588h43.002l-3.831,1.915c-2.716,1.357-4.432,4.133-4.432,7.17s1.716,5.813,4.432,7.17c10.379,5.19,20.389,9.402,29.985,12.807l5.753,69.04c0.712,8.54,4.012,16.346,9.071,22.682h-7.018c-2.957,0-5.674,1.627-7.068,4.234c-1.395,2.607-1.242,5.77,0.398,8.229C156.732,502.076,193.54,512,221.795,512c14.087,0,27.871-5.072,34.205-7.769c6.333,2.697,20.118,7.769,34.205,7.769c28.255,0,65.064-9.924,83.63-37.775c1.64-2.46,1.793-5.622,0.398-8.229c-1.395-2.606-4.111-4.234-7.068-4.234h-7.018c5.058-6.335,8.359-14.141,9.071-22.682l5.753-69.04c9.595-3.406,19.606-7.619,29.985-12.809c2.716-1.357,4.432-4.133,4.432-7.17c0-3.037-1.716-5.813-4.432-7.17l-3.831-1.914h43.002c17.305,0,34.503-7.667,48.424-21.588C504.365,307.573,512,292.761,512,281.653C512,277.226,508.411,273.637,503.983,273.637z M423.446,33.06c2.731,8.044,4.111,16.844,4.111,26.264c0,24.292-14.792,44.27-20.805,51.387c-0.592-0.209-1.182-0.422-1.781-0.626c-11.61-3.964-22.922-6.337-33.845-7.139C388.106,90.336,414.544,68.452,423.446,33.06z M399.376,125.116c8.823,2.981,16.896,6.675,23.807,10.331c-0.08,0-0.161,0-0.239,0c-51.589,0-87.518,12.451-105.787,20.793c-4.317,1.971-9.404,0.463-12.103-3.584c-2.781-4.172-1.908-9.852,2.032-13.214c16.271-13.883,34.885-20.841,55.62-20.841C374.282,118.601,386.519,120.771,399.376,125.116z M276.936,252.55c-6.449-2.948-13.561-4.566-20.936-4.566s-14.488,1.618-20.936,4.566c2.139-7.03,3.3-14.482,3.3-22.203c0-24.096-11.22-45.609-28.698-59.627c4.175-1.957,7.879-5.057,10.622-9.17c0.837-1.255,1.534-2.565,2.125-3.906c11.323,9.418,20.291,21.309,26.24,34.953c1.274,2.922,4.16,4.812,7.349,4.812c3.188,0,6.075-1.89,7.349-4.812c5.935-13.609,14.91-25.526,26.238-34.957c0.591,1.343,1.289,2.653,2.126,3.909c2.743,4.113,6.447,7.213,10.622,9.17c-17.479,14.02-28.699,35.532-28.699,59.628C273.637,238.067,274.798,245.519,276.936,252.55z M222.33,230.347c0,33.3-27.092,60.393-60.392,60.393s-60.393-27.092-60.393-60.393s27.092-60.392,60.393-60.392S222.33,197.046,222.33,230.347z M187.594,311.388c1.138-4.757,4.627-8.967,9.33-11.261c3.107-1.516,6.116-2.12,9.195-1.842c7.615,0.679,14.715-3.911,17.287-11.167c4.9-13.819,17.998-23.102,32.594-23.102s27.694,9.284,32.594,23.102c2.573,7.256,9.685,11.845,17.287,11.167c3.081-0.278,6.087,0.326,9.194,1.842c4.704,2.295,8.193,6.505,9.331,11.262c1.335,5.578,0.184,11.04-3.241,15.38c-3.372,4.274-8.423,6.725-13.858,6.725c-6.049,0-11.611-3.1-14.882-8.291c-1.286-2.042-3.424-3.396-5.819-3.686c-0.322-0.038-0.645-0.058-0.964-0.058c-2.064,0-4.063,0.797-5.567,2.248c-6.541,6.311-15.091,9.787-24.075,9.787s-17.534-3.476-24.075-9.787c-1.736-1.675-4.134-2.476-6.531-2.19c-2.395,0.29-4.533,1.644-5.819,3.686c-3.271,5.192-8.833,8.291-14.882,8.291c-5.434,0-10.486-2.452-13.858-6.725C187.41,322.428,186.26,316.966,187.594,311.388zM289.67,230.347c0-33.3,27.092-60.392,60.392-60.392s60.393,27.092,60.393,60.392s-27.092,60.393-60.393,60.393S289.67,263.647,289.67,230.347z M256,67.34c34.755,0,67.825,10.195,96.259,29.574c-3.626,2.73-6.346,5.026-8.061,7.396c-17.332,3.162-33.323,10.823-47.52,22.935c-3.511,2.996-6.037,6.737-7.565,10.793c-13.464,8.917-24.715,20.537-33.111,34.113c-8.398-13.594-19.641-25.195-33.116-34.112c-1.527-4.055-4.053-7.797-7.565-10.794c-14.197-12.113-30.188-19.773-47.52-22.935c-1.715-2.369-4.434-4.665-8.059-7.394C188.181,77.539,221.255,67.34,256,67.34z M84.443,59.324c0-9.42,1.38-18.218,4.111-26.264c8.903,35.393,35.341,57.278,52.32,69.885c-10.923,0.802-22.235,3.176-33.845,7.139c-0.599,0.204-1.189,0.416-1.781,0.626C99.226,103.581,84.443,83.608,84.443,59.324z M112.625,125.116c35.884-12.127,66.936-7.307,92.29,14.326c3.94,3.362,4.812,9.042,2.032,13.214c-2.698,4.047-7.788,5.554-12.103,3.584c-18.271-8.343-54.193-20.793-105.787-20.793c-0.078,0-0.16,0-0.239,0C95.73,131.791,103.801,128.097,112.625,125.116z M67.339,230.347c0.001-31.468,15.437-60.541,41.395-78.219c12.398,0.828,23.593,2.395,33.57,4.362c-32.657,8.689-56.792,38.503-56.792,73.857c0,42.141,34.285,76.426,76.426,76.426c3.565,0,7.068-0.265,10.504-0.74c-0.16,0.538-0.309,1.079-0.44,1.625c-1.35,5.644-1.269,11.371,0.131,16.739c-3.379,0.362-6.785,0.547-10.196,0.547C109.775,324.944,67.339,282.507,67.339,230.347zM290.205,495.967c-14.925,0-30.474-7.633-30.62-7.705c-1.129-0.564-2.357-0.847-3.585-0.847s-2.456,0.282-3.585,0.847c-0.154,0.077-15.583,7.705-30.62,7.705c-18.999,0-42.355-4.997-58.771-18.171h185.951C332.56,490.97,309.203,495.967,290.205,495.967z M182.378,461.642l5.213-13.034l5.261,13.154h-7.993C184.023,461.762,183.196,461.721,182.378,461.642z M319.148,461.762l5.261-13.154l5.213,13.034c-0.818,0.079-1.645,0.12-2.481,0.12H319.148z M353.238,437.748c-0.58,6.968-3.936,13.151-8.906,17.499l-12.48-31.202c-1.217-3.043-4.164-5.039-7.443-5.039s-6.226,1.996-7.443,5.039l-15.087,37.717H210.12l-15.086-37.717c-1.217-3.043-4.164-5.039-7.443-5.039s-6.226,1.996-7.443,5.039l-12.48,31.202c-4.97-4.348-8.325-10.531-8.906-17.499l-5.209-62.501c9.707,2.67,18.897,4.517,27.506,5.724l16.192,40.479c1.217,3.043,4.164,5.039,7.443,5.039s6.226-1.996,7.443-5.039l15.867-39.668c13.684-1.57,23.313-4.42,27.996-6.051c4.683,1.631,14.317,4.478,27.995,6.048l15.869,39.671c1.217,3.043,4.164,5.039,7.443,5.039s6.226-1.996,7.443-5.039l16.19-40.476c8.609-1.207,17.8-3.054,27.506-5.724L353.238,437.748z M199.008,382.671c3.927,0.19,7.695,0.256,11.286,0.214l-5.6,14L199.008,382.671z M301.701,382.871c0.725,0.009,1.434,0.027,2.173,0.027c2.93,0,5.975-0.075,9.119-0.228l-5.687,14.215L301.701,382.871z M297.815,366.671c-24.152-0.879-38.539-6.825-38.658-6.875c-2.017-0.865-4.299-0.865-6.316,0c-0.529,0.227-50.507,20.875-123.704-10.024l19.251-9.625c4.441,0.545,8.963,0.831,13.549,0.831c6.271,0,12.535-0.539,18.681-1.584c6.314,6.477,14.905,10.135,24.075,10.135c8.556,0,16.592-3.215,22.717-8.874c8.392,5.767,18.29,8.874,28.59,8.874s20.198-3.107,28.59-8.874c6.125,5.659,14.161,8.874,22.717,8.874c9.166,0,17.753-3.655,24.066-10.127c6.144,1.046,12.418,1.576,18.69,1.576c4.587,0,9.107-0.285,13.549-0.831l19.242,9.622C347.21,364.786,317.419,367.383,297.815,366.671z M350.063,324.944c-3.409,0-6.813-0.201-10.192-0.563c1.396-5.364,1.477-11.084,0.128-16.723c-0.13-0.546-0.28-1.087-0.44-1.625c3.436,0.475,6.939,0.74,10.504,0.74c42.141,0,76.426-34.285,76.426-76.426c0-35.355-24.137-65.169-56.794-73.857c9.977-1.967,21.173-3.534,33.57-4.362c25.958,17.677,41.395,46.75,41.395,78.219C444.66,282.507,402.224,324.944,350.063,324.944z");
        shape.attr({"stroke":"#000000","stroke-width":1,"opacity":1, "fill":"#000000"});
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
      cCode = "[" +  out1 + ", " + out2 + "] = func_Dragon1_" + this.getId() + "(" + in1 + ", " + in2 + ");\n";

      return cCode;
    }
});
