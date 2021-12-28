/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
GraphLang.Shapes.Basic.UnbundleByName = draw2d.shape.layout.FlexGridLayout.extend({

	NAME: "GraphLang.Shapes.Basic.UnbundleByName",

    init : function(attr)
    {
    	this._super($.extend({
        bgColor:"#dbddde",
        color:"#d7d7d7",
        stroke:1,
        radius:3,
        columns: "10px, grow",
        //rows: "20px, 20px, 20px"
        rows: "grow"
      },attr));

      //don't save ports into file
      this.persistPorts = false;

      let colorObj = new GraphLang.Utils.Color();

      //input for cluster to be wired here
      this.portClusterType = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 50));
      this.portClusterType.setConnectionDirection(3);
      this.portClusterType.setBackgroundColor(colorObj.getByName("cluster"));
      this.portClusterType.setName("clusterInput");
      this.portClusterType.setMaxFanOut(20);

      //create vertical list and push it into unbundler object
      this.items = new draw2d.shape.layout.VerticalLayout();
      this.add(this.items, {row: 0, col:1});

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

    updateAllItemsOncontext: function(){
      /*
       *    Setting to show context menu when right click on each item in cluster, items
       *    are get from vertical layout which grouped them together
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
      
      var outputPort = label.createPort("output");
      outputPort.userData = {};
      outputPort.userData.datatype = "bool";
      outputPort.setName("output_" + label.id);
      
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
     * @method removeEntity
     * Remove the entity with the given index from the DB table shape.<br>
     * This method removes the entity without care of existing connections. Use
     * a draw2d.command.CommandDelete command if you want to delete the connections to this entity too
     *
     * @param {Number} index the index of the entity to remove
     */
    removeEntity: function(item)
    {
      item.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
          connectionObj.getCanvas().remove(connectionObj);
      })

      this.items.remove(item);
      this.updateAllItemsOncontext();
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
    * @method setName
    * @description Set the name of the DB table. Visually it is the header of the shape
    * @param name
    */
   setName: function(name)
   {
       this.classLabel.setText(name);

       return this;
   },

  /**
   * @method getPersistentAttributes
   * @description Return an objects with all important attributes for XML or JSON serialization.
   * This is used when file IS SAVED.
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();
      //adding aditional items to memento
      memento.bundleItems = [];
      this.items.getChildren().each(function(itemIndex, itemObj){
        let itemData = {};
        itemData.name = itemObj.getText();
        itemData.inputPortName = itemObj.getOutputPort(0).getName();
        
        memento.bundleItems.push(itemData);
      });

      return memento;
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
      this.setId(memento.id);

      //adding items
      this.add(this.items, {row: 0, col:0});

      $.each(memento.bundleItems, $.proxy(function(i,bundleItem){
        this.addEntity(bundleItem.name);
        this.items.getChildren().last().getOutputPort(0).setName(bundleItem.inputPortName);                
      },this));
      this.updateAllItemsOncontext();
   },
   
   /*
    *   IMRPOTANT
    *   Overloaded function to also return ports of items, must be to return all ports to have defined wires
    *   inside layer when this node is part of multilayered structure
    */
   getInputPorts: function(){
     let inputPorts = new draw2d.util.ArrayList();
     inputPorts.add(this.portClusterType);
     this.items.getChildren().each(function(childIndex, childObj){
        inputPorts.addAll(childObj.getInputPorts());
     });
     return inputPorts;
   },







    translateToCppCode: function(){
     cCode = "";
     cCode += "/* Unbundle by name */";
     return cCode;
    }
});
