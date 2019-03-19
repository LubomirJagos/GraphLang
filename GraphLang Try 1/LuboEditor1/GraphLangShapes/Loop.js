GraphLang.Shapes.Basic.Loop = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.Loop",
  userData: {
    executionOdrder: -1
  },
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);

/*
    this.createPort("input");
    this.createPort("input");
    this.createPort("output");
*/

    //draw End node ID on top
    this.add(new draw2d.shape.basic.Label({text:this.id}), new draw2d.layout.locator.TopLocator({}));
  },
  onRun3: function(){
    alert("THIS IS ANOTHER FUNCTION \n Actual node ID: " + this.id + "\n" + "Node type: " + this.NAME);
  },
  getInputPorts: function(){
    output = new draw2d.util.ArrayList();
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME == "GraphLang.Shapes.Basic.Tunnel"){
        output.push(childObj.getInputPort(0));
      }
    });
    return output;
  },
  getUserData: function(){
    return this.userData;
  }
});
