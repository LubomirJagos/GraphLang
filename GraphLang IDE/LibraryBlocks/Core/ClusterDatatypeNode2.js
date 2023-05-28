/**

 *  @class GraphLang.Shapes.Basic.ClusterDatatypeNode
 *  @author Ing. Lubomir Jagos
 *  @description Cluster datatype structure, it's rectangle inside which are place datatypes and this will generate C/C++ struct{} equivalent.
 */
GraphLang.Shapes.Basic.Loop2.ClusterDatatypeNode2 = GraphLang.Shapes.Basic.Loop2.extend({
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
    this.userData.datatype = "clusterDatatype_notDefinedYet";

    this.setPersistPorts(false); 

    this.on('contextmenu', this.clusterContextmenu);

    /*
     *  DO SOME ADDITIONAL CHANGES AFTER ADDED TO CANVAS
     */
    this.setResizeable(false);
    this.on('added', function(emitter){
      //emitter.setResizeable(false);
      //this.off('resize');
      emitter.nodeLabel.setText("ahoj");
      emitter.nodeLabel.fireEvent("change:text");
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
    this.nodeLabel.on('change:text', this.nodeLabelChanged);

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

  nodeLabelChanged: function(nodeEmitter, event){
    alert("cluster name changed");
    labelText = nodeEmitter.getText();
    labelText = labelText.replaceAll(" ","_");
    labelText = GraphLang.Utils.getUniqueNodeLabel(nodeEmitter.getCanvas(), labelText);
    nodeEmitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
    nodeEmitter.text = labelText;                                                   //this will not fire another event!
    nodeEmitter.getParent().getOutputPort('clusterOutput').userData.datatype = nodeEmitter.getParent().getDatatype();   //change outputPort datatype
    nodeEmitter.getParent().userData.datatype = nodeEmitter.getParent().getDatatype();
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

  /**
   * Return cluster datatype, returns reference using * because cluster will be mutable, also their names must
   * be unique so ID is used and no to be removed and replace by easier number at code generation
   * from ID - are removed.
   * @returns {string}
   */
  getDatatype: function(){
    return "clusterDatatype_" + this.getId().replaceAll("-", "") + "_" + this.nodeLabel.getText() + "*";
  },

  getNodeLabelText: function(){
    return this.userData.nodeLabel;
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

  symbolPicture: "data:image/png;base64,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",

  /**************************************************************************************************************************************
   *    TRANSLATE TO CPP functions 
   **************************************************************************************************************************************/

  translateToCppCodeTypeDefinition: function(){
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
    
    cCode += "typedef struct " + this.getDatatype().replaceAll('&', '').replaceAll('*', '') + " {\n";       //dereferencing datatype
    allFigures.each(function(figureIndex, figureObj){
      if (figureObj.translateToCppCodeDeclaration){
        cCode += figureObj.translateToCppCodeDeclaration();
      }else if (figureObj.getDatatype){
        cCode += figureObj.getDatatype() + " " + figureObj.userData.nodeLabel + ";\n";
      }
    });

    cCode += "};\n";
    return cCode;
  },

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    cCode += this.getDatatype() + " " + this.getVariableName()+ ";\n";        //THIS CREATES NEW INSTANCE, SO THAT'S REASON WHY HERE IS ID USED
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
