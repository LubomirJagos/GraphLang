/**
 *  @author Lubomir Jagos
 *  @description Start Qt application
 */
 
GraphLang.PythonQtGuiLib.UiExec = draw2d.SetFigure.extend({            

   NAME: "GraphLang.PythonQtGuiLib.UiExec",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:85.19680000000005,height:52.041919314575196},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0610727163461489, 46.0428829597166));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#70db70");
     port.setName("Port");
     port.setMaxFanOut(20);
     port.userData = {};
     port.userData.datatype = "QtUiApplication";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 85.19680000000005;
      this.originalHeight= 52.041919314575196;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L85.19680000000005,0 L85.19680000000005,52.041919314575196 L0,52.041919314575196");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M15.56480000000002 0L85.19680000000005 0L85.19680000000005 47.92320000000001L15.56480000000002 47.92320000000001Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":9.011200000000002,"ry":9.011200000000002,"cx":33.587199999999996,"cy":14.335999999999999,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10.649599999999992,"ry":10.649599999999992,"cx":50.38080000000002,"cy":23.961600000000004,"stroke":"none","stroke-width":0,"fill":"#C02911","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":11,"ry":11,"cx":65.47680000000003,"cy":29.961600000000004,"stroke":"none","stroke-width":0,"fill":"#C0AF11","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'exec');
        shape.attr({"x":20.56480000000002,"y":38.1945596572876,"text-anchor":"start","text":"exec","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M14.5 22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M14.5 22.5L0.5,22.5');
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

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 
  translateToPythonCodeImport: function(){
    let importItems = new draw2d.util.ArrayList();
    return importItems;
  },
  
  translateToPythonCode:function(){
    let pythonCode = "";
    if (this.getInputPort(0).getConnections().getSize() > 0) pythonCode = "wire_" + this.getInputPort(0).getConnections().first().getId() + ".exec_()\n";
    return pythonCode;
  },
  
  translateToPythonCodeDeclaration:function(){
    pythonCode = "";
    return pythonCode;
  },

  translateToPythonCodeAsParam:function(){
    pythonCode = "";
    return pythonCode;
  }
    
});
