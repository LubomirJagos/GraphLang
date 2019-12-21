/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 *  Jailhouse is NOT PART OF LOOP, becasue loops has tunnels when wires enter them.
 *  Jailhouse is just layer and part of some object, now Multilayered node which provides
 *  tunnels to enter these layers.
 */
GraphLang.Shapes.Basic.Jailhouse = draw2d.shape.composite.Jailhouse.extend({
  NAME: "GraphLang.Shapes.Basic.Jailhouse",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
    this.userData = {};
  },

  /*
   *  Layer has own translate fucntion, it's not translate recursively as loop, because layer
   *  has no tunnels they are owned parent object instead, so this just order elements and
   *  call their translation function.
   */
  translateToCppCode: function(){
    cCode = "";

    //cCode += "{BEGIN Multilayered Jailhouse layer id: " + this.getId() + "}\n";

    //this is not running
    //    cCode += GraphLang.Utils.translateToCppCode2(this.getCanvas(), this)

    /*
     *  Going through all nodes and wires inside Jailhouse and translate them into C/C++ code or call appropriate translate function
     */
    layerFigures = this.getAssignedFigures();
    //layerFigures.sort("userData.executionOrder"); //this is probably not running for subitems
    layerFigures.sort(function(figureA, figureB){ return figureA.userData.executionOrder - figureB.userData.executionOrder}); //order figure by their executionOrder

    //1st get declaration for wires going from tunnels to figures inside
    leftTunnelsWires = this.getCanvas().getFigure(this.userData.owner).getLeftTunnelsLayerWires();
    leftTunnelsWires.each(function(connectionIndex, connectionObj){
      if (layerFigures.contains(connectionObj.getTarget().getParent())){
        cCode += "wire_" + connectionObj.getId() + " = tunnel_" + connectionObj.getSource().getId() + ";\n";
      }
    });

    //2nd define all wires inside layer which are direct children, means not part of nested multilayered structure or loop
    layerFigures.each(function(figureIndex, figureObj){
      if (figureObj.NAME.toLowerCase().search("connection") > -1){
        cCode += figureObj.getSource().userData.datatype + " wire_" + figureObj.getId() + ";\n";
      }
    });


    /*
     *  ...................ToDo.......................
     *    NEED TO FINISH TRANSLATION PROCESS TILL NOW WIRES AND ASSIGNMENT FROM TUNNELS ARE DONE, HERE BELOW SHOULD BE RIGHT TRANSLATE
     *    PROCESS FOR FIGURES AND LOOPS AND OTHERS ITEMS BASED ON executionOrder OF NODES
     */

    //3rd translate figures inside layer
    layerFigures.each(function(figureIndex, figureObj){
      if (figureObj.NAME.toLowerCase().search("connection") == -1){
        cCode += figureObj.translateToCppCode() + "\n";
      }
    });

    //4th translate figures inside
    //directChildren = GraphLang.Utils.getDirectChildrenWithoutTunnels(this.getCanvas(), this.getCanvas().getFigure(this.getId()));
    directChildren = this.getAssignedFigures();

    return cCode;
  }
});
