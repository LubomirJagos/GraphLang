/**
 *  @class GraphLang.Shapes.Basic.Label
 *  @descritpition This is label node item, it's defined as list with some attributes.
 *  Here will be also implemented ddefault function onRun3() which run after heartbeat.
 */
GraphLang.Shapes.Basic.Label = draw2d.shape.basic.Label.extend({
    /**
     * @author LuboJ.
     * @name onRun3()
     * @description Runned when interpreter is traversing through graph.
     */
    onRun3: function(){
      alert("THIS IS ANOTHER FUNCTION \n Actual property node item ID: " + this.id + "\n" + "Node type: " + this.NAME);
    }
});
