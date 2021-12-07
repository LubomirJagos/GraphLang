/**
 * @class GraphLang.Utils.ClusterInPlaceEditor
 * @author Lubomir Jagos
 * @description Editor for cluster, takes available clusters names and listed them in combobox which appears in place of cluster name.
 * For editing array items.
 */

GraphLang.Utils.ArrayClusterInPlaceEditor = draw2d.ui.LabelEditor.extend({

    NAME : "GraphLang.Utils.ArrayClusterInPlaceEditor",

    /**
     * @constructor
     * @private
     */
    init: function(listener)
    {
        this._super();
        
        // register some default listener and override this with the handover one 
        this.listener = $.extend({onCommit: function(){}, onCancel: function(){}},listener);
    },
    
    /**
     * @method
     * Trigger the edit of the label text.
     * 
     * @param {draw2d.shape.basic.Label} label the label to edit
     */
    start: function(label)
    {
        this.label = label;

        this.commitCallback = $.proxy(this.commit,this);
        
        // commit the editor if the user clicks anywhere in the document
        //
        $("body").bind("click",this.commitCallback);
      
        // append the input field to the document and register 
        // the ENTER and ESC key to commit /cancel the operation
        //
        //this.html = $('<input id="inplaceeditor">');
        //this.html.val(label.getText());

        this.html = $('<select id="inplaceeditor">');
        inPlaceEditorHtml = this.html

        //add all available cluster datatype names
        inPlaceEditorHtml.append('<option value="null">null</option>');
        this.label.getCanvas().getFigures().each(function(childIndex, childObj){
            if (childObj.getDatatype && childObj.NAME.toLowerCase().search('clusterdatatype') > -1){
                inPlaceEditorHtml.append('<option value="' + childObj.getDatatype() + '">' + childObj.getName() + '</option>');                
            }
        });

        this.html.hide();
        
        $("body").append(this.html);
        
        //copied from web help, NOT RUNNING
        //this.html.autoResize({animate:false});
        
        this.html.bind("keyup",$.proxy(function(e){
            switch (e.which) {
            case 13:
                 this.commit();
                 break;
            case 27:
                this.cancel();
                 break;
           }
         },this));
        
         this.html.bind("blur",this.commitCallback);
         
         // avoid commit of the operation if we click inside the editor
         //
         this.html.bind("click",function(e){
             e.stopPropagation();
             e.preventDefault();
         });

        // Position the INPUT and init the autoresize of the element
        //
        var canvas = this.label.getCanvas();
        var bb = this.label.getBoundingBox();

        bb.setPosition(canvas.fromCanvasToDocumentCoordinate(bb.x,bb.y));

        // remove the scroll from the body if we add the canvas directly into the body
        var scrollDiv = canvas.getScrollArea();
        if(scrollDiv.is($("body"))){
           bb.translate(canvas.getScrollLeft(), canvas.getScrollTop());
        }
        
        bb.translate(-1,-1);
        bb.resize(2,2);
               
        this.html.css({position:"absolute","top": bb.y, "left":bb.x, "min-width":bb.w*(1/canvas.getZoom()), "height":Math.max(25,bb.h*(1/canvas.getZoom()))});
        this.html.fadeIn($.proxy(function(){
            this.html.focus();
        },this));
    },
    
    /**
     * @method
     * Transfer the data from the editor into the label.<br>
     * Remove the editor.<br>
     *
     * @private
     */
    commit: function()
    {
        this.html.unbind("blur",this.commitCallback);
        $("body").unbind("click",this.commitCallback);
        var label = this.html.val();
        var cmd =new draw2d.command.CommandAttr(this.label, {text:label});
        this.label.getCanvas().getCommandStack().execute(cmd);
        
        //fadeOut effect
        this.html.fadeOut($.proxy(function(){
            this.html.remove();
            this.html = null;
            this.listener.onCommit(this.label.getText());
        },this));

        /* no fadeOut effect
        this.html.val($.proxy(function(){
            this.html.remove();
            this.html = null;
            this.listener.onCommit(this.label.getText());
        },this));
        */

        /* traversing through child elements and find biggest width, NOT USED AS ALL ELEMENTS IN ARRAY MUST BE SAME TYPE IN C/C++
        newWidth = -1;
        this.label.getParent().getChildren().each(function(childIndex, childObj){
            if (childObj.getWidth() > newWidth) newWidth = childObj.getWidth();
        });
        */

        newLabelText = this.label.getText();
        this.label.getParent().getChildren().each(function(childIndex, childObj){
            childObj.setText(newLabelText);
        });
        newWidth = this.label.getWidth() + 10*2;    //hardwired padding width
        this.label.getParent().setWidth(newWidth);
                
    },
    
    /**
     * @method
     * Transfer the data from the editor into the label.<br>
     * Remove the editor.<br>
     * @private
     */
    cancel: function()
    {
        this.html.unbind("blur",this.commitCallback);
        $("body").unbind("click",this.commitCallback);
        this.html.fadeOut($.proxy(function(){
            this.html.remove();
            this.html = null;
            this.listener.onCancel();
        },this));
        
    }
});