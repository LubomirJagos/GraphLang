/**
 *  @class GraphLang.Shapes.Basic.Loop
 *  @description This class is parent for WhileLoop and ForLoop mostly. It contains methods to get left tunnels
 *  declaration, inside wires declaration, right tunnels declaration.
 */

GraphLang.Shapes.Basic.Loop2 = draw2d.shape.composite.Jailhouse.extend({
  NAME: "GraphLang.Shapes.Basic.Loop2",
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
      else if (childObj.NAME.toLowerCase().search("righttunnel") >= 0){       //ADD ALSO INPUT PORT FROM RIGHTTUNNELS
         output.push(childObj.getInputPort(0));
      }
    });
    return output;
  },
  getPort: function(id){
    var port;
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.getPort(id) != null) port = childObj.getPort(id);
    });
    return port;
  },
  getUserData: function(){
    return this.userData;
  },

  /*
   *  SET EXECUTION ORDER BY LEFTTUNNEL WITH HIGHEST EXECUTION ORDER
   */
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
      this.getUserData().executionOrder = tunnelHighestExecutionOrder + 1;
    }

    this.getUserData().wasTranslatedToCppCode = false;
  },

  /*
   *  TRANSLATE TO C/C++ CODE
   *    This is just dummy function to have here something, translate for specific loop structure (WhileLoop, ForLoop) is done in their methods.
   */
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
      var wireDatatype = wireObj.getSource().getUserData().datatype;
      cCode += wireObj.getSource().userData.datatype + " wire_" + wireObj.getId() + ";\n";
    });
    return cCode;
 },

 /*
  * WIRES FROM LEFT TUNNELS IN LAYER, returns all wires from left tunnels regardless which layer
  *   This is for Multilayer figure, to get wires list for some layer.
  */
  getLeftTunnelsLayerWires:function(){
    leftTunnelsWires = new draw2d.util.ArrayList();
    this.getChildren().each(function(childIndex, childObj){
     if (childObj.NAME.toLowerCase().search("lefttunnel") > -1){
       if (childObj.getOutputPort(0).getConnections().getSize() > 0){
         childObj.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
           leftTunnelsWires.push(connectionObj);
         });
       }
     }
    });
    return leftTunnelsWires;
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
  },

/*******************************************
 *  get/set persisten params to right save tunnels into file
 *******************************************/


  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();

      // add all decorations to the memento
      //
      memento.labels = [];
      this.children.each(function(i,e){
          var labelJSON = e.figure.getPersistentAttributes();
          labelJSON.locator=e.locator.NAME;
          labelJSON.locatorX=e.locator.x;                         //STORE INFORMATION ABOUT TUNNEL POSITION X
          labelJSON.locatorY=e.locator.y;                         //STORE INFORMATION ABOUT TUNNEL POSITION Y

          memento.labels.push(labelJSON);
      });

      return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
      this._super(memento);

      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();

      // and add all children of the JSON document.
      $.each(memento.labels, $.proxy(function(i,json){

          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;
          if (curDatatype.toLowerCase().search("tunnel") > -1){
            var msg = JSON.stringify(json);
            //alert("tunnel:" + msg);
          }

          var figure =  eval("new "+json.type+"()");                                                    // create the figure stored in the JSON
          figure.attr(json);                                                                            // apply all attributes
          var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")");     // instantiate the locator

          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));
  },

  getTunnelPort: function(portName, tunnelId){
    this.getInputPorts().each(functions);
    //if no results look for children tunnels port
    if (portObj == null){
        this.getChildren().each(function(childIndex, childObj){
          if (childObj.getParent().getId().toLowerCase().search(tunnelId.toLowerCase())){               //compare tunnelId and all loops input ports tunnels parents IDs
            portObj = childObj;
          }
        });
    }

    return portObj;
  }

});
