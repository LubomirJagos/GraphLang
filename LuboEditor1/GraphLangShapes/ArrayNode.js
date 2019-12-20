/**
 *  @class GraphLang.Shapes.Basic.Array
 *  @descritpition Generic array implementation. It's TableLayout from draw2d.
 */
GraphLang.Shapes.Basic.ArrayNode = draw2d.shape.layout.TableLayout.extend({
  NAME: "GraphLang.Shapes.Basic.ArrayNode",
  init:function(attr, setter, getter){
    this._super( $.extend({},attr), setter, getter);

    /*****************************************************************************
     *  OUTPUT PORT
     *****************************************************************************/

    //port is pushed little away not to be inside outline, otherwise tunnels would be detected
    //due wire are crossing or touching outline
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(110, 50.0));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("out1");
    port.setMaxFanOut(20);
    port.userData = {};
    port.userData.datatype = "unknown";

    this.userData = {};
    this.userData.datatype = "unknown";

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

    var label1 =  new draw2d.shape.basic.Label({text:"0", fontColor:"#00AF00"});
    this.addRow(label1);

    /*****************************************************************************
     *  RIGHT CLICK CONTEXT MENU
     *****************************************************************************/
     this.updateAllItems();
  },

  /**
   * @name updateAllItems
   * @description Goes through all items in array and update their feature on right click to show context menu.
   */
  updateAllItems: function(){
    this.getChildren().each(function(childIndex, childObj){
      childObj.on("contextmenu", function(emitter, event){
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
                 case "int32":
                     emitter.setColor(new draw2d.util.Color("#0000FF"));
                     emitter.getParent().userData.datatype = "int32";
                     emitter.getParent().getOutputPort(0).userData.datatype = "int32";
                     break;
                 case "uint":
                     emitter.setColor(new draw2d.util.Color("#0000FF"));
                     emitter.getParent().userData.datatype = "uint";
                     emitter.getParent().getOutputPort(0).userData.datatype = "uint";
                     break;
                 case "float":
                     emitter.setColor(new draw2d.util.Color("#FFC300"));
                     emitter.getParent().userData.datatype = "float";
                     emitter.getParent().getOutputPort(0).userData.datatype = "float";
                     break;
                 case "double":
                     emitter.setColor(new draw2d.util.Color("#900C3F"));
                     emitter.getParent().userData.datatype = "double";
                     emitter.getParent().getOutputPort(0).userData.datatype = "double";
                     break;
                 case "bool":
                     emitter.setColor(new draw2d.util.Color("#75FF33"));
                     emitter.getParent().userData.datatype = "bool";
                     emitter.getParent().getOutputPort(0).userData.datatype = "bool";
                     break;
                 case "String":
                     emitter.setColor(new draw2d.util.Color("#FF33F0"));
                     emitter.getParent().userData.datatype = "String";
                     emitter.getParent().getOutputPort(0).userData.datatype = "String";
                     break;
                 case "add item":
                     var arrayItem = new draw2d.shape.basic.Label({text:"0",resizeable:true, fontColor:"#00AF00"})
                     arrayItem.installEditor(new draw2d.ui.LabelInplaceEditor());
                     emitter.getParent().addRow(arrayItem);
                     emitter.getParent().updateAllItems();
                     break;
                 default:
                     emitter.setColor(new draw2d.util.Color("#979595"));
                     emitter.getParent().userData.datatype = "unknown";
                     emitter.getParent().getOutputPort(0).userData.datatype = "unknown";
                     break;
                 }

              },this),
              x:event.x,
              y:event.y,
              items:
              {
                  "int32": {name: "int32"},
                  "uint":    {name: "uint"},
                  "float":    {name: "float"},
                  "double": {name: "double"},
                  "bool": {name: "bool"},
                  "String": {name: "String"},
                  "separator": "--------------",
                  "add item": {name: "Add Item"}
              }
          });
      });
    });

    //LuboJ this will place port always to right position, but now it's inside add item function so it will repair port position after each add new item
    this.getOutputPort(0).setLocator(new draw2d.layout.locator.XYRelPortLocator(110, 50.0));
  },

  /**
   *  @name translateToCppCode
   *  @desc Translate array into its declaration. There should be line declaring appropriate array for this object.
   */
  translateToCppCode: function(){
      cCode = "";
      cCode = this.userData.datatype + "[] = {";
      this.getChildren().each(function(childIndex, childObj){
        //protection agains labels with execution order to be interpreted as part of array
        if (childObj.userData != undefined &&
            childObj.userData.datatype != undefined &&
            childObj.userData.datatype.toLowerCase().search("executionorder") > -1){
        }else{
          cCode += childObj.getText() + ",";
        }
      });
      cCode = cCode.slice(0,-1);  //remove last ','
      cCode += "};\n";
      return cCode;
  }

});
