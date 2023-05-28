// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
ConsoleLog2 = GraphLang.UserDefinedNode.extend({            

   NAME: "ConsoleLog2",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:69, height:55, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-17.391304347826086, 47.27272727272727));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#CA00F3");
     port.setName("Port");
     port.setMaxFanOut(20);
     port.userData = {datatype: "String"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 69;
      this.originalHeight= 55;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L69,0 L69,55 L0,55");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0 0L69 0L69 55L0 55Z');
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
    
    symbolPicture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABLCAYAAAAbFSs/AAAAAXNSR0IArs4c6QAAAmJJREFUeF7t3DFKA0EUxvFZsEghCAoW2gheIGcRPEOihRYewKRIoR7AbGHhDYJ4AVtB2MYyYJP1ABbRNCsDCZGYZfe97Lxs4J8yeTNv8vNjNu4uGzlewQWi4B1o4EA2CAHIIBsIGLQgySAbCBi0IMkgGwgYtCiV5Gaz2ZmuJXNO9LNvWX3V7xkw5bdIkmRmk1tUGrnVal2v9dvUsHkcx93Kkdvtdg2/6nqW1O/3HciB7UEODOynBxlkAwGDFiQZZAMBgxYkGWQDAYMWJBlkAwGDFiQZZAMBgxYkGWQDAYMWJBlkAwGDFiQZZAMBgxYkuW7IRwfHo4kbn6Vp+pS3Nn+12l9I5RrfXEiU5PvGc3a7dzH5yb5P86BB/h8/EfKr+8reGi/uZvcy/UiHh8vSDHIFyH6Kq/2Tz+HW+3mapoPFKUGuCPlx52482H7ojUajHsjFR07xduGnBLkY9m+FCpntIjAyBz4ZsK8WJZmfcHJgMTL/jOiQ4zj2aeauTh1fuVEgl3NaqQrklfjKDZ4e+DpJknSLRojutOcE0ZyTJBdFq4LPQa4AsWgK0e/kosn855wgWvEEEchlBP7XsF3o3ESjQBZx6YpB1rmJRnHgE3Hpikmyzk00CmQRl66Y7ULnJhoFsohLV8x2oXMTjQJZxKUrBlnnJhrFnizi0hWTZJ2baNQUmSsjIjVhMduFEExTHgx5tpgoilyW+SePzV9l3ltWs/gFfY1/Lc6vgQg9pvIHPYVe8KbOX9kjyzYVoC7rLnVLQF0Wu6nrANngLwcyyAYCBi1IMsgGAgYtSDLIBgIGLX4BdiPSaiyZQkcAAAAASUVORK5CYII=",
    
    jsonDocument: [],
    
    
});