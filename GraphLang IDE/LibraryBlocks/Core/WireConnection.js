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

    symbolPicture: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABkCAIAAABMyCoZAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAzpJREFUeF7tm0tPE1EYhktrTTTSLmg1hsjK9BKpFlzogsQNpEqM1NKGJeEnkFQQsHYSWJH0D5CQNKRhI8Gma3dlY0nHCItyUapSAr1IuJgKyLSeKcfKJdByZkzw6/dwcpjhfH3TZzpzOJm2VXt7e4oKQEl/Qwc9YYGesEBPWKAnLNATFugJC/SEBXrCAj1hIcP9obGxscHBQbojB4uLi3RLPuTxHBoa8nq9dF8aHMddaM94PE73JeD3+/+RJ85DsEBPWKAnLNATFugJC/SEBXrCAj1hgZ6wQE9YoCcsKsVT5fF46CYToVBocnIykUgolUqtVqvX6+nA+QkGgxMTE8UonU5HB+SA/T711NRUX/9AKpWsqa1Tqi/vbm1kVle6uroY3oMIh8M9vb3JZKqm9lYxqrOzk+M4WiEZRk+e551OZ90dq/Fhk1KlrqpS5POKzPKXWPjd09YnPp+P1pVBNBq12+0kyvCg6ZJaTXJIWvqbGNX62DY8PEzrpMHo6WhvT27/rH/UQvf/sJFajYTejI6O2mw2+qdSPGtrW9vKnhY1MjLS0nJ8iAGWeWhubu4Dz9fVW3OCkCOIvXCwram5fvO2iVyxtLQUsViMj0bFqKM5pNfoxKi3wSAtlQaL58LCwtVr1VeqtYKwL+zvH+vJ8/s4M0tLSzE/P1+I0pzMIT8anX52ttyos2H/vyIe+L+t8GoUWj6XoxVlU3zs4RzS8rk8rZAMi6fBYMj+2N5ezwgi5Ngf6TfTa/fuWmhpKYxGYyHq+8kc0pMoi6XcqLNh8TSZTNaGxkRs5vCxP2ibqbVk/JPD4aClpTCbzQ2N98+Iem6301JpMJ63nlcD6a9LS/z7X7s74uVUaOsry58j4Y6OjvInWwLnfX1alMvlkmWyJUhaJ7zs6yfrBI3uhkKlEnayG+kU8zrhRU8PWSeQOawYdSHWCUXIum98fHx6etrtdpNjT85DOnB+yLovEAhEIpHu7u7m5mZyddABOZDqScDPJ1wg0BMW6AkL9IQFesICPWGBnrBAT1igJyzQExboCQv0hIVs928r4nt0FfG9yP8CnIdggZ6wQE9YoCcs0BMW6AkL9IRFZXgqFL8B3CozGuJQqmwAAAAASUVORK5CYII=",

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
