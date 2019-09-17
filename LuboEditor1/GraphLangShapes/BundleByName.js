/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
GraphLang.Shapes.Basic.BundleByName = draw2d.shape.layout.FlexGridLayout.extend({

	NAME: "GraphLang.Shapes.Basic.BundleByName",

    init : function(attr)
    {
    	this._super($.extend({
        bgColor:"#dbddde",
        color:"#d7d7d7",
        stroke:1,
        radius:3,
        columns: "grow, 20px",
        //rows: "20px, 20px, 20px"
        rows: "grow"
      },attr));

      //output for cluster to be wired here
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.7, 50));
      port.setConnectionDirection(1);
      port.setBackgroundColor("#00FF00");
      port.setName("clusterInput");
      port.setMaxFanOut(20);


			//cluster type port
			portClusterType = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(90, 0));
      portClusterType.setConnectionDirection(0);
      portClusterType.setBackgroundColor("#7D1A4C");
      portClusterType.setName("clusterType");
      portClusterType.setMaxFanOut(20);


      //create example labels, they will be pushed into unbundler object
      var label1 = new draw2d.shape.basic.Label({text:"AA", resizeable:true, width: 50, height: 10, stroke:1});
      var label2 = new draw2d.shape.basic.Label({text:"  BB", resizeable:true, width: 50, height: 10, stroke:1});
      var label3 = new draw2d.shape.basic.Label({text:"    CC", resizeable:true, width: 50, height: 10, stroke:1});

      //create vertical list and push it into unbundler object
      this.items = new draw2d.shape.layout.VerticalLayout();
			this.add(this.items, {row: 0, col:0});
			this.addEntity("AA");
			this.addEntity("     BB");
			this.addEntity("             CC");

			//DEFAULT EXECUTION ORDER
      this.userData = {};
      this.userData.executionOrder = -1;
			this.userData.wasTranslatedToCppCode = false;

			this.updateAllItemsOncontext();
    },

		updateAllItemsOncontext: function(){
			//setting to show context menu when right click on each item in cluster, items are get from vertical layout which grouped them together
      this.items.getChildren().each(function(itemIndex, itemObj){
        itemObj.on("contextmenu", function(emitter, event){
            $.contextMenu({
                selector: 'body',
                events:
                {
                    hide:function(){ $.contextMenu( 'destroy' ); }
                },

                //these functions are run after user click on some context menu option
                callback: $.proxy(function(key, options)
                {
                   switch(key){
                   case "add after this":
									 		 //This add label without port, but context menu is set ok
									 		 //emitter.getParent().add(new draw2d.shape.basic.Label({text:"    CC", resizeable:true, width: 50, height: 10, stroke:1}));

											 //This add NumericConstant, and it has it's menu for choose, so context menu NOT RIGHT!, but it seems nice that it's running just so.
											 emitter.getParent().add(new GraphLang.Shapes.Basic.NumericConstant({text:"__new__", resizeable:true, width: 50, height: 10, stroke:1}));

											 emitter.getParent().getParent().updateAllItemsOncontext();	//Label (emitter) -> VerticalLayout (parent) -> UnbundleByName (parent)
                       break;
                   case "delete":
                       break;
                   default:
                       break;
                   }

                },this),
                x:event.x,
                y:event.y,
                items:
                {
                    "add after this":    {name: "Add After This"},
                    "delete": {name: "Delete This Item"}
                }
            });
        });
      });
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

       input.setName("input_"+label.id);

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
             this.items.add(label, null, optionalIndex+1);
	     }
	     else{
	         this.items.add(label);
	     }

	     return label;
    },

    /**
     * @method
     * Remove the entity with the given index from the DB table shape.<br>
     * This method removes the entity without care of existing connections. Use
     * a draw2d.command.CommandDelete command if you want to delete the connections to this entity too
     *
     * @param {Number} index the index of the entity to remove
     */
    removeEntity: function(index)
    {
        this.remove(this.children.get(index+1).figure);
    },

    /**
     * @method
     * Returns the entity figure with the given index
     *
     * @param {Number} index the index of the entity to return
     */
    getEntity: function(index)
    {
        return this.children.get(index+1).figure;
    },


     /**
      * @method
      * Set the name of the DB table. Visually it is the header of the shape
      *
      * @param name
      */
     setName: function(name)
     {
         this.classLabel.setText(name);

         return this;
     },

     /**
      * @method
      * Read all attributes from the serialized properties and transfer them into the shape.
      *
      * @param {Object} memento
      * @return
      */
     setPersistentAttributes : function(memento)
     {
         this._super(memento);

         this.setName(memento.name);

         if(typeof memento.entities !== "undefined"){
             $.each(memento.entities, $.proxy(function(i,e){
                 var entity =this.addEntity(e.text);
                 entity.id = e.id;
                 entity.getInputPort(0).setName("input_"+e.id);
             },this));
         }

         return this;
     },

     translateToCppCode: function(){
       cCode = "";
       cCode += "/*BundleByName*/";
       return cCode;
     }
});
