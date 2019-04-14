
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

		/*
			BUTTON, when clicked it should add joints to all crossing wires.
		*/
		this.addWireJointsButton  = $("<button id=\"detectJointsButton\">Detect Joints</button>");
		this.html.append(this.addWireJointsButton);
		//this.addWireJointsButton.button().click($.proxy(function(){
		//    alert("add some code");
		//},this));

		/**
		 *	BUTTON run() now after click generate some random() number and alert it just to show how to pass function into my newly created blocks.
		 */
		this.addRunButton  = $("<button id=\"runButton\">Run</button>");
 		this.html.append(this.addRunButton);

		/**
		 *	RUN INTERPRETER
		 */
		 this.addRunButton  = $("<button id=\"runInterpreterButton\">Run Interpreter</button>");
		 this.html.append(this.addRunButton);

		 /**
		  *	Show Nodes
			*/
			this.showNodesButton  = $("<button id=\"showNodesButton\">Shows Nodes</button>");
			this.html.append(this.showNodesButton);

		 /**
		  *	Go through graph
			*/
			this.goThroughGraphButton  = $("<button id=\"goThroughGraphButton\">Go Through Graph</button>");
			this.html.append(this.goThroughGraphButton);

			/**
 		  *	Detect Tunnels
 			*/
 			this.detectTunnelsButton  = $("<button id=\"detectTunnelsButton\">Detect Tunnels</button>");
 			this.html.append(this.detectTunnelsButton);

			/**
 		  *	Init all ports to default value
 			*/
 			this.initPortsToDefaultButton  = $("<button id=\"initPortsToDefaultButton\">Init ports</button>");
 			this.html.append(this.initPortsToDefaultButton);

			/**
 		  *	Execution order
 			*/
 			this.executionOrderButton  = $("<button id=\"executionOrderButton\">executionOrder</button>");
 			this.html.append(this.executionOrderButton);

			/**
 		  *	Bring to Front Button
 			*/
 			this.bringToFrontButton  = $("<button id=\"bringToFrontButton\">Bring to Front Button</button>");
 			this.html.append(this.bringToFrontButton);

			/**
 		  *	Bring to Back Button
 			*/
 			this.bringToBackButton  = $("<button id=\"bringToBackButton\">Bring to Back Button</button>");
 			this.html.append(this.bringToBackButton);

			/**
 		  *	Run Nodes In Order Button
 			*/
 			this.runNodesInOrderButton  = $("<button id=\"runNodesInOrderButton\">runNodesInOrder</button>");
 			this.html.append(this.runNodesInOrderButton);

			/**
 		  *	Show Ports Execution Order Button
 			*/
 			this.showPortExecutionOrderButton  = $("<button id=\"showPortExecutionOrderButton\">showPortExecutionOrder</button>");
 			this.html.append(this.showPortExecutionOrderButton);

			/**
 		  *	Highlight Nodes by Execution Order Button
 			*/
 			this.highlightNodesByExecutionOrderButton  = $("<button id=\"highlightNodesByExecutionOrderButton\">highlightNodesByExecutionOrder</button>");
 			this.html.append(this.highlightNodesByExecutionOrderButton);

			/**
 		  *	TranslateToCppCode Button
 			*/
 			this.translateToCppCodeButton  = $("<button id=\"translateToCppCodeButton\">translateToCppCode</button>");
 			this.html.append(this.translateToCppCodeButton);

			/**
 		  *	TranslateToCppCode2 Button
 			*/
 			this.translateToCppCode2Button  = $("<button id=\"translateToCppCode2Button\">translateToCppCode2</button>");
 			this.html.append(this.translateToCppCode2Button);

			/**
 		  *	LoopsRecalculateAbroadFigures Button
 			*/
 			this.loopsRecalculateAbroadFiguresButton  = $("<button id=\"loopsRecalculateAbroadFiguresButton\">loopsRecalculateAbroadFigures</button>");
 			this.html.append(this.loopsRecalculateAbroadFiguresButton);

			/**
 		  *	initLoopsZOrder Button
 			*/
 			this.initLoopsZOrderButton  = $("<button id=\"initLoopsZOrderButton\">initLoopsZOrder</button>");
 			this.html.append(this.initLoopsZOrderButton);

			/**
 		  *	showSelectedObjExecutionOrder Button
 			*/
 			this.showSelectedObjExecutionOrderButton  = $("<button id=\"showSelectedObjExecutionOrderButton\">showSelectedObjExecutionOrder</button>");
 			this.html.append(this.showSelectedObjExecutionOrderButton);

			/**
 		  *	setWiresColorByPorts Button
 			*/
 			this.setWiresColorByPortsButton  = $("<button id=\"setWiresColorByPortsButton\">setWiresColorByPorts</button>");
 			this.html.append(this.setWiresColorByPortsButton);

			/**
 		  *	getDirectChildrenWiresButton Button
 			*/
 			this.getDirectChildrenWiresButton  = $("<button id=\"getDirectChildrenWiresButton\">getDirectChildrenWires</button>");
 			this.html.append(this.getDirectChildrenWiresButton);

			/**
 		  *	getSelectedLoopTunnelCount Button
 			*/
 			this.getSelectedLoopTunnelCountButton  = $("<button id=\"getSelectedLoopTunnelCountButton\">getSelectedLoopTunnelCount</button>");
 			this.html.append(this.getSelectedLoopTunnelCountButton);

			/**
 		  *	getCanvasJson Button
 			*/
 			this.getCanvasJsonButton  = $("<button id=\"getCanvasJsonButton\">getCanvasJson</button>");
 			this.html.append(this.getCanvasJsonButton);

			/**
 		  *	getCppCode2 Button
 			*/
 			this.getCppCode2Button  = $("<button id=\"getCppCode2Button\">getCppCode2</button>");
 			this.html.append(this.getCppCode2Button);
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
