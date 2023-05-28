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

    symbolPicture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACWCAYAAAC1meaLAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wocDS4pTRYxGQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAplSURBVHja7d1/bJT1Acfxz3Ntr73K1f6gkXoIG21XqviHmA2pGMiKW5boMpCoEflD/UtbIjDd0Ii1zugfW5jGKG4Gl8UfUYY4fyRboo1iS9GprVOWa6tYUK60Hv3lCde73vM8+6O96x39pdIed+X9Ssjx5PGeHM/l7fP7e0Y4HLYFICkcrAKA4ACCA0BwAMEBIDiA4ACCA0BwAMEBIDiA4ACCA0BwAMEBIDiA4AAQHEBwAMEBIDiA4AAQHJA6MlPlg2RlZcX+Pjw8zDcDtnAACA4gOAAEBxAcQHAAZpxh23ZK/FwVlwLAFg4AwQEEB4DggFSSySrARBoaGtTe3i5JqqioUHV1NStlBnCWEuNCe+DeHZoXylBJMFu2pG5XSN9mm3rg4T8QHsFhJmPbfHuNrrMr9RNHsQxJtmwZMtRm+bXP8OrxXU8QHcFhJly1okqreotV4ZgvWxoNbuz1M+uEGov8any/mZX1A3HSBLGtW27I0BKjUBFZMm1Lkeif0eklRqFyQ4YaGhpYYT8QJ02SLBQKKRgMyrKslPpcra2tKjqZpYhtypAh2SPbtuguZXS66GSW2tvb2a0kuNQ3MDCgvv5+ORwOnfmO/MweCQyFQrJky7QtGaOhaTS0+GlLNl8kwaXHlq2vv18ZGZmSYchIsc9XVlaut12vK/KtNWXXX7tCWrJkCV8ox3CpLRgMyuFwSIaRkp9vZVWVTjltfa7e2PGbaVuKyIxNH7Z7FXRauuKKK/hCCS61WZYlO8X3xu68+7d6K+OIDtt9itjm6J+x2N7MOKLNd21NuePPdMJlgSTp6+vT4DcBOTIyUvpzHmxu1mN//JOyQ4YKT2XKljSQG9FQtq07775LK1b8TOfn5amwsJB6CC41NTQ0qLW1VUOhkMrKyrWyqirlP/PB5mYdPnxYklRaWhr7zJYZITiCS93QdtQ9oMwcl3IK5kuSTvZ+rUjwlLZu2ZIQ3p6XXlR/f79uufU2OZ3Occuabn7Sdo0J7oxwlnIWY6uprdUla36pCxaXjp1mly3/0U7V1dWpvr5eK6uqFAgENBQckiT5/X55PJ6EZU03H2zhzvktXNWqVVqw7HIVX/SjkTOTtp3w6j/6hXyffKA9e/6hNq9XPV/3SJJ6urt1/Q03Jixruvls4dIHZylnaevmcOao6MKLZJqmrEhk3GuhZ5Eysl169939+s/776usrFxlZeXq8nUpEAjElhUOh6ecD4I757W3t8vpzh+Jy4zIGn09fTrn/AId+vSQ8gsK5PF4VFxcLFeuSy0tH8WW5ff7p5wPjuEgybYsWWZkbE8yegQXN21Zto4ePaL2Nq8a3noz4f0rV1bJ6XTqQFOjDjQ1TTofBHfOq6ioUHjPXlmmOeFjLtHXocFeZRf9WPftuF9utzt2gmT300/L7/crLy9P/f39eujhRyacz8kTdikhqbq6WtZwSCe+Ojrh8Ztpmur96oiGT51S9dq1sZgkye1260LPhTrQ1CjfsWNaWlk56XwQHEY99OCD+uLDZp3wfTly/GaNHcf1Hjuqwx826/Lll6msrHzce69cdZV8x3w6cKBp0vmcPElPXBaYRQ0NDbpvx/1SZpYycueN/Du//UZ2JKxtW7elxR0np+OyAMGlRXjpdmsXwRFcWkuXm5cJjmM4gOAAEBxAcAAIDiA4gOAAEBxAcJgCoxaf63g8Jwnmyq1dHR3t+u/HHysyPKzS0lKtWbNGxcXFfMHfA7d2zXJoU43atezSS/X4Y4+qp6cn9p7z5s1TTe1meTweBQKBKecny+DgoOp31ul/nx/SyZ+fVLAoqPzOfFmvWaqtqdW2rdsoieDOfmyJo3aN7Vb6j3bq07f/re3bt+uzzzp008abY8+8tXm92vfyXm2+c4sk6YXnn5t0fvxzcrPFNCPaVLNRHWs7NPi7wYR5GccztPj3i7Vu0To9UvcINXEMd/bsqKvTxat/ofkLF8eehbMsU5Zpquiixbpk9dXa9dSuce/zLFyoovnzJ13udPNn2q6/Pqmvlh8bF5skmSWmOnd36tXGV9XYyAOxBHcWt27fddQun8+X8N6JnvL+PvNn2hv/el0n7vBPOt/OsnX8tuN69pVn+eI5aXJ2REftGhnTJPr7akr4zWxbkiu/UMe7unTfvfckvP/KVatif+89cWLK+bOp+/hx2efZiiyKTPnfhX8a1qG/H+KLJ7izx7YsmWZkNLToL4kqYdqybLlyc8cNEvT4Y4+qzeuN7T7GH6/Fz19aWcmKZpcSFRUVCgcGRsefjB+LMnF6aLBX+fn5Ce91u90qKy+fdNnTzZ9JC0pKZJw0lPnl1P9fdn7g1LKLl/HFE9zZET9ql3na8ZsZN2qXGRqa8HcEunxdcuflTbjs6ebPtGt+da3mPzn5tTZj2FDJ7hJtWreJL/474LLALJ44qamp1eLlK1RYslDRu0xsWxro7lJny0Ft336P3jvYnHCdTZJuv6NGSysrJ7wOFz8/GcxIRJtqN6rj6g4N3s1lAYJL8ejmwqhdXPgmuLQLj1u7QHBJNDJq1zdyZKT3iWFG7eKkCUBwmLM7RawCggMIDgDBAQQHEBwAggMIDsD0eB4uCebSDzLizHBr1yyHNtWoXdHw2rxe7Xryidj71m/YoNWr1yQsa//+d7Rv797YdDKfGIhnmabOz3NzaxfBpV5siaN2jQ2yEB21q76+XuHhsNq8Xt1y621yOp0Kh8P62zO7tbSyMhbdnpdelCRdf8ONksae+l5/3YakR0dwHMOlpPGjdpnjRu3a+eedavN6ddPGm+V0OiVJTqdT11z7a7V+1KJAICCfz6eh4JB+s259bNlut1vrr9ug/fvfUTgcZmVzDMcxW/yoXWNjmYy9FnoWqcv7iXw+n7KzsxPe7/F4tGXbyDNmLS0fKceVEwsyamllJWOaEByksVG7TNOUYqN0jSUXnXblFykUCo2L6XQXLFjASiU4TMW2LFlmRLYtGUbcFi5u2rYtBYNBhcPhKaPr6e5mhXIMh8kkjNplmYkjdsVNDw32KT8/X6FQKOH9Pp9Pj+7cqUAgoLKycg0Fh8Ydq7V5vfrLU7s4hiM4xI/aNdGoy9FRu6xwWNVr1+qF55+LhRMOh/XG66/pssuXy+12y+PxKMeVo3++si+2/EAgoH0v79Xq1Wum3R1FauGywCyeOBkbtcuTsEs50O1TZ8t7qq9/UCurqsZdY5voOtyel17Ugaam2DTX4QiO4CaIbi6M2kVwBJd24c2VW7sIjuDSwtwZtYvgOGkCEBwSVrTDIcNI/xGvDGPk3wKCS2kul0uWZY2cpkxXti3LsuRyufhCfyDuNEmS7OxsFRYUqK+/Xw6HQ8k9dD7zLathSJZlqbCgYNy9n/ge65GTJskVCoUUDAZHtnZptkvscrmIjeAAjuEAEBxAcADBASA4gOAAEBxAcADBASA4gOAAEBxAcAAIDiA4gOAAEBxAcAAIDiA4gOAAEBxAcAAIDkhtKTMQLOYuBvllCwcQHEBwAAgOIDgABAcQHHAO4jocwBYOIDgABAcQHACCAwgOIDgAM+//o7Agnql/3WkAAAAASUVORK5CYII=",

   translateToCppCode: function(){
     cCode = "";
     cCode += "/* Bundle */\n";
     return cCode;
   }

});
