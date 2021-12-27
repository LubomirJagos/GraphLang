/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
GraphLang.Shapes.Basic.BundleByName = draw2d.shape.layout.FlexGridLayout.extend({

    NAME: "GraphLang.Shapes.Basic.BundleByName",

    init : function(attr){

      this._super($.extend({
        bgColor:"#dbddde",
        color:"#d7d7d7",
        stroke:1,
        radius:3,
        columns: "grow, 20px",
        //rows: "20px, 20px, 20px"
        rows: "grow"
      },attr));

      let colorObj = new GraphLang.Utils.Color();

      //output for cluster to be wired here
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.7, 50));
      port.setConnectionDirection(1);
      port.setBackgroundColor(colorObj.getByName("cluster"));
      port.setName("clusterInput");
      port.setMaxFanOut(20);
      port.userData = {datatype: "cluster"};

      //cluster type port
      this.portClusterType = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(70, 0));
      this.portClusterType.setConnectionDirection(0);
      this.portClusterType.setBackgroundColor("#7D1A4C");
      this.portClusterType.setName("clusterType");
      this.portClusterType.setMaxFanOut(20);
	  this.portClusterType.userData = {datatype: "cluster"};
      
      //create vertical list and push it into unbundler object
      this.items = new draw2d.shape.layout.VerticalLayout();
      this.add(this.items, {row: 0, col:0});
      //this.addEntity("null");

      //DEFAULT EXECUTION ORDER
      this.userData = {};
      this.userData.executionOrder = -1;
	  this.userData.wasTranslatedToCppCode = false;

      this.updateAllItemsOncontext();
      this.updateBasicContextMenu();
    },

    getContextMenu: function(){
      /*
       *    Adding connected cluster items labels into context menu which appears
       *    after right click on bundle by name item.
       */
      let connections = this.portClusterType.getConnections();
      let contextMenu = {};
      if (connections.getSize() > 0){
        let clusterObj;
        let clusterName = connections.first().getSource().getParent().getDatatype();
        if (clusterName && clusterName.toLowerCase().search("clusterdatatype") > -1){
            this.getCanvas().getFigures().each(function(figureIndex, figureObj){
                if (figureObj.getDatatype && figureObj.getDatatype() == clusterName){
                    clusterObj = figureObj;
                } 
            }); 
        }
        clusterObj.getAllItemsLabels().each(function(itemIndex, itemObj){
            contextMenu[itemObj] = {name: itemObj};
        });
        contextMenu["separator1"] = "--------------------";
      }

      /*
       *    Default context menu items to add and delete item.
       */
      contextMenu["add after this"] = {name: "Add After This"};
      contextMenu["delete"] = {name: "Delete This Item"};
      
      return contextMenu;
    },

    /*
     *  Right click menu on any item in bundle by name.
     */
    updateAllItemsOncontext: function(){
      /*
       *    Setting context menu appear after right click on each item in bundle by name node.
       */
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
                        
                        //This add item after item, index is get by searching object inside ArrayList to really get correct index of item
                        insertAtIndex = emitter.getParent().getParent().items.getChildren().indexOf(emitter) + 1;
                        emitter.getParent().getParent().addEntity("null", insertAtIndex);
                       break;
                   case "delete":
                        emitter.getParent().getParent().removeEntity(itemObj);	//POSSIBLE TO ADD INDEX AFTER WHICH IT HAS TO ADD ITEM
                        break;
                   default:
                       emitter.setText(key);
                       break;
                   }

                },this),
                x:event.x,
                y:event.y,
                items: emitter.getParent().getParent().getContextMenu()
            });
        });
      });
    },

    updateBasicContextMenu: function(){
      this.items.on("contextmenu", function(emitter, event){
          $.contextMenu({
              selector: 'body',
              events: { hide:function(){$.contextMenu( 'destroy' );} },  
              callback: $.proxy(function(key, options){
                 switch(key){
                 case "addItem":
                     emitter.getParent().addEntity("null", 0);
                     break;
                 default:
                     break;
                 }
  
              },this),
              x:event.x,
              y:event.y,
              items: {"addItem": {name: "Add new item"}}
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
     * @method addEntity
     * @description Add an entity to the db shape
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
     * @method getEntity
     * @description Returns the entity figure with the given index
     * @param {Number} index the index of the entity to return
     */
    getEntity: function(index)
    {
        return this.children.get(index+1).figure;
    },


   /**
    * @method setName
    * @description Set the name of the DB table. Visually it is the header of the shape
    * @param name
    */
   setName: function(name)
   {
       this.classLabel.setText(name);

       return this;o
   },

   /**
    * @method setPersistentAttributes
    * @description Read all attributes from the serialized properties and transfer them into the shape.
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
