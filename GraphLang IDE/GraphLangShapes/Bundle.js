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

      let connections = this.portClusterType.getConnections();
      let contextMenu = {};
      if (connections.getSize() > 0){
          
        let clusterObj;
        let clusterName = connections.first().getSource().getParent().getDatatype();
        console.log("bundle: searching for " + clusterName);
        if (clusterName && clusterName.toLowerCase().search("clusterdatatype") > -1){
            this.getCanvas().getFigures().each(function(figureIndex, figureObj){
                if (figureObj.getDatatype && figureObj.getDatatype() == clusterName){
                    clusterObj = figureObj;
                } 
            }); 
        }
        
        let clusterOrderedItems = clusterObj.getOrderedItems();
        clusterOrderedItems.each(function(itemIndex, itemObj){
            if (itemIndex >= bundleObj.items.getChildren().getSize()){
                bundleObj.addEntity(itemObj.getDatatype());
            }else{
                bundleObj.items.getChildren().get(itemIndex).setText(itemObj.getDatatype());
            }
        });
        
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
