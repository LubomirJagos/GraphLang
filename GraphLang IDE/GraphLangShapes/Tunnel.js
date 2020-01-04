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

        portObj = this.getOutputPorts().first();
        portObj.userData = {};
        portObj.userData.datatype = "undefined";
        //this.add(new draw2d.shape.basic.Label({text: "tunnel"}), new draw2d.layout.locator.CenterLocator(this));
    },
    onRun3:function(){
      alert("TUNNEL id: " + this.id);
    },

    translateToCppCode: function(){
      return "{Tunnel: executionOrder: " + this.getUserData().executionOrder + "}";
    }
});
