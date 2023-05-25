
example.Toolbar = Class.extend({

	init:function(elementId, view){
		this.html = $("#"+elementId);
		this.view = view;

		// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);

		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));

		// Inject the UNDO Button and the callbacks
		//
		this.undoButton  = $("<button>Undo</button>");
		this.html.append(this.undoButton);
		this.undoButton.button().click($.proxy(function(){
		       this.view.getCommandStack().undo();
		},this)).button( "option", "disabled", true );

		// Inject the REDO Button and the callback
		//
		this.redoButton  = $("<button>Redo</button>");
		this.html.append(this.redoButton);
		this.redoButton.button().click($.proxy(function(){
		    this.view.getCommandStack().redo();
		},this)).button( "option", "disabled", true );

		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);

		// Inject the DELETE Button
		//
		this.deleteButton  = $("<button>Delete</button>");
		this.html.append(this.deleteButton);
		this.deleteButton.button().click($.proxy(function(){
			var node = this.view.getPrimarySelection();

			//in case of deleteing loop it's needed to remove also all tunnels (it will also remove all wires connected to tunnels)
			if (node.NAME.toLowerCase().search("loop") >= 0){
				var cmdStack = this.view.getCommandStack();
				node.getChildren().each(function(tunnelIndex, tunnelObj){
					if (tunnelObj.NAME.toLowerCase().search("tunnel") >= 0){
						var cmdDel = new GraphLang.Utils.CommandDelete(tunnelObj);
						cmdStack.execute(cmdDel);
					}
				});
			}

			var command = new GraphLang.Utils.CommandDelete(node);
			this.view.getCommandStack().execute(command);

			$("#logitem1").html("obj deleted:" + node.getId());

		},this)).button( "option", "disabled", true );

		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);

		/**
		*	Bring to Front Button
		*/
		this.bringToFrontButton  = $("<button id=\"bringToFrontButton\">To Front</button>");
		this.bringToFrontButton.button().click($.proxy(function(){
			GraphLang.Utils.bringToFront(appCanvas);
		}));
		this.html.append(this.bringToFrontButton);

		/**
		*	Bring to Back Button
		*/
		this.bringToBackButton  = $("<button id=\"bringToBackButton\">To Back</button>");
		this.bringToBackButton.button().click($.proxy(function(){
			GraphLang.Utils.bringToBack(appCanvas);
		}));
		this.html.append(this.bringToBackButton);

		/**
		*	getCppCode3 Button
		*/
		this.getCppCode3Button  = $("<button id=\"getCppCode3Button\">C/C++</button>");
		this.getCppCode3Button.button().click($.proxy(function(){
			GraphLang.Utils.getCppCode3(appCanvas);
		}));
		this.html.append(this.getCppCode3Button);

		/**
		*	getPythonCode Button
		*/
		this.getPythonCodeButton  = $("<button id=\"getPythonCodeButton\">Python</button>");
		this.getPythonCodeButton.button().click($.proxy(function(){
			GraphLang.Utils.getPythonCode(appCanvas);
		}));
		this.html.append(this.getPythonCodeButton);

		/**
		*	loadSchematic Button
		*/
		//this.loadSchematicButton  = $("<button id=\"loadSchematicButton\">loadSchematic</button>");
		//
		this.loadSchematicButton  = $('<input type="file" id="file-input2" />');
/*
		this.loadSchematicButton.button().click($.proxy(function(){
			GraphLang.Utils.loadSchematic(appCanvas);
		}));

 */
		this.html.append(this.loadSchematicButton);
		document.getElementById('file-input2').addEventListener('change', GraphLang.Utils.readSingleFile2, false);

		/**
		*	saveSchematic Button
		*/
		this.saveSchematicButton  = $("<button id=\"saveSchematicButton\">saveSchematic</button>");
		this.saveSchematicButton.button().click($.proxy(function(){
			filename = $('#schematicName').val();
			GraphLang.Utils.saveSchematic2(appCanvas, filename, 'text/javascript');
		}));
		this.html.append(this.saveSchematicButton);

		/**
		*	zoomIn Button
		*/
		this.zoomInButton  = $("<button id=\"zoomInButton\">+</button>");
		this.zoomInButton.button().click($.proxy(function(){
            appCanvas.setZoom(appCanvas.getZoom()*0.7, true);
		}));
		this.html.append(this.zoomInButton);

		/**
		*	zoomOut Button
		*/
		this.zoomOutButton  = $("<button id=\"zoomOutButton\">-</button>");
		this.zoomOutButton.button().click($.proxy(function(){
            appCanvas.setZoom(appCanvas.getZoom()*1.3, true);
		}));
		this.html.append(this.zoomOutButton);

		/**
		*	zoomNormal Button, makes 1:1 zoom
		*/
		this.zoomNormalButton  = $("<button id=\"zoomNormalButton\">1:1</button>");
		this.zoomNormalButton.button().click($.proxy(function(){
            appCanvas.setZoom(1.0, true);
		}));
		this.html.append(this.zoomNormalButton);

		/**
		 *	Schematic name input
		 */
		this.schematicNameInput  = $("<span>&nbsp; Schematic name: <input id=\"schematicName\" type=\"input\" value=\"GraphLangTestShape\"/></span>");
		this.html.append(this.schematicNameInput);
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 *
     * @param {draw2d.Canvas} emitter
     * @param {Object} event
     * @param {draw2d.Figure} event.figure
	 */
	onSelectionChanged : function(emitter, event){
		this.deleteButton.button( "option", "disabled", event.figure===null );
	},

	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
	 * can be used to identify the type of event which has occurred.
	 *
	 * @template
	 *
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	stackChanged:function(event)
	{
		this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
		this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
	}
});
