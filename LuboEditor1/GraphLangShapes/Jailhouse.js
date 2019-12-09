/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.Jailhouse = draw2d.shape.composite.Jailhouse.extend({
  NAME: "GraphLang.Shapes.Basic.Jailhouse",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);
  },
  translateToCppCode: function(){
    cCode = "";

    cCode += "{BEGIN Multilayered Jailhouse layer " + this.getId() + "}\n";
    //this is not running
    //    cCode += GraphLang.Utils.translateToCppCode2(this.getCanvas(), this)
    cCode += "LuboJ :)";
    cCode += "{END Multilayered Jailhouse layer " + this.getId() + "}\n";
    return cCode;
  }
});
