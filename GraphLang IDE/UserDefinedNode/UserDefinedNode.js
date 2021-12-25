// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
GraphLang.UserDefinedNode = draw2d.SetFigure.extend({            

   NAME: "GraphLang.UserDefinedNode",

  /*****************************************************************************************************************
   *    THESE FUNCTIONS BELOW ARE SPECIFIC TO TRANSLATE NODE TO C/C++ CODE
   *****************************************************************************************************************/
  
  translateToCppCodeFunctionName: function(){
    return this.NAME.replaceAll('.', '_');
  },
  
  translateToCppCode: function(){

    /*
     *  First translate this node function as spearate function, call IDE method for this, THIS IDE METHOD MUST BE DEFINED!
     *  Passing reference to this object. Schematic in jsonDocument is used.
     */
    let cCode = "";
    cCode += '/* SubNode schematic translation */' + "\n";
    return cCode;
  }
    
});
