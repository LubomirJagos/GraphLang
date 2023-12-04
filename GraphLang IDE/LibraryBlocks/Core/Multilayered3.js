/**
 *  @class GraphLang.Shapes.Basic.Loop.Multilayered
 *  @author Ing. Lubomir Jagos
 *  @description Base class for multilayered structures, they are also loops, but there
 *  are many loops hidden inside, and they share common boundary which is just one.
 *  So Inside should be multiple sheetes without boundaries than there wouldn't be
 *  detected tunnels on their borders and just one tunnels for common loop would be
 *  generated.
 */
GraphLang.Shapes.Basic.Loop2.Multilayered3 = GraphLang.Shapes.Basic.Loop2.extend({
  NAME: "GraphLang.Shapes.Basic.Loop2.Multilayered3",
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
    this.setWidth(420);
    this.setHeight(220);
    this.setStroke(2);

    /**********************************************************************************
     *  LAYERS
     **********************************************************************************/

    this.setParent(null);

    this.activeLayer = 0;
    /*
     *  ADD BY DEFAULT 3 LAYERS, for debugging purposes now
     */
    this.layers = new draw2d.util.ArrayList();
/*  NOT POSSIBLE TO ADD LAYER BECAUSE OBJECT DOESN'T EXISTS ON CANVAS PHYSICALLY SO IT WILL HAVE NO EFFECT THIS
    this.addLayer();
*/

    /**********************************************************************************
     *  LAYER SELECTOR
     **********************************************************************************/

    //this.layerChooser = new GraphLang.Shapes.Basic.LayerChooser();
    //this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));
    this.renewLayerChooser();
    this.renewLayerSelector();  //NOT WORKING WHEN LOADING FROM FILE

    //USER DATA/
    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    /***************************
     *  DRAG options
     */

  },

  removeSelectorPort: function(){
      this.remove(this.getPort("layerSelector"));
  },

  renewLayerSelector: function(){
    //port = this.createPort("input", new draw2d.layout.locator.XYAbsPortLocator(-0.7,17));
    if (this.selectorPort) return;

    port = new GraphLang.InputPort();

    port.setConnectionDirection(3);
    port.setBackgroundColor("#00FF00");
    port.setName("layerSelector");
    port.setMaxFanOut(20);
    this.selectorPort = port;

    this.addPort(port, new draw2d.layout.locator.XYAbsPortLocator(-0.7,17));
  },

  renewLayerChooser: function(){
    if (this.layerChooser != undefined){
      //remove all labels from multilayered
      /*
      this.remove(this.getChildren().each(function(childIndex, childObj){
        if (childObj.NAME.toLowerCase().indexOf("draw2d.shape.basic.Label") > -1){
          alert("removing labels multilayer");
          this.remove(childObj)
        }
      }));
      */
      //this.layerChooser = this.getChildren().get(0);
      this.layerChooser = new draw2d.shape.basic.Label();
    }else{
      this.layerChooser = new draw2d.shape.basic.Label();
    }
    this.layerChooser.setId("layerChooser");

    if (this.layers.getSize() > 0){
      this.layerChooser.setText(this.layers.get(0).userData.layerText);
    }


    //there is no layer 0 in constructor so this is not used now //this.layerChooser.setText(this.layers.get(0).userData.layerText);  //after place structure into diagram, it's layer selector is set to has name as layer 0.
    //this.layerChooser.setText('none');  //after place structure into diagram, it's layer selector is set to has name as layer 0.

    //CLICK ON LAYER NAME AT TOP OF MULTILAYER STRUCTURE WHERE ARE THEIR NAMES
    this.layerChooser.on("click", function(emitter, event){
      emitter.getParent().switchActiveLayer();
      emitter.getParent().moveActiveLayer();
    });

    //RIGHT CLICK ON LAYERS NAME SELECTOR
    this.layerChooser.on("contextmenu", this.layerChooserContextmenu);
    this.add(this.layerChooser, new draw2d.layout.locator.TopLocator(this));
    
	//put layer chooser into back if it's multilayered structure is not visible, ie. it's somewhere on layer which is not displayed at the time
    if (this.getComposite() !== null){
		let visibleLoops = GraphLang.Utils.getVisibleLoopsAndMultilayered(this.getCanvas())
		if (!visibleLoops.contains(this)){
			this.layerChooser.toBack();
		}
	}

    this.on("move", function(emitter, event){
      emitter.moveActiveLayer();
    });

    //luboJ missing condition when jailhouse is not getting smaller because nodes inside it
    //ERROR, MISSING CONDITION TO RESTRICT RESIZE ACCORDING TO NODES INSIDE LAYERS
    this.on("resize", function(emitter){
      emitter.layers.each(function(layerIndex, layerObj){
        layerObj.setWidth(emitter.getWidth()-4);
        layerObj.setHeight(emitter.getHeight()-4);

        //not ideal, but it's someho helpfulwhen this is here, then can structure resized from all corners and it's running ok
        layerObj.setX(emitter.getX()+2);
        layerObj.setY(emitter.getY()+2);
      });
    });

    this.on("show", function(emitter){
      emitter.moveActiveLayer();
    });

  },

  layerChooserContextmenu: function(emitter, event){
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
             case "rename":                       // <--- Continue here, implement renaming layers, now it's static shit doing nothing
                 emitter.getParent().renameLayer();                 
                 break;
             case "new":
                /* this was part of code in example but it's not running so it's disabled, I need to change layer name no selector, it's updated based on active layer ID
                 setTimeout(function(){
                     _table.addEntity("_new_").onDoubleClick();
                 },10);
                */
                 //alert("Layers count: " + emitter.getParent().layers.getSize());
                 emitter.getParent().addLayer();

                 break;
             case "delete":
                 // with undo/redo support
                 /*
                 var cmd = new draw2d.command.CommandDelete(emitter);
                 emitter.getCanvas().getCommandStack().execute(cmd);
                 */
                 emitter.getParent().removeLayer(this.activeLayer);
             default:
                 break;
             }

          },this),
          x:event.x,
          y:event.y,
          items:
          {
              "rename": {name: "Rename"},
              "new":    {name: "New Entity"},
              "sep1":   "---------",
              "delete": {name: "Delete"}
          }
      });
  },

  //this function is also called in gui/View.js after placing multilayer node to canvas to right placed layers
  moveActiveLayer: function(){
    var x = this.getX();
    var y = this.getY();
    var width = this.getWidth();
    var height = this.getHeight();
    this.layers.each(function(layerIndex, layerObj){
// layers and protective rectangle are on 0,0 coords relative to parent, so this IS NOT USED INTENTIONALLY
      layerObj.setX(x+2);
      layerObj.setY(y+2);
      layerObj.setWidth(width-4);
      layerObj.setHeight(height-4);
      layerObj.setSelectable(false);
      layerObj.setDraggable(false);
    });
  },

  /**
   * @name switchActiveLayer
   * @description Brings to front next layer from internal array and also all objects on this layer, when last layer is selected, then it starts from beginning.
   */
  switchActiveLayer: function(){
    this.activeLayer++;
    if (this.activeLayer >= this.layers.getSize()) this.activeLayer = 0;

    var activeLayer = this.layers.get(this.activeLayer);
    activeLayer.toFront();

    //brings tunnels on nodes which has that function to front,. just for active layer
    activeLayer.getAssignedFigures().each(function(assignedFigureIndex, assignedFigureObj){
      if (assignedFigureObj.bringsAllTunnelsToFront){
        assignedFigureObj.bringsAllTunnelsToFront();
      }
      if (assignedFigureObj.updateNode){
        assignedFigureObj.updateNode();
      }
    });

    this.bringsAllTunnelsToFront();

    this.layerChooser.setText(this.layers.get(this.activeLayer).userData.layerText);
  },

/* THIS CAUSED WRONG BEHAVE, AFTER PLACE MULTILAYER STRUCTURE ON CANVAS WASN'T POSSIBLE TO PLACE OTHER NODE THEY WERE DISAPPEARING
   ALSO MAYBE BECAUSE AT BEGINNING THERE IS NO LAYER SO THIS HAS NO OBJECT WHICH IS ACTING ON
  onDragEnd: function(x,y,shiftKey, ctrlKey){
    this.moveActiveLayer();

    var activeLayer = this.layers.get(this.activeLayer);      //set active layer to front
    activeLayer.toFront();
  },
*/

  /**
   * @name bringsAllTunnelsToFront
   * @description Brings all tunnels owned by structure to front, tunnels are owned by Multilayer structure not by layers, so they are common for all layers and always should be displayed at front of structure to be visible. But wires which go from tunnel to particular layer are owned by that layer.
   */
  bringsAllTunnelsToFront: function(){
    var activeLayer = this.layers.get(this.activeLayer);

    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
        childObj.toFront();
      }

/*    THIS WAS MAKING HARM AND CAUSING ORPHANS LINES ON CANVAS,
      IT'S DONE AUTOMATICALLY NOW WHEN LAYERS ARE SWITCHED DUE THEY ARE NOW STRONG COMPOSITE

      //SHOWING WIRES FROM LEFTTUNNELS
      if (childObj.NAME.toLowerCase().search("lefttunnel") >= 0){
        childObj.getOutputPorts().each(function(portIndex, portObj){
          portObj.getConnections().each(function(wireIndex, wireObj){
            // wireObj.setVisible(activeLayer.contains(wireObj.getTarget().getParent()));
            var insidePort = wireObj.getSource();
            if (insidePort.getParent().NAME.toLowerCase().search("tunnel") >= 0) insidePort = wireObj.getTarget();
            wireObj.setVisible(activeLayer.contains(insidePort.getParent()));
          });
        });
      }

      //SHOWING WIRES GOING INTO RIGHTTUNNELS
      if (childObj.NAME.toLowerCase().search("righttunnel") >= 0){
        childObj.getInputPorts().each(function(portIndex, portObj){
          portObj.getConnections().each(function(wireIndex, wireObj){
            var insidePort = wireObj.getSource();
            if (insidePort.getParent().NAME.toLowerCase().search("tunnel") >= 0) insidePort = wireObj.getTarget();
            wireObj.setVisible(activeLayer.contains(insidePort.getParent()));
          });
        });
      }
*/


    });
  },

  bringsAllTunnelsToBack: function(){
    this.getChildren().each(function(childIndex, childObj){
      if (childObj.NAME.toLowerCase().search("tunnel") >= 0){
        childObj.toBack();
      }
    });
  },  //this comma doesn't matter it's ok and for future at least I don't forget, this has no effect on functionality of this class

  /**
   *  @method getLayer(index)
   *  @description Return layer object at specified index.
   */
  getLayer: function(layerIndex){
    return this.layers.get(layerIndex);
  },

  getAllLayers: function(){
    return this.layers;
  },

  getLayerChooser: function(){
    return this.layerChooser;
  },
  
  getActiveLayer: function(){
  	return this.layers.get(this.activeLayer)
  },







  //added by LuboJ, here is showed how to add attributes which
  //then are serialized into json and could be readed to load schematci


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
      memento.ports = [];                                         //custom ports save

      this.children.each(function(i,e){
          var labelJSON = e.figure.getPersistentAttributes();
          labelJSON.locator=e.locator.NAME;
          labelJSON.locatorX=e.locator.x;                         //STORE INFORMATION ABOUT TUNNEL POSITION X
          labelJSON.locatorY=e.locator.y;                         //STORE INFORMATION ABOUT TUNNEL POSITION Y

          //layerSelector is based on its name pushed into ports, tunnels and layer switch label is pushed into labels
          if (labelJSON.name != "layerSelector"){
            if (labelJSON.type.indexOf("draw2d.shape.basic.Label") == -1 ) {
              memento.labels.push(labelJSON);
            }else{
              //alert(labelJSON.type)
            }
          }else{
              memento.ports.push(labelJSON);
          }
      });

      if (memento.ports.length == 0){
        memento.ports.push(this.getPort("layerSelector").getPersistentAttributes())
      }

      return memento;
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
      mementoPorts = memento.ports;   //taking ports out, because there is creation of them in parent and I want to create them in my way
      mementoLabels = memento.labels; //taking labels away

      memento.ports = [];
      memento.labels = [];
      this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder

      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();

      // and add all children of the JSON document.
      $.each(mementoLabels, $.proxy(function(i,json){

          //FOR TUNNELS THERE IS NEEDED FOR THEIR RESTORE ALSO READ LOCATORS POSITION which is stored in previous function getPers...
          curDatatype = json.type;


          /*
           *  HERE IS REALLY IMPORTANT TO SET SAME ID TO TUNNEL AS IT WAS SAVED, it then creates ports for that tunnel with same id as from file and wires can be connected to that
           */
          var figure =  eval("new "+json.type+"({id: '" + json.id + "'})"); // create the figure stored in the JSON, SET SAME ID AS SAVED IN FILE, THIS IS IMPORTANT!!! (for tunnels, look at its init() function)
          figure.attr(json);

          if (json.locatorX != undefined && json.locatorY != undefined){
            var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")");     // instantiate the locator
          }else{
            var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.x + "," + json.y + ")"); //DEFAULT LOCATOR
          }

          this.add(figure, locator);                                                                    // add the new figure as child to this figure
          
          
      },this));

      //RERECREATE JUST SELECTOR PORT
      $.each(mementoPorts, $.proxy(function(i,json){
        if (json.name.toLowerCase().search('layerselector') > -1){
            var figure =  eval("new "+json.type+"()");
            figure.setId(json.id);                                                    // create the figure stored in the JSON
            figure.attr(json);                                                                            // apply all attributes
            if (json.locatorX != undefined &&
                json.locatorY != undefined)
            {
                  if (json.locator){
                    var locator =  eval("new "+json.locator+"(" + json.locatorX + "," + json.locatorY + ")"); //NEED TO CHECK IF IS RUNNING GOOD BUT TILL NOW NOT CAUSING HARM    // instantiate the locator
                  }else{
                    var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.locatorX + "," + json.locatorY + ")"); //NEED TO CHECK IF IS RUNNING GOOD BUT TILL NOW NOT CAUSING HARM    // instantiate the locator
                  }
            }else if (json.locator){
              var locator =  eval("new "+json.locator+"()"); //NEED TO CHECK IF IS RUNNING GOOD BUT TILL NOW NOT CAUSING HARM    // instantiate the locator
            }else{
              var locator =  eval("new draw2d.layout.locator.XYAbsPortLocator(" + json.x + "," + json.y + ")"); //DEFAULT LOCATOR
            }

            this.selectorPort = figure; //assign port which is layerSelector to internal variable
            this.selectorPort.setName("layerSelector");
          }
          this.add(figure, locator);                                                                    // add the new figure as child to this figure
      },this));
  },

  /**
  * @method addLayer
  * @description Add new layer at the end of all layers.
   */
  addLayer: function(){
    //var newLayer = new draw2d.shape.composite.Jailhouse();
    var newLayer = new GraphLang.Shapes.Basic.Jailhouse();

    newLayer.setWidth(this.getWidth()-10);
    newLayer.setHeight(this.getHeight()-10);
    newLayer.setColor(new GraphLang.Utils.Color("#eb34c6"));  //layer border color

    newLayer.setBackgroundColor(new GraphLang.Utils.Color("#eb34c6"));
    newLayer.setBackgroundColor(new GraphLang.Utils.Color(
      Math.round(Math.random()*255),
      Math.round(Math.random()*255),
      Math.round(Math.random()*255)
    ));

    if (newLayer.getUserData() == null){
      newLayer.userData = {};
    }
    newLayer.userData.owner = this.getId();
    newLayer.userData.layerText = '---';

    var layerId = "";
    if (this.layers != null){
      layerId = new String(this.layers.getSize());  //size is alwas count so it's +1 in compare with object index inside array
    }else{
      layerId = "0";                      //first element to be create has numebr 0
    }
    newLayer.setId("multilayered_" + this.getId() + "_jailhouseLayer" + layerId);                   //generate uniqe layer id based on its order, FOR NOW IT'S NOT CORRECT WAY, ERROR NEEDS TO BE REPAIRED, ie when user add 3 layers and remove 2, then add, there could be problem

    /*
     *  GraphLang Jailhouse has it's translation function inside object!
     */

    this.layers.push(newLayer);

    //ELEMENTS MUST BE ADDED TO CANVAS TO BE ABLE CATCH NODES WHEN PLACED INTO THEM
    //this.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX(), this.getAbsoluteY()));
    appCanvas.add(newLayer, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX()+5, this.getAbsoluteY()+5));
    this.assignFigure(newLayer);

    //newLayer._onDragStart = this.onDragStart; //WRONG

  },

  /**
   * @name removeLayer
   * @param {Number} layer order which should be removed
   * @description Removed layer from structure and also removes all contained nodes and wires. Remove function is call using CommandStack over all nodes contained inside layer. This way would be able to use "Undo" after layer is deleted. Now it's not needed, but it's proper way how to delete objects and have stored information about that for another purposes.
   * NOTE, THERE IS IMPLEMENTED JUST REMOVING NODES INSIDE, NO OTHER ELEMENTS, SO THERE SHOULD BE RECURSIVELY CALL OF REMOVE FUNCTION OVER ALL OBJECTS INSIDE, BECAUSE IT'S OTHER THING TO REMOVE NODE AND REMOVE LOOP OR MULTILAYERED STRUCTURE, NEED TO THINK ABOUT THIS.
   */
  removeLayer: function(layerId){
    if (this.layers.getSize() == 1) return; //DO NOTHING IF THERE IS JUST ONE LAYER, that's default layer it MUST BE THERE

    var nodesToRemove = new draw2d.util.ArrayList();
    this.layers.get(this.activeLayer).getAssignedFigures().each(function(nodeIndex, nodeObj){
      nodesToRemove.push(nodeObj);
    });
    var activeLayerObj = this.layers.get(this.activeLayer);
    for (var i = 0; i < nodesToRemove.getSize(); i++){
      var cmd = new draw2d.command.CommandDelete(nodesToRemove.get(i));
      nodesToRemove.get(i).getCanvas().getCommandStack().execute(cmd);  //remove from canvas

      //delete object assignement to layer, but it will fire events to change layer position and dimension, so here I will reverse this action and set them back after calling function
      var activeLayerX = activeLayerObj.getAbsoluteX();
      var activeLayerY = activeLayerObj.getAbsoluteY();
      var activeLayerWidth = activeLayerObj.getWidth();
      var activeLayerHeight = activeLayerObj.getHeight();
      //remove relation btw node and its layer
      activeLayerObj.unassignFigure(nodesToRemove.get(i));  //remove from multilayer structure (jailhouse object)
      //reversing dimensions and position change
      activeLayerObj.setWidth(activeLayerWidth);
      activeLayerObj.setHeight(activeLayerHeight);
      activeLayerObj.setX(activeLayerX);
      activeLayerObj.setY(activeLayerY);
    }

    var cmd = new draw2d.command.CommandDelete(activeLayerObj);
    this.getCanvas().getCommandStack().execute(cmd);  //remove from canvas
    this.layers.remove(activeLayerObj);
    this.switchActiveLayer();

  },

  renameLayer: function(){
	/* NOT WORKING because in place editor is running separately, so this just run it and continue, so it's not waiting to finish editing, inPlaceEditor is using callbacks needs to think how to use it properly now it's no time to do this
    layerChooserEditor = new draw2d.ui.LabelInplaceEditor();	//in place of label editor
	*/

    layerChooserEditor = new draw2d.ui.LabelEditor();			//prompt editor at top of page
	layerChooserEditor.start(this.layerChooser);
    this.layers.get(this.activeLayer).userData.layerText = this.layerChooser.getText();
  },

  /**
   * @method getVisibleLoopAndMultilayered
   * @description Return all loops and multilayered objects from all nested loops and multilayered objects.
   * @returns {draw2d.util.ArrayList}
   */
  getVisibleLoopAndMultilayered: function(){
    if (this.layers.isEmpty()) return new draw2d.util.ArrayList();  //if empty return empty ArrayList

    let childrenList = this.layers.get(this.activeLayer).getAssignedFigures();
    let multilayeredList = new draw2d.util.ArrayList();
    multilayeredList.push(this);
    childrenList.each(function(figureIndex, figureObj){
      if (figureObj.NAME.toLowerCase().search("multilayered") > -1){
          let nestedMultilayeredList = figureObj.getVisibleLoopAndMultilayered();
          if (!nestedMultilayeredList.isEmpty()) multilayeredList.addAll(nestedMultilayeredList); //recursive call to add all nested multilayered figures
      }else{
        if (figureObj.NAME.toLowerCase().search("loop") > -1){
          multilayeredList.push(figureObj); //add also loop into list
        }
      }
    });

    return multilayeredList;
  },

  /**
   * @method getVisibleConnections
   * @description Return all visible connections.
   * @returns {draw2d.util.ArrayList}
   */
  getVisibleConnections: function(){
    if (this.layers.isEmpty()) return new draw2d.util.ArrayList();  //if empty return empty ArrayList
    var layerObjects = this.layers.get(this.activeLayer).getChildren();
    let curLayer = this.layers.get(this.activeLayer);
    let connectionList = new draw2d.util.ArrayList();
    let portList = new draw2d.util.ArrayList();


    var num = "";
    curLayer.getAssignedFigures().each(function(index, obj){
      obj.getPorts().each(function(portIndex, portObj){
        connectionList.addAll(portObj.getConnections());
      });
    });

    return connectionList;
  },



  /*
    THIS IS MODIFIED VERSION TO ALSO LOOK FOR LAYER SELECTOR PORT, BUT THERE IS SOMETHING WRONG WITH ITS CREATION BECAUSE WIRES ARE BROKEN
  */
  getPort: function(name){

    if (name.indexOf('layerSelector') > -1){
      return this.selectorPort;
    }else{
      //port = this._super(name); //THIS IS NOT RUNNING, TESTED

      port = null
      auxPort = null
      strList = name + "\n\n"
      this.getChildren().each(function(childIndex, childObj){
        childObj.getPorts().each(function(portIndex, portObj){
          strList += portObj.getId() + "\n"
          if (portObj.getId() == name){
            port = portObj
          }
        });
      });
    }
    return port;
  },

  symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABvCAIAAABuPMVaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAU9SURBVHhe7dxdSJtXHMfx43TYYXls2tVAexHZkBW8UITIlGFQczlLbsqEFIvraBGZsK0hGy70IuaiRigyhDLIkGw4mIOFZXe1pZapLAETB4WCE1/YbNXZbimIr93O8zxnvmx2NjH1Oc/f3+eiPefkpRdfzvOcoE3O6uoqA5N7SfwNZoaKFKAiBahIASpSIO8Z1ePxiJHE8vPzOzo6xMQ48u7FRCIhRrJaWVkRI6PJuxedTmdzc7Pb7RZz+bS1tSmKgr0I2YGKFKAiBahIASpSgIoUoCIFh6Vi7JqiXIuJCYvF4mK0q51PNoHDUrHSm0p5K7VhLKg4B7URGbiiUmDCivGgskm/7qkrwa3L5fbr4Wy/W3H3z24uqhvRz5i/fvM5fGXT1pswNt3fJFblv7qarSKvUp8M3U9pBnwBZ5Df4ewOH/MPiltdbDDA2L3pOW0yNxyJulw1p7SJqtLDX8WY75Z+gdWitg+It2v3O5v69ReywMWp98Uy/1fc34plOZmt4m9TUTHieJKUx64OHO3Mf1vbMfFBf3soxCJ3Z/lk7u730YazNVb1gd3wJzPfgLhfavfO8DnxZFeoSX1nTn3z6MS0PpGT2Sram0Ku6MUz/77QVdb59P03N51seL3GVhqNDPPZ9FSkwVX9zIj8ycxVbBOznUptz3yZfEx3X7SeC2vXuVs+FnButTxd3BDh+49vPsaz8ajq7uFbbcfllCwTnm50dn411VsOqhlP1bhc0ciX4QjTsvE7ZWAweNv//1vKaitnkSmpr5XPx2wV1eOoeubUxXindod2W7PWnG2IBvxRkc1W7PL7A8xXJ+552/CHWFI//WjHou7Nk8vOs66JmO6+6Bn/gon7oqI474XG/zmbWKtdDfzwKbKpUfnMIU4o22m93y1R1OOoemQt52NdPRtIef6bXX74jY3M4Tc2IJtQkQJUpAAVKUBFClCRAlSkQPbPiw6HQ8zl09nZKcnnRakrTkxMiIms3G636SuOjo6K0QswPz8vRnIrKioSo2yrqKgQo73st2Jra6uYQLaNjIyI0V5wuqEgO3vxs0+v6yuwf/GZRDgc5oPn34tZq1gSyNMXYT/WLS9/8/awkRU/YmX6OmTmDEs1W341vuLvOfn6Q5CBt/5ayKwiTjcUoCIFqEgBKlKAihSgIgWoSAEqUoCKFKAiBZlXnJycHBoaWl5eXltbE0tgkEwq8n4X3rtQV1fX3dv9OPfx4uJiR9D431o4zNKuOD4+7nrHdSfnzsIPCzM/z8yOzT786eFU9ZR4GIyQdkXvVe+iffFB74PVcvHDkI3TG08+eKKPwRDpVYzH44mRxKOPH4k5yCG9islkMq80b/21dTEHOaRXcWlpaePohpiANNKraLPZcn/JFROQRnoVa2trn/75tODrAjEHOaRXsbCw8MqHVyxey5GbR8SSJncGG9RI6VXkWlpaLl+6fKL5RNGlooLeAr4vj31y7GTjSfEwGCHtipzX6+3r62t8pbHk8xLLVYvlO8t593nxGBghk4pcVVVVV1fXjes3rIr1+NHjdvsu3ysDBybDiiAVVKQAFSlARQpQkQJUpAAVKUBFClCRAlSkABUpQEUKUJECVKQAFSlARQpQkQJUpAAVKUBFClCRAlSkABUpQEUKUJECVKQgm99V/CPD/7nZrzctfxj5jdNvxF/VF2GfvrLeNKZiWRm+9z2bxsbG+J8HXRFehIOrGAqFxASyraenR4z2sq+KIAl80qAAFSlARQpQkQJUpAAVKUBFClCRAlSkABUpQEUKUNH8GPsb2yUWwgx2MBEAAAAASUVORK5CYII=",
  
  /*****************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ functions
   *****************************************************************************************************************************************************/ 

  translateToCppCode: function(){
    /*
     *  Going thorugh all layers and ask them to translate into C/C++ code
     */
    cCode = "";

    cCode += this.getTunnelsDeclarationCppCode();

    selectorPortWires = this.selectorPort.getConnections();
    selectorPortDatatype = selectorPortWires.first().getSource().userData.datatype;

    this.getAllLayers().each(function(layerIndex, layerObj){
        if (selectorPortWires!= null && selectorPortWires.getSize() > 0){
            if (selectorPortDatatype == "String"){
                cCode += "if(wire_" + selectorPortWires.first().getId() + " == \"" + layerObj.userData.layerText + "\"){\n";
            }else{
                cCode += "if(wire_" + selectorPortWires.first().getId() + " == " + layerObj.userData.layerText + "){\n";
            }
        }else{
            cCode += "if(/* selectorPort not connected*/){\n";
        }

        cCode += layerObj.translateToCppCode();
        cCode += "}\n"
    });

    //multilayered structure output ports assignments
    cCode += this.translateToCppCodePost();
        
    return cCode;
  },

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 

  translateToPythonCode: function(){
    let pythonCode = "";
    pythonCode += this.getTunnelsDeclarationPythonCode();

    selectorPortWires = this.selectorPort.getConnections();
    selectorWireName = "/* selectorPort not connected*/";
    let selectorDatatype = "undefined";
    if (selectorPortWires!= null && selectorPortWires.getSize() > 0){
      selectorWireName = "wire_" + selectorPortWires.first().getId();
      selectorDatatype = selectorPortWires.first().getSource().userData.datatype;
    }
    
    this.getAllLayers().each(function(layerIndex, layerObj){
        layerTextValue = layerObj.userData.layerText
        if (selectorDatatype == "String") layerTextValue = '"' + layerTextValue + '"'; 

        if (layerIndex == 0) pythonCode += "if " + selectorWireName + " == " + layerTextValue + ":\n";
        else  pythonCode += "elif " + selectorWireName + " == " + layerTextValue + ":\n";
        pythonCode += "\t" + layerObj.translateToPythonCode().replaceAll("\n", "\n\t");
        pythonCode += "\n";     //this \n is needed to be added to not have indent next line generated from next node
    });

    //multilayered structure output ports assignments
    pythonCode += this.getRightTunnelsAssignementOutputPythonCode();
        
    return pythonCode;
  }
  
});
