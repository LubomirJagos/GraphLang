HoverConnection = draw2d.Connection.extend({

    init: function ( sourcePort, targetPort) {
        var self = this;
        this._super({
            router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
            radius: 5,
            source: sourcePort,
            target: targetPort,
            stroke: 1.35,
            //color: sourcePort == "int32" ? "#0000FF" : "#FFFF00" //LuboJ experiment
        });

        this.on("dragEnter", function (emitter, event) {
            self.attr({
                outlineColor: "#303030",
                outlineStroke: 2,
                // color: "#00a8f0"     //LuboJ. wire color must remain same after edit
            });
        });

        this.on("dragLeave", function (emitter, event) {
            self.attr({
                outlineColor: "#303030",
                outlineStroke: 0,
                // color: "#000000"   //LuboJ. wire color must remain same after edit
            });
        });
    },

    /**
     * required to receive dragEnter/dragLeave request.
     * This figure ignores drag/drop events if it is not a valid target
     * for the draggedFigure
     *
     * @param draggedFigure
     * @returns {HoverConnection}
     */
    delegateTarget: function(draggedFigure)
    {
        return this;
    },


/*********************************************************************************************************************************************
 *    EXPERIMENT SAVING ATTRIBUTES AND RESTORE DIAGRAM FROM FILE
 *********************************************************************************************************************************************/


  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * FUNCTION ALTERED (LuboJ), added portId into connection target attributes to know exact port id not just element,
   * because there could be tunnels on loop and I need to know when restoring connection to which tunnels they were connected
   *
   * @returns {Object}
   */
  getPersistentAttributes: function()
  {
      var memento = this._super();

      var parentNode = this.getSource().getParent();
      while(parentNode.getParent()!==null){
      	parentNode = parentNode.getParent();
      }

      memento.source = {
                node:parentNode.getId(),
                port: this.getSource().getName()
              };

      if (this.getSource().getParent().NAME.toLowerCase().search("tunnel") > -1){     //ADDED by LuboJ to know exact port ID
        memento.userData.sourceTunnel = this.getSource().getParent().getId();
        memento.userData.sourcePortName = this.getSource().getName();
      }
      else if (this.getSource().getParent().NAME.toLowerCase().search("multilayered") > -1){     //ADDED by LuboJ to know exact port ID
        memento.userData.sourceMultilayered = this.getSource().getParent().getId();
        memento.userData.sourcePortName = this.getSource().getName();
      }


      parentNode = this.getTarget().getParent();
      while(parentNode.getParent()!==null){
      	parentNode = parentNode.getParent();
      }

       memento.target = {
                 node:parentNode.getId(),
                 port:this.getTarget().getName(),
               };

      if (this.getTarget().getParent().NAME.toLowerCase().search("tunnel") > -1){   //ADDED by LuboJ to know exact port ID
        memento.userData.targetTunnel = this.getTarget().getParent().getId();
        memento.userData.targetPortName = this.getTarget().getName();
      }
      else if (this.getTarget().getParent().NAME.toLowerCase().search("multilayered") > -1){     //ADDED by LuboJ to know exact port ID
        memento.userData.sourceMultilayered = this.getSource().getParent().getId();
        memento.userData.sourcePortName = this.getSource().getName();
      }

      if(this.sourceDecorator!==null){
          memento.source.decoration = this.sourceDecorator.NAME;
      }

      if(this.targetDecorator!==null){
          memento.target.decoration = this.targetDecorator.NAME;
      }

      return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes: function(memento)
  {
      this._super(memento);

      // nothing to to for the connection creation. This will be done in the draw2d.io.Reader
      // implementation
      //
      // restore your custom attributes here
      if(typeof memento.target.decoration !=="undefined" && memento.target.decoration != null){
          this.setTargetDecorator( eval("new "+memento.target.decoration));
      }

      if(typeof memento.source.decoration !=="undefined" && memento.source.decoration != null){
          this.setSourceDecorator( eval("new "+memento.source.decoration));
      }

      /*********************************************************************************************
       *  LuboJ, added connection TARGET
       *    Because  draw2d.Reader is treating inside it objects like original from draw2d LIB
       *    and I haven't override classes, it will use default setPersistentAttributes() from
       *    draw2d library and this function is ignored. But previous function is used in code.
       *********************************************************************************************/
/*
       if(typeof memento.targetTunnel !=="undefined" && memento.targeTunnel != null){
           //this.setTarget(this.getCanvas().getFigure(memento.target.tunnel).getInputPort(0));
           //this.getCanvas().getFigures().each();
           alert("memento tunnel found");
       }
*/

        if(memento.type.toLowerCase().arch("connection") > -1){
            //this.setTarget(this.getCanvas().getFigure(memento.target.tunnel).getInputPort(0));
            //this.getCanvas().getFigures().each();
            alert("memento multi found");
        }

  }







});
