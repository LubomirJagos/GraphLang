// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:87, height:45.87519999999995, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // out2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.6210832183908, 38.47307477678568));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F30000");
     port.setName("out2");
     port.setMaxFanOut(20);
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.6210832183908, 78.33775111607146));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#EBF300");
     port.setName("out1");
     port.setMaxFanOut(20);
     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-4.309951264367921, 16.151646205357185));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F30000");
     port.setName("in3");
     port.setMaxFanOut(20);
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-4.309951264367921, 54.359654017857146));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#08F300");
     port.setName("in2");
     port.setMaxFanOut(20);
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-4.309951264367921, 96.5087890625002));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F0F3F3");
     port.setName("in1");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 87;
      this.originalHeight= 45.87519999999995;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L87,0 L87,45.87519999999995 L0,45.87519999999995");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M10.54954239999995 0L61.33994240000004 0L61.33994240000004 45.87519999999995L10.54954239999995 45.87519999999995Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.path('M34.85103152877127 10.37698692448862L32.89777101471668 9.466166588413216L30.48399051503293 8.819396052816955L27.994570239999916 8.601599999999962L25.50514996496679 8.819396052816955L23.091369465283037 9.46616658841316L20.826570239999796 10.52225981134626L18.779567067533662 11.955586863446285L17.01255710344617 13.722596827533721L15.579230051346144 15.769599999999969L14.523136828413044 18.03439922528321L13.876366292816897 20.44817972496685L13.658570239999904 22.937599999999975L13.876366292816897 25.4270202750331L14.523136828413044 27.84080077471674L15.579230051346144 30.10559999999998L17.01255710344617 32.15260317246623L18.779567067533662 33.919613136553664L20.826570239999796 35.35294018865369L23.091369465283037 36.409033411586734L25.50514996496679 37.055803947182994L27.994570239999916 37.27359999999999L30.483990515033042 37.055803947182994L32.89777101471668 36.409033411586734L35.16257023999981 35.35294018865369L37.20957341246606 33.919613136553664L38.97658337655355 32.15260317246623L40.409910428653575 30.10559999999998L41.466003651586675 27.84080077471674L42.112774187182936 25.4270202750331L42.227259605282256 24.118445958254256L41.67914239999982 24.16640000000001L40.185490234979966 24.03572236830979L38.737221935169714 23.64766004695207L37.37834239999984 23.014004113192186L36.150140496520066 22.154007881932216L35.089934518067594 21.093801903479743L34.229938286807624 19.865599999999972L33.59628235304774 18.50672046483004L33.208220031690075 17.058452165019844L33.07754239999986 15.564799999999991L33.208220031690075 14.071147834980138L33.59628235304774 12.622879535169886L34.229938286807624 11.263999999999953L34.85103152877127 10.37698692448862Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C00F0F","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6.375342080000024,"ry":6.375342080000024,"cx":42.45298944000004,"cy":15.614474239999964,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M87.5 34.5L73.5,34.5L62.5,25.5L57.5,25.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M87.5 34.5L73.5,34.5L62.5,25.5L57.5,25.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M62.5 5.5L73.5,5.5L82.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M62.5 5.5L73.5,5.5L82.5,12.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 14.5L6.5,13.5L0.5,7.5L0.5,7.5L0.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 14.5L6.5,13.5L0.5,7.5L0.5,7.5L0.5,7.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 22.5L6.5,16.5L10.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 22.5L6.5,16.5L10.5,16.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 40.5L10.5,40.5L10.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 40.5L10.5,40.5L10.5,40.5');
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
    
    jsonDocument: [{"type":"GraphLang.Shapes.Basic.ConstantNode","id":"6a1d29b9-19b8-e991-4f3b-df5ab312f2db","x":105,"y":173,"width":19.59999990463257,"height":25.199999809265137,"alpha":1,"angle":0,"userData":{"datatype":"int","isTerminal":true,"executionOrder":-1},"cssClass":"GraphLang_Shapes_Basic_ConstantNode","bgColor":"#0000FF","color":"#DD2241","stroke":3,"radius":0,"dasharray":"-","text":"0","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#FFFFFF","fontFamily":null,"editor":"draw2d.ui.LabelInplaceEditor"},{"type":"GraphLang.Shapes.Basic.SliderNode","id":"59f6efdf-694d-3e29-5514-1f3f32d60a8a","x":75,"y":240,"width":120,"height":20,"alpha":1,"angle":0,"userData":{"isTerminal":true,"executionOrder":-1},"cssClass":"GraphLang_Shapes_Basic_SliderNode","ports":[{"type":"draw2d.OutputPort","id":"90ed79be-ecd4-d5b1-c0ff-bb4e2087ef9d","width":8,"height":8,"alpha":1,"angle":0,"userData":{"datatype":"int","value":0,"status":0,"executionOrder":1},"cssClass":"draw2d_OutputPort","bgColor":"#4F6870","color":"#1B1B1B","stroke":1,"dasharray":null,"maxFanOut":9007199254740991,"name":"output0","port":"draw2d.OutputPort","locator":"draw2d.layout.locator.OutputPortLocator"}],"bgColor":"#D3D3D3","color":"#DD2241","stroke":3,"radius":4,"dasharray":"-"},{"type":"GraphLang.Shapes.Basic.ConstantNode","id":"cb47b8cb-816d-98df-3314-3ac19707b2ce","x":105,"y":310,"width":19.59999990463257,"height":25.199999809265137,"alpha":1,"angle":0,"userData":{"datatype":"int","isTerminal":true,"executionOrder":-1},"cssClass":"GraphLang_Shapes_Basic_ConstantNode","bgColor":"#0000FF","color":"#DD2241","stroke":3,"radius":0,"dasharray":"-","text":"0","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#FFFFFF","fontFamily":null,"editor":"draw2d.ui.LabelInplaceEditor"},{"type":"GraphLang.ArduinoLib.Node.Subtract","id":"b8d9bd32-e2dc-6c24-ad4d-74dc0692a215","x":284,"y":229,"width":84.39610736639997,"height":60,"alpha":1,"angle":0,"userData":{"executionOrder":-1},"cssClass":"GraphLang_ArduinoLib_Node_Subtract","bgColor":"none","color":"#1B1B1B","stroke":0,"radius":0,"dasharray":null,"labels":[]},{"type":"GraphLang.ArduinoLib.Node.Add","id":"878ceb1e-59c9-2fbc-f9fa-65f2e59f1464","x":427,"y":156,"width":130.8515625,"height":83,"alpha":1,"angle":0,"userData":{"executionOrder":-1},"cssClass":"GraphLang_ArduinoLib_Node_Add","bgColor":"none","color":"#1B1B1B","stroke":0,"radius":0,"dasharray":null,"labels":[]},{"type":"GraphLang.Shapes.Basic.Return","id":"7eed388e-50d1-b95f-1eec-02ff96d0c174","x":651,"y":148,"width":36.16152381896973,"height":21.199999809265137,"alpha":1,"angle":0,"userData":{"executionOrder":-1},"cssClass":"GraphLang_Shapes_Basic_Return","bgColor":"#AAAAAA","color":"#0000FF","stroke":1,"radius":0,"dasharray":null,"text":"return","outlineStroke":0,"outlineColor":"none","fontSize":12,"fontColor":"#FFFFFF","fontFamily":null},{"type":"HoverConnection","id":"86c1efd4-63e0-6671-3ef0-557c5fad2411","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"#303030","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":541.453125,"y":195},{"x":596.2265625,"y":195},{"x":596.2265625,"y":159.80000019073486},{"x":651,"y":159.80000019073486}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"878ceb1e-59c9-2fbc-f9fa-65f2e59f1464","port":"out1"},"target":{"node":"7eed388e-50d1-b95f-1eec-02ff96d0c174","port":"out1"}},{"type":"HoverConnection","id":"9893b972-af52-3773-3683-bb7c431523cf","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"#303030","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":369.4232626176,"y":258.3517395968002},{"x":416.9381938088,"y":258.3517395968002},{"x":416.9381938088,"y":206},{"x":464.453125,"y":206}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"b8d9bd32-e2dc-6c24-ad4d-74dc0692a215","port":"out1"},"target":{"node":"878ceb1e-59c9-2fbc-f9fa-65f2e59f1464","port":"in2"}},{"type":"HoverConnection","id":"4e85db6d-d88b-ba76-334d-6a346f5c8be1","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"#303030","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":195,"y":250},{"x":239.1545841664,"y":250},{"x":239.1545841664,"y":240.3128769536002},{"x":283.3091683328,"y":240.3128769536002}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"59f6efdf-694d-3e29-5514-1f3f32d60a8a","port":"output0"},"target":{"node":"b8d9bd32-e2dc-6c24-ad4d-74dc0692a215","port":"in1"}},{"type":"HoverConnection","id":"f60c0a40-f614-229f-4e73-7f16c088d598","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"none","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":126.70875020027161,"y":323.80000019073486},{"x":205.0089592665358,"y":323.80000019073486},{"x":205.0089592665358,"y":278.7528342528002},{"x":283.3091683328,"y":278.7528342528002}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"cb47b8cb-816d-98df-3314-3ac19707b2ce","port":"out1"},"target":{"node":"b8d9bd32-e2dc-6c24-ad4d-74dc0692a215","port":"in2"}},{"type":"HoverConnection","id":"d320dbbf-418a-ce6e-67bb-36fdafcabba1","alpha":1,"angle":0,"userData":{},"cssClass":"HoverConnection","stroke":1.35,"color":"#4286F4","outlineStroke":0,"outlineColor":"#303030","policy":"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy","vertex":[{"x":126.70875020027161,"y":186.80000019073486},{"x":295.5809376001358,"y":186.80000019073486},{"x":295.5809376001358,"y":184},{"x":464.453125,"y":184}],"router":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","radius":5,"routingMetaData":{"routedByUserInteraction":false,"fromDir":1,"toDir":3},"source":{"node":"6a1d29b9-19b8-e991-4f3b-df5ab312f2db","port":"out1"},"target":{"node":"878ceb1e-59c9-2fbc-f9fa-65f2e59f1464","port":"in1"}}]
});