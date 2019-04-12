var HoverConnection = draw2d.Connection.extend({

    init: function ( sourcePort, targetPort) {
        var self = this;
        this._super({
            router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
            radius: 5,
            source: sourcePort,
            target: targetPort,
            stroke: 1.35,
            // color: sourcePort == "int32" ? "#0000FF" : "#FFFF00" //LuboJ experiment
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
    }
});
