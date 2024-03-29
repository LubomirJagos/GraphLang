

example.View = draw2d.Canvas.extend({

	init:function(id){
		this._super(id);

		this.setScrollArea("#"+id);

		this.currentDropConnection = null;
	},

    /**
     * @method
     * Called if the DragDrop object is moving around.<br>
     * <br>
     * Graphiti use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     *
     * @param {HTMLElement} droppedDomNode The dragged DOM element.
     * @param {Number} x the x coordinate of the drag
     * @param {Number} y the y coordinate of the drag
     *
     * @template
     **/
    onDrag:function(droppedDomNode, x, y )
    {
    },

    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     *
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop : function(droppedDomNode, x, y, shiftKey, ctrlKey)
    {
				/* LuboJ
				 *	This look for node html tag attribute and based on it put newly generate figure on canvas
				 */
        var type = $(droppedDomNode).data("shape");
  		var label = $(droppedDomNode).data("label");
  		var width = $(droppedDomNode).data("width");
  		var height = $(droppedDomNode).data("height");
  
  		//experiment if defined this data, they are used in object constructor
  		//now this is for vertical bus
  		var figure;
  
  		//extracting attributes and putting them into json string for node constructor
  		var attributes = "";
  		if (width){attributes += "width: " + width + ",";}
  		if (height){attributes += "height: " + height + ",";}
  		if (label){attributes += "text: \"" + label + "\",";}
  		attributes = "{" + attributes.substring(0,attributes.length-1) + "}";
  
  		if (label || width || height){
  			figure = eval("new "+type+"(" + attributes + ");");
  		}else{
  			figure = eval("new "+type+"();");
  		}
    
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
        
        var visibleLoops = GraphLang.Utils.getVisibleLoopsAndMultilayered(figure.getCanvas());        
  		var parentFigure = null;
  		var parentX = 0;
  		var parentY = 0;
  		visibleLoops.each(function(loopIndex, loopObj){
  			if (loopObj.hitTest(x,y)){
  				if (loopObj.getX() >= parentX && loopObj.getY() >= parentY){
  					parentX = loopObj.getX();
  					parentY = loopObj.getY();
  					parentFigure = loopObj;
  				}
  			}			
  		});
  		if (parentFigure !== null){
  			parentFigure.getActiveLayer().assignFigure(figure);

            /*
             *  If node is dropped into cluster then function to add indexes and labels is called.
             */
    		if (parentFigure.NAME.toLowerCase().search("cluster") >= 0){
                parentFigure.addItemsIndexes();
    			parentFigure.addItemsLabels();
    		}
  		}
  
  		// LuboJ
  		// if adding multilayere node, then move its layers to its mposition, it's updatet internally
  		// but here called, because these nodes are composed from more layers and they don''t know
  		// at init time position where on canvas  should be placed so they were before placed at 0,0
  		// what is worng
  		if (type.toLowerCase().search("multilayered") >= 0){
  			//figure.moveActiveLayer();	//NOT USED ANYMORE, MULTILAYER IS JAILHOUSE NOW
  			figure.addLayer();
  			figure.switchActiveLayer();
  		}
  
  		if (type.toLowerCase().search("array") > -1){
  			figure.addItem();
  		}
  
  		/*
  		 *	Adding anchor policy for connection when drop new node.
  		 *	Not used in combination with interactive InteractiveManhattanConnectionRouter
  		 *	because then there are possibility to modify route by 2 ways:
  		 *		1. using wire nodes for editting
  		 *		2. routing associated with ports
  		 */
  		// this.getFigures().each(function(i,f){
  		//     f.getPorts().each(function(i,port){
  		//         port.setConnectionAnchor(new draw2d.layout.anchor.ShortesPathConnectionAnchor(port));
  		//     });
  		// });
    }
});
