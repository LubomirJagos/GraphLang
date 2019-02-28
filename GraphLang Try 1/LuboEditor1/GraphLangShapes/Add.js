var GraphLang = {};

/*
  LuboJ. warning to have more beautiful life:
      NOT 'var' WORD ANYMORE!!!
      NOT 'new' WORD ANYMORE!!!
*/

GraphLang.Color = Class.extend({
  NAME: "GraphLang.Color",
  getByName:function(colorName){
    if (colorName == "yellow") return "#FFFF00";
    else if (colorName == "red") return "#FF0000";
    else return "#000000";
  }
});

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

/*
  This is basic numeric class for numeric entry.
  It cannot be placed on Canvas, because it doesn't has method for draw itself, but mus be created to be able have new subbranches of blocks.

  I was getting error in browser:
    "Uncaught Inherited class [GraphLang.Shapes.Numeric] must override the abstract method createShapeElement"
*/
GraphLang.Shapes.Numeric = draw2d.shape.node.Node.extend({
  NAME: "GraphLang.Shapes.Numeric",
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
  }
});

/**
 *  Here is important difference between inheritance in this framewor, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.Shapes.Numeric.Add = draw2d.shape.node.End.extend({
  NAME: "GraphLang.Shapes.Numeric.Add",
  init:function(attr, setter, getter){
    this._super($.extend(attr,{color: "#004200", bgColor: "#FFFF00", width: "42", height: "42"}), setter, getter);
  },
  onRun: function(){
    this.cnt1++;
    alert(this.id + "\n" + " -----> " + String(this.cnt1));
  },

  /**
   *  This function takes caller object as parameter, to be able modify instance parameters.
   */
  onRun2: function(caller){
    caller.cnt1++;
    alert(caller.id + "\n" + " -----> " + String(caller.cnt1));
  }
});
