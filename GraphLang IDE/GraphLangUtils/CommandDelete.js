/**
 *  @method TopRelPortLocator
 *  @name GraphLang.Utils.TopRelPortLocator
 *  @description To snap objects to top edge of structure.
 */
GraphLang.Utils.CommandDelete = draw2d.command.CommandDelete.extend({
  NAME: "GraphLang.Utils.CommandDelete",
  constructor(obj) {
    obj && Object.assign(this, obj);
  },
  
  execute: function(){
    
    cmdStack = this.figure.getCanvas().getCommandStack();
    
    //THIS REMOVES ALL PARTS OF MULTILAYERED STRUCTURE
    if (this.figure.NAME.toLowerCase().search("multilayered") > -1){
      this.figure.getAllLayers().each(function(layerIndex, layerObj){
        //START REMOVING FIGURES INSIDE EACH LAYER
        layerObj.getAssignedFigures().each(function(figureIndex, figureObj){
					var cmdDel = new GraphLang.Utils.CommandDelete(figureObj);
					cmdStack.execute(cmdDel);
        });
				
        //REMOVE LAYER OBJECT ITSELF (Jailhouse object)
        var cmdDel = new GraphLang.Utils.CommandDelete(layerObj);
				cmdStack.execute(cmdDel);
      });      
    }else{
      if (this.figure.getComposite()){
    	  this.figure.getComposite().unassignFigure(this.figure);  
      }
    }

    //call super method to remove this figure
    this._super();
  }
});
