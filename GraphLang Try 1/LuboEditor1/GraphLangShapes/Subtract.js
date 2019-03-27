GraphLang.Shapes.Numeric.Subtract = GraphLang.Shapes.Numeric.extend({
  NAME: "GraphLang.Shapes.Numeric.Subtract",
  init:function(attr, setter, getter){
    this._super($.extend(attr,{color: "#004200", bgColor: "#FF2200", width: "42", height: "42"}), setter, getter);
    this.createPort("input");
    this.createPort("input");
    this.createPort("output");
  },
  onRun3: function(){
    alert("THIS IS ANOTHER FUNCTION \n Actual node ID: " + this.id + "\n" + "Node type: " + this.NAME);
  },

  onRun4: function(){
    return "/*Node Subtract.js: arg0=" + this.getInputPort(0).getId() + ", arg1=" + this.getInputPort(1).getId() + "*/\n";
  }
});
