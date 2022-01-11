GraphLang.Shapes.Basic.Loop2.Sequence = GraphLang.Shapes.Basic.Loop2.extend({
  NAME: "GraphLang.Shapes.Basic.Loop2.Sequence",

  init:function(attr, setter, getter)
  {
    this._super( $.extend({},attr), setter, getter);

    this.persistPorts=false;

    this.userData = {};
    this.userData.executionOrder = 1;
    this.userData.wasTranslatedToCppCode = false;

    //DEFAULT dimension
    this.setWidth(220);
    this.setHeight(70);

    //create vertical list and push it into unbundler object
    this.padding = 5;
    this.gap = 3;
    this.frames = new draw2d.util.ArrayList();

    this.on("resize", function(emitter){        
        emitter.updateFrames();
    });
    
    //CONTEXT MENU
    this.on("contextmenu",function(emitter, event){
      $.contextMenu({
          selector: 'body',
          events:
          {
              hide:function(){ $.contextMenu( 'destroy' ); }
          },

          //these functions are run after user click on some context menu option
          callback: $.proxy(function(key, options)
          {
             switch(key){
             case "add frame":
                 emitter.addFrame();
                 break;
             case "delete frame":
                 break;
             default:
                 break;
             }
          },this),
          x:event.x,
          y:event.y,
          items:
          {
              "add frame": {name: "add frame"},
              "delete frame": {name: "delete frame"}
          }
      });
    });

  },

  addFrame: function(){
    newFrame = new GraphLang.Shapes.Basic.Jailhouse();
    
    newFrame.userData = {};
    newFrame.userData.owner = this.getId();
    
    /*
    newFrame.setBackgroundColor(new GraphLang.Utils.Color(
      Math.round(Math.random()*255),
      Math.round(Math.random()*255),
      Math.round(Math.random()*255)
    ));
    */
    newFrame.setBackgroundColor(new GraphLang.Utils.Color(255,255,255));

    newFrame.setDraggable(false);

    //OLDER using horizontal layout problem  with resize()
    //this.frames.add(newFrame);

    appCanvas.add(newFrame, new draw2d.layout.locator.XYAbsPortLocator(this.getAbsoluteX()+this.padding, this.getAbsoluteY()+this.padding));
    this.assignFigure(newFrame);
    //this.add(newFrame, new draw2d.layout.locator.XYAbsPortLocator(0,0));

    this.frames.push(newFrame);
    this.updateFrames();


    //this.assignFigure(newFrame);

    
    /*
    var label =  new draw2d.shape.basic.Label({text:"a", width: 120, height: 40});
    this.frames.add(label);
    
    this.setWidth(this.frames.getWidth() + 2*this.padding);
    //this.setHeight(this.frames.getHeight() - 2*this.padding);
    */
  },

  updateFrames: function(){
    relWidth = 100 / this.frames.getSize();
    framesGap = this.gap;
    framesCount = this.frames.getSize();
    sequencePadding = this.padding;
    sequenceWidth = this.getWidth() - 2*this.padding;
    if (framesCount > 0) sequenceWidth = sequenceWidth - this.gap*(framesCount -1);
    sequenceHeight = this.getHeight() - 2*this.padding;
    frameWidth = Math.floor(sequenceWidth / framesCount);
    frameHeight = Math.floor(sequenceHeight);
    absX = this.getAbsoluteX();

    this.frames.each(function(frameIndex, frameObj){            
        frameObj.setDraggable(false);
        frameObj.setWidth(frameWidth);
        frameObj.setHeight(frameHeight);
        if (frameIndex == 0) frameObj.setX(absX + sequencePadding + frameIndex * frameWidth);
        else frameObj.setX(absX + sequencePadding + frameIndex * (frameWidth + framesGap));
    });
  },
  
  updateNode: function(){
    this.frames.each(function(frameIndex, frameObj){
        frameObj.getAssignedFigures().each(function(figureIndex, figureObj){
            figureObj.toFront();
        });
    });
  },

  /**
   * @method getPersistentAttributes
   * @description Return an objects with all important attributes for XML or JSON serialization.
   * This is used when file IS SAVED.
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
      var memento = this._super();

      return memento;
  },

  /**
   * @method setPersistentAttributes
   * @descritpiton Read all attributes from the serialized properties and transfer them into the shape.
   * This is used when file is lOADED.
   *
   * @param {Object} memento
   */
  setPersistentAttributes : function(memento)
  {
      this._super(memento);           //CALLING PARENT METHOD, these will rerecreate this showSelectedObjExecutionOrder
  },
    
  /*****************************************************************************************************************************************************
   *    TRANSLATE TO C/C++ functions
   *****************************************************************************************************************************************************/ 
  
  translateToCppCode: function(){
    var cCode = "";
    this.getUserData().wasTranslatedToCppCode = true;

    cCode += "/* BEGIN SEQUENCE " + this.getId() + " */\n";

    cCode += this.getTunnelsDeclarationCppCode();
    cCode += this.getWiresInsideLoopDeclarationCppCode();
    cCode += this.getLeftTunnelsWiresAssignementCppCode()

    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToCppCodeDeclaration) cCode += figObj.translateToCppCodeDeclaration() + "\n";

      if (figObj.translateToCppCode){
        cCode += figObj.translateToCppCode() + "\n"
      }else if (figObj.translateToCppCode2){
        cCode += figObj.translateToCppCode2() + "\n"
      }
      
     /* in case of post C/C++ code run it */
     if (figObj.translateToCppCodePost) cCode += figObj.translateToCppCodePost() + "\n"; //if there is defined to put somethin after let's do it

    });
    cCode += this.translateToCppCodePost();
    cCode += "/* END SEQUENCE " + this.getId() + " */\n";

    return cCode;
  },

  translateToCppCodePost: function(){
    var cCode = "";
    cCode += this.getRightTunnelsAssignementOutputCppCode();

    return cCode;
  },

  /*****************************************************************************************************************************************************
   *    TRANSLATE TO Python functions
   *****************************************************************************************************************************************************/ 

  translateToPythonCodePost: function(){
    var pythonCode = "";
    pythonCode += this.getRightTunnelsAssignementOutputCppCode();

    return pythonCode;
  },
  
  translateToPythonCode: function(){
    var pythonCode = "";
    this.getUserData().wasTranslatedToPythonCode = true;

    pythonCode += "/* BEGIN SEQUENCE " + this.getId() + " */\n";

    pythonCode += this.getTunnelsDeclarationPythonCode();
    pythonCode += this.getLeftTunnelsWiresAssignementPythonCode()

    this.getAssignedFigures().each(function(figIndex, figObj){
      if (figObj.translateToPythonCodeDeclaration) pythonCode += figObj.translateToPythonCodeDeclaration() + "\n";

      if (figObj.translateToPythonCode){
        pythonCode += figObj.translateToPythonCode() + "\n"
      }
      
     /* in case of post python code run it */
     if (figObj.translateToPythonCodePost) pythonCode += figObj.translateToPythonCodePost() + "\n"; //if there is defined to put somethin after let's do it

    });
    pythonCode += this.translateToPythonCodePost();
    pythonCode += "/* END SEQUENCE " + this.getId() + " */\n";

    return pythonCode;
  }

});
