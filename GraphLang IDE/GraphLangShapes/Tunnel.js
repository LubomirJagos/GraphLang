GraphLang.Shapes.Basic.Tunnel = draw2d.shape.node.Between.extend({
    NAME: "GraphLang.Shapes.Basic.Tunnel",
    init : function(attr)
    {
        //this._super($.extend({with: 30, height: 10},attr));

        //this.setPersistPorts(false);  //MUST BE COMMENTED, IF SET TO FALSE NOT RUNNING OK

        this._super(attr);
        this.setBackgroundColor("#fdc11d");
        this.setHeight(50);
        this.setWidth(50);

        portObj = this.getInputPorts().first();
        portObj.userData = {};
        portObj.userData.datatype = "undefined";

        if (attr && attr.id){
            portObj.setId(attr.id + "-in0");
            portObj.setName(attr.id + "-in0");
        }else{
            portObj.setId(this.getId() + "-in0");
            portObj.setName(this.getId() + "-in0");
        }
        //portObj.setName(portObj.getName() + "_" + this.getId());

        portObj = this.getOutputPorts().first();
        portObj.userData = {};
        portObj.userData.datatype = "undefined";
        //portObj.setName(this.getId() + "-out0");
        if (attr && attr.id){
            portObj.setId(attr.id + "-out0");
            portObj.setName(this.getId() + "-out0");
        }else{
            portObj.setId(this.getId() + "-out0");
            portObj.setName(this.getId() + "-out0");
        }
        //portObj.setName(portObj.getName() + Date.now());
        //portObj.setName(portObj.getName() + "_" + this.getId());
        //this.add(new draw2d.shape.basic.Label({text: "tunnel"}), new draw2d.layout.locator.CenterLocator(this));

        tunnelObj = this
		this.on('click',function(emitter, event){
			emitter.setBackgroundColor("#FF0000");
			canvas = emitter.getCanvas()

        	if (emitter.userData === null) emitter.userData = {};
			emitter.userData.parentLoop = emitter.getParent().getId();
			 
			//alert(emitter.getParent().NAME);
			pX = emitter.getAbsoluteX();
			pY = emitter.getAbsoluteY();
			emitter.getParent().remove(emitter);
			canvas.add(emitter)
			emitter.setX(pX);
			emitter.setY(pY);
        	emitter.setDraggable(true);
						
						
		});
		this.onDragEnd = function(x, y, shiftKey, ctrlKey){
			//alert("drag end for tunnel");
			this.setX(x);
			this.setY(y);

			loopObj = this.getCanvas().getFigure(this.userData.parentLoop);
			loopBoundingRect = loopObj.getBoundingBox();
            //tunnelLocatorRel =  new GraphLang.Utils.LeftRelPortLocator(
            tunnelLocatorRel =  new draw2d.layout.locator.XYRelPortLocator(
              -50,//this.getWidth(),
              Math.abs(y - loopObj.getY() - this.getHeight()/2)/loopBoundingRect.getHeight()*100 //<----- THIS IS PROBABLY BAD OR SOMETHING WRONG
            );
			//this.getCanvas().remove(this);
			loopObj.add(this, tunnelLocatorRel);
			this.setX(this.getX()-this.getWidth());
		};

    },
    onRun3:function(){
      alert("TUNNEL id: " + this.id);
    },

    translateToCppCode: function(){
      return "{Tunnel: executionOrder: " + this.getUserData().executionOrder + "}";
    }

});
