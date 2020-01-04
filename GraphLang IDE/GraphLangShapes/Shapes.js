/**
 *  @author Lubomir Jagos
 *  @description Experiment class to create node with my own behaviour, to be able implemnt graph running. Graph is just started by impulse which is spreading across it, that's whole principle. Just dataflow.
 *    This is basement class for my shapes for experimenting, set 0.
 */
GraphLang.Shapes = draw2d.shape.node.Node.extend({
  NAME : "GraphLang.Shapes",

  /**
   *  This is constructor, placed here to be inherited by all child. Thanks to this I can retype Object to this class so I'm able to parse diagram and on each item retype it to some generic datatype with its run function and run it.
   */
  constructor(obj) {
    obj && Object.assign(this, obj);
  },
  //------------------------ END OF CONSTRUCTOR-------------------------//

  init:function(attr, setter, getter){
    this._super($.extend({stroke:0,bgColor:GraphLang.Color.getByName('yellow'),width:210,height:179},attr), setter, getter);
  },
  onRun: function(){
    alert(this.id) //default everytime it's hitted by heartbeat
  }
});
