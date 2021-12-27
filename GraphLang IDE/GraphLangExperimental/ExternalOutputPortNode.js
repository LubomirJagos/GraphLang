/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
//GraphLang.Shapes.ItemsNode.InvokeNode.ExternalOutputPort = GraphLang.Shapes.ItemsNode.InvokeNode.extend({
GraphLang.Shapes.ExternalOutputPortNode = draw2d.shape.layout.VerticalLayout.extend({
	NAME: "GraphLang.Shapes.ExternalOutputPortNode",

    init : function(attr)
    {
    		this._super($.extend({bgColor:"#99ebff", color:"#d7d7d7", stroke:1, radius:3},attr));

        this.classLabel = new GraphLang.Shapes.Basic.Label({
          text:"ExternalOutputPortNode",
          stroke:1,
          fontColor:"#5856d6",
          radius: this.getRadius(),
          padding:3,
          resizeable:true,
          editor:new draw2d.ui.LabelInplaceEditor()
        });
				//LuboJ part

				//NAME - LABEL OF THE PORT
				// disable/enable
				//this.add(this.classLabel);

        //at least here is added one item into list
        this.addEntity("OUTPUT PORT NAME");

				//DEFAULT EXECUTION ORDER
        this.userData = {};
        this.userData.executionOrder = -1;
				this.userData.wasTranslatedToCppCode = false;

        //LuboJ. add ID on top of each property node for debugging
        //this.add(new draw2d.shape.basic.Label({text:this.id}), new draw2d.layout.locator.TopLocator({}));

    },
		/**
     *	@method addEntity
     *	@description Add an entity to the db shape
     *	@param {String} txt the label to show
     *	@param {Number} [optionalIndex] index where to insert the entity
     */
    addEntity: function(txt, optionalIndex)
    {
	   	 //var label =new draw2d.shape.basic.Label({
       var label = new GraphLang.Shapes.Basic.Label({
	   	     text:txt,
	   	     stroke:0,
	   	     radius:0,
	   	     bgColor:null,
	   	     padding:{left:10, top:3, right:10, bottom:5},
	   	     fontColor:"#4a4a4a",
	   	     resizeable:true,
             editor:new draw2d.ui.LabelEditor()
	   	 });

			 //LuboJ
			 label.translateToCppCode = function(){
				 var parent = this.getParent();
				 return this.getParent().translateToCppCode();
			 }

			 // label.installEditor(new draw2d.ui.LabelEditor());
	     var input = label.createPort("input");
	     //var output= label.createPort("output");	//no output, this is GOING OUT, so sensing values on output and sent them somewhere else

         input.setName("input_"+label.id);
         //output.setName("output_"+label.id);	//same as before sending values out, sensing them on input

				 input.userData = {};
				 input.userData.executionOrder = -1;
				 input.userData.datatype = "undefined";

         var _table=this;
         label.on("contextmenu", function(emitter, event){
             $.contextMenu({
                 selector: 'body',
                 events:
                 {
                     hide:function(){ $.contextMenu( 'destroy' ); }
                 },
                 callback: $.proxy(function(key, options)
                 {
                    switch(key){
                    case "rename":
                        setTimeout(function(){
                            emitter.onDoubleClick();
                        },10);
                        break;
                    case "new":
                        setTimeout(function(){
                            _table.addEntity("_new_").onDoubleClick();
                        },10);
                        break;
                    case "delete":
                        // with undo/redo support
                        var cmd = new draw2d.command.CommandDelete(emitter);
                        emitter.getCanvas().getCommandStack().execute(cmd);
                    default:
                        break;
                    }

                 },this),
                 x:event.x,
                 y:event.y,
                 items:
                 {
                     "rename": {name: "Rename"},
                     "new":    {name: "New Entity"},
                     "sep1":   "---------",
                     "delete": {name: "Delete"}
                 }
             });
         });

	     if($.isNumeric(optionalIndex)){
             this.add(label, null, optionalIndex+1);
	     }
	     else{
	         this.add(label);
	     }

	     return label;
    },

		/**
		 *	@method getInputPorts
		 * 	@description Get list of all input ports of this object. Input ports are part of labels so they are not direct children of VerticalLayout which is the top most object.
		 * 	@returns {ArrayList} List of all input ports for this external port. (maybe there would be more than just labels inside vertical layout)
		 */
		getInputPorts: function(){
			var inputPortList = new draw2d.util.ArrayList();
			this.getChildren().each(function(childIndex, childObj){
				childObj.getInputPorts().each(function(inputPortIndex, inputPortObj){
					inputPortList.push(inputPortObj);
				});
			});
			return inputPortList;
		},

		translateToCppCode: function(){
			return "/* EXTERNAL OUTPUT PORT */\n";
		}

});
