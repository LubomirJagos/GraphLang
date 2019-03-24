/**
 *  @method RightRelPortLocator
 *  @name GraphLang.Utils.RightRelPortLocator
 *  @description To snap objects inside structure relative to right side.
 */
GraphLang.Utils.RightRelPortLocator = draw2d.layout.locator.XYRelPortLocator.extend({
  NAME: "GraphLang.Utils.RightRelPortLocator",
  relocate: function(index, figure)
  {
      var node = figure.getParent();
      var x = node.getWidth() - this.x;
      var y = node.getHeight()/100  * this.y;

      this.applyConsiderRotation( figure, x, y);
  }
});
