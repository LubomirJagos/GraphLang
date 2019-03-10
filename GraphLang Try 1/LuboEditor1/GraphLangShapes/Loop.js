GraphLang.Shapes.Basic.Loop = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.Loop",
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
    this.createPort("input");
    this.createPort("input");
    this.createPort("output");

    //draw End node ID on top
    this.add(new draw2d.shape.basic.Label({text:this.id}), new draw2d.layout.locator.TopLocator({}));
  },
  onRun3: function(){
    alert("THIS IS ANOTHER FUNCTION \n Actual node ID: " + this.id + "\n" + "Node type: " + this.NAME);
  }
});
