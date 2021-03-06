GraphLang.Shapes.Basic.Tunnel = draw2d.shape.node.Between.extend({
    NAME: "GraphLang.Shapes.Basic.Tunnel",
    init : function(attr)
    {
        //this._super($.extend({with: 30, height: 10},attr));

        //this.setPersistPorts(false);  //MUST BE COMMENTED, IF SET TO FALSE NOT RUNNING OK

        this._super(attr);
        this.setBackgroundColor("#fdc11d");
        this.setHeight(15);
        this.setWidth(15);

        portObj = this.getInputPorts().first();
        portObj.userData = {};
        portObj.userData.datatype = "undefined";
        //portObj.setName(portObj.getName() + "_" + Date.now());
        //portObj.setName(portObj.getName() + "_" + this.getId());

        portObj = this.getOutputPorts().first();
        portObj.userData = {};
        portObj.userData.datatype = "undefined";
        //portObj.setName(portObj.getName() + Date.now());
        //portObj.setName(portObj.getName() + "_" + this.getId());
        //this.add(new draw2d.shape.basic.Label({text: "tunnel"}), new draw2d.layout.locator.CenterLocator(this));
    },
    onRun3:function(){
      alert("TUNNEL id: " + this.id);
    },

    translateToCppCode: function(){
      return "{Tunnel: executionOrder: " + this.getUserData().executionOrder + "}";
    }
});
