/**
 *  Here is important difference between inheritance in this framewor, because, here is not created class but new class is inheriting first prototype, so NO WORD 'new', just assignements of object with parameter extend({...})
 */
GraphLang.Shapes.Numeric.Add = GraphLang.Shapes.Numeric.extend({
  NAME: "GraphLang.Shapes.Numeric.Add",
  init:function(attr, setter, getter){
    this._super($.extend(attr,{color: "#004200", bgColor: "#FFFF00", width: "42", height: "42"}), setter, getter);
    this.createPort("input");
    this.createPort("input");
    this.createPort("input");
    this.createPort("output");
  },
  onRun: function(){
    this.cnt1++;
    //Disabled to not interrupt application waiting for user to click on prompt
    //alert(this.id + "\n" + " -----> " + String(this.cnt1));
  },

  /**
   *  This function takes caller object as parameter, to be able modify instance parameters.
   */
  onRun2: function(caller){
    caller.cnt1++;
    //disabled just to not interrupt application by waiting for user to click on prompt
    //alert(caller.id + "\n" + " -----> " + String(caller.cnt1));
  },

  onRun3: function(){
    alert("Actual node ID: " + this.id + "\n" + "Node type: " + this.NAME);
  },

});
