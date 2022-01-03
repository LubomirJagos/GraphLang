/**
 *  @class GraphLang.Shapes.Basic.Array
 *  @descritpition Generic array implementation. It's TableLayout from draw2d.
 */
GraphLang.Shapes.Basic.ArrayNode = draw2d.shape.layout.TableLayout.extend({
  NAME: "GraphLang.Shapes.Basic.ArrayNode",
  init:function(attr, setter, getter){
    this._super($.extend({padding: 10},attr), setter, getter);
    
    this.setPersistPorts(false);
    

    /* THIS DOESN'T RUN
    this.width = 200;
    this.height = 500;
    */

    /*
     *  Setting params after node is added to canvas, before it's not possible
     */
    this.on('added', function(emitter, event){
        emitter.setResizeable(true);
        emitter.setWidth(50);
        emitter.setHeight(30);
    });

    /*****************************************************************************
     *  DEFAULT PARAMS
     *****************************************************************************/
    var defaultDatatype = "int";
    var defaultValue = "0";

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = defaultDatatype;

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline

    //default values for array, each cell is separate Label for now, userData of array is based on datatype of port,
    //so here are userData just created as empty object.
    this.userData = {};
    this.userData.isTerminal = false;

/*  THIS IS EXAMPLE CODE, BUT IT'S REALLY RUNNING
    var label1 =  new draw2d.shape.basic.Label({text:"[0,1] with long long long long label", fontColor:"#00AF00"});
    var label2 =  new draw2d.shape.basic.Label({text:"[1,1] padding:10", fontColor:"#00AF00"});
    var label3 =  new draw2d.shape.basic.Label({text:"[2,1] align:right", fontColor:"#00AF00"});
    var label4 =  new draw2d.shape.basic.Label({text:"[3,1] resize:true",resizeable:true, fontColor:"#00AF00"});
    this.addRow("[0,0]", label1 ,"[0,2] align:center");
    this.addRow("[1,0] valign:bottom", label2,"[1,2] long long long label");
    this.addRow("[2,0]", label3,"[2,2]");
    this.addRow("[3,0]", label4,"[3,2]");
    this.setPadding(0);
    this.setCellPadding(1,1, 10);
    this.setCellAlign(0,2, "center");
    this.setCellAlign(2,1, "right");
    this.setCellVerticalAlign(1, 0, "bottom");
*/

    /**************************************************************************************
     * DEFAULT value
     ***************************************************************************************/

    /*
    var label1 =  new draw2d.shape.basic.Label();    //default datatype is int so value is 0
    label1.setText(defaultValue);
    var newColor = new GraphLang.Utils.Color();
    label1.setColor(newColor.getByName(defaultDatatype));
    label1.setFontColor(newColor.getByNameFontColor(defaultDatatype));
    label1.setBackgroundColor(newColor.getByNameBackgroundColor(defaultDatatype));
    label1.installEditor(new draw2d.ui.LabelInplaceEditor());
    this.addRow(label1);
    */

    /*****************************************************************************
     *  RIGHT CLICK CONTEXT MENU
     *****************************************************************************/
      this.on("contextmenu", function(emitter, event){
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
                  case "int":
                  case "uint":
                  case "float":
                  case "double":
                  case "bool":
                  case "String":
                  case "clusterDatatype":
                      emitter.changeDatatypeAllItems(key);
                      break;
                  case "add item":
                      emitter.addItem();
                      break;
                 case "setTerminal":
                     emitter.setStroke(3);
                     emitter.setColor("#DD2241");
                     emitter.setDashArray("-");
                     emitter.userData.isTerminal = true;
                     break;
                 case "unsetTerminal":
                     emitter.setStroke(1);
                     emitter.setColor("#000000");
                     emitter.setDashArray("");
                     emitter.userData.isTerminal = false;
                     break;
                 case "showNodeLabel":
                      if (emitter.userData.nodeLabel != null) labelText = emitter.userData.nodeLabel;
                      else labelText = 'nodeLabel';
  
                      emitter.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
                      emitter.add(emitter.nodeLabel, new draw2d.layout.locator.TopLocator());
                      emitter.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
                      emitter.nodeLabel.on('change:text', function(nodeEmitter, event){
                        labelText = nodeEmitter.getText();
                        labelText = labelText.replaceAll(" ","_"); 
                        nodeEmitter.getParent().userData.nodeLabel = labelText;                  //when text change do this also in userData
                        nodeEmitter.text = labelText;                                                   //this will not fire another event!
                      });
                      break;
                  default:
                      alert(JSON.stringify(emitter))
                      emitter.setColor(new draw2d.util.Color("#979595"));
                      emitter.userData.datatype = "unknown";
                      //emitter.getOutputPort(0).userData.datatype = "unknown";
                      break;
                }
              },this),
              x:event.x,
              y:event.y,
              items:
              {
                  "int": {name: "int"},
                  "uint":    {name: "uint"},
                  "float":    {name: "float"},
                  "double": {name: "double"},
                  "bool": {name: "bool"},
                  "String": {name: "String"},
                  "clusterDatatype": {name: "clusterDatatype"},
                  "separator": "--------------",
                  "add item": {name: "Add Item"},
                  "separator2":   "---------",
                  "setTerminal": {name: "Set as terminal"},
                  "unsetTerminal": {name: "Unset terminal"},
                  "separator3":   "---------",
                  "showNodeLabel": {name: "Show node label"}
              }
          });
      });

  },

  /*
   * HACK
   * There is event to change size fired when items are added and size is adjusted to elements, so for now this method hardwire array size.
   */
   /*
  setDimension: function(w, h){
    this.width = 400;
    this.height = 300;
  },
  */
  
  addItem: function(){
    var arrayItemDatatype = this.getOutputPort(0).userData.datatype;
      
    //HERE SHOULD BE CREATING SOME NumericConstant or something MORE SPECIFIC
    //NOW HERE IS JUST CREATED LABEL AND PUSHED INTO ARRAY VERTICAL LAYOUT NEED TO IMPROVE (to be based on datatype of items)!!!
    graphLangColors = new GraphLang.Utils.Color();
    var arrayItem = new draw2d.shape.basic.Label({
        resizeable:true,
        bgColor:graphLangColors.getByNameBackgroundColor(arrayItemDatatype),
        fontColor:graphLangColors.getByNameFontColor(arrayItemDatatype),
        userData: {datatype: arrayItemDatatype}
    });
    
    if (arrayItemDatatype == "clusterDatatype"){
      arrayItem.text = "null";
      this.getChildren().each(function(childIndex, childObj){
          if (childObj.userData && childObj.userData.datatype && childObj.userData.datatype.toLowerCase().search('cluster') > -1){
              arrayItem.text = childObj.text;
          }
      });
      arrayItem.userData.datatype = "clusterDatatype";
      
      arrayItem.installEditor(new GraphLang.Utils.ArrayClusterInPlaceEditor());
    }else if(arrayItemDatatype.toLowerCase().search("bool") > -1){
      arrayItem.setText('false')
      arrayItem.on('click', function(emitter){
          emitter.setText(emitter.text == 'false' ? 'true' : 'false');
      });
    }else{
      arrayItem.text = "0";
      arrayItem.installEditor(new draw2d.ui.LabelInplaceEditor());
    }
    
    //this.getCanvas().add(arrayItem);                     //DON'T ADD array items to canvas obj, because then they will be saved as separate objects
    this.addRow(arrayItem);
    //this.changeDatatypeAllItems(arrayItemDatatype);      //update datatypes of all items to match and also output port
  },
  
  getDatatype: function(){
    cCode = "";
    arrayDatatype = this.getOutputPort(0).userData.datatype;
    if (arrayDatatype.toLowerCase().search('clusterdatatype') > -1){
        arrayDatatype = this.getChildren().first().getText();
        cCode += arrayDatatype + '[' + this.getArraySize() + ']';
    }else{
        cCode += arrayDatatype + '[]';
    }    
    return cCode;    
  },
  
  getArraySize: function(){
    arraySize = 0;
    this.getChildren().each(function(childIndex, childObj){
        if (childObj.userData && childObj.userData.datatype && childObj.userData.datatype.toLowerCase().search('cluster') > -1){
            arraySize++;
        }
    });
    return arraySize;
  },

  /**
   *  @name changeDatatypeAllItems
   *  @param datatype - name of datatype which all array items should be
   *  @desc Change datatype of all array elements and also array output port datatype.
   */
  changeDatatypeAllItems: function(newDatatype){
        var newColor = new GraphLang.Utils.Color();
        
        this.getChildren().each(function(childIndex, childObj){
          if (childObj.userData && childObj.userData.datatype){
            childObj.setColor(newColor.getByName(newDatatype));
            childObj.setFontColor(newColor.getByNameFontColor(newDatatype));
            childObj.setBackgroundColor(newColor.getByNameBackgroundColor(newDatatype));
  
            //uninstall all previous editors
            childObj.off('click');    //uninstall changing value for boolean, THIS IS UNIVERSAL THERE IS NO OTHER EDITOR USING CLICK EVENT
            childObj.installEditor(null);   //uninstall editor
  
            if (childObj.userData.datatype.toLowerCase().search("executionorder") == -1){
              childObj.userData.datatype = newDatatype;
            }
              
            /*
             *    For cluster there will be editor with available cluster datatypes to change.
             *    For normal number there will be in place editor.
             */
            if (newDatatype.toLowerCase().search("cluster") > -1){
              childObj.setText("null");
              childObj.installEditor(new GraphLang.Utils.ArrayClusterInPlaceEditor());
            }else if(newDatatype.toLowerCase().search("bool") > -1){
              childObj.setText("false");
              childObj.on('click', function(emitter){
                  emitter.setText(emitter.text == 'false' ? 'true' : 'false');
              });
            }else{
              childObj.setText("0");
              childObj.installEditor(new draw2d.ui.LabelInplaceEditor());
            }
  
            if (childObj.userData == undefined) childObj.userData = {};
            childObj.userData.datatype = newDatatype;
          }
        });
        
        this.getOutputPort(0).userData.datatype = newDatatype;
        //this.fireEvent("resize");
    },
  
    /**
   * @method getPersistentAttributes
   * @description Return an objects with all important attributes for XML or JSON serialization.
   * This is used when file IS SAVED.
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();

      // add all decorations to the memento
      //
      memento.labels = [];                                        //custom labels save, here will be tunnles and label for switch layers saved

      this.children.each(function(i,e){
          var labelJSON = e.figure.getPersistentAttributes();
          labelJSON.locator=e.locator.NAME;
          labelJSON.locatorX=e.locator.x;                         //STORE INFORMATION ABOUT TUNNEL POSITION X
          labelJSON.locatorY=e.locator.y;                         //STORE INFORMATION ABOUT TUNNEL POSITION Y

          //layerSelector is based on its name pushed into ports, tunnels and layer switch label is pushed into labels
          memento.labels.push(labelJSON);
      });

      return memento;
  },
  
  setPersistentAttributes : function(memento)
  {
      this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder

      // and add all children of the JSON document.
      $.each(memento.labels, $.proxy(function(i,json){
          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;

          /*
           *  HERE IS REALLY IMPORTANT TO SET SAME ID TO TUNNEL AS IT WAS SAVED, it then creates ports for that tunnel with same id as from file and wires can be connected to that
           */
          var figure =  eval("new "+json.type+"({id: '" + json.id + "'})"); // create the figure stored in the JSON, SET SAME ID AS SAVED IN FILE, THIS IS IMPORTANT!!! (for tunnels, look at its init() function)
          figure.attr(json);

          this.addRow(figure);    // add the new figure as child to this figure
      },this));
  },

  getVariableName: function(){
      let variableName = "array_" + this.getId();
      if (this.userData.nodeLabel) variableName = this.userData.nodeLabel;
      return variableName   
  },

  /**
   *  @name translateToCppCode
   *  @desc Translate array into its declaration. There should be line declaring appropriate array for this object.
   */
  translateToCppCodeDeclaration: function(){
      cCode = "";
      arrayDatatype = this.getOutputPort(0).userData.datatype;    

      variableName = this.getVariableName();

      if (arrayDatatype.toLowerCase().search('cluster') > -1){
        cCode = arrayDatatype + ' ' + variableName + "[" +  this.getArraySize() + "];\n";       //translate as ie. "int array_clusterDatatypeName[42];"
      }else{
        cCode = arrayDatatype + " " + this.getVariableName() + "[] = {";             //translate as ie. "int array_5[];"
        this.getChildren().each(function(childIndex, childObj){
          /*
           *    Translation of each array item.
           *    Translate just datatype children (no cluster indexes or node labels)
           */
          if (childObj.userData && childObj.userData.datatype){
            if (childObj.userData.datatype.toLowerCase().search('string') > -1){
              cCode += "'" + childObj.getText() + "',";
            }else if (childObj.userData.datatype.toLowerCase().search('cluster') > -1){
              /*
               *    THIS IS IMPROVISATION, there is cluster datatype label, so it has not translateToCpp() and instead there is placed datatype name
               */
              if (childObj.translateToCppCode){
                  cCode += childObj.translateToCppCode() + ",";
              }else{
                  cCode += childObj.getText() + ",";
              }
            }else if (childObj.userData.datatype.toLowerCase().search('executionorder') > -1){
                  cCode += "";      //PROTECTION TO NOT WRITE CONTENT OF EXECUTION ORDER LABEL
            }else{
              if (childObj.getText){
                  cCode += childObj.getText() + ",";
              }
            }
          }
        });
        cCode = cCode.slice(0,-1);  //remove last ','
        cCode += "};\n";
      }


      return cCode;
  },

  translateToCppCode: function(){
    cCode = "";
    variableName = " array_" + this.getId();
    if (this.userData.nodeLabel) variableName = this.userData.nodeLabel; 

    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = " + variableName + ";\n";
    });
    return cCode;
  }

});
