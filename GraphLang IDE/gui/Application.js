// declare the namespace for this example
var example = {};

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
example.Application = Class.extend(
{
    NAME : "example.Application",

    /**
     * @constructor
     *
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
	      this.view    = new example.View("canvas");
        /*****************************************************************************
         *  CREATE SECONDCANVAS AND READ SOME AUXILIARY SCHEMATIC FILE
         *****************************************************************************/
        this.view2 = new example.View("canvas2");

        this.toolbar = new example.Toolbar("toolbar",  this.view );


	       // layout FIRST the body
	       this.appLayout = $('#container').layout({
	   	     west: {
	              resizable:true,
	              closable:true,
	              resizeWhileDragging:true,
	              paneSelector: "#navigation"
	            },
	            center: {
	              resizable:true,
	              closable:true,
	              resizeWhileDragging:true,
	              paneSelector: "#content"
	            }
	       });

	       //
	       this.contentLayout = $('#content').layout({
	   	     north: {
	              resizable:false,
	              closable:false,
                  spacing_open:0,
                  spacing_closed:0,
                  size:200,                  // <--- TOOLBAR HEIGHT
	              paneSelector: "#toolbar"
	          },
            center: {
              resizable:false,
              closable:false,
              size:200,                  // <--- TOOLBAR HEIGHT
                spacing_open:0,
                spacing_closed:0,
              paneSelector: "#canvas"
            },
            south: {                        //<--- LuboJ added auxiliary canvas to be able open and read additional nodes
              resizable:false,
              closable:false,
              size: 350,
                spacing_open:0,
                spacing_closed:0,
              paneSelector: "#canvas2"
            }
	       });
	}
});
