/**
 *  @author Lubomir Jagos
 *  @description Load UI from specified XML file from Qt Designer.
 */
 
GraphLang.PythonQtGuiLib.UiLoad = draw2d.SetFigure.extend({            

   NAME: "GraphLang.PythonQtGuiLib.UiLoad",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:112.40734720000003,height:46.28480000000002},attr), setter, getter);
     var port;
     // out1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.20930184890975, 30));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {};
     port.userData.datatype = "String";
     
     // out2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.20930184890975, 70));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#70db70");
     port.setName("out1");
     port.setMaxFanOut(20);
     port.userData = {};
     port.userData.datatype = "QtUiApplication";

     // in1
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.3280115839261028, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in1");
     port.setMaxFanOut(20);
     port.userData = {};
     port.userData.datatype = "QtUiObject";

     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112.40734720000003;
      this.originalHeight= 46.28480000000002;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L112.40734720000003,0 L112.40734720000003,46.28480000000002 L0,46.28480000000002");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M16.01555455999997 0L97.52595455999997 0L97.52595455999997 46.28480000000002L16.01555455999997 46.28480000000002Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M68.64915455999997 36.65920000000001L44.89235455999997 36.65920000000001L44.89235455999997 9.625600000000006L68.64915455999997 9.625600000000006Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#1900FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":10.649599999999992,"ry":10.649599999999992,"cx":43.45875455999999,"cy":15.155200000000008,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M97.5 23.5L112.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M97.5 23.5L112.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M15.5 23.5L0.5,22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M15.5 23.5L0.5,22.5L0.5,22.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M58.5 33.5L78.5,33.5L70.5,6.5L58.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M58.5 33.5L78.5,33.5L70.5,6.5L58.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

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
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    },
    
  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 
  translateToPythonCodeImport: function(){
    let importItems = new draw2d.util.ArrayList();
    importItems.push("import os");
    importItems.push("import sys");
    importItems.push("from PySide6.QtUiTools import QUiLoader ");
    importItems.push("from PySide6.QtWidgets import QApplication, QFileDialog, QTableWidgetItem");
    importItems.push("from PySide6.QtCore import QFile, QIODevice");
    return importItems;
  },
  
  translateToPythonCode:function(){
    let pythonCode = "";

    let windowVariable = "guiWindow_" + this.getId();
    let appVariable = "guiApp_" + this.getId();

    let in0_connections = this.getInputPort(0).getConnections();
    let in0WireId = null;
    if (in0_connections.getSize() > 0){
        in0WireId = in0_connections.first().getId();
    }

    pythonCode += appVariable + " = QApplication(sys.argv)" + "\n";
    pythonCode += "currDir = os.path.dirname(os.path.abspath(__file__))" + "\n";
    if (in0WireId){
        pythonCode += 'ui_file_name = currDir + "\\\\" + ' + 'wire_' + in0WireId + "\n";
    }else{
        pythonCode += 'ui_file_name = currDir + "\\\\" + ' + "/* WIRE NOT CONNECTED */\n";
    }
    pythonCode += "ui_file = QFile(ui_file_name)" + "\n";
    pythonCode += "if not ui_file.open(QIODevice.ReadOnly):" + "\n";
    pythonCode += "\tprint(f\"Cannot open {ui_file_name}: {ui_file.errorString()}\")" + "\n";
    pythonCode += "\tsys.exit(-1)" + "\n";
    pythonCode += "loader = QUiLoader()" + ";\n";
    pythonCode += windowVariable + " = loader.load(ui_file)" + "\n";
    pythonCode += "ui_file.close()" + "\n";
    pythonCode += "if not " + windowVariable + ":" + "\n";
    pythonCode += "\tprint(loader.errorString())" + "\n";
    pythonCode += "\tsys.exit(-1)" + ";\n";

    this.getOutputPort(0).getConnections().each(function(connectionIndex, connectionObj){
      pythonCode += "wire_" + connectionObj.getId() + " = " + windowVariable + "\n";
    });

    this.getOutputPort(1).getConnections().each(function(connectionIndex, connectionObj){
      pythonCode += "wire_" + connectionObj.getId() + " = " + appVariable + "\n";
    });

    return pythonCode;
  },
  
  translateToPythonCodeDeclaration:function(){
    pythonCode = "";
    return pythonCode;
  },

  translateToPythonCodeAsParam:function(){
    pythonCode = "";
    return pythonCode;
  }
    
});
