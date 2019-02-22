// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//

testShape = draw2d.SetFigure.extend({

   NAME: "testShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:150,height:89},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(2, 32.58426966292135));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port1");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4, 71.91011235955057));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port2");
     port.setMaxFanOut(20);
     //LuboJ. added port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(2, 92.58426966292135));
     port.setConnectionDirection();
     port.setBackgroundColor("#FFFF00");
     port.setName("Port3");
     port.setMaxFanOut(20);

     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(2, 12.58426966292135));
     port.setConnectionDirection();
     port.setBackgroundColor("#FF0000");
     port.setName("Port3");
     port.setMaxFanOut(20);

     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102.66666666666666, 57.30337078651686));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port4");
     port.setMaxFanOut(20);

     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102.66666666666666, 77.30337078651686));
     port.setConnectionDirection();
     port.setBackgroundColor("#00FF00");
     port.setName("Port4");
     port.setMaxFanOut(20);

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 150;
      this.originalHeight= 89;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L150,0 L150,89 L0,89");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0 0L150 0L150 89L0 89Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");


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
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
testShape = testShape.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
