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
			//emitter.setBackgroundColor("#FF0000");
      emitter.setDashArray("--");

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
						
      //alert(emitter.NAME);
						
		});
		this.onDragEnd = function(x, y, shiftKey, ctrlKey){
			//alert("drag end for tunnel");
			this.setX(x);
			this.setY(y);
      
			loopObj = this.getCanvas().getFigure(this.userData.parentLoop);
			loopBoundingRect = loopObj.getBoundingBox();
      pX = x;
      pY = y;
      tunnelObj = this

      //loopBoundingRect.scale(tunnelObj.getWidth(), tunnelObj.getHeight());
      //loopObj.setBoundingBox(loopBoundingRect.scale(tunnelObj.getWidth(), tunnelObj.getHeight()));
              
      //TUNNEL ATTACHED TO RIGHT EDGE
      if (Math.abs(x-loopBoundingRect.getRight()) < Math.abs(x-loopBoundingRect.getLeft()) &&
          Math.abs(x-loopBoundingRect.getRight()) < Math.abs(y-loopBoundingRect.getTop()) &&
          Math.abs(x-loopBoundingRect.getRight()) < Math.abs(y-loopBoundingRect.getBottom())
      ){
        tunnelLocatorRel =  new GraphLang.Utils.RightRelPortLocator(
          tunnelObj.getWidth()/2,
          Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100
        );
        if (this.NAME.toLowerCase().search('lefttunnel') > -1) this.setRotationAngle(0);
        else this.setRotationAngle(0);                                                                             
      }
      //TUNNEL ATTACHED TO LEFT EDGE
      else if (Math.abs(x-loopBoundingRect.getLeft()) < Math.abs(x-loopBoundingRect.getRight()) &&
          Math.abs(x-loopBoundingRect.getLeft()) < Math.abs(y-loopBoundingRect.getTop()) &&
          Math.abs(x-loopBoundingRect.getLeft()) < Math.abs(y-loopBoundingRect.getBottom())
      ){
         tunnelLocatorRel =  new GraphLang.Utils.LeftRelPortLocator(
           tunnelObj.getWidth()/2,
           Math.abs(pY - loopObj.getY() - tunnelObj.getHeight()/2)/loopBoundingRect.getHeight()*100
         );
        if (this.NAME.toLowerCase().search('lefttunnel') > -1) this.setRotationAngle(0);
        else this.setRotationAngle(0);                                                                             
      }
      //TUNNEL ATTACHED TO BOTTOM
      else if (Math.abs(y-loopBoundingRect.getBottom()) < Math.abs(x-loopBoundingRect.getRight()) &&
          Math.abs(y-loopBoundingRect.getBottom()) < Math.abs(x-loopBoundingRect.getLeft()) &&
          Math.abs(y-loopBoundingRect.getBottom()) < Math.abs(y-loopBoundingRect.getTop())
      ){
         tunnelLocatorRel =  new GraphLang.Utils.BottomRelPortLocator(
           Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
           tunnelObj.getHeight()/2
         );
        if (this.NAME.toLowerCase().search('lefttunnel') > -1) this.setRotationAngle(-90);
        else this.setRotationAngle(90);                                                                             
      }
      //TUNNEL ATTACHED TO TOP
      else if (Math.abs(y-loopBoundingRect.getTop()) < Math.abs(x-loopBoundingRect.getRight()) &&
          Math.abs(y-loopBoundingRect.getTop()) < Math.abs(x-loopBoundingRect.getLeft()) &&
          Math.abs(y-loopBoundingRect.getTop()) < Math.abs(y-loopBoundingRect.getBottom())
      ){
         tunnelLocatorRel =  new GraphLang.Utils.TopRelPortLocator(
           Math.abs(pX - loopObj.getX() - tunnelObj.getWidth()/2)/loopBoundingRect.getWidth()*100,
           tunnelObj.getHeight()/2
         );
        if (this.NAME.toLowerCase().search('lefttunnel') > -1) this.setRotationAngle(90);
        else this.setRotationAngle(-90);                                                                             
      }

      //alert(this.NAME);

      this.setDashArray("");
			this.getCanvas().remove(this);
			loopObj.add(this, tunnelLocatorRel);
      
      //loopObj.bringsAllTunnelsToFront();      
		};

    },
    onRun3:function(){
      alert("TUNNEL id: " + this.id);
    },

    translateToCppCode: function(){
      return "{Tunnel: executionOrder: " + this.getUserData().executionOrder + "}";
    }

});
