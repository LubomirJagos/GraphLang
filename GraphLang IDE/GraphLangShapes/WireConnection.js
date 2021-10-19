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
        
		/*
		 *	There is added -in0 and -out0 in Tunnel init, this is making mess when code is translated
		 *	into C++ when ID of wires are replaced by normal number to have readable code, so here
		 *	these addings to ports IDs are removed
		 */
		this.getInputPort(0).setId(this.getInputPort(0).getId().slice(0, -4));		//strip "-in0" from id
        this.getOutputPort(0).setId(this.getOutputPort(0).getId().slice(0, -5));	//strip "-out0" from id
	},
	
    translateToCppCode2: function(){
      outStr = "wire_" + this.getOutputPort(0).getId();
      inStr = "wire_" + this.getInputPort(0).getId();
      cCode = outStr + ' = ' + inStr + "; /*wireConnection2*/ \n"
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
