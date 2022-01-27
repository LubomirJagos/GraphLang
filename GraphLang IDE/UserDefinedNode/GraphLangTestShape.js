GraphLangTestShape = GraphLang.UserDefinedNode.extend({
NAME: "GraphLangTestShape",
/******************************************* STORED FROM PREVIOUS NODE **********************************/
init: function(attr,setter,getter){
	this._super( $.extend({stroke:0, bgColor:null, width:92, height:45.87519999999995, flagAutoCreatePorts: false},attr), setter, getter);
	var port;
	port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.7178566950257015, 20.51130022321446));
	port.setConnectionDirection(3);
	port.setBackgroundColor("#F30000");
	port.setName("in3");
	port.setMaxFanOut(20);

	port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.7178566950257015, 58.7193080357143));
	port.setConnectionDirection(3);
	port.setBackgroundColor("#08F300");
	port.setName("in2");
	port.setMaxFanOut(20);

	port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.7178566950257015, 100.86844308035748));
	port.setConnectionDirection(3);
	port.setBackgroundColor("#F0F3F3");
	port.setName("in1");
	port.setMaxFanOut(20);

	port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.89176973850405, 42.832728794642826));
	port.setConnectionDirection(1);
	port.setBackgroundColor("#F30000");
	port.setName("out2");
	port.setMaxFanOut(20);

	port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.89176973850405, 82.69740513392861));
	port.setConnectionDirection(1);
	port.setBackgroundColor("#EBF300");
	port.setName("out1");
	port.setMaxFanOut(20);

	this.persistPorts=false;
},
createShapeElement: function(){
	var shape = this._super();
	this.originalWidth = 92;
	this.originalHeight = 45.87519999999995;
	return shape;
},

createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L92,0 L92,45.87519999999995 L0,45.87519999999995");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M12.959628159423573 0L63.750028159423664 0L63.750028159423664 45.87519999999995L12.959628159423573 45.87519999999995Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M18.14834774015253 40.262869760000285L45.327437660152555 40.262869760000285L45.327437660152555 33.54333685435938L44.96907779526373 33.5746892799998L42.55101141794239 33.36313588433097L40.206416763895504 32.73490364020074L38.006533155263924 31.709081066446174L36.01820294230106 30.316837262879517L34.301840532384176 28.600474852962748L32.909596728817405 26.612144639999883L31.883774155062838 24.41226103136819L31.255541910932607 22.06766637732119L31.04398851526389 19.649599999999964L31.255541910932607 17.23153362267874L31.87243062477569 14.929273600000329L18.14834774015253 14.929273600000329L18.14834774015253 40.262869760000285Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":2.9205777612801285,"ry":2.9205777612801285,"cx":35.851666063352695,"cy":18.295454218240366,"stroke":"none","stroke-width":0,"fill":"#95C06A","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.380866641919965,"ry":4.380866641919965,"cx":42.03641896959266,"cy":26.799489464320345,"stroke":"none","stroke-width":0,"fill":"#C00808","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M64.5 11.5L79.5,11.5L91.5,18.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M92.5 37.5L78.5,37.5L64.5,28.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 8.5L12.5,8.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 25.5L8.5,25.5L12.5,21.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M0.5 45.5L7.5,45.5L12.5,38.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },


/********************************************************************************************************/
jsonDocument: [
  {
    "type": "GraphLang.Shapes.Basic.Loop2.WhileLayer",
    "id": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "x": 304,
    "y": 133,
    "width": 548,
    "height": 280,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "executionOrder": 1,
      "wasTranslatedToCppCode": false
    },
    "cssClass": "GraphLang_Shapes_Basic_Loop2_WhileLayer",
    "bgColor": "#F0F0F0",
    "color": "#333333",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "labels": [],
    "ports": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "3bfdb6a1-19f7-c139-a603-73f1a3251f0f",
    "x": 727,
    "y": 362,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "bool",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "#009900",
    "color": "#009900",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "false",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Multiply",
    "id": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
    "x": 472,
    "y": 199,
    "width": 84.39610736639997,
    "height": 60,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Multiply",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "GraphLang.Shapes.Basic.ConstantNode",
    "id": "31a41cb9-314f-87d0-011f-a411acfcb857",
    "x": 389,
    "y": 185,
    "width": 16,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "datatype": "int",
      "isTerminal": false
    },
    "cssClass": "GraphLang_Shapes_Basic_ConstantNode",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "#0000FF",
    "color": "#0000FF",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#FFFFFF",
    "fontFamily": null,
    "editor": "draw2d.ui.LabelInplaceEditor"
  },
  {
    "type": "GraphLang.ArduinoLib.Node.Serial.println",
    "id": "40225412-b7fc-93ee-2440-eed7ac96bbf6",
    "x": 567,
    "y": 259,
    "width": 96.92204284667969,
    "height": 94.89934667618655,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "GraphLang_ArduinoLib_Node_Serial_println",
    "composite": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "HoverConnection",
    "id": "06f0f3cd-21b3-2bba-a31f-ea7f07bcd98d",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 557.4232626176,
        "y": 228.3517395968002
      },
      {
        "x": 564.7116313088,
        "y": 228.3517395968002
      },
      {
        "x": 564.7116313088,
        "y": 299.94420965218654
      },
      {
        "x": 572,
        "y": 299.94420965218654
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
      "port": "out1"
    },
    "target": {
      "node": "40225412-b7fc-93ee-2440-eed7ac96bbf6",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "186f245f-9f0c-bc82-0e02-5c4c537d0f43",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#4286F4",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 406.85,
        "y": 197
      },
      {
        "x": 439.0795841664,
        "y": 197
      },
      {
        "x": 439.0795841664,
        "y": 210.3128769536002
      },
      {
        "x": 471.3091683328,
        "y": 210.3128769536002
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "31a41cb9-314f-87d0-011f-a411acfcb857",
      "port": "out1"
    },
    "target": {
      "node": "5259b329-5d0d-6113-66ea-83e2dedf5c7b",
      "port": "in1"
    }
  },
  {
    "type": "HoverConnection",
    "id": "52c20e34-6f84-aaa2-65ab-734b5f5652e0",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "HoverConnection",
    "stroke": 1.35,
    "color": "#009900",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 765.50751953125,
        "y": 374
      },
      {
        "x": 806.0137597656251,
        "y": 374
      },
      {
        "x": 806.0137597656251,
        "y": 385
      },
      {
        "x": 846.5200000000001,
        "y": 385
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 5,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "3bfdb6a1-19f7-c139-a603-73f1a3251f0f",
      "port": "out1"
    },
    "target": {
      "node": "6ee59519-25cb-b50f-9478-b2dec41e0ef5",
      "port": "stopTerminal"
    }
  }
],
applyAlpha: function(){},
layerGet: function(name, attributes){
  if(this.svgNodes===null) return null;
  var result=null;
  this.svgNodes.some(function(shape){
     if(shape.data("name")===name){
        result=shape;
     }
     return result!==null;
  });
  return result;
},
layerAttr: function(name, attributes){
 if(this.svgNodes===null) return;
 this.svgNodes.forEach(function(shape){
         if(shape.data("name")===name){
              shape.attr(attributes);
         }
 });
},
layerShow: function(name, flag, duration){
  if(this.svgNodes===null) return;
  if(duration){
    this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
            if(flag){
                node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
            }
            else{
                node.animate({ opacity : 0 }, duration, function () { this.hide() });
            }
        }
    });
  }
  else{
      this.svgNodes.forEach(function(node){
          if(node.data("name")===name){
               if(flag){node.show();}
               else{node.hide();}
           }
       });
  }
},
getParameterSettings: function(){
    return [];
},
addPort: function(port, locator){
    this._super(port, locator);
    return port;
},
getPersistentAttributes : function(){
    var memento = this._super();
    memento.labels = [];
    this.children.each(function(i,e){
        var labelJSON = e.figure.getPersistentAttributes();
        labelJSON.locator=e.locator.NAME;
        memento.labels.push(labelJSON);
    });
    return memento;
},
setPersistentAttributes : function(memento){
    this._super(memento);
    this.resetChildren();
    $.each(memento.labels, $.proxy(function(i,json){
        var figure =  eval("new "+json.type+"()");
        figure.attr(json);
        var locator =  eval("new "+json.locator+"()");
        this.add(figure, locator);
    },this));
}
});
