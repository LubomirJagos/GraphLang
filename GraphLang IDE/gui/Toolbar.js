
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
		this.addWireJointsButton.button().click($.proxy(function(){
			GraphLang.Utils.detectJoints(appCanvas);
		}));

		this.html.append(this.addWireJointsButton);

		/**
		 *	BUTTON run() now after click generate some random() number and alert it just to show how to pass function into my newly created blocks.
		 */
		this.addRunButton  = $("<button id=\"runButton\">Run</button>");
		this.addRunButton.button().click($.proxy(function(){
			GraphLang.Utils.run(appCanvas);
		}));
 		this.html.append(this.addRunButton);

		/**
		 *	RUN INTERPRETER
		 */
		this.addRunInterpreterButton  = $("<button id=\"runInterpreterButton\">Run Interpreter</button>");
		this.addRunInterpreterButton.button().click($.proxy(function(){
			GraphLang.Utils.run(appCanvas);
		}));
		this.html.append(this.addRunInterpreterButton);

		/**
		*	Show Nodes
		*/
		this.showNodesButton  = $("<button id=\"showNodesButton\">Shows Nodes</button>");
		this.showNodesButton.button().click($.proxy(function(){
			GraphLang.Utils.showNodes(appCanvas);
		}));
		this.html.append(this.showNodesButton);

		/**
		*	Go through graph
		*/
		this.goThroughGraphButton  = $("<button id=\"goThroughGraphButton\">Go Through Graph</button>");
		this.goThroughGraphButton.button().click($.proxy(function(){
			GraphLang.Utils.goThroughGraph(appCanvas);
		}));
		this.html.append(this.goThroughGraphButton);

		/**
		*	Detect Tunnels
		*/
		this.detectTunnelsButton  = $("<button id=\"detectTunnelsButton\">Detect Tunnels</button>");
		this.detectTunnelsButton.button().click($.proxy(function(){
			GraphLang.Utils.detectTunnels(appCanvas);
		}));
		this.html.append(this.detectTunnelsButton);

		/**
		*	Init all ports to default value
		*/
		this.initAllPortToDefaultButton  = $("<button id=\"initAllPortToDefaultButton\">initAllPortToDefault</button>");
		this.initAllPortToDefaultButton.button().click($.proxy(function(){
			GraphLang.Utils.initAllPortToDefault(appCanvas);
		}));
		this.html.append(this.initAllPortToDefaultButton);

		/**
		*	Execution order
		*/
		this.executionOrderButton  = $("<button id=\"executionOrderButton\">executionOrder</button>");
		this.executionOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.executionOrder(appCanvas);
		}));
		this.html.append(this.executionOrderButton);

		/**
		*	Bring to Front Button
		*/
		this.bringToFrontButton  = $("<button id=\"bringToFrontButton\">Bring to Front Button</button>");
		this.bringToFrontButton.button().click($.proxy(function(){
			GraphLang.Utils.bringToFront(appCanvas);
		}));
		this.html.append(this.bringToFrontButton);

		/**
		*	Bring to Back Button
		*/
		this.bringToBackButton  = $("<button id=\"bringToBackButton\">Bring to Back Button</button>");
		this.bringToBackButton.button().click($.proxy(function(){
			GraphLang.Utils.bringToBack(appCanvas);
		}));
		this.html.append(this.bringToBackButton);

		/**
		*	Run Nodes In Order Button
		*/
		this.runNodesInOrderButton  = $("<button id=\"runNodesInOrderButton\">runNodesInOrder</button>");
		this.runNodesInOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.runNodesInOrder(appCanvas);
		}));
		this.html.append(this.runNodesInOrderButton);

		/**
		*	Show Ports Execution Order Button
		*/
		this.showPortExecutionOrderButton  = $("<button id=\"showPortExecutionOrderButton\">showPortExecutionOrder</button>");
		this.showPortExecutionOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.showPortExecutionOrder(appCanvas);
		}));
		this.html.append(this.showPortExecutionOrderButton);

		/**
		*	Highlight Nodes by Execution Order Button
		*/
		this.highlightNodesByExecutionOrderButton  = $("<button id=\"highlightNodesByExecutionOrderButton\">highlightNodesByExecutionOrder</button>");
		this.highlightNodesByExecutionOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.highlightNodesByExecutionOrder(appCanvas);
		}));
		this.html.append(this.highlightNodesByExecutionOrderButton);

		/**
		*	TranslateToCppCode Button
		*/
		this.translateToCppCodeButton  = $("<button id=\"translateToCppCodeButton\">translateToCppCode</button>");
		this.translateToCppCodeButton.button().click($.proxy(function(){
			GraphLang.Utils.translateToCppCode(appCanvas);
		}));
		this.html.append(this.translateToCppCodeButton);

		/**
		*	TranslateToCppCode2 Button
		*/
		this.translateToCppCode2Button  = $("<button id=\"translateToCppCode2Button\">translateToCppCode2</button>");
		this.translateToCppCode2Button.button().click($.proxy(function(){
			GraphLang.Utils.translateToCppCode2(appCanvas);
		}));
		this.html.append(this.translateToCppCode2Button);

		/**
		*	LoopsRecalculateAbroadFigures Button
		*/
		this.loopsRecalculateAbroadFiguresButton  = $("<button id=\"loopsRecalculateAbroadFiguresButton\">loopsRecalculateAbroadFigures</button>");
		this.loopsRecalculateAbroadFiguresButton.button().click($.proxy(function(){
			GraphLang.Utils.loopsRecalculateAbroadFigures(appCanvas);
		}));
		this.html.append(this.loopsRecalculateAbroadFiguresButton);

		/**
		*	initLoopsZOrder Button
		*/
		this.initLoopsZOrderButton  = $("<button id=\"initLoopsZOrderButton\">initLoopsZOrder</button>");
		this.initLoopsZOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.initLoopsZOrder(appCanvas);
		}));
		this.html.append(this.initLoopsZOrderButton);

		/**
		*	showSelectedObjExecutionOrder Button
		*/
		this.showSelectedObjExecutionOrderButton  = $("<button id=\"showSelectedObjExecutionOrderButton\">showSelectedObjExecutionOrder</button>");
		this.showSelectedObjExecutionOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.showSelectedObjExecutionOrder(appCanvas);
		}));
		this.html.append(this.showSelectedObjExecutionOrderButton);

		/**
		*	setWiresColorByPorts Button
		*/
		this.setWiresColorByPortsButton  = $("<button id=\"setWiresColorByPortsButton\">setWiresColorByPorts</button>");
		this.setWiresColorByPortsButton.button().click($.proxy(function(){
			GraphLang.Utils.setWiresColorByPorts(appCanvas);
		}));

		this.html.append(this.setWiresColorByPortsButton);

		/**
		*	getDirectChildrenWiresButton Button
		*/
		this.getDirectChildrenOfSelectedNodeButton  = $("<button id=\"getDirectChildrenOfSelectedNodeButton\">getDirectChildrenOfSelectedNode</button>");
		this.getDirectChildrenOfSelectedNodeButton.button().click($.proxy(function(){
			GraphLang.Utils.getDirectChildrenOfSelectedNode(appCanvas);
		}));
		this.html.append(this.getDirectChildrenOfSelectedNodeButton);

		/**
		*	getSelectedLoopTunnelCount Button
		*/
		this.getSelectedLoopTunnelCountButton  = $("<button id=\"getSelectedLoopTunnelCountButton\">getSelectedLoopTunnelCount</button>");
		this.getSelectedLoopTunnelCountButton.button().click($.proxy(function(){
			GraphLang.Utils.getSelectedLoopTunnelCount(appCanvas);
		}));
		this.html.append(this.getSelectedLoopTunnelCountButton);

		/**
		*	getCanvasJson Button
		*/
		this.getCanvasJsonButton  = $("<button id=\"getCanvasJsonButton\">getCanvasJson</button>");
		this.getCanvasJsonButton.button().click($.proxy(function(){
			GraphLang.Utils.getCanvasJson(appCanvas);
		}));
		this.html.append(this.getCanvasJsonButton);

		/**
		*	getCppCode2 Button
		*/
		this.getCppCode2Button  = $("<button id=\"getCppCode2Button\">getCppCode2</button>");
		this.getCppCode2Button.button().click($.proxy(function(){
			GraphLang.Utils.getCppCode2(appCanvas);
		}));

		this.html.append(this.getCppCode2Button);

		/**
		*	exportCanvasAsPNG Button
		*/
		this.exportCanvasAsPNGButton  = $("<button id=\"exportCanvasAsPNGButton\">exportCanvasAsPNG</button>");
		this.exportCanvasAsPNGButton.button().click($.proxy(function(){
			GraphLang.Utils.getCanvasAsPNG(appCanvas);
		}));
		this.html.append(this.exportCanvasAsPNGButton);

		/**
		*	setPortsColorByDatatype Button
		*/
		this.setPortsColorByDatatypeButton  = $("<button id=\"setPortsColorByDatatypeButton\">setPortsColorByDatatype</button>");
		this.setPortsColorByDatatypeButton.button().click($.proxy(function(){
			GraphLang.Utils.setPortsColorByDatatype(appCanvas);
		}));
		this.html.append(this.setPortsColorByDatatypeButton);

		/**
		*	setTunnelColorByWire Button
		*/
		this.setTunnelColorByWireButton  = $("<button id=\"setTunnelColorByWireButton\">setTunnelColorByWire</button>");
		this.setTunnelColorByWireButton.button().click($.proxy(function(){
			GraphLang.Utils.setTunnelColorByWire(appCanvas);
		}));
		this.html.append(this.setTunnelColorByWireButton);

		/**
		*	setTunnelColorByWire Button
		*/
		this.showLoopsExecutionOrderButton  = $("<button id=\"showLoopsExecutionOrderButton\">showLoopsExecutionOrder</button>");
		this.showLoopsExecutionOrderButton.button().click($.proxy(function(){
			GraphLang.Utils.showLoopsExecutionOrder(appCanvas);
		}));
		this.html.append(this.showLoopsExecutionOrderButton);

		/**
		*	correctWiresAfterLoad Button
		*/
		this.correctWiresAfterLoadButton  = $("<button id=\"correctWiresAfterLoadButton\">correctWiresAfterLoad</button>");
		this.correctWiresAfterLoadButton.button().click($.proxy(function(){
			GraphLang.Utils.correctWiresAfterLoad(appCanvas);
		}));
		this.html.append(this.correctWiresAfterLoadButton);

		/**
		*	selectedLoopShowAboardFigures Button
		*/
		this.selectedLoopShowAboardFiguresButton  = $("<button id=\"selectedLoopShowAboardFiguresButton\">selectedLoopShowAboardFigures</button>");
		this.selectedLoopShowAboardFiguresButton.button().click($.proxy(function(){
			GraphLang.Utils.selectedLoopShowAboardFigures(appCanvas);
		}));
		this.html.append(this.selectedLoopShowAboardFiguresButton);

		/**
		*	correctMultilayeredAfterLoad Button
		*/
		this.correctMultilayeredAfterLoadButton  = $("<button id=\"correctMultilayeredAfterLoadButton\">correctMultilayeredAfterLoad</button>");
		this.correctMultilayeredAfterLoadButton.button().click($.proxy(function(){
			GraphLang.Utils.correctMultilayeredAfterLoad(appCanvas);
		}));
		this.html.append(this.correctMultilayeredAfterLoadButton);

		/**
		*	getCppCode2_2nd_canvas Button
		*/
		this.getCppCode2_2nd_canvasButton  = $("<button id=\"getCppCode2_2nd_canvasButton\">getCppCode2_2nd_canvas</button>");
		this.getCppCode2_2nd_canvasButton.button().click($.proxy(function(){
			GraphLang.Utils.getCppCode2(appCanvas2);
		}));
		this.html.append(this.getCppCode2_2nd_canvasButton);

		/**
		*	getCppCode2_2nd_canvas Button
		*/
		//this.loadSchematicButton  = $("<button id=\"loadSchematicButton\">loadSchematic</button>");
		//
		this.loadSchematicButton  = $('<input type="file" id="file-input" />');
		this.loadSchematicButton.button().click($.proxy(function(){
			GraphLang.Utils.loadSchematic(appCanvas2);
		}));
		this.html.append(this.loadSchematicButton);
		document.getElementById('file-input').addEventListener('change', GraphLang.Utils.readSingleFile, false);

		/**
		*	saveSchematic Button
		*/
		this.saveSchematicButton  = $("<button id=\"saveSchematicButton\">saveSchematic</button>");
		this.saveSchematicButton.button().click($.proxy(function(){
			GraphLang.Utils.saveSchematic(appCanvas, 'GraphLang_Schematic', 'text/javascript');
		}));
		this.html.append(this.saveSchematicButton);
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
