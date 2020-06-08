/**
 *  @class GraphLang.Shapes.Basic.LayerChooser
 *  @author Ing. Lubomir Jagos
 *  @description This is label text above multilayer structure to choose some layer
 */
GraphLang.Shapes.Basic.LayerChooser = GraphLang.Shapes.Basic.Label.extend({
  NAME: "GraphLang.Shapes.Basic.LayerChooser",

  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);
    this.renewLayerChooser();
  },

  renewLayerChooser: function(){

    this.setText('none');  //after place structure into diagram, it's layer selector is set to has name as layer 0.
    //CLICK ON LAYER NAME AT TOP OF MULTILAYER STRUCTURE WHERE ARE THEIR NAMES
    this.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });

    //RIGHT CLICK ON LAYERS NAME SELECTOR
    this.on("contextmenu", this.layerChooserContextmenu);

    this.on("move", function(emitter, event){
      emitter.moveActiveLayer();
    });


  },

  layerChooserContextmenu: function(emitter, event){
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
             case "rename":                       // <--- Continue here, implement renaming layers, now it's static shit doing nothing
                 emitter.getParent().renameLayer();
                 break;
             case "new":
                /* this was part of code in example but it's not running so it's disabled, I need to change layer name no selector, it's updated based on active layer ID
                 setTimeout(function(){
                     _table.addEntity("_new_").onDoubleClick();
                 },10);
                */
                 //alert("Layers count: " + emitter.getParent().layers.getSize());
                 emitter.getParent().addLayer();

                 break;
             case "delete":
                 // with undo/redo support
                 /*
                 var cmd = new draw2d.command.CommandDelete(emitter);
                 emitter.getCanvas().getCommandStack().execute(cmd);
                 */
                 emitter.getParent().removeLayer(emitter.getParent().activeLayer);
             default:
                 break;
             }

          },this),
          x:event.x,
          y:event.y,
          items:
          {
              "rename": {name: "Rename"},
              "new":    {name: "New Entity"},
              "sep1":   "---------",
              "delete": {name: "Delete"}
          }
      });
  },

});
