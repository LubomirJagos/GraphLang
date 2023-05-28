// Generated Code for the GraphLang
// special thanks to Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
GraphLang.ArduinoLib.Node.Math.Abs = GraphLang.UserDefinedNode.extend({            

   NAME: "GraphLang.ArduinoLib.Node.Math.Abs",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112, height:71.68, flagAutoCreatePorts: false},attr), setter, getter);
     var port;
     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.8028040685716666, 49.49776785714272));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "double"};
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.73862495196246, 50.892857142857004));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {datatype: "double"};
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 71.68;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112,0 L112,71.68 L0,71.68");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M28.684000000000083 0L89.10000000000002 0L89.10000000000002 71.68L28.684000000000083 71.68Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'A');
        shape.attr({"x":54.5543997688294,"y":35.640000190734895,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M112.5 36.5L89.5,35.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 34.5L28.5,34.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M46.5 26.5L46.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M70.5 25.5L70.5,44.5');
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
    
    symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAB0CAIAAACqrC+rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAaGSURBVHhe7d1/TBNnHMfx000SFlGcJgx0kzExRFgcuFidCiWKmzDDjzGsU6xxim5m4hKRYQQaNRIdBlFnwYAimwjNZBYXovxIjsA/RXAJJmQbixIjYWBQkA60FLun7aPhq1MOrbPXfF4hxz3tYyHem95zJSnjTCaTAPDQeP4ZwAZBAIEggEAQQCAIIBAEEAgCCAQBBIIAAkEA4bwvXXd2dvI9V+ft7c33nIDzBpGXl3fy5Ek+cF1arXbevHl84AScOojW1tb09HQ+dkVRUVEIQip7EOz/i49dUXBwsLMFgUUlEAgCCAQBBIIAAkEAgSCAQBBAIAggEAQQCAIIBAEEggACQQCBIIBAEEAgCCAQBBAIAggEAQSCAAJBAIEggEAQQCAIIBAEEAgCCAQBBIIAAkE8p/r6er7nWhDE8xBFMTQ0lA9ciysHwX6IJ02axAcgjSsHMTw83N/fzwcgDU4ZQCAIIBAEEAgCiDEHUV1dnZKSEh3/+Rfr1Lm5uR0dHfwOcAljCMJkMm3asiUpKam2737Xh+FtMwNPXaxZEhpaWlrKZ8iZIcudUem6+Fi2DAaDVqvNzs4uKyvr7u7mt0o2hiA2b916uf3me6cv+WQcmbrma6/NO6efuOC1dVdaWlplZSWfJFcGcY8QHRetVxcZ+C3y09bW9plqtUqlyv/1UklTy97cowqFIicnh98tjdQg9Hq9WFPz5neHJszwGzaZH5jM1u2Q2TNGPVW1OSv7EJ8nU42iRtB8ezA2WtCIjfw2eblx48aqNWuvu3vOKhWn55/3zi6eqWuYkZmrLSjMzMzkkySQGsSFysrJn8S7eftahoatH2bb1vbhGZ148/o1Dw8PN4fatm1bc3Mz//IvV1dZrkbIUCqmK2PjBE2tLJ8j9u7fb3k34K2MYxO8Zjw6QB7KKO+9ecXFxbW1tXzeaKS+k23Ysoh7y1dPXqESBAv7V49tb25aror8OCwsjM92hIqKioGBgYKCAj4eO1EUw8PDLRb2TT5TR5lq1vrgusHU+eyp4oB7mCAOpir4ff9N6iOPxs/Pb8qUKexnie0/9ssRT0/PuXPn8oHNTBs+oNjSfvHixW8fKnkjKOTJo/P3wVSFmyn/+HE++5mkBrFsRWTfgkjPlWrrwP617Kz7lo6kiP2702JiYviNjvDib20s8bB16VS++tj2M6u8rCPDAXflb6fbSxNso6dwVBABAQHsQPr4+LD9uro6+412vb29LS0tfPAUrBjWDdsxGo3dd3pnnbtiv/0xfVXnLOfyDQ2Sfj0r9ZQxP/gD09XG4SHb0uHhAsK+P/D71cGe7sDAQD5VZrpEvT46Wvnw+CuUGWzBJP4/Fxvsumbjxo3pNjVUU1MT+1kdia0Z2TX/SImJiex5hZkzZ8741yfw4/LEVhj3mnloiH/J0UgNIj4+/m5zvbHhIjs5PbCdoh5tjeUnlijD/f39+VR5aSxaXy7o1b7Wi04b5R5BKP9FdL6XV9j5gp2UR2LLLHtMqamp5n/6711vY+sG63Gh28E/r86ePZs/ymikBhESEpKcnHzr2K6+yhLWnf3jfvtfPYdTxre3atJ383lyY6jVCHFF7YMjsSsO/fpiOS0t2fF+Pzik98KP1uNi7cC2te6bTR3txuqfY1d+yqeORmoQzPbt21mM9ypOdH4TcSdrU0/mms701QFuJt3ZErY44pNkxvrygybZvnp4xHrWEPaI8rrYSEvZYRTP39H9wJ4SLEMPrFvz8P1rf/QdS/to0aKEhAQ+bzRjCILZsGHDlaamw98f+CoucseXieXl5bqSM3I9WViXkzkaQaNkFxeUYl2R7F6QWLhwIVuGWxoqbqXG9ZzKul129PaRnZ0Zaxf4+xbk5/FJErjyH1Bx1LXAkxz1yA7/AyrsckOn0xkuN93tN77n+87SpUvZ98nvk2ZszxDg5CZOnMiexfO1x8/+VLxv376x1sAgCCAQBBAIAghXDmLatGkRERF84FAv75FfOVcOIigoqKqqig8c6uU98iuHUwYQCAIIBAEEggACQQCBIIBAEEAgCCAQBBAIAggEAQSCAAJBAIEggEAQQCAIIBAEEAgCCAQBBIIAAkEAgSCAQBBAIAggEAQQCAIIBAEEggACQQCBIIBAEEA4+7vQyfYdkyUpLCx07LvQvThnD4IPXJdarUYQ4LywhgACQQCBIIBAEEAgCCAQBBAIAggEAQSCAAJBAIEggEAQMIIg/AsLuPiNmxuqhgAAAABJRU5ErkJggg==",

    translateToCppCode: function(){
       cCode = "";
       var in1 = this.getInputPort("in1"); if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
       var out1 = this.getOutputPort("out1"); if (out1.getConnections().getSize() > 0) out1 = "wire_" + out1.getConnections().get(0).getId(); else out1 = "/*out1 default value*/";
       cCode += out1 + " = Math.Abs(" + in1 + ");";
       return cCode;
     }
});