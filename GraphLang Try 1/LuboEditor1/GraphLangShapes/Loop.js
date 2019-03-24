GraphLang.Shapes.Basic.Loop = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.Loop",
  userData: {
    executionOdrder: -1
  },
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
  },
  onRun3: function(){
    alert("THIS IS ANOTHER FUNCTION \n Actual node ID: " + this.id + "\n" + "Node type: " + this.NAME);
  },

  //THIS IS MY FUNCTION TO GET INPUT PORTS LIST FOR THIS Loop
  getInputPorts: function(){
    output = new draw2d.util.ArrayList();
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
        output.push(childObj.getInputPort(0));
        childObj.getInputPort(0).setColor(new draw2d.util.Color("#0000FF")).setStroke(5); //<-- set stroke thicker for outside loop port, just for debugging
      }
      // else if (childObj.NAME.toLowerCase().search("righttunnel") >= 0){
      //   output.push(childObj.getOutputPort(0));
      //   childObj.getOutputPort(0).setColor(new draw2d.util.Color("#0000FF")).setStroke(5); //<-- set stroke thicker for outside loop port, just for debugging
      // }
    });
    return output;
  },
  getUserData: function(){
    return this.userData;
  }
});
