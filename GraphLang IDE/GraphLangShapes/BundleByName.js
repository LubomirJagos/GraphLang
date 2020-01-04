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
			port.userData = {datatype: "cluster"};


			//cluster type port
			portClusterType = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(90, 0));
      portClusterType.setConnectionDirection(0);
      portClusterType.setBackgroundColor("#7D1A4C");
      portClusterType.setName("clusterType");
      portClusterType.setMaxFanOut(20);
			portClusterType.userData = {datatype: "cluster"};

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
//      	this.items.children.each(function(itemIndex, itemObj){
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

											 //This add item after item, index is get by searching object inside ArrayList to really get correct index of item
											 insertAtIndex = emitter.getParent().getParent().items.getChildren().indexOf(emitter) + 1;
 											 emitter.getParent().getParent().addEntity("__new__", insertAtIndex);
                       break;
                   case "delete":
									 		 emitter.getParent().getParent().removeEntity(itemObj);	//POSSIBLE TO ADD INDEX AFTER WHICH IT HAS TO ADD ITEM
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
     * @method removeEntity(item)
		 * @descritpitionRemove the entity with the given index from the DB table shape.<br>
     * This method removes the entity without care of existing connections. Use
     * a draw2d.command.CommandDelete command if you want to delete the connections to this entity too
     *
     * @param {String} txt the label to show
     * @param {Number} [optionalIndex] index where to insert the entity
     */
    removeEntity: function(item)
    {
			this.items.remove(item);
			this.updateAllItemsOncontext();
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
			 input.userData = {};
			 input.userData.datatype = "bool";

       input.setName("input_" + label.id);

       var _table = this;
	     if($.isNumeric(optionalIndex) && optionalIndex < this.items.getChildren().getSize()){
             this.items.add(label, null, optionalIndex);
	     }
	     else{
	         this.items.add(label);
	     }

			 this.updateAllItemsOncontext();	//Label (emitter) -> VerticalLayout (parent) -> UnbundleByName (parent)
	     return label;
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
