// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
GraphLang.ArduinoLib.Node.analogRead = draw2d.SetFigure.extend({

    NAME: "GraphLang.ArduinoLib.Node.analogRead",


    init: function (attr, setter, getter) {
        this._super($.extend({
            stroke: 0,
            bgColor: null,
            width: 94.29528045654297,
            height: 91.44835072000024
        }, attr), setter, getter);
        var port;
        // in1
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.0573639386276685, 40.99933284832907));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("in1");
        port.setMaxFanOut(20);

        if (!port.userData) port.userData = {}
        port.userData.datatype = "int";

        // errorIn
        port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.0573639386276685, 83.03394254500562));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorIn");
        port.setMaxFanOut(20);

        if (!port.userData) port.userData = {}
        port.userData.datatype = "errorDatatype";

        // errorOut
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.58382669821233, 83.03394254500562));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("errorOut");
        port.setMaxFanOut(20);

        if (!port.userData) port.userData = {}
        port.userData.datatype = "errorDatatype";

        // out1
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.58382669821233, 43.054097288808975));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("out1");
        port.setMaxFanOut(20);

        if (!port.userData) port.userData = {}
        port.userData.datatype = "int";

        this.persistPorts = false;
    },

    createShapeElement: function () {
        var shape = this._super();
        this.originalWidth = 94.29528045654297;
        this.originalHeight = 91.44835072000024;
        return shape;
    },

    createSet: function () {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L94.29528045654297,0 L94.29528045654297,91.44835072000024 L0,91.44835072000024");
        shape.attr({"stroke": "none", "stroke-width": 0, "fill": "none"});
        shape.data("name", "BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M18.206942628271577 23.332853760000205L76.0883378282715 23.332853760000205L76.0883378282715 91.44835072000024L18.206942628271577 91.44835072000024Z');
        shape.attr({"stroke": "#303030", "stroke-width": 1, "fill": "#FFFFFF", "dasharray": null, "opacity": 1});
        shape.data("name", "Rectangle");

        // Label
        shape = this.canvas.paper.text(0, 0, 'analogRead');
        shape.attr({
            "x": 4,
            "y": 12.95903205871582,
            "text-anchor": "start",
            "text": "analogRead",
            "font-family": "\"Arial\"",
            "font-size": 16,
            "stroke": "none",
            "fill": "#080808",
            "stroke-scale": true,
            "font-weight": "normal",
            "stroke-width": 0,
            "opacity": 1
        });
        shape.data("name", "Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({
            "rx": 4.630511616000035,
            "ry": 4.630511616000035,
            "cx": 44.37939958827144,
            "cy": 39.002773504000174,
            "stroke": "#1B1B1B",
            "stroke-width": 1,
            "fill": "#FFFFFF",
            "dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Circle");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({
            "rx": 4.630511616000035,
            "ry": 4.630511616000035,
            "cx": 58.23776963627142,
            "cy": 39.002773504000174,
            "stroke": "#1B1B1B",
            "stroke-width": 1,
            "fill": "#FFFFFF",
            "dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Circle");

        // Line_shadow
        shape = this.canvas.paper.path('M4.5 76.5L17.5,76.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M4.5 76.5L17.5,76.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M3.5 37.5L18.5,37.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M3.5 37.5L18.5,37.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M76.5 76.5L83.5,76.5L89.5,76.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M76.5 76.5L83.5,76.5L89.5,76.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M27.5 55.5L27.5,83.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M27.5 55.5L27.5,83.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M26.5 69.5L48.5,69.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M26.5 69.5L48.5,69.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M26.5 68.5L28.5,56.5L29.5,77.5L32.5,62.5L33.5,73.5L36.5,54.5L36.5,79.5L38.5,63.5L41.5,71.5L41.5,65.5L43.5,72.5L45.5,66.5L47.5,70.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M26.5 68.5L28.5,56.5L29.5,77.5L32.5,62.5L33.5,73.5L36.5,54.5L36.5,79.5L38.5,63.5L41.5,71.5L41.5,65.5L43.5,72.5L45.5,66.5L47.5,70.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M48.5 38.5L50.5,36.5L52.5,36.5L53.5,38.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M48.5 38.5L50.5,36.5L52.5,36.5L53.5,38.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M62.5 37.5L68.5,30.5L70.5,30.5L71.5,32.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M62.5 37.5L68.5,30.5L70.5,30.5L71.5,32.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M39.5 38.5L49.5,29.5L50.5,29.5L51.5,31.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M39.5 38.5L49.5,29.5L50.5,29.5L51.5,31.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");

        // Line_shadow
        shape = this.canvas.paper.path('M76.5 38.5L91.5,38.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "none",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line_shadow");

        // Line
        shape = this.canvas.paper.path('M76.5 38.5L91.5,38.5');
        shape.attr({
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke": "#000000",
            "stroke-width": 1,
            "stroke-dasharray": null,
            "opacity": 1
        });
        shape.data("name", "Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function () {
    },

    layerGet: function (name, attributes) {
        if (this.svgNodes === null) return null;

        var result = null;
        this.svgNodes.some(function (shape) {
            if (shape.data("name") === name) {
                result = shape;
            }
            return result !== null;
        });

        return result;
    },

    layerAttr: function (name, attributes) {
        if (this.svgNodes === null) return;

        this.svgNodes.forEach(function (shape) {
            if (shape.data("name") === name) {
                shape.attr(attributes);
            }
        });
    },

    layerShow: function (name, flag, duration) {
        if (this.svgNodes === null) return;

        if (duration) {
            this.svgNodes.forEach(function (node) {
                if (node.data("name") === name) {
                    if (flag) {
                        node.attr({opacity: 0}).show().animate({opacity: 1}, duration);
                    } else {
                        node.animate({opacity: 0}, duration, function () {
                            this.hide()
                        });
                    }
                }
            });
        } else {
            this.svgNodes.forEach(function (node) {
                if (node.data("name") === name) {
                    if (flag) {
                        node.show();
                    } else {
                        node.hide();
                    }
                }
            });
        }
    },

    calculate: function () {
    },

    onStart: function () {
    },

    onStop: function () {
    },

    getParameterSettings: function () {
        return [];
    },

    /**
     * @method
     */
    addPort: function (port, locator) {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes: function () {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function (i, e) {
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator = e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes: function (memento) {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function (i, json) {
            // create the figure stored in the JSON
            var figure = eval("new " + json.type + "()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator = eval("new " + json.locator + "()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        }, this));
    },


    symbolPicture: " data:image/png;base64,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",


    translateToCppCode: function () {
        cCode = "";
        var in1 = this.getInputPort("in1");
        if (in1.getConnections().getSize() > 0) in1 = "wire_" + in1.getConnections().get(0).getId(); else in1 = "/*in1 default value*/";
        cCode += "analogRead(" + in1 + ")\n";
        return cCode;
    },
})
