GraphLang.Shapes.Basic.Loop = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.Loop",
  constructor(obj){
    obj && Object.assign(this, obj);
  },
  userData: {
    executionOdrder: -1,
    wasTranslatedToCppCode: false
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
  },
  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;
    return "{Loop: " + this.getUserData().executionOrder + "}";
  },
  setExecutionOrderByTunnels: function(canvas){
    //first get input tunnel with highest execution number, if there is no input tunnel it's needed to look for parent loop
    var tunnelHighestExecutionOrder = -1;
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
        var tunnelExecutionOrder = childObj.getUserData().executionOrder;
        if (tunnelExecutionOrder > tunnelHighestExecutionOrder) tunnelHighestExecutionOrder = tunnelExecutionOrder;
      }
    });

    //in case there are no input tunnels on loop is needed to look for parent and used it's execution order, if parent is directly canvas, then this loop without input tunnels is executed as first, so it's execution order is 1
    // HERE CAN BE PROBLEM IF PARENT HASN'T SET UP ITS EXECUTION ORDER, SO THEN SHOULD BE RECURSIVELY LOOKIN UP, for now suppose that this will not happen
    if (tunnelHighestExecutionOrder == -1){
      var thisLoopOwner = GraphLang.Utils.getNodeLoopOwner(canvas, this);
      var ownerExecutionOrder = thisLoopOwner.getUserData().executionOrder;
      if ( ownerExecutionOrder != undefined){
        this.getUserData().executionOrder = ownerExecutionOrder;  //<--- HERE SHOULD BE RECURSIVELY LOOKING UP for execution order
      }else{
        this.getUserData().executionOrder = 1;
      }
    }else{
      this.getUserData().executionOrder = tunnelHighestExecutionOrder;
    }

    this.getUserData().wasTranslatedToCppCode = false;
  }
});
