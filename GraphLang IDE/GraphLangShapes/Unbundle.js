/**
 *  @class GraphLang.Shapes.PropertyNode
 *  @description Thisi s property node for GraphLang.
 */
GraphLang.Shapes.Basic.Unbundle = GraphLang.Shapes.Basic.UnbundleByName.extend({

	NAME: "GraphLang.Shapes.Basic.Unbundle",

    init : function(attr)
    {
        this._super();
    },
    
    updateItems: function(){
      /*
       *    Adding connected cluster items labels into context menu which appears
       *    after right click on bundle by name item.
       */
      let bundleObj = this;
      this.items.resetChildren();   //remove items

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
        
        clusterObj.getOrderedItems().each(function(itemIndex, itemObj){
            bundleObj.addEntity(itemObj.getDatatype());
        });
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
     cCode += "/* Unbundle */\n";
     return cCode;
   }

});
