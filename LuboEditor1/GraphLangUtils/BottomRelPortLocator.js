/**
 *  @method BottomRelPortLocator
 *  @name GraphLang.Utils.BottomRelPortLocator
 *  @description To snap objects to botom edge of structure.
 */
GraphLang.Utils.BottomRelPortLocator = draw2d.layout.locator.XYRelPortLocator.extend({
  NAME: "GraphLang.Utils.BottomRelPortLocator",
  relocate: function(index, figure)
  {
      var node = figure.getParent();
      var x = node.getWidth()/100 * this.x;
      var y = node.getHeight() - this.y;

      this.applyConsiderRotation(figure, x, y);
  }
});
