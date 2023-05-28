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
      //this.items.resetChildren();   //remove items

      let contextMenu = {};
      let clusterObj = this.getConnectedCluster();
      if (clusterObj){        
        let clusterOrderedItems = clusterObj.getOrderedItems();
        clusterOrderedItems.each(function(itemIndex, itemObj){
            if (itemIndex >= bundleObj.items.getChildren().getSize()){
                bundleObj.addEntity(itemObj.getDatatype());
            }
            var colorObj = new GraphLang.Utils.Color();
            bundleItem = bundleObj.items.getChildren().get(itemIndex);
            bundleItem.setText(itemObj.getDatatype());
            portObj = bundleItem.getOutputPort(0)
            portObj.userData.datatype = itemObj.getDatatype();
            portObj.useGradient = false;
            portObj.setBackgroundColor(colorObj.getByName(itemObj.getDatatype()));
        });
        
        while(clusterOrderedItems.getSize() < this.items.getChildren().getSize()){
            
            //there is problem that wires are not removed properly so this should erase them
            this.items.getChildren().last().getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
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

   symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAIAAACjea/PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAMcSURBVHhe7ZtNTxNBGIB3Z7vdWqgV00aqByAao1BjwkXCQW4e0INyIRoP4EFjYkT8DSQaf4Im3okn/EA9GwMcwBiNB75SgcAaGyisodvufDjQgRXpFvDU8Z0nk9mZ2ffwPpn9ymxGLxaLGjCQOEJCOcNAOcNAOcNgX+9njLFoVT2hUEi0gtnD2XGclZUVz/NEv+oxTbOuri4Wi4l+OSo5r66uZrNZZISQYWiMidFqRtcpIZTgRCIRj8fF4C4CnSmlmUxGNwyEDDEkCZQSRkhjYyNC5Z9Wgc+wfD7Pa+mEOaWcS/mXJdCZzzO/VERHOvhFzvMPQL2fYaCcYaCcYaCcYaCcYaCcYaCcYaCcYaCcYaCcYQDRucz69uDg4JuXr6enpsyQmW4933n5SjqdFuckgWAvmUgE/c3Y4ZzL5e7evjMxMdHKUik95ul0FuW+Fe2e3t6e3lsiSAYO4Hzz+o2lzzNX8ekjeoTxc5rG66/0xwv8pe9B/7WuLhFX9VR29u/noaGhkbGxTu9kjWZiRjEl3mZ9Rk9eQqeeP31WYZVcLnzn92/fndOPHdYswhh3JhojW3UrOrGeXx8dGRGhkuM7z07PHNUOYUZKxdtq8EIZTYYP2/aSCJUc37mmttZlGGuUF8ILv7B5e6suasSyIiJUcnznC+1t89avjYnduJP9SeZlka0tF5zmlhYRKjm+c3d394K7/InZm5PM/qxHzcX2tvampiYRKjm+c0NDw8DAwAeW+cjm1phbmuo5lntlTq3H0P2H/SJOfv7+DhseHn7y6PH3hfl4OFqkJI8LHRc77vX1JZNJESEDB/gm2WZ8fHxyctItFM42N6dSx8WoPPyLM8dxnJ/ZrBEyRV8q9vsdBgflDAPlDAPlDAPlDAPlDAPlDAPlDAPlDAPlDAPlvBNpdxrtkXmgczgclvfnK8+c5y86uwh0tiwrGo1SIs2O2G14zjxznr/o7yJwfZuDMbZtmwcgZFAZ9oiije1zhM9wfX19hU3BlZxLOI7jui6TwVnX9UgkErSUv83ezv8f6l0FA+UMA+UMA+UMAU37DYH+ibyG5Ac4AAAAAElFTkSuQmCC",

   translateToCppCode: function(){
     cCode = "";
     cCode += "/* Unbundle */\n";
     return cCode;
   }

});
