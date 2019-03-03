GraphLang.Utils = Class.extend({
  NAME: "GraphLang.Utils",
  init:function(attr, setter, getter){
    this._super(attr, setter, getter);
  }
  /*
   *  This wasn;t running when was written like this. There is something strange about that. But when assign lower as rvalue it's OK, so for now let's do it that way.
  run: function(textValue){
    alert(textValue);
  }
  */
});

/**
 *  Function to run elements and get result. THIS ASSIGNEMENT IS RUNNABLE AND OK. This function will run every time it will be hitted by heartbeat.
 */
GraphLang.Utils.run = function(textValue){
  this.internalFunctionStorage = {};
  if (textValue !== 'undefined'){
    this.internalFunctionStorage = textValue;
  }
  //eval(textValue);
  this.internalFunctionStorage();
}

GraphLang.Utils.runInterpreter = function(canvas){
  //alert(canvas);
  let allPorts = canvas.getAllPorts();
  let outMsg = "";
  let idList = [];
  let cntPort = 0;
  let parentIdList = [];

  //getting type names of all ports just for example to show how it should be done
  allPorts.each(function(index, portObj){
    idList.push(portObj.NAME);
    parentIdList.push(portObj);
  });
  idList.sort();
  for (var i = 0; i < idList.length; i++){
    outMsg += idList[i] + "\n";
  }

  alert("All ports:" + "\n" + outMsg);
  //alert(idList);
}
