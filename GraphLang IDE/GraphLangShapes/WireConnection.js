/**
 *  @class GraphLang.Shapes.Basic.LeftTunnel
 *  @author Ing. Lubomir Jagos
 *  @description Extended tunnel class, this to differ tunnel when wire ENTER structure, it means, it's going
 *  from outside world into case, loop structure.
 */
GraphLang.Shapes.Basic.WireConnection = GraphLang.Shapes.Basic.Tunnel.extend({
    NAME: "GraphLang.Shapes.Basic.WireConnection",

    init : function(attr)
    {
        this._super(attr);
        this.setBackgroundColor("#FFFFFF");
        
	},
	
    translateToCppCode2: function(){
      outStr = "wire_" + this.getOutputPort(0).getId();
      inStr = "wire_" + this.getInputPort(0).getId();
      cCode = outStr + ' = ' + inStr + "; /*wireConnection22222222*/ \n"
	  return cCode;
    },
    
    translateToCppCode: function(){
      outStr = "wire_" + this.getOutputPort(0).getId();
      inStr = "wire_" + this.getInputPort(0).getId();
      cCode = outStr + ' = ' + inStr + "; /*wireConnection*/ \n"
	  return cCode;
    },

    getSource: function(){
		return this.getInputPort(0);
	}

});
