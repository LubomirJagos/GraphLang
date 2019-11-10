GraphLang.Shapes.Basic.Loop = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.Loop",
  constructor(obj){
    obj && Object.assign(this, obj);
  },
  // //This doesn't run, don't know why, so initialization for userData is done in init()
  // userData: {
  //   executionOdrder: -1,
  //   wasTranslatedToCppCode: false
  // },
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;
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
      var ownerExecutionOrder;
      if (thisLoopOwner != null) ownerExecutionOrder = thisLoopOwner.getUserData().executionOrder;
      if ( ownerExecutionOrder != undefined){
        this.getUserData().executionOrder = ownerExecutionOrder;  //<--- HERE SHOULD BE RECURSIVELY LOOKING UP for execution order
      }else{
        this.getUserData().executionOrder = 1;
      }
    }else{
      this.getUserData().executionOrder = tunnelHighestExecutionOrder;
    }

    this.getUserData().wasTranslatedToCppCode = false;
  },

  translateToCppCode: function(){
    this.getUserData().wasTranslatedToCppCode = true;

    //CASE STATEMENT GENERATION
    var cCode = "";
    cCode += "switch(" + "/* ..selector wire.. */" + "){\n";
    cCode += "\t\tcase " + "/* ..something 1.. */" + ":{\n";
    cCode += "\t\t}break;";
    return cCode;
  },
  translateToCppCodePost: function(){
    return "}";
  },

  /*
   *  TUNNELS DECLARATION
   */
  getTunnelsDeclarationCppCode:function(){
    cCode = "";
    cCode += "//tunnel declaration, if connected to wire also assignement\n";
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("lefttunnel") > -1){
        //if tunnel connected on its input assign value to it
        if (childObj.getInputPort(0).getConnections().getSize() > 0){
          cCode += childObj.getInputPort(0).userData.datatype + " tunnel_" + childObj.getId() + " = wire_" + childObj.getInputPort(0).getConnections().get(0).getId() + ";\n";
        }else{
          cCode += childObj.getInputPort(0).userData.datatype + " tunnel_" + childObj.getId() + " = wire_" + childObj.getInputPort(0).getConnections().get(0).getId() + ";\n";
        }
      }
    });
    return cCode;
  },

  /*
   *  WIRES INSIDE LOOP DECLARATION
   */
 getWiresInsideLoopDeclarationCppCode:function(){
    cCode = "";
    cCode += "//inside loop wires declaration\n";
    GraphLang.Utils.getDirectChildrenWires(this.getCanvas(), this.getId()).each(function(wireIndex, wireObj){
      cCode += wireObj.getSource().userData.datatype + " wire_" + wireObj.getId() + ";\n";
    });
    return cCode;
 },

 /*
  * LEFT TUNNEL LOOP WIRES INPUT ASSIGNEMENTS
  */
  getLeftTunnelsWiresAssignementCppCode:function(){
    cCode = "";
    this.getChildren().each(function(childIndex, childObj){
     if (childObj.NAME.toLowerCase().search("lefttunnel") > -1){
       if (childObj.getOutputPort(0).getConnections().getSize() > 0){
         childObj.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
           cCode += "wire_" + connectionObj.getId() + " = tunnel_" + childObj.getId() + ";\n";
         });
       }
     }
    });
    return cCode;
  },

  /*
   * RIGHT TUNNEL ASSIGNEMENTS OUTPUT
   *  copy value of wire at left side to the wire at right side
   *  ERROR this is WRONG for multilayered structure when there is more than one input into output tunnel
   */
  getRightTunnelsAssignementOutputCppCode:function(){
    cCode = "";
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("righttunnel") > -1){
        if (childObj.getOutputPort(0).getConnections().getSize() > 0){
          cCode += "wire_" + childObj.getOutputPort(0).getConnections().get(0).getId() + " = wire_" + childObj.getInputPort(0).getConnections().get(0).getId() + ";\n";
        }
      }
    });
    return cCode;
  }


});
