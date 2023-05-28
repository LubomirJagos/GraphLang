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

      //don't save ports into file
      this.persistPorts = false;

      //output for cluster to be wired here
      port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.7, 50));
      port.setConnectionDirection(1);
      port.setBackgroundColor(colorObj.getByName("cluster"));
      port.setName("clusterOutput");
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

      //DEFAULT EXECUTION ORDER
      this.userData = {};
      this.userData.executionOrder = -1;
	  this.userData.wasTranslatedToCppCode = false;

      this.updateAllItemsOncontext();
      this.updateBasicContextMenu();

    },

    getConnectedCluster: function(){
        let connections = this.portClusterType.getConnections();
        let clusterObj = null;
        let thisId = this.getId();

        if (connections.getSize() > 0){
          let connectedNode = connections.first().getSource().getParent();
          let clusterName = null;

          /*
           *    There are two options:
           *        - there is cluster connected to cluster input or some tunnel which has function getDatatype()
           *          and this function should have just nodes which represent some datatype or tunnels
           *        - it's connected to some Unbundle, UnbundleByName which output is cluster
           */
          if (connectedNode.getDatatype){
            clusterName = connectedNode.getDatatype();
          }else if (connectedNode.getConnectedClusterDatatype){
            clusterName = connectedNode.getConnectedClusterDatatype();          
          }
          
          if (clusterName){
              this.getCanvas().getFigures().each(function(figureIndex, figureObj){
                  if (figureObj.getDatatype && figureObj.getDatatype() == clusterName){
                      clusterObj = figureObj;
                  }
              }); 
          }
        }
        return clusterObj;    
    },
    
    getConnectedClusterDatatype: function(){
        return this.getConnectedCluster().getDatatype();
    },

    getContextMenu: function(){
      /*
       *    Adding connected cluster items labels into context menu which appears
       *    after right click on bundle by name item.
       */
      let connections = this.portClusterType.getConnections();
      let contextMenu = {};
      let clusterObj = this.getConnectedCluster();
      if (clusterObj){
        clusterObj.getAllItemsLabels().each(function(itemIndex, itemObj){
            contextMenu[itemObj] = {name: itemObj};
        });
        contextMenu["separator1"] = "--------------------";
      }

      /*
       *    Default context menu items to add and delete item.
       */
      contextMenu["update ports"] = {name: "Update ports"};
      contextMenu["add after this"] = {name: "Add After This"};
      contextMenu["delete"] = {name: "Delete This Item"};
      
      return contextMenu;
    },

    /*\
     *  Update datatypes of cluster ports.
     */
    updateClusterPorts: function(){
      //update cluster type port and output port datatypes
      let datatype = this.getConnectedClusterDatatype();
      if (datatype){
        this.portClusterType.userData.datatype = datatype;
        this.getOutputPort('clusterOutput').userData.datatype = datatype;
      }
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
                   case "update ports":
                        emitter.getParent().getParent().updateClusterPorts();
                        break;
                   default:
                      let itemObj = emitter.getParent().getParent().getConnectedCluster().getItemByLabel(key);
                      if (itemObj){
                        var colorObj = new GraphLang.Utils.Color();
                        emitter.setText(key);
                        portObj = emitter.getInputPort(0)
                        portObj.userData.datatype = itemObj.getDatatype();
                        portObj.useGradient = false;
                        portObj.setBackgroundColor(colorObj.getByName(itemObj.getDatatype()));
                      }else{
                        emitter.setText("not found");
                      }
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
        item.getInputPort(0).getConnections().each(function(connectionIndex, connectionObj){
            connectionObj.getCanvas().remove(connectionObj);
        })

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

      //set unique input name in scope of bundle node
      let isUnique;
      let inputPortName;
      do{
        inputPortName = "input_" + Math.floor(Math.random() * 1000);
        isUnique = true;
        
        this.items.getChildren().each(function(childIndex, childObj){
          if (childObj.getInputPort(0).getName().search(inputPortName) > -1){
              isUnique = false;
          }
        });
      }while (isUnique == false);
      input.setName(inputPortName);
      
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
        itemData.inputPortName = itemObj.getInputPort(0).getName();
        
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
        this.items.getChildren().last().getInputPort(0).setName(bundleItem.inputPortName);                
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

    symbolPicture: "data:image/png;base64,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",

  translateToCppCode: function(){
    cCode = "";
    cCode += "/*BundleByName*/\n";
    
    bundleObj = this;
    this.getOutputPort('clusterOutput').getConnections().each(function(outConnectionIndex, outConnectionObj){
        inputCluster = bundleObj.portClusterType.getConnections().first();

        bundleObj.items.getChildren().each(function(itemIndex, itemObj){
            wireInput = itemObj.getInputPort(0).getConnections().first();
            if (wireInput) cCode +=  'wire_' + inputCluster.getId() + '.' + itemObj.getText() + ' = wire_' + wireInput.getId() + ";\n";
        });        
        if (inputCluster) cCode += 'wire_' + outConnectionObj.getId() + ' = wire_' + inputCluster.getId() + ";\n";     //writing reference to this cluster to wire    
    });
    
    
    return cCode;
  }

});
