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
                      var arrayItemDatatype = emitter.getOutputPort(0).userData.datatype;
                      //alert('adding to array: ' + arrayItemDatatype)
                        
                      //HERE SHOULD BE CREATING SOME NumericConstant or something MORE SPECIFIC
                      //NOW HERE IS JUST CREATED LABEL AND PUSHED INTO ARRAY VERTICAL LAYOUT NEED TO IMPROVE (to be based on datatype of items)!!!
                      if (arrayItemDatatype == "clusterDatatype"){
                        //var arrayItem = new GraphLang.Shapes.Basic.Loop2.ClusterDatatypeNode2({minWidth: 100, minHeight: 20})
                        var arrayItem = new draw2d.shape.basic.Label({text:"clusterName",resizeable:true, fontColor:"#00AF00", userData: {datatype: arrayItemDatatype}});
                      }else{
                        var arrayItem = new draw2d.shape.basic.Label({text:"0",resizeable:true, fontColor:"#00AF00", userData: {datatype: arrayItemDatatype}})
                        arrayItem.installEditor(new draw2d.ui.LabelInplaceEditor());
                      }

                      emitter.getCanvas().add(arrayItem);
                      emitter.addRow(arrayItem);
                      emitter.changeDatatypeAllItems(arrayItemDatatype);      //update datatypes of all items to match and also output port

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
                  "add item": {name: "Add Item"}
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
  getDatatype: function(){
    cCode = "";
    cCode += this.getOutputPort(0).userData.datatype + '[]';
    return cCode;    
  },

  /**
   *  @name translateToCppCode
   *  @desc Translate array into its declaration. There should be line declaring appropriate array for this object.
   */
  translateToCppCodeDeclaration: function(){
      cCode = "";
      cCode = this.getOutputPort(0).userData.datatype + " array_" + this.getId() + "[] = {";             //translate as ie. "int array_5[];"
      this.getChildren().each(function(childIndex, childObj){
        //alert(childObj.NAME + "\n" + childObj.userData.datatype);
        
        if (childObj.userData.datatype.toLowerCase().search('string') > -1){
          cCode += "'" + childObj.getText() + "',";
        }else if (childObj.userData.datatype.toLowerCase().search('cluster') > -1){
          if (childObj.translateToCppCode){
              cCode += childObj.translateToCppCode() + ",";
          }
        }else if (childObj.userData.datatype.toLowerCase().search('executionorder') > -1){
              cCode += "";      //PROTECTION TO NOT WRITE CONTENT OF EXECUTION ORDER LABEL
        }else{
          if (childObj.getText){
              cCode += childObj.getText() + ",";
          }
        }
      });
      //cCode = cCode.slice(0,-1);  //remove last ','
      cCode += "};";
      return cCode;
  },

  translateToCppCode: function(){
    cCode = "";
    var id = this.getId();
    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      cCode += "wire_" + connectionObj.getId() + " = array_" + id + ";\n";
    });
    return cCode;
  },

  /**
   *  @name changeDatatypeAllItems
   *  @param datatype - name of datatype which all array items should be
   *  @desc Change datatype of all array elements and also array output port datatype.
   */
  changeDatatypeAllItems: function(newDatatype){
        var newColor = new GraphLang.Utils.Color();
        
        this.getChildren().each(function(childIndex, childObj){
          childObj.setColor(newColor.getByName(newDatatype));
          childObj.setFontColor(newColor.getByNameFontColor(newDatatype));
          childObj.setBackgroundColor(newColor.getByNameBackgroundColor(newDatatype));

          if (childObj.userData.datatype.toLowerCase().search("executionorder") == -1){
            childObj.userData.datatype = newDatatype;
          }
            
          /*
           *    For cluster there will be editor with available cluster datatypes to change.
           *    For normal number there will be in place editor.
           */
          if (newDatatype.toLowerCase().search("cluster") > -1){
            childObj.installEditor(null);
            childObj.setText("clusterDatatypeName");
          }else{
            childObj.installEditor(new draw2d.ui.LabelInplaceEditor());
          }

          if (childObj.userData == undefined) childObj.userData = {};
          childObj.userData.datatype = newDatatype;
        });
        
        this.getOutputPort(0).userData.datatype = newDatatype;
        //this.fireEvent("resize");
  }

});
