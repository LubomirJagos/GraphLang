/**
 *  @class GraphLang.Shapes.Basic.UserCodeBlock
 *  @descritpition User written own code directly included in generated source code. This class is here to have parent obj for similar things. User defined source code is lowest level way for programmer how to put hand written code directly into generated code.
 */
GraphLang.Shapes.Basic.UserCodeBlock = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.UserCodeBlock",
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.installEditor(new draw2d.ui.LabelInplaceEditor());

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105, 50.0));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#eb34d2");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};

    /*****************************************************************************
     *  RIGHT CLICK CONTEXT MENU
     *****************************************************************************/

/*
    this.on("contextmenu", function(emitter, event){
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
               case "int32":
                   emitter.setColor(new draw2d.util.Color("#0000FF"));
                   port.userData.datatype = "int32";
                   break;
               case "uint":
                   emitter.setColor(new draw2d.util.Color("#0000FF"));
                   port.userData.datatype = "uint";
                   break;
               case "float":
                   emitter.setColor(new draw2d.util.Color("#FFC300"));
                   port.userData.datatype = "float";
                   break;
               case "double":
                   emitter.setColor(new draw2d.util.Color("#900C3F"));
                   port.userData.datatype = "double";
                   break;
               case "bool":
                   emitter.setColor(new draw2d.util.Color("#75FF33"));
                   port.userData.datatype = "bool";
                   break;
               case "String":
                   emitter.setColor(new draw2d.util.Color("#FF33F0"));
                   port.userData.datatype = "String";
                   break;
               default:
                   emitter.setColor(new draw2d.util.Color("#979595"));
                   port.userData.datatype = "unknown";
                   break;
               }

            },this),
            x:event.x,
            y:event.y,
            items:
            {
                "int32": {name: "int32"},
                "uint":    {name: "uint"},
                "float":    {name: "float"},
                "double": {name: "double"},
                "bool": {name: "bool"},
                "String": {name: "String"}
            }
        });
    });
*/



  }
});
