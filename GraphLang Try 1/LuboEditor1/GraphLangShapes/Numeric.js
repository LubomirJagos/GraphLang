/**
 *  @description This is basic numeric class for numeric entry.
 *  It cannot be placed on Canvas, because it doesn't has method for draw itself, but mus be created to be able have new subbranches of blocks.
 *
 *  I was getting error in browser:
 *    "Uncaught Inherited class [GraphLang.Shapes.Numeric] must override the abstract method createShapeElement"
 */
GraphLang.Shapes.Numeric = draw2d.shape.node.End.extend({
  NAME: "GraphLang.Shapes.Numeric",
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
  }
});
