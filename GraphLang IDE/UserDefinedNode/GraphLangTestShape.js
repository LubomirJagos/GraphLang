// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLangTestShape = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLangTestShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:92.0916318003043, height:45.87519999999995, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in3
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.17420492642742122, 18.33147321428576));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F30000");
     port.setName("in3");
     port.setMaxFanOut(20);
     // in2
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.17420492642742122, 56.53948102678572));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#08F300");
     port.setName("in2");
     port.setMaxFanOut(20);
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.17420492642742122, 98.68861607142878));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#F0F3F3");
     port.setName("in1");
     port.setMaxFanOut(20);
     // out2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.2484442447664, 40.65290178571425));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#F30000");
     port.setName("out2");
     port.setMaxFanOut(20);
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.2484442447664, 80.51757812500003));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#EBF300");
     port.setName("out1");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 92.0916318003043;
      this.originalHeight= 45.87519999999995;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L92.0916318003043,0 L92.0916318003043,45.87519999999995 L0,45.87519999999995");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M13.459628159423573 0L64.25002815942366 0L64.25002815942366 45.87519999999995L13.459628159423573 45.87519999999995Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.path('M37.761117288194896 10.37698692448862L35.807856774140305 9.466166588413216L33.39407627445655 8.819396052816955L30.90465599942354 8.601599999999962L28.415235724390413 8.819396052816955L26.00145522470666 9.46616658841316L23.73665599942342 10.52225981134626L21.689652826957285 11.955586863446285L19.922642862869793 13.722596827533721L18.489315810769767 15.769599999999969L17.433222587836667 18.03439922528321L16.78645205224052 20.44817972496685L16.568655999423527 22.937599999999975L16.78645205224052 25.4270202750331L17.433222587836667 27.84080077471674L18.489315810769767 30.10559999999998L19.922642862869793 32.15260317246623L21.689652826957285 33.919613136553664L23.73665599942342 35.35294018865369L26.00145522470666 36.409033411586734L28.415235724390413 37.055803947182994L30.90465599942354 37.27359999999999L33.394076274456665 37.055803947182994L35.807856774140305 36.409033411586734L38.07265599942343 35.35294018865369L40.11965917188968 33.919613136553664L41.88666913597717 32.15260317246623L43.3199961880772 30.10559999999998L44.3760894110103 27.84080077471674L45.02285994660656 25.4270202750331L45.13734536470588 24.118445958254256L44.58922815942344 24.16640000000001L43.09557599440359 24.03572236830979L41.64730769459334 23.64766004695207L40.28842815942346 23.014004113192186L39.06022625594369 22.154007881932216L38.00002027749122 21.093801903479743L37.14002404623125 19.865599999999972L36.506368112471364 18.50672046483004L36.1183057911137 17.058452165019844L35.98762815942348 15.564799999999991L36.1183057911137 14.071147834980138L36.506368112471364 12.622879535169886L37.14002404623125 11.263999999999953L37.761117288194896 10.37698692448862Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C00F0F","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6.375342080000024,"ry":6.375342080000024,"cx":45.363075199423776,"cy":15.614474239999964,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
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