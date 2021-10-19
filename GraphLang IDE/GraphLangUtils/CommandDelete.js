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
  	if (this.figure.getComposite()){
		this.figure.getComposite().unassignFigure(this.figure);  
	}
	this._super();
  }
});
