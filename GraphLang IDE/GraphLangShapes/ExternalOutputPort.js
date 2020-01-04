/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
//GraphLang.Shapes.ItemsNode.InvokeNode.ExternalOutputPort = GraphLang.Shapes.ItemsNode.InvokeNode.extend({
GraphLang.Shapes.ExternalOutputPort = draw2d.shape.layout.VerticalLayout.extend({
	NAME: "GraphLang.Shapes.ExternalOutputPort",

    init : function(attr)
    {
    		this._super($.extend({bgColor:"#99ebff", color:"#d7d7d7", stroke:1, radius:3},attr));

        this.classLabel = new GraphLang.Shapes.Basic.Label({
          text:"ExternalOutputPort",
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
     * @method
     * Add an entity to the db shape
     *
     * @param {String} txt the label to show
     * @param {Number} [optionalIndex] index where to insert the entity
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
    }

});
