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
    this.userData.nodeLabel = "nodeLabel";
    this.userData.datatype = defaultDatatype + "*"; //array is datatype ofg pointer to its elements datatype therefore needs to add asterix

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
                      else{
                          labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), 'nodeLabel');
                          emitter.userData.nodeLabel = labelText;
                      }
  
                      emitter.nodeLabel = new GraphLang.Shapes.Basic.Label({bgColor: '#000000', fontColor: '#FFFFFF', text: labelText});
                      emitter.nodeLabel.userData = {};
                      emitter.nodeLabel.userData.type = "nodeLabel";
                      emitter.add(emitter.nodeLabel, new draw2d.layout.locator.TopLocator());
                      emitter.nodeLabel.installEditor(new draw2d.ui.LabelInplaceEditor());
                      emitter.nodeLabel.on('change:text', function(nodeEmitter, event){
                        labelText = nodeEmitter.getText();
                        labelText = labelText.replaceAll(" ","_"); 
                        if (labelText != nodeEmitter.getParent().userData.nodeLabel) labelText = GraphLang.Utils.getUniqueNodeLabel(emitter.getCanvas(), labelText); 
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
    var cCode = "";
    var arrayDatatype = this.getOutputPort(0).userData.datatype;
    if (arrayDatatype.toLowerCase().search('cluster') > -1) arrayDatatype = this.getChildren().first().userData.datatype;
    cCode += arrayDatatype;
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

        this.userData.datatype = newDatatype + "*"; //array is datatype ofg pointer to its elements datatype therefore needs to add asterix
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

          //this condition here to differ elements of array from label maybe wrong but seems to be running
          if (json.userData && json.userData.datatype && json.userData.type != "nodeLabel") {
              var figure = eval("new " + json.type + "({id: '" + json.id + "'})"); // create the figure stored in the JSON, SET SAME ID AS SAVED IN FILE, THIS IS IMPORTANT!!! (for tunnels, look at its init() function)
              figure.attr(json);
              this.addRow(figure);    // add the new figure as child to this figure
          }

      },this));
  },

  getVariableName: function(){
      let variableName = "array_" + this.getId();
      if (this.userData.nodeLabel) variableName += "_" + this.userData.nodeLabel;
      return variableName   
  },

  symbolPicture: "data:image/png;base64,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",

  /*************************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ code functions
   *************************************************************************************************************************************************************/

  /**
   *  @name translateToCppCode
   *  @desc Translate array into its declaration. There should be line declaring appropriate array for this object.
   */
  translateToCppCodeDeclaration: function(){
      var cCode = "";
      var arrayDatatype = this.getDatatype();    
      var variableName = this.getVariableName();

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
    variableName = this.getVariableName(); 

    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = " + variableName + ";\n";
    });
    return cCode;
  }

});
