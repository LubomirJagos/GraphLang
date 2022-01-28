/**

 *  @class GraphLang.Shapes.Basic.ClusterDatatypeNode
 *  @author Ing. Lubomir Jagos
 *  @description Cluster datatype structure, it's rectangle inside which are place datatypes and this will generate C/C++ struct{} equivalent.
 */
//GraphLang.Shapes.Basic.ClusterDatatypeNode2 = GraphLang.Shapes.Basic.Jailhouse.extend({
GraphLang.Shapes.Basic.Loop2.ClusterDatatypeNode2 = GraphLang.Shapes.Basic.Loop2.extend({
  //NAME: "GraphLang.Shapes.Basic.ClusterDatatypeNode2",
  NAME: "GraphLang.Shapes.Basic.Loop2.ClusterDatatypeNode2",
  
  // //This doesn't run, don't know why, so initialization for userData is done in init()
  // userData: {
  //   executionOdrder: -1,
  //   wasTranslatedToCppCode: false
  // },
  init:function(attr, setter, getter){
    // this._super(attr, setter, getter);
    this._super( $.extend({},attr), setter, getter);

    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.7, 10));
    // port.setConnectionDirection(3);
    // port.setBackgroundColor("#abcdef");
    // port.setName("iterationTerminal");
    // port.setMaxFanOut(20);

    //COMMON LOOP BOUNDARY SETTINGS
    this.originalWidth = 120;
    this.originalHeight = 70;


    this.setWidth(this.originalWidth);
    this.setHeight(this.originalHeight);
    this.setStroke(2);
    this.setDashArray("");
    this.setColor("#AA4A4C"); //stroke color

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#7D1A4C");
    port.setName("clusterOutput");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "clusterDatatype_notDefinedYet";

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;
    this.userData.isTerminal = false;
    this.userData.datatype = "clusterDatatype";

    this.setPersistPorts(false); 

    this.on('contextmenu', this.clusterContextmenu);

    /*
     *  DO SOME ADDITIONAL CHANGES AFTER ADDED TO CANVAS
     */
    this.setResizeable(false);
    this.on('add', function(emitter){
      //emitter.setResizeable(false);
      //this.off('resize');
    });
    this.on('change:dimension', function(emitter, event){
      //emitter.setResizeable(false);
      //this.off('resize');
      //alert(emitter.NAME + "\n" + JSON.stringify(event));
      //alert(JSON.stringify(event.value.old));
    });
    this.on('change:x', function(emitter, event){
      //alert(emitter.NAME + "\n");
    });

    this.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: "clusterName"});
    this.nodeLabel.on('change:text', function(nodeEmitter, event){
      labelText = nodeEmitter.getText();
      labelText = labelText.replaceAll(" ","_"); 
      nodeEmitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
      labelText = GraphLang.Utils.getUniqueNodeLabel(nodeEmitter.getCanvas(), labelText); 
      nodeEmitter.text = labelText;                                                   //this will not fire another event!
      nodeEmitter.getParent().getOutputPort('clusterOutput').userData.datatype = nodeEmitter.getParent().getDatatype();   //change outputPort datatype
    });
    
    //this.add(this.nodeLabel, new draw2d.layout.locator.TopLocator());
    this.add(this.nodeLabel, new draw2d.layout.locator.BottomLocator());
    //this.add(this.nodeLabel, new draw2d.layout.locator.XYAbsPortLocator(0,0));
    
    this.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
    this.nodeLabel.userData = {};
    this.nodeLabel.userData.type = "clusterDatatypeName";
  },

  //added by LuboJ, here is showed how to add attributes which
  //then are serialized into json and could be readed to load schematci

  /*
   *  Context menu displayed after right click on cluster.
   */
  clusterContextmenu: function(emitter, event){
      $.contextMenu({
          selector: 'body',
          events:
          {
              hide:function(){ $.contextMenu( 'destroy' ); }
          },

          //these functions are run after user click on some context menu option
          callback: $.proxy(function(key, options)
          {
             switch(key){
             case "showItemsIndexes":
                emitter.addItemsIndexes();
                break;
             case "showItemsLabels":
                emitter.addItemsLabels();
                break;
             case "hideItemsIndexes":
                emitter.hideItemsIndexes();
                break;
             case "hideItemsLabels":
                emitter.hideItemsLabels();
                break;
             case "setTerminal":
                emitter.setStroke(3);
                emitter.setDashArray("-");
                emitter.setColor("#DD2241");
                emitter.userData.isTerminal = true;
                break;
             case "unsetTerminal":
                emitter.setStroke(2);
                emitter.setDashArray("");
                emitter.setColor("#AA4A4C"); //stroke color
                emitter.userData.isTerminal = false;
                break;
             default:
                 break;
             }

          },this),
          x:event.x,
          y:event.y,
          items:
          {
              "showItemsIndexes": {name: "Show Indexes"},
              "showItemsLabels": {name: "Show Labels"},
              "sep1":   "---------",
              "hideItemsIndexes": {name: "Hide Indexes"},
              "hideItemsLabels": {name: "Hide Labels"},
              "sep2":   "---------",
              "setTerminal": {name: "Set as terminal"},
              "unsetTerminal": {name: "Unset terminal"}
          }
      });
  },


  /********************************************************************************************************************
   *  Functions below are implemented by me (LuboJ)
   ********************************************************************************************************************/
  setName: function(name){
    return this.nodeLabel.setText(name.replaceAll(" ", "_"));
  },

  getName: function(){
    return this.nodeLabel.getText();
  },

  getDatatype: function(){
    return this.nodeLabel.getText() + "&";
  },

  /*
   *    Returns object reference inside cluster based on its label.
   *    There shouldn't be more with same label inside cluster, but if so last one is returned.
   *    If item is not found null is returned.
   */
  getItemByLabel: function(itemLabel){
    let clusterItem = null;
    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (figureObj.userData && figureObj.userData.nodeLabel == itemLabel){
        clusterItem = figureObj;
      }else if(figureObj.NAME.toLowerCase().search("clusterdatatype") > -1 && figureObj.getName() == itemLabel){
        clusterItem = figureObj;
      }          
    }); 
    return clusterItem;
  },

  getAllItemsIndexes: function(){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    var allIndexes = new draw2d.util.ArrayList();
    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function
      if (figureObj.userData && figureObj.userData.clusterItemIndex){
        allIndexes.add(figureObj.userData.clusterItemIndex);
      }          
    }); 

    return allIndexes;
  },

  getAllItemsLabels: function(){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    var allLabels = new draw2d.util.ArrayList();
    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function
      if (figureObj.userData && figureObj.userData.nodeLabel){
        allLabels.add(figureObj.userData.nodeLabel);
      }else if (figureObj.NAME.toLowerCase().search("clusterdatatype") > -1){
        allLabels.add(figureObj.getName());
      }        
    }); 

    return allLabels;
  },
  
  isItemNameUnique: function(name){
    let itemNames = this.getAllItemsLabels();
    return itemNames.contains(name);
  },

  /*
   *  This displays item indexes on left of figures inside cluster which are gonna be translated into C/C++ code.
   */
  addItemsIndexes: function(showIndexes = true){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    clusterObj = this;
    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function

      if (figureObj.clusterItemIndex != undefined){
        figureObj.clusterItemIndex.text = figureObj.userData.clusterItemIndex.toString();
        figureObj.clusterItemIndex.setVisible(showIndexes);
      }else{
        if (figureObj.userData.clusterItemIndex != null) labelText = figureObj.userData.clusterItemIndex;
        else labelText = (figureIndex + 1).toString();
        
        figureObj.clusterItemIndex = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
        figureObj.add(figureObj.clusterItemIndex, new draw2d.layout.locator.LeftLocator());
        figureObj.clusterItemIndex.installEditor(new draw2d.ui.LabelInplaceEditor());
        figureObj.clusterItemIndex.on('change:text', function(emitter, event){
          labelText = emitter.getText(); 
          var allIndexes = clusterObj.getAllItemsIndexes();
          
          while (allIndexes.contains(labelText)){
            labelText = parseInt(labelText) + 1;
            labelText = labelText.toString();
          }

          emitter.getParent().userData.clusterItemIndex = labelText;                  //when text change do this also in userData
          emitter.text = labelText;                                                   //this will not fire another event!
        });
      }
      figureObj.userData.clusterItemIndex = figureObj.clusterItemIndex.getText();  //to not begin from 0

      figureObj.getPorts().each(function(portIndex, portObj){
        portObj.getConnections().each(function(connectionIndex, connectionObj){
          connectionObj.getCanvas().remove(connectionObj);                        //remove wires
        });
      });
    });
  },
  
  /*
   *  This displays item indexes on left of figures inside cluster which are gonna be translated into C/C++ code.
   */
  addItemsLabels: function(showLabels = true){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    clusterObj = this;
    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function

      if (figureObj.nodeLabel != undefined){
        figureObj.nodeLabel.text = figureObj.userData.nodeLabel;
        figureObj.nodeLabel.setVisible(showLabels);
      }else if (figureObj.NAME.toLowerCase().search("clusterdatatype") > -1){
        // for now do nothing
      }else{
        if (figureObj.userData.nodeLabel != null) labelText = figureObj.userData.nodeLabel;
        else labelText = 'item_' + figureIndex;
        
        figureObj.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
        figureObj.add(figureObj.nodeLabel, new draw2d.layout.locator.TopLocator());
        figureObj.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
        figureObj.nodeLabel.on('change:text', function(emitter, event){
          labelText = emitter.getText(); 
          var allIndexes = clusterObj.getAllItemsLabels();
          
          while (allIndexes.contains(labelText)){
            labelText = labelText + '2';
          }

          emitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
          emitter.text = labelText;                                                   //this will not fire another event!
        });
      }
      figureObj.userData.nodeLabel = figureObj.nodeLabel.getText();  //to not begin from 0

      figureObj.getPorts().each(function(portIndex, portObj){
        portObj.getConnections().each(function(connectionIndex, connectionObj){
          connectionObj.getCanvas().remove(connectionObj);                        //remove wires
        });
      });
    });
  },

  hideItemsIndexes: function(){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (figureObj.clusterItemIndex != undefined){
        figureObj.clusterItemIndex.setVisible(false);
      }
    });
  },
    
  hideItemsLabels: function(){
    this.getAssignedFigures(true);                                                  //first recalculate all nodes inside cluster

    this.getAssignedFigures().each(function(figureIndex, figureObj){
      if (figureObj.nodeLabel != undefined){
        figureObj.nodeLabel.setVisible(false);
      }
    });
  },
  
  getOrderedItems: function(){
    this.addItemsIndexes();
    var allFigures = this.getAssignedFigures();
    allFigures.each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) allFigures.remove(figureObj);
    });    
    allFigures.sort(function compare(a, b){
      A = parseInt(a.userData.clusterItemIndex);
      B = parseInt(b.userData.clusterItemIndex);
      if (A < B) return -1;
  	  if (A > B) return 1;
  	  return 0;      
    });
    return allFigures;
  },
  
  /**
   * @method setPersistentAttributes
   * @descritpiton Read all attributes from the serialized properties and transfer them into the shape.
   * This is used when file is lOADED.
   *
   * @param {Object} memento
   */
  setPersistentAttributes : function(memento)
  {
    //memento.labels = [];

    this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder
    this.setId(memento.id);         //set ID same as in saved file

    let clusterObj = this;
    this.getChildren().each(function(childIndex, childObj){
        if (childObj.userData && childObj.userData.type && childObj.userData.type == 'clusterDatatypeName'){
            clusterObj.nodeLabel = childObj;
        }
    });

    let outputPort = this.getOutputPort(0);
    outputPort.userData.datatype = this.getDatatype();  //output port datatype is reference to cluster
    outputPort.setName("clusterOutput");
  },
  

  onDragLeave: function(draggedFigure){
    if (draggedFigure.getComposite()){
      draggedFigure.getComposite().unassignFigure(draggedFigure);
        //draggedFigure.add(emitter)
    }
  },   

  /*
   *    This event is called when figure is dropped on layer.
   */
  onCatch(droppedFigure, x, y, shiftKey, ctrlKey){
    //run super() or continue just in case there is not dropped tunnel inside layer, tunnel is possible to move

    if (droppedFigure.NAME.toLowerCase().search('tunnel') == -1){
      this._super(droppedFigure, x, y, shiftKey, ctrlKey);
      droppedFigure.getPorts().each(function(portIndex, portObj){
  		portObj.getConnections().each(function(connectionIndex, connectionObj){
  			connectionObj.getCanvas().remove(connectionObj);
  		});
	  });
    }

    //alert("cluster catched figure\n" + this.originalWidth + " " + this.originalHeight + "\n" +this.getWidth() + " " + this.getHeight());    
  },  

  /* @method getPort
   * @description This method is used when loading file, it redefine here to return just clusterOutput port, without definitio this method
   * wires are not loading correctly, they are missing.
   */
  getPort: function(name){
    if (name.indexOf('clusterOutput') > -1){
      return this.getOutputPort(0);
    }else{
      port = this._super(name); //THIS IS NOT RUNNING, TESTED
    }
    return port;
  },
  
  getVariableName: function(){
    return "cluster_" + this.getId();
  },

  /**************************************************************************************************************************************
   *    TRANSLATE TO CPP functions 
   **************************************************************************************************************************************/

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    
    this.addItemsIndexes();
    this.addItemsLabels();

    var allFigures = this.getAssignedFigures();
    allFigures.each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) allFigures.remove(figureObj);
    });    
    allFigures.sort(function compare(a, b){
      A = parseInt(a.userData.clusterItemIndex);
      B = parseInt(b.userData.clusterItemIndex);
      if (A < B) return -1;
  	  if (A > B) return 1;
  	  return 0;      
    });
    
    /*
     *  Translate nested cluster into C/C++ declarations. RECURSIVE.
     */
    allFigures.each(function(figureIndex, figureObj){
        if (figureObj.NAME.toLowerCase().search('cluster') > -1){
            cCode += figureObj.translateToCppCodeDeclaration();
        }
    });
    
    cCode += "struct " + this.getDatatype().replaceAll('&', '') + " {\n";
    allFigures.each(function(figureIndex, figureObj){
      if (figureObj.translateToCppCodeDeclaration){
        cCode += figureObj.translateToCppCodeDeclaration();
      }else if (figureObj.getDatatype){
        cCode += figureObj.getDatatype() + " " + figureObj.userData.nodeLabel + ";\n";
      }
    });

    /*
     *  THIS CREATES DECLARATION OF CLUSTER ie. it physically creates variable with cluster datatype,
     *  so into wire is assigned reference to created cluster variable.
     */
    cCode += "} " + this.getVariableName()+ ";\n";        //THIS CREATES NEW INSTANCE, SO THAT'S REASON WHY HERE IS ID USED
    return cCode;
  },

  translateToCppCode: function(){
    cCode = "";

    var variableName = this.getVariableName();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
        cCode += 'wire_' + connectionObj.getId() + ' = ' + '&' + variableName + ";\n";     //writing reference to this cluster to wire    
    });

    return cCode;
  }

});
