/**
 *  @class GraphLang.Shapes.Basic.NUmericConstant
 *  @descritpition Numeric constant. For now implemented just integers and floats.
 */
GraphLang.Shapes.Basic.NumericConstant = draw2d.shape.basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.Loop.NumericConstant",
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
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "undefined";

    /*****************************************************************************
     *  RIGHT CLICK CONTEXT MENU
     *****************************************************************************/

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
                   emitter.getOutputPort(0).userData.datatype = "int32";
                   break;
               case "uint":
                   emitter.setColor(new draw2d.util.Color("#0000FF"));
                   emitter.getOutputPort(0).userData.datatype = "uint";
                   break;
               case "float":
                   emitter.setColor(new draw2d.util.Color("#FFC300"));
                   emitter.getOutputPort(0).userData.datatype = "float";
                   break;
               case "double":
                   emitter.setColor(new draw2d.util.Color("#900C3F"));
                   emitter.getOutputPort(0).userData.datatype = "double";
                   break;
               case "bool":
                   emitter.setColor(new draw2d.util.Color("#75FF33"));
                   emitter.getOutputPort(0).userData.datatype = "bool";
                   break;
               case "String":
                   emitter.setColor(new draw2d.util.Color("#FF33F0"));
                   emitter.getOutputPort(0).userData.datatype = "String";
                   break;
               default:
                   emitter.setColor(new draw2d.util.Color("#979595"));
                   emitter.getOutputPort(0).userData.datatype = "unknown";
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




  }
});
