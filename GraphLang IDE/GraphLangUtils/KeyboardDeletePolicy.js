/**
 *  @class GraphLang.Utils.KeyboardDeletePolicy
 *  @description Set correct command to delete nodes, specially for loops where are tunnels.
 */
GraphLang.Utils.KeyboardDeletePolicy = draw2d.policy.canvas.DefaultKeyboardPolicy.extend({
  NAME: "GraphLang.Utils.KeyboardDeletePolicy",

  //this function is my own for deleting objects, because when deleting loop it's needed to remove also tunnels and wires connected to them
  onKeyDown: function(canvas, keyCode, shiftKey, ctrlKey)
  {
    var node = canvas.getPrimarySelection();

    //in case of deleteing loop it's needed to remove also all tunnels (it will also remove all wires connected to tunnels)
    if (node.NAME.toLowerCase().search("loop") >= 0){
      node.getChildren().each(function(tunnelIndex, tunnelObj){
        if (tunnelObj.NAME.toLowerCase().search("tunnel") >= 0){
          var cmdStack = canvas.getCommandStack();
          var cmdDel;
          //first delete connected wires, otherwise tunnel object left in memory and that cause difficulties
          tunnelObj.getPorts().each(function(portIndex, portObj){
            portObj.getConnections().each(function(wireIndex, wireObj){
              cmdDel = new GraphLang.Utils.CommandDelete(wireObj);
              cmdStack.execute(cmdDel);
            });
          });
          cmdDel = new GraphLang.Utils.CommandDelete(tunnelObj);
          cmdStack.execute(cmdDel);
        }
      });
    }

    var command = new GraphLang.Utils.CommandDelete(node);
    canvas.getCommandStack().execute(command);

    $("#logitem1").html("obj deleted:" + node.getId());

    //this calls method of original class, not needed now
    //this._super(canvas, keyCode, shiftKey, ctrlKey);
  }
});
