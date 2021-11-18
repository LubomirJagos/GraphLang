/**
 *  @class GraphLang.Shapes.Basic.ClusterDatatypeNode
 *  @author Ing. Lubomir Jagos
 *  @description Cluster datatype structure, it's rectangle inside which are place datatypes and this will generate C/C++ struct{} equivalent.
 */
GraphLang.Shapes.Basic.ClusterDatatypeNode = draw2d.shape.composite.Raft.extend({
  NAME: "GraphLang.Shapes.Basic.ClusterDatatypeNode",
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
    this.setWidth(220);
    this.setHeight(220);
    this.setStroke(2);
    this.setDashArray("-");
    this.setColor("#7D1A4C"); //stroke color

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#7D1A4C");
    port.setName("layerSelector");
    port.setMaxFanOut(20);

    port.userData = {};
    port.userData.datatype = "clusterDatatype_" + this.getId();

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    this.setPersistPorts(false); 
    
    this.on('contextmenu', this.clusterContextmenu);   
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
              "hideItemsLabels": {name: "Hide Labels"}
          }
      });
  },


  /********************************************************************************************************************
   *  Functions below are implemented by me (LuboJ)
   ********************************************************************************************************************/

  translateToCppCodeDeclaration: function(){
    var cCode = "";
    
    this.addItemsIndexes();
    this.addItemsLabels();

    var allFigures = this.getAboardFigures();
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
    
    cCode += "struct{\n";
    allFigures.each(function(figureIndex, figureObj){
      if (figureObj.getDatatype){
        cCode += figureObj.getDatatype() + " " + figureObj.userData.itemLabel + ";\n";
      }
    });

    /*
     *  THIS CREATES DECLARATION OF CLUSTER ie. it physically creates variable with cluster datatype,
     *  it has same ID number as cluster datatype definition, but keyword before prefix is different,
     *  so into wire is assigned variable starting with cluster_... and wire has right datatype starting with clusterDatatype_...
     */
    cCode += "} cluster_" + this.getId()+ ";\n";
    return cCode;
  },

  translateToCppCode: function(){
    cCode = "";
    var id = this.getId();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = cluster_" + id + ";\n";
    });
    return cCode;
  },

  getAllItemsIndexes: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    var allIndexes = new draw2d.util.ArrayList();
    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function
      if (figureObj.userData && figureObj.userData.clusterItemIndex){
        allIndexes.add(figureObj.userData.clusterItemIndex);
      }          
    }); 

    return allIndexes;
  },

  getAllItemsLabels: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    var allLabels = new draw2d.util.ArrayList();
    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function
      if (figureObj.userData && figureObj.userData.itemLabel){
        allLabels.add(figureObj.userData.itemLabel);
      }          
    }); 

    return allLabels;
  },

  /*
   *  This displays item indexes on left of figures inside cluster which are gonna be translated into C/C++ code.
   */
  addItemsIndexes: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    clusterObj = this;
    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function

      if (figureObj.clusterItemIndex != undefined){
        figureObj.clusterItemIndex.text = figureObj.userData.clusterItemIndex.toString();
        figureObj.clusterItemIndex.setVisible(true);
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
  addItemsLabels: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    clusterObj = this;
    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (!figureObj.getDatatype) return;                                         //continue just for figures which have datatype function

      if (figureObj.itemLabel != undefined){
        figureObj.itemLabel.text = figureObj.userData.itemLabel;
        figureObj.itemLabel.setVisible(true);
      }else{
        if (figureObj.userData.itemLabel != null) labelText = figureObj.userData.itemLabel;
        else labelText = '---';
        
        figureObj.itemLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
        figureObj.add(figureObj.itemLabel, new draw2d.layout.locator.TopLocator());
        figureObj.itemLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
        figureObj.itemLabel.on('change:text', function(emitter, event){
          labelText = emitter.getText(); 
          var allIndexes = clusterObj.getAllItemsLabels();
          
          while (allIndexes.contains(labelText)){
            labelText = labelText + '2';
          }

          emitter.getParent().userData.itemLabel = labelText;                  //when text change do this also in userData
          emitter.text = labelText;                                                   //this will not fire another event!
        });
      }
      figureObj.userData.itemLabel = figureObj.itemLabel.getText();  //to not begin from 0

      figureObj.getPorts().each(function(portIndex, portObj){
        portObj.getConnections().each(function(connectionIndex, connectionObj){
          connectionObj.getCanvas().remove(connectionObj);                        //remove wires
        });
      });
    });
  },

  hideItemsIndexes: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (figureObj.clusterItemIndex != undefined){
        figureObj.clusterItemIndex.setVisible(false);
      }
    });
  },
    
  hideItemsLabels: function(){
    this.getAboardFigures(true);                                                  //first recalculate all nodes inside cluster

    this.getAboardFigures().each(function(figureIndex, figureObj){
      if (figureObj.itemLabel != undefined){
        figureObj.itemLabel.setVisible(false);
      }
    });
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
    this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder
    this.setId(memento.id);         //set ID same as in saved file
    this.getOutputPort(0).userData.datatype = "clusterDatatype_" + this.getId();  //set output port ID same as cluster when loading from file, MUST BE HERE
  }
  

});
