/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
GraphLang.Shapes.Basic.Bundle = GraphLang.Shapes.Basic.BundleByName.extend({

    NAME: "GraphLang.Shapes.Basic.Bundle",

    init : function(attr){
        this._super();
    },

    updateItems: function(){
      /*
       *    Adding connected cluster items labels into context menu which appears
       *    after right click on bundle by name item.
       */
      let bundleObj = this;
      //this.items.resetChildren();   //remove items

      /*
       *  Searching for connected cluster datatype, looking on wirource and asking its datatype.
       *  Afterwards ask canvas for particular cluster to get its reference.
       */
      let clusterObj = this.getConnectedCluster();
      let contextMenu = {};
      if (clusterObj){
        /*
         *  Updtabe Bundle obj:
         *      - change each row fatatype according to connected object to connected cluster obj, also change port datatype
         *      - if there is more items than current row, add new entities, this way already connected wires
         *        stay connected to items and there is no corruption in gui
         */
        let clusterOrderedItems = clusterObj.getOrderedItems();
        clusterOrderedItems.each(function(itemIndex, itemObj){
            if (itemIndex >= bundleObj.items.getChildren().getSize()){
                bundleObj.addEntity(itemObj.getDatatype());
            }
            var colorObj = new GraphLang.Utils.Color();
            bundleItem = bundleObj.items.getChildren().get(itemIndex);
            bundleItem.setText(itemObj.getDatatype());
            portObj = bundleItem.getInputPort(0)
            portObj.userData.datatype = itemObj.getDatatype();
            portObj.useGradient = false;
            portObj.setBackgroundColor(colorObj.getByName(itemObj.getDatatype()));
        });
        
        /*
         *  If newly connected cluster datatype has less items inside it, this removes redundat items from end of this item
         *  and also connected wires to these items.
         */
        while(clusterOrderedItems.getSize() < this.items.getChildren().getSize()){
            //there is problem that wires are not removed properly so this should erase them
            this.items.getChildren().last().getInputPort(0).getConnections().each(function(connectionIndex, connectionObj){
                connectionObj.getCanvas().remove(connectionObj);
            });

            this.items.remove(this.items.getChildren().last());
        }
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
                   case "updateItems":
                        emitter.getParent().getParent().updateItems();
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
                items: {"updateItems": {name: "Update items"}},
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
                 case "updateItems":
                     emitter.getParent().updateItems();
                     break;
                 default:
                     break;
                 }
  
              },this),
              x:event.x,
              y:event.y,
              items: {"updateItems": {name: "Update items"}}
          });
      });
    },
    
   translateToCppCode: function(){
     cCode = "";
     cCode += "/* Bundle */\n";
     return cCode;
   }

});
