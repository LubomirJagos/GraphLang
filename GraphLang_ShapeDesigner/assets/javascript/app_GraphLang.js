// just a simple mock object tfor the DigitalTrainingStudio
// Hardware binding
//
var hardware={

    gpio:{
        set:function(pin, value){},
        get:function(pin){return false;}
    },

    bloc:{
        set:function(blocId, value){},
        get:function(blocId){return false;},
        on:function(){},
        off:function(){},
        isConnected: function(blocId){return true;}
    }
};
if(typeof String.prototype.endsWith ==="undefined") {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}



// the smallest jquery plugin ever
//
jQuery.fn.reverse = [].reverse;


// date parser
(function (Date, undefined) {
    var origParse = Date.parse, numericKeys = [ 1, 4, 5, 6, 7, 10, 11 ];
    Date.parse = function (date) {
        var timestamp, struct, minutesOffset = 0;

        // ich liebe Regexpr.... :-)
        //
        //              1 YYYY                2 MM       3 DD           4 HH    5 mm       6 ss        7 msec        8 Z 9 �    10 tzHH    11 tzmm
        if ((struct = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(date))) {
            // avoid NaN timestamps caused by �undefined� values being passed to Date.UTC
            for (var i = 0, k; (k = numericKeys[i]); ++i) {
                struct[k] = +struct[k] || 0;
            }

            // allow undefined days and months
            struct[2] = (+struct[2] || 1) - 1;
            struct[3] = +struct[3] || 1;

            if (struct[8] !== 'Z' && struct[9] !== undefined) {
                minutesOffset = struct[10] * 60 + struct[11];

                if (struct[9] === '+') {
                    minutesOffset = 0 - minutesOffset;
                }
            }

            timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
        }
        else {
            timestamp = origParse ? origParse(date) : NaN;
        }

        return timestamp;
    };
}(Date));


var conf=null;
if (window.location.hostname === "localhost") {
    conf = {
        githubClientId: "4ec60d86b7e1eef385b3",
        githubAuthenticateCallback: "http://localhost/~andherz/githubCallback.php?app=designer&code=",

    };
}
else{
    conf = {
        githubClientId: "20a3f1473dd7d17fcbcf",
        githubAuthenticateCallback: "http://www.draw2d.org/githubCallback.php?app=designer&code="
    };
}

conf.fileSuffix  = ".shape";
conf.defaultUser = "freegroup";
conf.defaultRepo = "draw2d_js.shapes";
conf.shapesPath  = "shapes/org/";

/*jshint sub:true*/

// declare the namespace for this example
var shape_designer = {
		figure:{
			
		},
		filter:{
			
		},
		dialog:{
			
		},
		policy:{
			
		},
		storage:{
			
		}
};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 */

shape_designer.Application = Class.extend(
{
    NAME : "shape_designer.Application",
    
    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
        var _this = this;

        this.documentConfigurationTempl = {
            baseClass:"GraphLang.UserDefinedNode",
            code :$("#shape-edit-template").text().trim()
        };

        this.localStorage = [];
        try {
            if( 'localStorage' in window && window.localStorage !== null){
                this.localStorage = localStorage;
            }
        } catch(e) {

        }

        // automatic add the configuration to the very first shape
        // in the document as userData
        //
        this.documentConfiguration = $.extend({},this.documentConfigurationTempl);

        this.storage     = new shape_designer.storage.BackendStorage();
        this.view        = new shape_designer.View(this, "canvas");
        this.toolbar     = new shape_designer.Toolbar(this, "toolbar",  this.view );
        this.layer       = new shape_designer.Layer(this, "layer_elements", this.view );
        this.filter      = new shape_designer.FilterPane(this, "filter_actions", this.view );
        this.breadcrumb  = new shape_designer.Breadcrumb(this,"breadcrumb" );

        //LuboJ
        this.view.auxView = new shape_designer.View2(this, "canvas2");


        this.view.installEditPolicy(new shape_designer.policy.SelectionToolPolicy());


        // First check if a valid token is inside the local storage
        //
        this.autoLogin();

        // check if the user has added a "file" parameter. In this case we load the shape from
        // the draw2d.shape github repository
        //
        var file = this.getParam("file");
        if(file){
            var path = conf.shapesPath+file.replace(/_/g,"/");
            var repo = conf.defaultUser+"/"+conf.defaultRepo;
            _this.storage.load(repo, path,function(content){
                _this.view.clear();
                var reader = new draw2d.io.json.Reader();
                reader.unmarshal(_this.view, content);
                _this.getConfiguration();
                _this.view.getCommandStack().markSaveLocation();
                _this.view.centerDocument();
                _this.breadcrumb.update(_this.storage);

            });
        }
        else{
            _this.fileNew();
        }
    },

    login:function()
    {
        window.location.href='https://github.com/login/oauth/authorize?client_id='+conf.githubClientId+'&scope=public_repo';
    },

    autoLogin:function()
    {
        var _this = this;
        var _doIt=function() {
            var code = _this.getParam("code");
            if (code !== null) {
                $.getJSON(conf.githubAuthenticateCallback + code, function (data) {
                    _this.storage.connect(data.token, function (success) {
                        if (success) {
                            _this.localStorage["token"] = data.token;
                        }
                        else {
                            _this.localStorage.removeItem("token");
                        }
                        _this.toolbar.onLogginStatusChanged(success);
                    });
                });
            }
        };

        var token = this.localStorage["token"];
        if(token){
            _this.storage.connect(token, function(success){
                _this.toolbar.onLogginStatusChanged(success);
                if(!success){
                    _doIt();
                }
            });
        }
        // or check if we come back from the OAuth redirect
        //
        else{
            _doIt();
        }
    },

    getParam: function( name )
    {
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        // the param isn'T part of the normal URL pattern...
        //
        if( results === null ) {
            // maybe it is part in the hash.
            //
            regexS = "[\\#]"+name+"=([^&#]*)";
            regex = new RegExp( regexS );
            results = regex.exec( window.location.hash );
            if( results === null ) {
                return null;
            }
        }

      return results[1];
    },
 	
	fileNew: function(shapeTemplate)
    {
        this.view.clear();
        this.storage.currentFileHandle = null;
        this.documentConfiguration = $.extend({},this.documentConfigurationTempl);

        if(shapeTemplate){
            var reader = new draw2d.io.json.Reader();
            reader.unmarshal(this.view, shapeTemplate);
            this.view.getCommandStack().markSaveLocation();
            this.view.centerDocument();
        }
    },

    fileOpen: function()
    {
        new shape_designer.dialog.FileOpen(this.storage).show(
            // success callback
            $.proxy(function(fileData){
                try{
                    this.view.clear();
                    var reader = new draw2d.io.json.Reader();
                    reader.unmarshal(this.view, fileData);
                    this.getConfiguration();
                    this.view.getCommandStack().markSaveLocation();
                    this.view.centerDocument();
                    this.breadcrumb.update(this.storage);

                    var hash = this.storage.currentFileHandle.path;
                    hash = hash.replace(conf.shapesPath,"");
                    hash = hash.replace(/\//g,"_");
                    window.location.hash = "#file="+hash;
                }
                catch(e){
                    this.view.reset();
                }
            },this));
    },

	fileSave: function()
    {
        this.setConfiguration();
        if(this.storage.currentFileHandle===null) {
            new shape_designer.dialog.FileSaveAs(this.storage).show(this.view);
        }
        else{
            new shape_designer.dialog.FileSave(this.storage).show(this.view);
        }
	},


    getConfiguration: function( key)
    {
        var figures = this.view.getExtFigures();
        if(figures.getSize()>0){
            this.documentConfiguration = $.extend({},  this.documentConfiguration, figures.first().getUserData());
        }

        if(key){
            return this.documentConfiguration[key];
        }
        return this.documentConfiguration;
    },

    setConfiguration: function(conf )
    {
        this.documentConfiguration = $.extend({},  this.documentConfiguration, conf);
        var figures = this.view.getExtFigures();
        if(figures.getSize()>0) {
            figures.first().setUserData( this.documentConfiguration);
        }
    }
});

shape_designer.View2 = draw2d.Canvas.extend({
	
	init:function(app, id){
        var _this = this;
		this._super(id, 400, 400);
        this.reset();
    },
	reset: function()
    {
        this.clear();
	}
});

shape_designer.View = draw2d.Canvas.extend({
	
	init:function(app, id){
        var _this = this;

		this._super(id, 16000, 16000);
		this.clippboardFigure=null;
        this.grid =  new draw2d.policy.canvas.ShowGridEditPolicy(20);

		this.setScrollArea("#"+id);

        this.installEditPolicy( this.grid);
        this.installEditPolicy( new draw2d.policy.canvas.FadeoutDecorationPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToGeometryEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToCenterEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToInBetweenEditPolicy());

        Mousetrap.bind(['left'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
           _this.getSelection().each(function(i,f){f.translate(-diff,0);});
            return false;
        });
        Mousetrap.bind(['up'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
             _this.getSelection().each(function(i,f){f.translate(0,-diff);});
            return false;
        });
        Mousetrap.bind(['right'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
             _this.getSelection().each(function(i,f){f.translate(diff,0);});
            return false;
        });
        Mousetrap.bind(['down'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
            _this.getSelection().each(function(i,f){f.translate(0,diff);});
            return false;
        });

        Mousetrap.bind(['ctrl+c', 'command+c'], $.proxy(function (event) {
            var primarySelection = this.getSelection().getPrimary();
            if(primarySelection!==null){
                this.clippboardFigure = primarySelection.clone();
                this.clippboardFigure.translate(5,5);
            }
            return false;
        },this));

        Mousetrap.bind(['ctrl+v', 'command+v'], $.proxy(function (event) {
           if(this.clippboardFigure!==null){
               var cloneToAdd = this.clippboardFigure.clone();
               var command = new draw2d.command.CommandAdd(this, cloneToAdd, cloneToAdd.getPosition());
               this.getCommandStack().execute(command);
               this.setCurrentSelection(cloneToAdd);
           }
           return false;
        },this));


        var zoom=new draw2d.policy.canvas.WheelZoomPolicy();
        this.installEditPolicy(zoom);

        var setZoom = $.proxy(function(newZoom, animate){
            var bb = this.getBoundingBox().getCenter();
            var c = $("#canvas");
            this.setZoom(newZoom);
            c.scrollTop((bb.y/newZoom- c.height()/2));
            c.scrollLeft((bb.x/newZoom- c.width()/2));
        },this);
        
        // Inject the ZoomIn Button and the callbacks
        //
        $("#canvas_zoom_in").on("click",function(){
            setZoom(_this.getZoom()*1.2,true);
        });
 
        // Inject the OneToOne Button
        //
        $("#canvas_zoom_normal").on("click",function(){
            setZoom(1.0, false);
        });
      
        // Inject the ZoomOut Button and the callback
        //
        $("#canvas_zoom_out").on("click",function(){
            setZoom(_this.getZoom()*0.8,true);
        });

       $('#canvas_config_grid').on('change', function (e) {
           if($(this).prop('checked')){
                _this.installEditPolicy( _this.grid);
            }
            else{
                _this.uninstallEditPolicy( _this.grid);
            }
          });

        $("#canvas_config_items").on("click",$.proxy(function(e){
            e.stopPropagation();
        },this));

        this.reset();

    },

	setCursor:function(cursor)
    {
	    if(cursor!==null){
	        this.html.css("cursor","url(assets/images/cursors/"+cursor+") 0 0, default");
	    }
	    else{
            this.html.css("cursor","default");
	    }
	},


	/**
	 * @method
	 * Reset the view/canvas and starts with a clean and new document with default decorations
	 * 
	 * 
	 */
	reset: function()
    {
        this.clear();
	},

    setZoom:function(newZoom)
    {
        $("#canvas_zoom_normal").text((parseInt((1.0/newZoom)*100))+"%");
        this._super(newZoom);
    },

	/**
	 * Reset the view without any decorations. This is good before loading a document
	 * 
	 */
	clear: function()
    {
	    this._super();
	},
	
    getExtFigure: function(id){
        var figure = null;
        this.getExtFigures().each(function(i,e){
            if(e.id===id){
                figure=e;
                return false;
             }
        });
        return figure;
    },

    getExtFigures: function(){
	    var figures = this.getFigures().clone();
	    
	    // the export rectangles are not part of the document itself. In this case we
	    // filter them out
	    //
	    figures.grep(function(figure){
	        return (typeof figure.isExtFigure  !=="undefined");
	    });
	    
	    var lines = this.getLines().clone();
	    lines.grep(function(line){
            return (typeof line.isExtFigure  !=="undefined");
        });
	    
	    figures.addAll(lines);
	    
	    return figures;
	},
	
	
	getBoundingBox: function(){
        var xCoords = [];
        var yCoords = [];
        this.getExtFigures().each(function(i,f){
            if(f instanceof shape_designer.figure.ExtPort){
                return;
            }
            var b = f.getBoundingBox();
            xCoords.push(b.x, b.x+b.w);
            yCoords.push(b.y, b.y+b.h);
        });
        var minX   = Math.min.apply(Math, xCoords);
        var minY   = Math.min.apply(Math, yCoords);
        var width  = Math.max(10,Math.max.apply(Math, xCoords)-minX);
        var height = Math.max(10,Math.max.apply(Math, yCoords)-minY);
        
        return new draw2d.geo.Rectangle(minX,minY,width,height);
	},
	
	add: function(figure, x,y){
	    this._super(figure, x,y);
	},

	hideDecoration: function(){
        this.uninstallEditPolicy( this.grid);
        this.getFigures().each( function(index, figure){ 
            figure.unselect();
        });
    },
    
    showDecoration: function(){
        this.installEditPolicy( this.grid);
    },

    /**
     * @method
     * Return the width of the canvas
     *
     * @return {Number}
     **/
    getWidth: function()
    {
        return this.html.find("svg").width();
    },


    /**
     * @method
     * Return the height of the canvas.
     *
     * @return {Number}
     **/
    getHeight: function()
    {
        return this.html.find("svg").height();
    },

    centerDocument:function()
    {
        this.setZoom(1.0);
        // get the bounding box of the document and translate the complete document
        // into the center of the canvas. Scroll to the top left corner after them
        //
        var bb = this.getBoundingBox();

        var dx = (this.getWidth()/4)-(bb.x+bb.w/2);
        var dy = (this.getHeight()/4)-(bb.y+bb.h/2);

        this.getFigures().each(function(i,f){
            f.translate(dx,dy);
        });
        this.getLines().each(function(i,f){
            f.translate(dx,dy);
        });

        var center = bb.getCenter();
        var c = $("#canvas");
        c.scrollTop((center.y- c.height()/2));
        c.scrollLeft((center.x- c.width()/2));
    }

});



shape_designer.Layer = Class.extend({
	
	NAME: "shape_designer.Layer",

	init:function(app, elementId, view){
		this.html = $("#"+elementId);
		this.view = view;
		
		// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of 
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);

		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 * 
	 * @param {draw2d.Figure} figure
	 */
	onSelectionChanged : function(emitter, event)
	{
        this._updateSelection();
	},
	
	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
	 * can be used to identify the type of event which has occurred.
	 * 
	 * @template
	 * 
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	stackChanged:function(event)
	{
	    this.html.html('');
	    var figures = this.view.getExtFigures();
	    figures.each($.proxy(function(i, figure){
	        this.html.append(
	                '<div class="layerElement" data-figure="'+figure.id+'" id="layerElement_'+figure.id+'" >'+
	                   figure.getUserData().name +
	                   '<span data-figure="'+figure.id+'" class="icon layer_visibility pull-right '+(figure.isVisible()?'ion-eye':'ion-eye-disabled')+'"></span>'+
                       '<span data-figure="'+figure.id+'" class="icon layer_edit pull-right ion-ios-pricetag-outline" ></span>'+
	        		'</div>');
	    },this),true);
	    
	    this.html.sortable({
	        axis:"y",
	        update: $.proxy(function( event, ui ) {
	            $(".layerElement").reverse().each($.proxy(function(i,e){
	                this.view.getExtFigure($(e).data("figure")).toFront();
	            },this));

	        },this)
	    });
 
	    $(".layerElement .layer_edit").on("click", $.proxy(function(event){
            var figure =this.view.getExtFigure($(event.target).data("figure"));
            bootbox.prompt({
                title: "Layer Name",
				className: "layer-name-prompt",
                value: figure.getUserData().name,
                callback: $.proxy(function(result) {
                    if (result !== null) {
                        figure.getUserData().name = result;
                        this.stackChanged(null);
                    }
                },this)
            });

			// autoselect text for fast edit
			setTimeout(function(){$(".bootbox-input").focus().select();},200);
 	    },this));

	    
	    $(".layerElement .layer_visibility").on("click", $.proxy(function(event){
            var figure =this.view.getExtFigure($(event.target).data("figure"));
            figure.setVisible(!figure.isVisible());
            this.view.setCurrentSelection(null);
			if(figure.isVisible()){
				$(event.target).removeClass("ion-eye-disabled").addClass("ion-eye");
			}
			else{
				$(event.target).removeClass("ion-eye").addClass("ion-eye-disabled");
			}
			return false;
        },this));

        $(".layerElement").on("click", $.proxy(function(event){
           var figure =this.view.getExtFigure($(event.target).data("figure"));
           if(figure.isVisible()){
               this.view.setCurrentSelection(figure);
           }
        },this));

        this._updateSelection();
	},
	
	_updateSelection: function()
	{
        $(".layerElement").removeClass("layerSelectedElement");
	    var selection = this.view.getSelection();
	    selection.each(function(i,e){
	        $("#layerElement_"+e.id).addClass("layerSelectedElement");
	    });
	}
});
/* jshint evil:true */

shape_designer.FilterPane = Class.extend({
	
    DEFAULT_LABEL : "Properties",
    
	init:function(app, elementId, view){
		this.html = $("#"+elementId);
		this.view = view;
		this.currentFigure = null;

		// Register a Selection listener for the state handling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));
	},

	/**
	 * @method
	 * Called if the selection in the canvas has been changed. You must register this
	 * class on the canvas to receive this event.
	 * 
     * @param {draw2d.Canvas} canvas the emitter of the event. In this case it is the canvas.
     * @param {draw2d.Figure} figure
	 */
	onSelectionChanged : function(canvas, event){
	    var figure = event?event.figure:null;

	    this.html.html('');
	    $('#add_filter_button').addClass('disabled');
	    
	    if(this.currentFigure!==null && typeof this.currentFigure.isExtFigure !=="undefined"){
	        this.currentFigure.filters.each($.proxy(function(i,filter){
	            filter.removePane();
	        },this));
	    }
	    $("#add_filter_action_menu").html("");
	    
	    if(figure!==null &&  typeof figure.isExtFigure  !=="undefined"){
            figure.filters.each($.proxy(function(i,filter){
                filter.insertPane(figure,this.html);
            },this));
            $('#add_filter_button').removeClass('disabled');

            $.each(figure.getPotentialFilters(), function(i,e){
                $("#add_filter_action_menu").append("<li><a href='#' data-filter='"+e.impl+"' >"+e.label+"</a></li>");
            });
                    
            var _this = this;
            $("#add_filter_action_menu a").on("click", function(){
                var $this = $(this);
                var filterName = $this.data("filter");
                var filter = eval("new "+filterName+"()");
                _this.currentFigure.addFilter(filter);
                _this.onSelectionChanged(_this.view,{figure:_this.currentFigure});
            });
	    }

	    this.currentFigure = figure;	    
	}
});
/* jshint evil:true */

shape_designer.Toolbar = Class.extend({
    
    init:function(app, elementId, view){
        this.html = $("#"+elementId);
        this.view = view;
        this.app = app;

        // register this class as event listener for the canvas
        // CommandStack. This is required to update the state of 
        // the Undo/Redo Buttons.
        //
        view.getCommandStack().addEventListener(this);

        // Register a Selection listener for the state hnadling
        // of the Delete Button
        //
        view.on("select", $.proxy(this.onSelectionChanged,this));
        
        this.fileName = null;

        this.html.append(
                '<span id="currentTool_container" class="media pull-left">'+
                ' <span class="pull-left" >'+
                '    <img id="currentTool_image" class="media-object" src="" >'+
                ' </span>'+
                ' <div class="media-body">'+
                '   <h4 id="currentTool_heading" class="media-heading">Media heading</h4>'+
                '    <div id="currentTool_message"></div>'+
                '  </div>'+
                '</span>');
          

        this.toolbarDiv=$("<div class=\"toolbarGroup pull-right\"></div>");
        this.html.append(this.toolbarDiv);

        /*
         *  Symbol name input field
         */
        var symbolNameGroup=$("<div class='btn-group'  title='Symbol functions'></div>");
        this.toolbarDiv.append(symbolNameGroup);
		this.symbolNameInput = $('<div class="btn btn-default">Symbol Name <input type="input" id="symbol-name-input" style="width: 270px;" class="" value="GraphLangTestShape" /></div>');

		this.symbolCheckButton = $('<button  data-toggle="tooltip" title="Check Symbol" class="btn btn-default" >Check Symbol</button>');
        this.symbolCheckButton.on("click",$.proxy(function(){
            shape_designer.checkSymbolAndSchematic(this.view);
        },this));

        this.saveSymbolButton  = $('<button  data-toggle="tooltip" title="Save symbol</span>" class=\"btn btn-default\" >Save</button>');
        this.saveSymbolButton.on("click",$.proxy(function(){
            new shape_designer.saveSymbol();
        },this));

        symbolNameGroup.append(this.symbolCheckButton);
        symbolNameGroup.append(this.symbolNameInput);
        symbolNameGroup.append(this.saveSymbolButton);

        // Inject the UNDO Button and the callbacks
        //
        buttonGroup=$('<div class="btn-group" title="Undo / Redo"></div>');
        this.toolbarDiv.append(buttonGroup);
        this.undoButton  = $('<button  data-toggle="tooltip" title="Undo <span class=\'highlight\'> [ Ctrl+Z ]</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_undo.png"></button>');
        buttonGroup.append(this.undoButton);
        this.undoButton.on("click",$.proxy(function(){
            this.view.getCommandStack().undo();
        },this)).prop( "disabled", true );
        Mousetrap.bind("ctrl+z", $.proxy(function (event) {this.undoButton.click();return false;},this));


        // Inject the REDO Button and the callback
        //
        this.redoButton  = $('<button data-toggle="tooltip" title="Redo <span class=\'highlight\'> [ Ctrl+Y ]</span>"  class=\"btn btn-default\" ><img src="./assets/images/toolbar_redo.png"></button>');
        buttonGroup.append(this.redoButton);
        this.redoButton.on("click",$.proxy(function(){
            this.view.getCommandStack().redo();
        },this)).prop( "disabled", true );
        Mousetrap.bind("ctrl+y", $.proxy(function (event) {this.redoButton.click();return false;},this));


        buttonGroup=$('<div class="btn-group" data-toggle="buttons"  title="Tools and Shape"></div>');
        this.toolbarDiv.append(buttonGroup);


        // Inject the DELETE Button
        //
        this.deleteButton  = $('<button  data-toggle="tooltip" title="Delete <span class=\'highlight\'> [ Del ]</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_delete.png"></button>');
        buttonGroup.append(this.deleteButton);
        this.deleteButton.on("click",function(){
            view.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape);
            view.getSelection().each(function(index, figure){
                var cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE));
                if(cmd!==null){
                    view.getCommandStack().execute(cmd);
                }
            });
            // execute all single commands at once.
            view.getCommandStack().commitTransaction();
        }).prop( "disabled", true );
        Mousetrap.bind(["del"], $.proxy(function (event) {this.deleteButton.click();return false;},this));


        this.selectButton = $('<label data-toggle="tooltip" title="Select mode <span class=\'highlight\'> [ spacebar ]</span>" class="btn btn-sm btn-primary active"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./assets/images/tools/SELECT_TOOL_032.png"></label>');
        buttonGroup.append(this.selectButton);
        this.selectButton.on("click",$.proxy(function(){
            this.view.installEditPolicy(new shape_designer.policy.SelectionToolPolicy());
        },this));
        Mousetrap.bind("space", $.proxy(function (event) {this.selectButton.click();return false;},this));

        this.shapeButton = $(
                             '<label id="tool_shape" class="dropdown btn btn-sm btn-primary">'+
                             '    <input id="tool_shape_button"  data-policy="shape_designer.policy.RectangleToolPolicy" class="btn-default btn"  type="radio">'+
                             '    <img   id="tool_shape_image" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"  src="./assets/images/tools/POLYGON_DIAGONALS_032.png">'+
                             '    <span data-toggle="dropdown" role="button" href="#" id="tool_shape_caret"><span class="caret">&nbsp;</span></span>'+
                             '    <ul class="dropdown-menu" role="menu" >'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.RectangleToolPolicy" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"><a href="#"><img  src="./assets/images/tools/POLYGON_DIAGONALS_032.png">Rectangle</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.CircleToolPolicy"    data-toggle="tooltip" title="Circle <span class=\'highlight\'> [ C ]</span>">   <a href="#"><img  src="./assets/images/tools/CIRCLE_1_032.png">Circle</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.LineToolPolicy"      data-toggle="tooltip" title="Line <span class=\'highlight\'> [ L ]</span>">     <a href="#"><img  src="./assets/images/tools/LINE_032.png">Line</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.TextToolPolicy"      data-toggle="tooltip" title="Text <span class=\'highlight\'> [ T ]</span>">     <a href="#"><img  src="./assets/images/tools/TEXT_032.png">Text</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.PortToolPolicy"      data-toggle="tooltip" title="Port <span class=\'highlight\'> [ P ]</span>">     <a href="#"><img  src="./assets/images/tools/PORT_032.png">Port</a></li>'+
                             '    </ul>'+
                             '</label>'
                          );
        buttonGroup.append(this.shapeButton);
        $(".tool_shape_entry").on("click",$.proxy(function(event){
           var $target = $(event.currentTarget);
           $("#tool_shape_image").attr("src", $target.find("img").attr("src"));
           $("#tool_shape_button").data("policy", $target.data("policy"));
           $("#tool_shape_image").click();
           
           $("#tool_shape_image")
               .attr('data-original-title', $target.data("original-title"))
               .tooltip('fixTitle');
        },this));
       
        $("#tool_shape_image").on("click",$.proxy(function(){
            this.view.installEditPolicy(eval("new "+$("#tool_shape_button").data("policy")+"()"));
        },this));
        Mousetrap.bind(["R","r"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.RectangleToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["C","c"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.CircleToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["T","t"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.TextToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["P","p"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.PortToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["L","l"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.LineToolPolicy"]').click();
            return false;
        },this));

        this.unionButton = $('<label data-toggle="tooltip" title="Polygon Union <span class=\'highlight\'> [ U ]</span>" class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./assets/images/toolbar_union.png"></label>');
        buttonGroup.append(this.unionButton);
        this.unionButton.on("click",$.proxy(function(){
           var selection = this.view.getSelection().getAll();
           var policy = new shape_designer.policy.GeoUnionToolPolicy();
           this.view.installEditPolicy(policy);
           policy.execute(this.view, selection);
        },this));
        Mousetrap.bind(["U", "u"], $.proxy(function (event) {this.unionButton.click();return false;},this));

       this.differenceButton = $('<label data-toggle="tooltip" title="Polygon Difference <span class=\'highlight\'> [ D ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool2" class="btn-default btn" ><img src="./assets/images/toolbar_difference.png"></label>');
       buttonGroup.append(this.differenceButton);
       this.differenceButton.on("click",$.proxy(function(){
           this.view.installEditPolicy(new shape_designer.policy.GeoDifferenceToolPolicy());
       },this));
       Mousetrap.bind(["D", "d"], $.proxy(function (event) {this.differenceButton.click();return false;},this));
        
       this.intersectionButton = $('<label data-toggle="tooltip" title="Polygon Intersection <span class=\'highlight\'> [ I ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="too3" class="btn-default btn" ><img src="./assets/images/toolbar_intersect.png"></label>');
       buttonGroup.append(this.intersectionButton);
       this.intersectionButton.on("click",$.proxy(function(){
           this.view.installEditPolicy(new shape_designer.policy.GeoIntersectionToolPolicy());
       },this));
       Mousetrap.bind(["I", "i"], $.proxy(function (event) {this.intersectionButton.click();return false;},this));

        /* LuboJ
        var buttonGroup=$("<div class='btn-group'  title='File Operations'></div>");
        this.toolbarDiv.append(buttonGroup);


        this.loginButton  = $('<button class="btn" data-toggle="modal" id="githubButton"><img height="32" src="assets/images/octocat.svg">Login with Github</button>');
        buttonGroup.append(this.loginButton);
        this.loginButton.on("click",function(){
            app.login();
        });


        this.openButton  = $('<button  data-toggle="tooltip" data-size="xs" title="Load <span class=\'highlight\'> [ Ctrl+O ]</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_file_load.png"></button>');
        buttonGroup.append(this.openButton);
        this.openButton.on("click",$.proxy(function(){
            var button = this.openButton;
            button.tooltip("hide");
            app.fileOpen();
        },this));
        Mousetrap.bind("ctrl+o", $.proxy(function (event) {this.openButton.click();return false;},this));
        this.openButton.hide();

        this.saveButton  = $('<button data-toggle="tooltip" data-size="xs" title="Save <span class=\'highlight\'> [ Ctrl+S ]</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_file_save.png"></button>');
        buttonGroup.append(this.saveButton);
        this.saveButton.on("click",$.proxy(function(){
            var button = this.saveButton;
            button.tooltip("hide");
            app.fileSave();
        },this));
        Mousetrap.bind("ctrl+s", $.proxy(function (event) {this.saveButton.click();return false;},this));
        this.saveButton.hide();

        this.newButton  = $('<button  data-toggle="tooltip" title="New Document <span class=\'highlight\'> [ Ctrl+N ]</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_file_new.png"></button>');
        buttonGroup.append(this.newButton);
        this.newButton.on("click",$.proxy(function(){
            app.fileNew();
        },this));
        Mousetrap.bind("ctrl+n", $.proxy(function (event) {this.undoButton.click();return false;},this));

        buttonGroup=$('<div class="btn-group"  title="Test and Coding"></div>');
        this.toolbarDiv.append(buttonGroup);
        this.testButton  = $('<button  data-toggle="tooltip" title="Test</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_test.png"></button>');
        buttonGroup.append(this.testButton);
        this.testButton.on("click",$.proxy(function(){
            // if any error happens during the shape code create/execute -> goto the the JS editor
            try {
                new shape_designer.dialog.FigureTest().show();
            }
            catch(exc){
                new shape_designer.dialog.FigureCodeEdit().show();
            }
        },this));

        this.codeButton  = $('<button  data-toggle="tooltip" title="Edit JavaScript code</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_edit_js.png"></button>');
        buttonGroup.append(this.codeButton);
        this.codeButton.on("click",$.proxy(function(){
            new shape_designer.dialog.FigureCodeEdit().show();
        },this));

        this.exportButton  = $('<button  data-toggle="tooltip" title="Export JavaScript code</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_export_js.png"></button>');
        buttonGroup.append(this.exportButton);
        this.exportButton.on("click",$.proxy(function(){
            new shape_designer.dialog.FigureCodeExport().show();
        },this));

        this.markdownButton  = $('<button  data-toggle="tooltip" title="Helpfile for this shape</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_markdown.png"></button>');
        buttonGroup.append(this.markdownButton);
        this.markdownButton.on("click",$.proxy(function(){
            new shape_designer.dialog.FigureMarkdownEdit().show();
        },this));
        */
        
        /************************************************************************************************************************************************************
         *  BEGIN GraphLang buttons
         ************************************************************************************************************************************************************/
        buttonGroup=$("<div class='btn-group'  title='File Operations'></div>");
        this.toolbarDiv.append(buttonGroup);

		this.loadNodeButton  = $('<input type="file" id="node-file-input" class="btn btn-default" />');
        buttonGroup.append(this.loadNodeButton);
        //this.loadNodeButton.button().click($.proxy(function(){}));
		//document.getElementById('node-file-input').addEventListener('change', GraphLang.Utils.readSingleFile2, false);
        this.loadNodeButton.on("change",$.proxy(function(e){
            shape_designer.readSingleFile(e, this.view, this.view.auxView)
        },this));

        this.exportGraphLangButton  = $('<button  data-toggle="tooltip" title="Export JavaScript code</span>" class=\"btn btn-default\" ><img src="./assets/images/toolbar_export_js.png"></button>');
        buttonGroup.append(this.exportGraphLangButton);
        this.exportGraphLangButton.on("click",$.proxy(function(){
            new shape_designer.dialog.GraphLangFigureCodeExport().show();
        },this));

        /************************************************************************************************************************************************************
         *  END GraphLang buttons
         ************************************************************************************************************************************************************/

        $(".toolbarGroup .btn-group").each(function(index, element){
            var $e=$(element);
            $e.prepend("<div class='info-text'>"+$e.attr("title")+"</div>");
        });
       // enable the tooltip for all buttons
       //
       $('*[data-toggle="tooltip"]').tooltip({placement:"bottom", container:"body",delay: { show: 1000, hide: 10 }, html:true});

    },

    // update the visibility of the button regarding to the login state
    onLogginStatusChanged: function(result)
    {
        if(result===true){
            this.loginButton.hide();
            this.openButton.show();
            this.saveButton.show();
       }
        else{
            this.loginButton.show();
            this.openButton.hide();
            this.saveButton.hide();
        }
    },

    /**
     * @method
     * Called if the selection in the cnavas has been changed. You must register this
     * class on the canvas to receive this event.
     * 
     * @param {draw2d.Figure} figure
     */
    onSelectionChanged : function(emitter, event)
    {
        this.deleteButton.prop( "disabled", event.figure===null );
    },
    
    /**
     * @method
     * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
     * can be used to identify the type of event which has occurred.
     * 
     * @template
     * 
     * @param {draw2d.command.CommandStackEvent} event
     **/
    stackChanged:function(event)
    {
        this.undoButton.prop("disabled", !event.getStack().canUndo() );
        this.redoButton.prop("disabled", !event.getStack().canRedo() );
    }
    
});
/* jshint evil:true */

shape_designer.Breadcrumb = Class.extend({
	

	init:function(app, elementId)
	{
		this.html = $("#"+elementId);
	},

	/**
	 * @method
	 * Called if the selection in the canvas has been changed. You must register this
	 * class on the canvas to receive this event.
	 * 
     * @param {draw2d.Canvas} canvas the emitter of the event. In this case it is the canvas.
     * @param {draw2d.Figure} figure
	 */
	update : function(storage)
	{
		var path="UnsavedDocument.shape";
		if(storage.currentFileHandle!==null) {
			path = storage.currentPath.replace(/\//g, "<span class='separator'>/</span>");
			path = path + "<span class='separator'>/</span><span class='filename'>" + storage.currentFileHandle.title + "</span>";
			path = "<span class='separator'>/</span>	<span class='ion-social-github'>&nbsp;</span>" + storage.currentRepository.name + "<span class='separator'>/</span>" + path;
		}
		path = path + "<span class='icon ion-ios-gear-outline'></span>";
		this.html.html(path);

		$("#breadcrumb .icon").on("click",function(){
			new shape_designer.dialog.ShapeSettings().show(app);
		});

	}
});



shape_designer.dialog.About = Class.extend(
{
    init:function(){
     },

	show:function(){
		
	    this.splash = $(
	            '<div id="splash">'+
	            '<div>Draw2D Designer<br>'+
	            '@VERSION@'+
	            '</div>'+
	            '</div>');
	    this.splash.hide();
	    $("body").append(this.splash);
	    
	    this.splash.fadeIn("fast");
	    
	},
	
	hide: function(){
        this.splash.delay(2500)
        .fadeOut( "slow", $.proxy(function() {
            this.splash.remove();
        },this));
	}

      
});  
/* jshint evil: true */

shape_designer.dialog.FigureTest = Class.extend(
{

    init:function(){
    },

	show:function(){
		var _this = this;
		this.animationFrameFunc = $.proxy(this._calculate,this);

        var writer = new shape_designer.GraphLangFigureWriter();
		
		writer.marshal(app.view, "testShape",function(js){
			try{
				eval(js);
			}
			catch(exc){
				alert("Error in shape code. \nRemove error and try it again:\n\n>>    "+exc);
				throw exc;
			}
	        var splash = $(
				'<div class="overlay-scale">'+
	                '<div id="test_canvas">'+
	                '</div>'+
				    ' <div               id="test_info" >Test page for your designed and coded draw2d shape.</div>'+
				    ' <div title="Close" id="test_close" class="icon ion-ios-close-outline"></div>'+
				'<div>');

	        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einf�gen
	        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
	        // zufrieden.
	        $("body").append(splash);

			var canvas    = new draw2d.Canvas("test_canvas");
			_this.canvas = canvas;
			canvas.installEditPolicy( new draw2d.policy.canvas.ShowDotEditPolicy(20,1,"#FF4981"));
			var router = new draw2d.layout.connection.InteractiveManhattanConnectionRouter();
			canvas.installEditPolicy( new draw2d.policy.connection.ComposedConnectionCreatePolicy(
					[
						// create a connection via Drag&Drop of ports
						//
						new draw2d.policy.connection.DragConnectionCreatePolicy({
							createConnection:function(){
								return new draw2d.Connection({
									radius:3,
									stroke:2,
									color: "#129CE4",
									outlineStroke:1,
									outlineColor:"#ffffff",
									router: router});
							}
						}),
						// or via click and point
						//
						new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
							createConnection:function(){
								return new draw2d.Connection({
									radius:3,
									stroke:2,
									color: "#129CE4",
									outlineStroke:1,
									outlineColor:"#ffffff",
									router: router});
							}
						})
					])
			);
			var test = new testShape();
			canvas.add( test,400,160);

			// create and add two nodes which contains Ports (In and OUT)
			//
			var start   = new draw2d.shape.node.Start();
			var toggle1 = new shape_designer.figure.TestSwitch();
			var toggle2 = new shape_designer.figure.TestSwitch();
			var end     = new draw2d.shape.node.End();

			// ...add it to the canvas
			canvas.add( toggle1, 50,150);
			canvas.add( toggle2, 50,200);
			canvas.add( start, 50,250);
			canvas.add( end, 630,250);

			canvas.setCurrentSelection(test);
			var removeDialog = function(){
				_this.simulate=false;
				splash.removeClass("open");
				setTimeout(function(){splash.remove();},400);
			};

			$("#test_close").on("click",removeDialog);
			splash.addClass("open");

			_this.simulate = true;
			requestAnimationFrame(_this.animationFrameFunc);
		});

	},


	_calculate:function()
	{
		// call the "calculate" method if given to calculate the output-port values
		//
		var figures = this.canvas.getFigures().clone().grep(function(f){
			return f.calculate;
		});
		figures.each(function(i,figure){
			figure.calculate();
		});

		// transport the value from oututPort to inputPort
		//
		this.canvas.getLines().each(function(i,line){
			var outPort = line.getSource();
			var inPort  = line.getTarget();
			inPort.setValue(outPort.getValue());
			line.setColor(outPort.getValue()?"#ff5252":"#0000ff");
		});

		if(this.simulate===true){
			requestAnimationFrame(this.animationFrameFunc);
		}
	},



});  
shape_designer.dialog.FigureMarkdownEdit = Class.extend(
{

    init:function()
    {
        this.mdHtml = null;
        this.scrollMap= null;

        this.lineHeight=1.45;
        this.defaults = {
            html:         false,        // Enable HTML tags in source
            xhtmlOut:     false,        // Use '/' to close single tags (<br />)
            breaks:       false,        // Convert '\n' in paragraphs into <br>
            langPrefix:   'language-',  // CSS language prefix for fenced blocks
            linkify:      true,         // autoconvert URL-like texts to links
            linkTarget:   '',           // set target to open link in
            typographer:  true          // Enable smartypants and other sweet transforms
        };

    },

    /**


# AND Gate

## Description
The **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.

A HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.

Therefore, the output is always 0 except when all the inputs are 1.

## Logic table

| INPUT 1   | INPUT   |  OUTPUT    |
|:---------:|:-------:|:----------:|
| Low       | Low     |  Low       |
| High      | Low     |  Low       |
| Low       | High    |  Low       |
| High      | High    |  High      |


     */
	show:function()
    {
        var _this = this;
        this.mdHtml = new Remarkable('full', this.defaults);

        var markdown = app.getConfiguration("markdown");
        markdown = markdown?markdown:"# Header \n## Subheader \nbe nice and write a help file for your new \ncreated ***DigitalTrainingStudion*** shape. \n\n  - point 1\n  - point 2\n  - point 3";
        var splash = $(
            '<div id="FigureMarkdownEdit" class="overlay-scale">'+
            '<pre class="source full-height">'+
            markdown+
            '</pre>'+
            '<div class="preview full-height" >'+
            ''+
            '</div>'+
            ' <div class="header">'+
            '<span class="left">Documentation Editor (<a target="_blank" href="https://en.wikipedia.org/wiki/Markdown">markdown syntax </a>)</span>'+
            '<span class="right">HTML Preview</span></div>'+
            ' <div title="Close" id="test_close" class="icon ion-ios-close-outline"></div>'+
            '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einf�gen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);

        var removeDialog = function(){
            app.setConfiguration({ markdown: _this.editor.getValue()});
            splash.removeClass("open");
            setTimeout(function(){splash.remove();},400);
        };

        $("#test_close").on("click",removeDialog);
        setTimeout(function(){splash.addClass("open");},100);


        // Inject line numbers for sync scroll.
        //
        this.mdHtml.renderer.rules.paragraph_open = function (tokens, idx) {
            var line;
            if (tokens[idx].lines && tokens[idx].level === 0) {
                line = tokens[idx].lines[0];
                return '<p class="line" data-line="' + line + '">';
            }
            return '<p>';
        };

        this.mdHtml.renderer.rules.heading_open = function (tokens, idx) {
            var line;
            if (tokens[idx].lines && tokens[idx].level === 0) {
                line = tokens[idx].lines[0];
                return '<h' + tokens[idx].hLevel + ' class="line" data-line="' + line + '">';
            }
            return '<h' + tokens[idx].hLevel + '>';
        };

        this.$preview= $("#FigureMarkdownEdit .preview");
        this.$source = $('#FigureMarkdownEdit .source');

        var editor   = ace.edit(this.$source[0]),
            session  = editor.getSession();
        this.editor = editor;
        editor.moveCursorTo(5,0);
        editor.focus();

        session.setMode("ace/mode/markdown");

        session.on('changeScrollTop', _this._debounce($.proxy(_this.syncScroll, _this), 50, false));

        editor.keyBinding.addKeyboardHandler({ handleKeyboard :  _this._debounce($.proxy(_this.updateResult, _this), 300, false) });

        this.updateResult();
    },

    updateResult: function()
    {
        var source = this.editor.getValue();
        this.$preview.html(this.mdHtml.render(source));
        // reset lines mapping cache on content update
        this.scrollMap = null;
    },


    // Build offsets for each line (lines can be wrapped)
    // That's a bit dirty to process each line everytime, but ok for demo.
    // Optimizations are required only for big texts.
    buildScrollMap:function()
    {
        var _this = this;

        var i, offset, nonEmptyList, pos, a, b, lineHeightMap, linesCount,
            acc, sourceLikeDiv,
            _scrollMap;

        sourceLikeDiv = $('<div />').css({
            position: 'absolute',
            visibility: 'hidden',
            height: 'auto',
            width: $("#FigureMarkdownEdit .left")[0].clientWidth,
            'font-size':   '10pt',
            'font-family': 'tahoma',
            'line-height': this.lineHeight,
            'white-space': 'nowrap'
        }).appendTo('body');

        offset = this.$preview.scrollTop() - this.$preview.offset().top -40;
        _scrollMap = [];
        nonEmptyList = [];
        lineHeightMap = [];

        acc = 0;
        this.editor.getValue().split('\n').forEach(function(str) {
            var h, lh;

            lineHeightMap.push(acc);

            if (str.length === 0) {
                acc++;
                return;
            }

            sourceLikeDiv.text(str);
            h  = parseFloat(sourceLikeDiv.css('height'));
            lh = parseFloat(_this.lineHeight);
            acc += Math.round(h / lh);
        });
        sourceLikeDiv.remove();
        lineHeightMap.push(acc);
        linesCount = acc;

        for (i = 0; i < linesCount; i++) { _scrollMap.push(-1); }

        nonEmptyList.push(0);
        _scrollMap[0] = 0;

        $('.line').each(function(n, el) {
            var $el = $(el), t = $el.data('line');
            if (t === '') { return; }
            t = lineHeightMap[t];
            if (t !== 0) { nonEmptyList.push(t); }
            _scrollMap[t] = Math.round($el.offset().top + offset);
        });

        nonEmptyList.push(linesCount);
        _scrollMap[linesCount] = this.$preview[0].scrollHeight;

        pos = 0;
        for (i = 1; i < linesCount; i++) {
            if (_scrollMap[i] !== -1) {
                pos++;
                continue;
            }

            a = nonEmptyList[pos];
            b = nonEmptyList[pos + 1];
            _scrollMap[i] = Math.round((_scrollMap[b] * (i - a) + _scrollMap[a] * (b - i)) / (b - a));
        }

        return _scrollMap;
    },


    syncScroll: function(scroll)
    {
        var    lineNo, posTo;
        lineNo = Math.floor(scroll / this.lineHeight);
        if (!this.scrollMap) { this.scrollMap = this.buildScrollMap(); }
        posTo = this.scrollMap[lineNo];
           this.$preview.stop(true).animate({
            scrollTop: posTo
        }, 400, 'linear');
    },

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _debounce: function (func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
});

shape_designer.dialog.FigureCodeExport = Class.extend({
    init:function(){
	},

	show:function(){

		var writer = new shape_designer.FigureWriter();
		
		writer.marshal(app.view, "testShape",function(js){

	        var splash = $(
	                '<div class="overlay-scale"><pre id="export_overlay" class="prettyprint">'+
                    js+
	                '</pre>'+
					' <div title="Close" id="export_close"><i class="icon ion-ios-close-outline"></i></div>'+
			        ' <div title="Copy to Clipboard" id="export_clipboard"><i class="icon ion-clipboard"></i></div></div>'
	                );
	        $("body").append(splash);

	         var removeDialog = function(){
				 splash.removeClass("open");
				 setTimeout(function(){splash.remove();},400);
             };
             
	         $("#export_close").on("click",removeDialog);
	         prettyPrint();
	         
	         setTimeout(function(){splash.addClass("open");},100);

			$("#export_clipboard").off("click").on("click",function(ev){

				var copyElement = document.createElement('textarea');
				copyElement.innerHTML=js;
				copyElement = document.body.appendChild(copyElement);
				copyElement.select();
				document.execCommand('copy');
				copyElement.remove();

				toastr.options = {
					"closeButton": false,
					"debug": false,
					"newestOnTop": false,
					"progressBar": false,
					"positionClass": "toast-top-right",
					"preventDuplicates": true,
					"onclick": null,
					"showDuration": "3000",
					"hideDuration": "2000",
					"timeOut": "500",
					"extendedTimeOut": "2000",
					"showEasing": "swing",
					"hideEasing": "linear",
					"showMethod": "fadeIn",
					"hideMethod": "fadeOut"
				};

				toastr.info("Code copied to clipboard");
			});
		});

	}      
});  

shape_designer.dialog.FigureCodeEdit = Class.extend(
{
    init:function(){
	},

	show:function(){

        var code = app.getConfiguration("code");
        var splash = $(
                '<pre id="code_overlay">'+
                code+
                '</pre>'+
                '<div title="Run"   id="test_run"  ><i class="icon ion-android-arrow-dropright-circle"></i></div>'+
                '<div title="Close" id="code_close"><i class="icon ion-ios-close-outline"></i></div>'
        );
        splash.hide();
        $("body").append(splash);
        splash.fadeIn();

        var before=function(obj, method, wrapper) {
            var orig = obj[method];
            obj[method] = function() {
                var args = Array.prototype.slice.call(arguments);
                return wrapper.call(this, function(){
                    return orig.apply(obj, args);
                }, args);
            };

            return obj[method];
        };

        var intersects=function(range) {
            return editor.getSelectionRange().intersects(range);
        };

        var preventReadonly=function(next, args) {
            if (intersects(range)) return;
            next();
        };

        var lines = code.split("\n");
        var last =  lines.length-1;
        var first = lines.findIndex(function(element, index, array){return element.startsWith("testShape");});

        var editor   = ace.edit("code_overlay"),
            session  = editor.getSession(),
            Range    = require("ace/range").Range,
            range    = new Range(0, 0, first, lines[first].length),
            range2   = new Range(last, 0, last, lines[last].length);

        session.addMarker(range, "readonly-highlight");
        session.addMarker(range2, "readonly-highlight");
        session.setMode("ace/mode/javascript");
        session.setUseWrapMode(true);
        editor.moveCursorTo(first+1,0);
        editor.focus();

        editor.keyBinding.addKeyboardHandler({
            handleKeyboard : function(data, hash, keyString, keyCode, event) {
                if (hash === -1 || (keyCode <= 40 && keyCode >= 37)) return false;

                if (intersects(range) ||intersects(range2)) {
                    return {command:"null", passEvent:false};
                }
            }
        });

        before(editor, 'onPaste', preventReadonly);
        before(editor, 'onCut',   preventReadonly);

        range.start  = session.doc.createAnchor(range.start);
        range.end    = session.doc.createAnchor(range.end);
        range.end.$insertRight = true;

        range2.start  = session.doc.createAnchor(range2.start);
        range2.end    = session.doc.createAnchor(range2.end);
        range2.end.$insertRight = true;

         $("#code_close").on("click",function(){
             var code = editor.getValue();
             app.setConfiguration({code:code});
             splash.fadeOut(function(){
                 splash.remove();
             });
         });

        $("#test_run").on("click",function(){
            var code = editor.getValue();
            app.setConfiguration({code:code});
            new shape_designer.dialog.FigureTest().show();
        });
	}

      
});  
shape_designer.dialog.FileOpen = Class.extend({

    /**
     * @constructor
     *
     */
    init:function(storage){
        this.storage=storage;
    },

    /**
     * @method
     *
     * Open the file picker and load the selected file.<br>
     *
     * @param {Function} successCallback callback method if the user select a file and the content is loaded
     * @param {Function} errorCallback method to call if any error happens
     *
     * @since 4.0.0
     */
    show: function(successCallback)
    {
        $('#githubFileSelectDialog').modal('show');

        // Select first a ROOT repository if we didn'T have before
        if(this.storage.currentRepository===null) {
            this.fetchRepositories(successCallback);
        }
        // else reopen the already selected directory
        else{
            this.fetchPathContent(this.storage.currentPath, successCallback);
        }
    },

    /**
     * @private
     *
     * @param successCallback
     * @param errorCallback
     * @param abortCallback
     */
    fetchRepositories: function(successCallback)
    {
        var _this = this;

        // fetch all repositories of the related user
        //
        this.storage.octo.user.repos.fetch(function(param, repos){

            repos.sort(function(a, b)
            {
                if ( a.name.toLowerCase() < b.name.toLowerCase() )
                    return -1;
                if ( a.name.toLowerCase() > b.name.toLowerCase() )
                    return 1;
                return 0;
            });

            _this.storage.repositories = repos;
            var compiled = Hogan.compile(
                '         {{#repos}}'+
                '         <a href="#" class="list-group-item repository text-nowrap" data-type="repository" data-id="{{id}}">'+
                '         <span class="fa fa-github"></span>'+
                '         {{{name}}}'+
                '         </a>'+
                '         {{/repos}}'
            );

            var output = compiled.render({
                repos: repos
            });

            $("#githubFileSelectDialog .githubNavigation").html($(output));
            $("#githubFileSelectDialog .githubNavigation").scrollTop(0);

            $(".repository").on("click", function(){
                var repositoryId = $(this).data("id");
                _this.storage.currentRepository = $.grep(_this.storage.repositories, function(repo){return repo.id === repositoryId;})[0];
                _this.fetchPathContent("",successCallback);
            });
        });
    },

    fetchPathContent: function( newPath, successCallback )
    {
        var _this = this;

        this.storage.currentRepository.contents(newPath).fetch(function(param, files){
            // sort the reusult
            // Directories are always on top
            //
            files.sort(function(a, b)
            {
                if(a.type===b.type) {
                    if (a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                    if (a.name.toLowerCase() > b.name.toLowerCase())
                        return 1;
                    return 0;
                }
                if(a.type==="dir"){
                    return -1;
                }
                return 1;
            });

            _this.storage.currentPath = newPath;
            var compiled = Hogan.compile(
                '         <a href="#" class="list-group-item githubPath" data-type="{{parentType}}" data-path="{{parentPath}}" >'+
                '             <span class="glyphicon glyphicon-menu-left"></span>'+
                '             ..'+
                '         </a>'+
                '         {{#files}}'+
                '           <a href="#" data-draw2d="{{draw2d}}" class="list-group-item githubPath text-nowrap" data-type="{{type}}" data-path="{{currentPath}}{{name}}" data-id="{{id}}" data-sha="{{sha}}">'+
                '              <span class="glyphicon {{icon}}"></span>'+
                '              {{{name}}}'+
                '           </a>'+
                '         {{/files}}'
            );


            var parentPath =  _this.storage.dirname(newPath);
            var output = compiled.render({
                parentType: parentPath===newPath?"repository":"dir",
                parentPath: parentPath,
                currentPath: _this.storage.currentPath.length===0?_this.storage.currentPath:_this.storage.currentPath+"/",
                files: files,
                draw2d:function(){
                    return this.name.endsWith(conf.fileSuffix);
                },
                icon: function(){
                    if(this.name.endsWith(conf.fileSuffix)){
                        return "fa fa-object-group";
                    }
                    return this.type==="dir"?"fa fa-folder-o":"fa fa-file-o";
                }
            });

            $("#githubFileSelectDialog .githubNavigation").html($(output));
            $("#githubFileSelectDialog .githubNavigation").scrollTop(0);

            $(".githubPath[data-type='repository']").on("click", function(){
                _this.fetchRepositories(successCallback);
            });

            $(".githubPath[data-type='dir']").on("click", function(){
                _this.fetchPathContent( $(this).data("path"), successCallback);
            });

            $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", function(){
                var path = $(this).data("path");
                _this.storage.load(_this.storage.currentRepository.fullName, path, function(content){
                    successCallback(content);
                    $('#githubFileSelectDialog').modal('hide');
                });
            });
        });
    }
});
shape_designer.dialog.FileSave = Class.extend({

    /**
     * @constructor
     *
     */
    init:function(storage)
    {
        this.storage=storage;
    },

    /**
     * @method
     *
     * Open the file picker and load the selected file.<br>
     *
     * @param {Function} successCallback callback method if the user select a file and the content is loaded
     * @param {Function} errorCallback method to call if any error happens
     *
     * @since 4.0.0
     */
    show: function(canvas)
    {
        var _this = this;

        if(this.storage.currentFileHandle===null){
            this.storage.currentFileHandle= {
                title:"DocumentName",
                sha:null
            };
        }

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl) {

            $("#githubSaveFileDialog .githubFilePreview").attr("src", imageDataUrl);
            $("#githubSaveFileDialog .githubFileName").val(_this.storage.currentFileHandle.title);

            $('#githubSaveFileDialog').on('shown.bs.modal', function () {
                $(this).find('input:first').focus();
            });
            $("#githubSaveFileDialog").modal("show");

            // Button: Commit to GitHub
            //
            $("#githubSaveFileDialog .okButton").on("click", function () {
                var writer = new draw2d.io.json.Writer();
                writer.marshal(canvas, function (json, base64) {

                    var config = {
                        message: $("#githubSaveFileDialog .githubCommitMessage").val(),
                        content: base64,
                        sha: _this.storage.currentFileHandle.sha
                    };

                    var currentName = _this.storage.basename(_this.storage.currentFileHandle.path);
                    var newName = $("#githubSaveFileDialog .githubFileName").val();
                    if(currentName!= newName){
                        config.sha=null;
                        _this.storage.currentFileHandle.path = _this.storage.dirname(_this.storage.currentFileHandle.path )+"/"+newName;
                    }
                    _this.storage.currentRepository.contents(_this.storage.currentFileHandle.path).add(config)
                        .then(function (info) {
                            _this.storage.currentFileHandle.sha = info.content.sha;
                            $('#githubSaveFileDialog').modal('hide');
                        });
                });
            });

        }, canvas.getBoundingBox().scale(10, 10));
    }

});
shape_designer.dialog.FileSaveAs = Class.extend({

    /**
     * @constructor
     *
     */
    init:function(storage)
    {
        this.storage=storage;

        this.sha = null;
    },

    /**
     * @method
     *
     * Open the file picker and load the selected file.
     *
     * @since 4.0.0
     */
    show: function(canvas)
    {
        var _this = this;

        if(this.storage.currentFileHandle===null){
            this.storage.currentFileHandle = {
                title:"DocumentName"+conf.fileSuffix,
                sha:null
            };
        }

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl) {
            // Select first a ROOT repository if we didn'T have before
            if(_this.storage.currentRepository===null) {
                $("#githubFileSaveAsDialog .okButton").prop( "disabled", true );
                _this.fetchRepositories();
            }
            // else reopen the already selected directory
            else{
                $("#githubFileSaveAsDialog .okButton").prop( "disabled", false );
                _this.fetchPathContent(_this.storage.currentPath);
            }

            $('#githubFileSaveAsDialog').modal('show');

            $("#githubFileSaveAsDialog .githubFilePreview").attr("src", imageDataUrl);
            $("#githubFileSaveAsDialog .githubFileName").val(_this.storage.currentFileHandle.title);

            $('#githubFileSaveAsDialog').off('shown.bs.modal').on('shown.bs.modal', function () {
                $(this).find('input:first').focus();
            });
            $("#githubFileSaveAsDialog").modal("show");

            // Button: Commit to GitHub
            //
            $("#githubFileSaveAsDialog .okButton").off('click').on("click", function () {
                var writer = new draw2d.io.json.Writer();
                writer.marshal(canvas, function (json, base64) {
                    var title = $("#githubFileSaveAsDialog .githubFileName").val();
                    // get the SHA if any exists....or null
                    var sha  =$("*[data-title='"+title+"']").data("sha");
                    var config = {
                        message: $("#githubSaveFileDialog .githubCommitMessage").val(),
                        content: base64,
                        sha: sha
                    };

                    _this.storage.currentRepository.contents(_this.storage.currentPath+"/"+title).add(config)
                        .then(function (info) {
                            _this.storage.currentFileHandle = {
                                sha  : info.content.sha,
                                path :_this.storage.currentPath+"/"+title,
                                title: title,
                                content: json
                            };
                            $('#githubFileSaveAsDialog').modal('hide');
                        });
                });
            });

        }, canvas.getBoundingBox().scale(10, 10));
    },

    /**
     * @private
     *
     */
    fetchRepositories: function()
    {
        var _this = this;

        // fetch all repositories of the related user
        //
        this.storage.octo.user.repos.fetch(function(param, repos){

            repos.sort(function(a, b)
            {
                if ( a.name.toLowerCase() < b.name.toLowerCase() )
                    return -1;
                if ( a.name.toLowerCase() > b.name.toLowerCase() )
                    return 1;
                return 0;
            });

            _this.storage.repositories = repos;
            var compiled = Hogan.compile(
                '         {{#repos}}'+
                '         <a  href="#" class="list-group-item repository text-nowrap" data-type="repository" data-id="{{id}}">'+
                '         <span title="GitHub Repository" class="fa fa-github"></span>'+
                '         {{{name}}}'+
                '         </a>'+
                '         {{/repos}}'
            );

            var output = compiled.render({
                repos: repos
            });
            $("#githubFileSaveAsDialog .githubNavigation").html($(output));
            $("#githubFileSaveAsDialog .githubNavigation").scrollTop(0);

            $(".repository").on("click", function(){
                var $this = $(this);
                var repositoryId = $this.data("id");
                _this.storage.currentRepository = $.grep(_this.storage.repositories, function(repo){return repo.id === repositoryId;})[0];
                _this.fetchPathContent("");
            });
        });
    },

    fetchPathContent: function( newPath )
    {
        var _this = this;

        this.storage.currentRepository.contents(newPath).fetch(function(param, files){
            // sort the result
            // Directories are always on top
            //
            files.sort(function(a, b)
            {
                if(a.type===b.type) {
                    if (a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                    if (a.name.toLowerCase() > b.name.toLowerCase())
                        return 1;
                    return 0;
                }
                if(a.type==="dir"){
                    return -1;
                }
                return 1;
            });

            _this.storage.currentPath = newPath;
            var compiled = Hogan.compile(
                '         <a href="#" class="list-group-item githubPath" data-type="{{parentType}}" data-path="{{parentPath}}" >'+
                '             <span class="glyphicon glyphicon-menu-left"></span>'+
                '             ..'+
                '         </a>'+
                '         {{#files}}'+
                '           <a href="#" data-draw2d="{{draw2d}}" class="list-group-item githubPath text-nowrap" data-type="{{type}}" data-path="{{currentPath}}{{name}}" data-title="{{name}}" data-id="{{id}}" data-sha="{{sha}}">'+
                '              <span class="glyphicon {{icon}}"></span>'+
                '              {{{name}}}'+
                '           </a>'+
                '         {{/files}}'
            );


            var parentPath =  _this.dirname(newPath);
            var output = compiled.render({
                parentType: parentPath===newPath?"repository":"dir",
                parentPath: parentPath,
                currentPath: _this.storage.currentPath.length===0?_this.storage.currentPath:_this.storage.currentPath+"/",
                files: files,
                draw2d:function(){
                    return this.name.endsWith(conf.fileSuffix);
                },
                icon: function(){
                    if(this.name.endsWith(conf.fileSuffix)){
                        return "fa fa-object-group";
                    }
                    return this.type==="dir"?"fa fa-folder-o":"fa fa-file-o";
                }
            });
            $("#githubFileSaveAsDialog .githubNavigation").html($(output));
            $("#githubFileSaveAsDialog .githubNavigation").scrollTop(0);

            //we are in a folder. Create of a file is possible now
            //
            $("#githubFileSaveAsDialog .okButton").prop( "disabled", false );

            $(".githubPath[data-type='repository']").on("click", function(){
                _this.fetchRepositories();
            });

            $(".githubPath[data-type='dir']").on("click", function(){
                _this.fetchPathContent( $(this).data("path"));
            });

            $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", function(){
                var path = $(this).data("path");
                var sha  = $(this).data("sha");
                var title= path.split(/[\\/]/).pop(); // basename
                $("#githubFileSaveAsDialog .githubFileName").val(title);
            });
        });
    },




    dirname: function(path)
    {
        if (path.length === 0)
            return "";

        var segments = path.split("/");
        if (segments.length <= 1)
            return "";
        return segments.slice(0, -1).join("/");
    }

});
shape_designer.dialog.ShapeSettings = Class.extend({

    /**
     * @constructor
     *
     */
    init:function(){

    },

    /**
     * @method
     *
     * Open the file picker and load the selected file.<br>
     *
     * @param {Function} successCallback callback method if the user select a file and the content is loaded
     * @param {Function} errorCallback method to call if any error happens
     *
     * @since 4.0.0
     */
    show: function(app)
    {
        var _this = this;
        var baseClass = app.getConfiguration().baseClass;

        $("#shapeSettingsDialog").modal("show");

        $("#shapeSettingsDialog .shapeBaseClass input[type='radio'][data-class='"+baseClass+"']").prop("checked",true);

        // Button: Commit to GitHub
        //
        $("#shapeSettingsDialog .okButton").on("click", function () {
            var baseClass = ($("#shapeSettingsDialog .shapeBaseClass input[type='radio']:checked").data("class"));
            app.setConfiguration({baseClass:baseClass});
            console.log(app.getConfiguration());
            $('#shapeSettingsDialog').modal('hide');
        });
    }

});

shape_designer.filter.Filter = Class.extend({
    NAME : "shape_designer.filter.Filter",
	
	init:function(){
	},

	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
	 * can be used to identify the type of event which has occurred.
	 * 
	 * @template
	 * 
	 **/
	apply:function(figure, attributes)
    {
	},
	
	onInstall: function(figure)
    {
	    
	},
	
	insertPane: function(figure, $parent)
    {

    },
   
    removePane:function(){
    },
    
    getPersistentAttributes : function(relatedFigure)
    {

        var memento = {};
        memento.name = this.NAME;
        
        return memento;
    },
    
    setPersistentAttributes : function(relatedFigure, memento)
    {

    }

});






shape_designer.filter.FanoutFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.FanoutFilter",
    
	init:function(){
	    this._super();
	},
	
	insertPane: function(figure, $parent){
       var cssScope = this.NAME.replace(/[.]/g, "_");
	    
	   $parent.append('<div id="'+cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+cssScope+'_width_panel">'+
                	   '     Maximal fan out'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+cssScope+'_width_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                 	   '       <input id="filter_'+cssScope+'_fanout" type="text" value="'+figure.getMaxFanOut()+'" name="filter_'+cssScope+'_fanout" class="form-control" />'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

	       $("input[name='filter_"+cssScope+"_fanout']").TouchSpin({
	           min: 0,
	           max: 50,
	           step: 1,
	           maxboostedstep: 1,
	           postfix: 'px'
	       });
           $("input[name='filter_"+cssScope+"_fanout']").on("change", $.proxy(function(){
               this.setMaxFanOut(parseInt($("input[name='filter_"+cssScope+"_fanout']").val()));
           },figure));


	   },
	   
	   removePane:function()
	   {
	   },
	   
	   onInstall:function(figure)
	   {
	   }
});






shape_designer.filter.StrokeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.StrokeFilter",
    
	init:function(){
	    this._super();
	    this.colorPicker = null;
	},
	
	insertPane: function(figure, $parent){
       var cssScope = this.NAME.replace(/[.]/g, "_");
	    
	   $parent.append('<div id="'+cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+cssScope+'_width_panel">'+
                	   '     Stroke'+
                       '    <span id="button_remove_'+cssScope+'" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+cssScope+'_width_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                 	   '       <input id="filter_'+cssScope+'_width" type="text" value="'+figure.getStroke()+'" name="filter_'+cssScope+'_width" class="form-control" />'+
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="filter_'+cssScope+'_color" type="text" value="" name="stroke_'+cssScope+'_color" class="form-control color"/>'+
                       '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

	       $("input[name='filter_"+cssScope+"_width']").TouchSpin({
	           min: 0,
	           max: 50,
	           step: 1,
	           maxboostedstep: 1,
	           postfix: 'px'
	       });
           $("input[name='filter_"+cssScope+"_width']").on("change", $.proxy(function(){
               this.setStroke(parseInt($("input[name='filter_"+cssScope+"_width']").val()));
           },figure));

           
           var picker = this.colorPicker  = new jscolor.color(document.getElementById('filter_'+cssScope+'_color'), {});
           this.colorPicker.fromString(figure.getColor().hash());
           this.colorPicker.onImmediateChange= $.proxy(function(){
              this.setColor("#"+picker.toString());
           },figure);
           
           $("#button_remove_"+cssScope).on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setStroke(0);
               $("#"+cssScope+"_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#'+cssScope+'_container').remove();});
           },this));

	   },
	   
	   removePane:function(){
	       if(this.colorPicker !==null){
	           this.colorPicker.hidePicker();
	       }
	   },
	   
	    onInstall:function(figure){
	        figure.setStroke(1);
	    }

});






shape_designer.filter.SizeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.SizeFilter",
    
	init:function(){
	    this._super();
	    this.block = false;
	},
	
	insertPane: function(figure, $parent){

        $parent.append('<div id="size_filter_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#size_width_panel">'+
                	   '     Size'+
                	   ' </div>'+
                	   ' <div class="panel-body  collapse in" id="size_width_panel">'+
                	   '   <div class="form-group">'+
                       '       <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '       <input id="filter_width"  type="text" value="'+figure.getWidth()+'"  name="filter_width"  class="form-control" />'+
                       '       <input id="filter_height" type="text" value="'+figure.getHeight()+'" name="filter_height" class="form-control" />'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

           $("#filter_width").TouchSpin({
               min: 0,
               max: 600,
               step: 1,
               maxboostedstep: 10,
               postfix: 'width'
           });

           $("#filter_height").TouchSpin({
               min: 0,
               max: 600,
               step: 1,
               maxboostedstep: 10,
               postfix: 'height'
           });

           $("input[name='filter_width']").on("change", $.proxy(function(){
               try{
                   this.block = true;
                   figure.setWidth(parseInt($("input[name='filter_width']").val()));
               }
               finally{
                   this.block = false;
               }
               
           },this));

           $("input[name='filter_height']").on("change", $.proxy(function(){
               try{
                   this.block = true;
                   figure.setHeight(parseInt($("input[name='filter_height']").val()));
               }
               finally{
                   this.block = false;
               }
           },this));
	   },

	   apply:function(figure, attributes)
       {
	       if(this.block===true){
	           return;
	       }

           $("input[name='filter_width']").val(figure.getWidth());
           $("input[name='filter_height']").val(figure.getHeight());
	   },

	   removePane:function()
       {
	   },
	   
	   onInstall:function(figure)
       {
	   }

});






shape_designer.filter.OutlineStrokeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.OutlineStrokeFilter",
    
	init:function(){
	    this._super();
	    this.colorPicker = null;
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="outlinestroke_filter_conainer" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#outlinestroke_width_panel">'+
                	   '     Outline Stroke'+
                       '    <span id="button_remove_OutlineStrokeFilter" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="outlinestroke_width_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                 	   '       <input id="filter_outlinestroke" type="text" value="'+figure.getOutlineStroke()+'" name="filter_outlinestroke" class="form-control" />'+
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="filter_outlinestroke_color" type="text" value="" name="outlinestroke-color" class="form-control color"/>'+
                       '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

	       $("input[name='filter_outlinestroke']").TouchSpin({
	           min: 0,
	           max: 50,
	           step: 1,
	           boostat: figure.getOutlineStroke(),
	           maxboostedstep: 10,
	           postfix: 'px'
	       });
           $("input[name='filter_outlinestroke']").on("change", $.proxy(function(){
               this.setOutlineStroke(parseFloat($("input[name='filter_outlinestroke']").val()));
           },figure));

           
           var picker = this.colorPicker  = new jscolor.color(document.getElementById('filter_outlinestroke_color'), {});
           this.colorPicker.fromString(figure.getOutlineColor().hash());
           this.colorPicker.onImmediateChange= $.proxy(function(){
              this.setOutlineColor("#"+picker.toString());
           },figure);
           
           $("#button_remove_OutlineStrokeFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setOutlineStroke(0);
               $("#outlinestroke_filter_conainer").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#outlinestroke_filter_conainer').remove();});
           },this));

	   },
	   
	   removePane:function(){
	       if(this.colorPicker !==null){
	           this.colorPicker.hidePicker();
	       }
	   },
	   
	    onInstall:function(figure){
	        figure.setOutlineStroke(1);
	        figure.setOutlineColor("#ff0000");
	    }

});






shape_designer.filter.BlurFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.BlurFilter",
    
	init:function(){
	    this._super();
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){
	   $parent.append('<div id="'+this.cssScope+'_filter_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_width_panel">'+
                	   '     Blur'+
                       '    <span id="button_remove_'+this.cssScope+'" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+this.cssScope+'_blur_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                 	   '       <input id="filter_blur" type="text" value="'+figure.getBlur()+'"  name="filter_blur" class="form-control" />'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

           $("#filter_blur").TouchSpin({
               min:  0,
               max:  5,
               step: 1
           });

           $("#filter_blur").on("change", $.proxy(function(){
               this.setBlur(parseInt($("#filter_blur").val()));
           },figure));

           
           $("#button_remove_"+this.cssScope).on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setBlur(0);
               $('#'+this.cssScope+'_filter_container').animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#'+this.cssScope+'_filter_container').remove();});
           },this));

	   }

});






shape_designer.filter.FillColorFilter = shape_designer.filter.Filter.extend({
	NAME : "shape_designer.filter.FillColorFilter",
	
	init:function(){
	    this._super();
	    this.colorPicker = null;
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="fill_color_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#color_fill_panel">'+
                	   '    Color Fill'+
                       '    <span id="button_remove_FillColorFilter" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   ' </div>'+
                	   
                	   ' <div class="panel-body collapse in" id="color_fill_panel">'+
                       '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '      <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="filter_color_fill" type="text" value="" name="filter_color_fill" class="form-control color"/>'+
                       '       </div>'+
                       '    </div>'+
                       ' </div>'+
                	   '</div>');
           
           var picker = this.colorPicker  = new jscolor.color(document.getElementById('filter_color_fill'), {});
           this.colorPicker.fromString(figure.getBackgroundColor().hash());
           this.colorPicker.onImmediateChange= $.proxy(function(){
              this.setBackgroundColor("#"+picker.toString());
           },figure);
           
           $("#button_remove_FillColorFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setBackgroundColor(null);
               $("#fill_color_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#fill_color_container').remove();});
           },this));
	},
	  
	onInstall:function(figure){
        figure.setBackgroundColor("#f0f3f3");
	},
	
	removePane:function(){
	    if(this.colorPicker !==null){
	        this.colorPicker.hidePicker();
	    }
	}
	

});






shape_designer.filter.FontColorFilter = shape_designer.filter.Filter.extend({
	NAME : "shape_designer.filter.FontColorFilter",
	
	init:function(){
	    this._super();
	    this.colorPicker = null;
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="fill_color_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#color_fill_panel">'+
                	   '    Font Color'+
                       '    <span id="button_remove_FillColorFilter" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   ' </div>'+
                	   
                	   ' <div class="panel-body collapse in" id="color_fill_panel">'+
                       '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '      <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="filter_color_fill" type="text" value="" name="filter_color_fill" class="form-control color"/>'+
                       '       </div>'+
                       '    </div>'+
                       ' </div>'+
                	   '</div>');
           
           var picker = this.colorPicker  = new jscolor.color(document.getElementById('filter_color_fill'), {});
           this.colorPicker.fromString(figure.getFontColor().hash());
           this.colorPicker.onImmediateChange= $.proxy(function(){
              this.setFontColor("#"+picker.toString());
           },figure);
           
           $("#button_remove_FillColorFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setFontColor(null);
               $("#fill_color_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#fill_color_container').remove();});
           },this));
	},
	  
	onInstall:function(figure){
        figure.setFontColor("#000000");
	},
	
	removePane:function(){
	    if(this.colorPicker !==null){
	        this.colorPicker.hidePicker();
	    }
	}
	

});






shape_designer.filter.FontSizeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.FontSizeFilter",
    
	init:function(){
	    this._super();
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="fontsize_filter_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#fontsize_width_panel">'+
                	   '     Font Size'+
                       '    <span id="button_remove_FontSizeFilter" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="fontsize_width_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                 	   '       <input id="filter_fontsize" type="text" value="'+figure.getFontSize()+'" name="filter_fontsize" class="form-control" />'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

           $("#filter_fontsize").TouchSpin({
               min: 4,
               max: 300,
               step: 1,
               boostat: figure.getFontSize(),
               maxboostedstep: 10,
               postfix: 'px'
           });

           $("input[name='filter_fontsize']").on("change", $.proxy(function(){
               this.setFontSize(parseInt($("input[name='filter_fontsize']").val()));
           },figure));

           
           $("#button_remove_FontSizeFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setFontSize(12);
               $("#fontsize_filter_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#fontsize_filter_container').remove();});
           },this));

	   },
	   
	   removePane:function(){
	   },
	   
	    onInstall:function(figure){
	     //   figure.setFontSize(1);
	    }

});






shape_designer.filter.OpacityFilter = shape_designer.filter.Filter.extend({
    NAME : "shape_designer.filter.OpacityFilter",
	
	init:function(){
	    this._super();
	},
	
	insertPane: function(figure, $parent){
	    
	       $parent.append('<div id="opacity_container" class="panel panel-default">'+
                   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#opacity_panel">'+
                   '    Opacity'+
                   '    <span id="button_remove_OpacityFilter" class="btn btn-mini glyphicon icon ion-ios-close-outline pull-right" ></span>'+
                   '</div>'+
                   ' <div class="panel-body collapse in" id="opacity_panel">'+
                   '   <div class="form-group">'+
                   '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                   '      <div class="input-group">'+
                   '         <input class="form-control" id="filter_opacity" type="text" value="'+parseInt(figure.getAlpha()*100)+'" />'+
                   '      </div>'+
                   '   </div>'+
                   ' </div>'+
                   '</div>');

           $("#filter_opacity").TouchSpin({
               min: 0,
               max: 100,
               step: 5,
               boostat: parseInt(figure.getAlpha()*100),
               maxboostedstep: 10,
               postfix: '%'
           });
           $("#filter_opacity").on("change", $.proxy(function(){
               this.setAlpha(parseInt($("#filter_opacity").val())/100.0);
           },figure));
           
           $("#button_remove_OpacityFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setAlpha(1);
               $("#opacity_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#opacity_container').remove();});
           },this));
	   },
	   
	   removePane:function(){
	   }
	

});






shape_designer.filter.LinearGradientFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.LinearGradientFilter",
    
	init:function(){
	    this._super();
	    this.colorPicker1 = null;
	    this.colorPicker2 = null;
	    
	    this.startColor ="#f0f0f0";
	    this.endColor   ="#3f3f3f";
	    this.angle      =0;
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="'+this.cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
                	   '     Linear Gradient'+
                       '    <span id="button_remove_'+this.cssScope+'" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '      <div class="input-group text-center" style="width:100%" >'+
                 	   '           <div id="'+this.cssScope+'_angle" />'+
                       '      </div> '+ 
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="'+this.cssScope+'_color1" type="text" value="'+this.startColor+'" class="form-control color"/>'+
                       '       </div>'+
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="'+this.cssScope+'_color2" type="text" value="'+this.endColor+'" class="form-control color"/>'+
                       '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

    	   $('#'+this.cssScope+'_angle').anglepicker({
    	       start: function(e, ui) {
    
    	       },
    	       change: $.proxy(function(e, ui) {
    	           this.angle = ui.value;
    	              figure.repaint();
     	       },this),
    	       stop: function(e, ui) {
    
    	       },
    	       value: this.angle
    	   });
          
           var picker1 = this.colorPicker1  = new jscolor.color($("#"+this.cssScope+'_color1')[0], {});
           this.colorPicker1.fromString(this.startColor);
           this.colorPicker1.onImmediateChange= $.proxy(function(){
              this.startColor= "#"+picker1.toString();
              figure.repaint();
           },this);
           
           var picker2 = this.colorPicker2  = new jscolor.color($("#"+this.cssScope+'_color2')[0], {});
           this.colorPicker2.fromString(this.endColor);
           this.colorPicker2.onImmediateChange= $.proxy(function(){
              this.endColor ="#"+picker2.toString();
              figure.repaint();
           },this);
 
           
           $("#button_remove_"+this.cssScope).on("click",$.proxy(function(){
               figure.removeFilter(this);
               $('#'+this.cssScope+'_container').animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#'+this.cssScope+'_container').remove();});
           },this));

	   },
	   
	    apply:function(figure, attributes){
	        attributes.fill = this.angle+"-"+this.endColor+"-"+this.startColor;    
	    },
	    
	   removePane:function(){
	       if(this.colorPicker1 !==null){
	           this.colorPicker1.hidePicker();
	       }
	       if(this.colorPicker2 !==null){
	           this.colorPicker2.hidePicker();
	       }
	   },
	   
	    onInstall:function(figure){
	        figure.setStroke(1);
	    },
	    
	    getPersistentAttributes : function(relatedFigure){   
	        var memento = this._super(relatedFigure);
	        
            memento.startColor = this.startColor;
            memento.endColor = this.endColor;
	        memento.angle = this.angle;
	        
	        return memento;
	    },
	    
	    setPersistentAttributes : function(relatedFigure, memento){
	        this._super(relatedFigure, memento);
	        
            this.startColor = memento.startColor;
            this.endColor = memento.endColor;
	        this.angle = memento.angle;
	        
	        return memento;
	    }

	

});






shape_designer.filter.TextLinearGradientFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.TextLinearGradientFilter",
    
	init:function(){
	    this._super();
	    this.colorPicker1 = null;
	    this.colorPicker2 = null;
	    
	    this.startColor ="#f0f0f0";
	    this.endColor   ="#3f3f3f";
	    this.angle      =0;
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="'+this.cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
                	   '     Linear Gradient'+
                       '    <span id="button_remove_'+this.cssScope+'" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '      <div class="input-group text-center" style="width:100%" >'+
                 	   '           <div id="'+this.cssScope+'_angle" />'+
                       '      </div> '+ 
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="'+this.cssScope+'_color1" type="text" value="'+this.startColor+'" class="form-control color"/>'+
                       '       </div>'+
                       '       <div class="input-group">'+
                       '          <span class="input-group-addon">#</span>'+
                       '          <input id="'+this.cssScope+'_color2" type="text" value="'+this.endColor+'" class="form-control color"/>'+
                       '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

    	   $('#'+this.cssScope+'_angle').anglepicker({
    	       start: function(e, ui) {
    
    	       },
    	       change: $.proxy(function(e, ui) {
    	           this.angle = ui.value;
    	              figure.repaint();
     	       },this),
    	       stop: function(e, ui) {
    
    	       },
    	       value: this.angle
    	   });
          
           var picker1 = this.colorPicker1  = new jscolor.color($("#"+this.cssScope+'_color1')[0], {});
           this.colorPicker1.fromString(this.startColor);
           this.colorPicker1.onImmediateChange= $.proxy(function(){
              this.startColor= "#"+picker1.toString();
              figure.repaint();
           },this);

           var picker2 = this.colorPicker2  = new jscolor.color($("#"+this.cssScope+'_color2')[0], {});
           this.colorPicker2.fromString(this.endColor);
           this.colorPicker2.onImmediateChange= $.proxy(function(){
              this.endColor ="#"+picker2.toString();
              figure.repaint();
           },this);
 
           
           $("#button_remove_"+this.cssScope).on("click",$.proxy(function(){
               figure.removeFilter(this);
               $('#'+this.cssScope+'_container').animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#'+this.cssScope+'_container').remove();});
           },this));

	   },
	   
	    apply:function(figure, attributes, lattr){
	        lattr.fill= this.angle+"-"+this.endColor+"-"+this.startColor;    
	        console.log("ddd");
	    },
	    
	   removePane:function(){
	       if(this.colorPicker1 !==null){
	           this.colorPicker1.hidePicker();
	       }
	       if(this.colorPicker2 !==null){
	           this.colorPicker2.hidePicker();
	       }
	   },
	   
	    onInstall:function(figure){
	     
	    },
	    
	    getPersistentAttributes : function(relatedFigure){   
	        var memento = this._super(relatedFigure);
	        
            memento.startColor = this.startColor;
            memento.endColor = this.endColor;
	        memento.angle = this.angle;
	        
	        return memento;
	    },
	    
	    setPersistentAttributes : function(relatedFigure, memento){
	        this._super(relatedFigure, memento);
	        
            this.startColor = memento.startColor;
            this.endColor = memento.endColor;
	        this.angle = memento.angle;
	        
	        return memento;
	    }

	

});






shape_designer.filter.PortTypeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.PortTypeFilter",
    
	init:function(){
	    this._super();
	    
	    this.type   =0;
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){

	   var _this = this;
	   var type =figure.getInputType();
	   $parent.append('<div id="'+this.cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
                	   '     Port Type'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
                	   '   <div class="form-group portTypeOption">'+

						   '<label>'+
						   '  <input '+(type=='input'?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-type="input" />'+
						   '  <span  title="down" class="icon ion-log-in">input</span>'+
						   '</label>'+
						   '<br>'+
						   '<label>'+
						   '  <input '+(type=='output'?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-type="output" />'+
						   '  <span  title="down" class="icon ion-log-out">output</span>'+
						   '</label>'+

						   /* LuboJ
	                       '<br>'+
                           '<label>'+
						   '  <input '+(type=='Hybrid'?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-type="Hybrid" />'+
						   '  <span  title="down" class="icon ion-ios-circle-outline">unspecified</span>'+
						   '</label>'+
                           */

					   '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

	       $("#"+_this.cssScope+"_panel .portTypeOption input").on("change", function(){
	           var $this = $(this);
	           var typeName = $this.data("type");
	           figure.setInputType(typeName);
	       });
	   },
	   
	    

		removePane : function() {
		},

		onInstall : function(figure) {
		},

		getPersistentAttributes : function(relatedFigure) {
			var memento = this._super(relatedFigure);

			return memento;
		},

		setPersistentAttributes : function(relatedFigure, memento) {
			this._super(relatedFigure, memento);

			return memento;
		}
});


//added by LuboJ
shape_designer.filter.PortDatatypeFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.PortDatatypeFilter",
    
	init:function(){
	    this._super();
	    
	    this.type   =0;
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){

	   var _this = this;
	   var datatype = figure.getDatatype();
	   $parent.append(
            '<div id="'+this.cssScope+'_container" class="panel panel-default">'+
            '  <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
            '    Port Datatype'+
            '  </div>'+
        	'  <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
        	'     <div class="form-group portDatatypeOption">'+
            '       <select name="'+this.cssScope+'_select">'+
            '         <option value="int">int</option>'+
            '         <option value="uint">uint</option>'+
            '         <option value="float">float</option>'+
            '         <option value="double">double</option>'+
            '         <option value="bool">bool</option>'+
            '         <option value="String">String</option>'+
            '         <option value="other">other</option>'+
            '       </select>'+
            '       <br />'+
            '       <input type="text" value="" disabled />'+
            '     </div>'+
            '  </div>'+
            '</div>'
        );

	       if (['int','uint','float','double','bool','String'].includes(datatype)){
               $("#"+_this.cssScope+"_panel .portDatatypeOption select").val(datatype);
           }else{
               $("#"+_this.cssScope+"_panel .portDatatypeOption input").prop('disabled', false);
               $("#"+_this.cssScope+"_panel .portDatatypeOption select").val('other');
               $("#"+_this.cssScope+"_panel .portDatatypeOption input").val(datatype);
           }

	       $("#"+_this.cssScope+"_panel .portDatatypeOption select").on("change", function(){
               var $this = $(this);
	           var datatypeName = $this.val();
               if (datatypeName == "other"){
                   $("#"+_this.cssScope+"_panel .portDatatypeOption input").prop('disabled', false);
                   $("#"+_this.cssScope+"_panel .portDatatypeOption input").css({'color':'black'});
                   $("#"+_this.cssScope+"_panel .portDatatypeOption input").on("change", function(){
                       var $this = $(this);
        	           var datatypeName = $this.val();
                       figure.setDatatype(datatypeName);
                   });
                   datatypeName = $("#"+_this.cssScope+"_panel .portDatatypeOption input").val();
                   figure.setDatatype(datatypeName);
               }else{
                   $("#"+_this.cssScope+"_panel .portDatatypeOption input").prop('disabled', true);
                   $("#"+_this.cssScope+"_panel .portDatatypeOption input").css({'color':'#CCCCCC'});
	               figure.setDatatype(datatypeName);
               }
	       });
	   },
	   
	    

		removePane : function() {
		},

		onInstall : function(figure) {
		},

		getPersistentAttributes : function(relatedFigure) {
			var memento = this._super(relatedFigure);

			return memento;
		},

		setPersistentAttributes : function(relatedFigure, memento) {
			this._super(relatedFigure, memento);

			return memento;
		}
});





shape_designer.filter.PortDirectionFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.PortDirectionFilter",
    
	init:function(){
	    this._super();
	    
	    this.type   =0;
        this.cssScope = this.NAME.replace(/[.]/g, "_");
	},
	
	insertPane: function(figure, $parent){
	   var _this = this;
	   var dir = figure.getConnectionDirection();
	   $parent.append('<div id="'+this.cssScope+'_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
                	   '     Connection Direction'+
                	   '</div>'+
                	   
                	   ' <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
                	   '   <div class="form-group portDirectionOption">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings

		               '<label>'+
					   '  <input '+(dir===0?' checked="checked"':'')+' type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-dir="0" />'+
		               '  <span  title="up" class="glyphicon glyphicon-arrow-up"></span>'+
					   '</label>'+

                       '<br>'+

                       '<label>'+
                       '  <input '+(dir===3?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-dir="3" />'+
                       '  <span  title="left" class="glyphicon glyphicon-arrow-left"></span>'+
                       '</label>'+

                       '<label>'+
                       '  <input '+(dir===null?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-dir="null" />'+
                       '  <span title="automatic" class="glyphicon glyphicon-screenshot"></span>'+
                       '</label>'+

					   '<label>'+
					   '  <input '+(dir===1?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-dir="1" />'+
					   '  <span title="right"  class="glyphicon glyphicon-arrow-right"></span>'+
					   '</label>'+

                       '<br>'+

					   '<label>'+
					   '  <input '+(dir==2?' checked="checked"':'')+'type="radio" value="" name="'+this.cssScope+'_label" name="'+this.cssScope+'_label" data-dir="2" />'+
					   '  <span  title="down" class="glyphicon glyphicon-arrow-down"></span>'+
					   '</label>'+


		               '       </div>'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

		   $("#"+_this.cssScope+"_panel .portDirectionOption input").on("change", function(){
			   var $this = $(this);
			   var dir = $this.data("dir");
			   figure.setConnectionDirection(dir);
		   });
	   },
	   
	    

		removePane : function() {
		},

		onInstall : function(figure) {
		},

		getPersistentAttributes : function(relatedFigure) {
			var memento = this._super(relatedFigure);

			return memento;
		},

		setPersistentAttributes : function(relatedFigure, memento) {
			this._super(relatedFigure, memento);

			return memento;
		}
});






shape_designer.filter.PositionFilter = shape_designer.filter.Filter.extend({
    NAME :"shape_designer.filter.PositionFilter",
    
	init:function(){
	    this._super();
	    this.block = false;
	},
	
	insertPane: function(figure, $parent){
	    
	   $parent.append('<div id="position_filter_container" class="panel panel-default">'+
                	   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#position_width_panel">'+
                	   '     Position'+
                	   '</div>'+
                	   ' <div class="panel-body  collapse in" id="position_width_panel">'+
                	   '   <div class="form-group">'+
                       '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                       '       <input id="filter_position_x" type="text" value="'+parseFloat(figure.getPosition().x)+'" name="filter_position_x" class="form-control" />'+
                       '       <input id="filter_position_y" type="text" value="'+parseFloat(figure.getPosition().y)+'" name="filter_position_y" class="form-control" />'+
                       '   </div>'+
                       ' </div>'+
                	   '</div>');

           $("#filter_position_x").TouchSpin({
               min: 0,
               max: 10000,
               step: 1,
               maxboostedstep: 10,
               postfix: 'X'
           });

           $("#filter_position_y").TouchSpin({
               min: 0,
               max: 10000,
               step: 1,
               maxboostedstep: 10,
               postfix: 'Y'
           });

           $("input[name='filter_position_x']").on("change", $.proxy(function(){
               try{
                   this.block = true;
                   var pos = figure.getPosition();
                   figure.setPosition(parseFloat($("input[name='filter_position_x']").val()), pos.y);
               }
               finally{
                   this.block = false;
               }
               
           },this));

           $("input[name='filter_position_y']").on("change", $.proxy(function(){
               try{
                   this.block = true;
                   var pos = figure.getPosition();
                   figure.setPosition(pos.x,parseFloat($("input[name='filter_position_y']").val()));
               }
               finally{
                   this.block = false;
               }
           },this));
	   },

	   apply:function(figure, attributes)
       {
	       if(this.block===true){
	           return;
	       }
           var pos = figure.getPosition();
           $("input[name='filter_position_y']").val(pos.y);
           $("input[name='filter_position_x']").val(pos.x);
	   },

	   removePane:function()
       {
	   },
	   
	   onInstall:function(figure)
       {
	   }

});






shape_designer.filter.RadiusFilter = shape_designer.filter.Filter.extend({
    NAME : "shape_designer.filter.RadiusFilter",
	
	init:function(){
	    this._super();
	},
	
	insertPane: function(figure, $parent){
	    
	       $parent.append('<div id="radius_container" class="panel panel-default">'+
                   ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#radius_panel">'+
                   '    Corner Radius'+
                   '    <span id="button_remove_RadiusFilter" class="btn btn-mini icon ion-ios-close-outline pull-right" ></span>'+
                   '</div>'+
                   ' <div class="panel-body collapse in" id="radius_panel">'+
                   '   <div class="form-group">'+
                   '      <div class="input-group" ></div> '+ // required to ensure the correct width of the siblings
                   '      <div class="input-group">'+
                   '         <input class="form-control" id="filter_radius" type="text" value="'+figure.getRadius()+'" />'+
                   '      </div>'+
                   '   </div>'+
                   ' </div>'+
                   '</div>');

           $("#filter_radius").TouchSpin({
               min: 0,
               max: 200,
               step: 1,
               maxboostedstep: 10,
               postfix: 'px'
           });
           $("#filter_radius").on("change", $.proxy(function(){
               this.setRadius(parseInt($("#filter_radius").val()));
           },figure));
           
           $("#button_remove_RadiusFilter").on("click",$.proxy(function(){
               figure.removeFilter(this);
               figure.setRadius(0);
               $("#radius_container").animate({"height" : "0", "opacity":0, "margin-bottom":0}, 500, function(){$('#radius_container').remove();});
           },this));
	   },
	   
	   removePane:function(){
	   }
	

});






var DecoratedInputPort = draw2d.InputPort.extend({

    init : function(attr, setter, getter)
    {
        this.hasChanged = true;

        this._super(attr, setter, getter);
        
        this.decoration = new MarkerFigure();

        this.add(this.decoration, new draw2d.layout.locator.LeftLocator({margin:8}));

        
        // a port can have a value. Useful for workflow engines or circuit diagrams
        this.setValue(true);
    },

    useDefaultValue:function()
    {
        this.decoration.setStick(true);
    },

    setValue:function(value)
    {
        this.hasChanged = this.value !==value;
        this._super(value);
    },

    hasChangedValue: function()
    {
        return this.hasChanged;
    },

    hasRisingEdge: function()
    {
        return this.hasChangedValue()&& this.getValue();
    },

    hasFallingEdge: function()
    {
        return this.hasChangedValue() && !this.getValue();
    }
});

/**
 * The markerFigure is the left hand side annotation for a DecoratedPort.
 *
 * It contains two children
 *
 * StateAFigure: if the mouse hover and the figure isn't permanent visible
 * StateBFigure: either the mouse is over or the user pressed the checkbox to stick the figure on the port
 *
 * This kind of decoration is usefull for defualt values on workflwos enginges or circuit diagrams
 *
 */
var MarkerFigure = draw2d.shape.layout.VerticalLayout.extend({

    NAME : "MarkerFigure",

    init : function(attr, setter, getter)
    {
        var _this = this;

        this.isMouseOver = false;        // indicator if the mouse is over the element
        this.stick       = false;        // indicator if the stateBFigure should always be visible
        this.defaultValue= true;         // current selected default value for the decoration

        this._super($.extend({
              stroke:0
        },attr),
        setter, 
        getter);


        // figure if the decoration is not permanent visible (sticky note)
        this.add(this.stateA = new MarkerStateAFigure({text:"X"}));
        // figure if the decoration permanent visible
        this.add(this.stateB = new MarkerStateBFigure({text:"X"}));


        this.on("mouseenter",function(emitter, event){
            _this.onMouseOver(true);
        });

        this.on("mouseleave",function(emitter, event){
            _this.onMouseOver(false);
        });

        this.on("click",function(emitter, event){
            if (_this.isVisible() === false) {
                return;//silently
            }

            if(_this.stateB.getStickTickFigure().getBoundingBox().hitTest(event.x, event.y) === true){
                _this.setStick(!_this.getStick());
            }
            else if(_this.stateB.getLabelFigure().getBoundingBox().hitTest(event.x, event.y) === true){
                $.contextMenu({
                    selector: 'body',
                    trigger:"left",
                    events:
                    {
                        hide:function(){ $.contextMenu( 'destroy' ); }
                    },
                    callback: $.proxy(function(key, options)
                    {
                        // propagate the default value to the port
                        //
                        switch(key){
                            case "high":
                                _this.setDefaultValue(true);
                                break;
                            case "low":
                                _this.setDefaultValue(false);
                                break;
                            default:
                                break;
                        }

                    },this),
                    x:event.x,
                    y:event.y,
                    items:{
                        "high": {name: "High"},
                        "low":  {name: "Low" }
                    }
                });

            }
        });

        this.setDefaultValue(true);
        this.onMouseOver(false);
    },


    onMouseOver: function(flag)
    {
        this.isMouseOver = flag;

        if(this.visible===false){
            return; // silently
        }

        if(this.stick===true) {
            this.stateA.setVisible(false);
            this.stateB.setVisible(true);
        }
        else{
            this.stateA.setVisible(!this.isMouseOver);
            this.stateB.setVisible( this.isMouseOver);
        }

        return this;
    },


    setVisible: function(flag)
    {
        this._super(flag);

        // update the hover/stick state of the figure
        this.onMouseOver(this.isMouseOver);

        return this;
    },


    setStick:function(flag)
    {
        this.stick = flag;
        this.onMouseOver(this.isMouseOver);


        // the port has only a default value if the decoration is visible
        this.parent.setValue(flag?this.defaultValue:null);

        this.stateB.setTick(this.getStick());

        return this;
    },


    getStick:function()
    {
        return this.stick;
    },


    setText: function(text)
    {
        this.stateB.setText(text);

        return this;
    },

    setDefaultValue: function(value)
    {
        this.defaultValue = value;
        this.setText((this.defaultValue===true)?"High":"Low");

        // only propagate the value to the parent if the decoration permanent visible
        //
        if(this.stick===true){
            this.parent.setValue(this.defaultValue);
        }
    }
});

/**
 * This is only the mouseover reactive shape. A little bit smaller than the visible shape
 *
 * Or you can display this shape with opacity of 0.2 to indicate that this is a reactive area.
 */
var MarkerStateAFigure = draw2d.shape.basic.Label.extend({

    NAME : "MarkerStateAFigure",

    /**
     * @param attr
     */
    init : function(attr, setter, getter)
    {
        this._super($.extend({
            padding:{left:5, top:2, bottom:2, right:10},
            bgColor:null,
            stroke:1,
            color:null,
            fontColor:null,
            fontSize:10
        },attr), 
        setter, 
        getter);

        // we must override the hitTest method to ensure that the parent can receive the mouseenter/mouseleave events.
        // Unfortunately draw2D didn't provide event bubbling like HTML. The first shape in queue consumes the event.
        //
        // now this shape is "dead" for any mouse events and the parent must/can handle this.
        this.hitTest = function(){return false;};
    }

});
var MarkerStateBFigure = draw2d.shape.layout.HorizontalLayout.extend({

    NAME : "MarkerStateBFigure",

    /**
     * @param attr
     */
    init : function(attr, setter, getter)
    {
        this._super($.extend({
            bgColor:"#FFFFFF",
            stroke:1,
            color:"#00bcd4",
            radius:2,
            padding:{left:3, top:3, bottom:3, right:8},
            gap:5
        },attr), 
        setter, 
        getter);

        this.stickTick = new draw2d.shape.basic.Circle({
            diameter:10,
            bgColor:"#f0f0f0",
            stroke:1,
            resizeable:false
        });
        this.add(this.stickTick);
        this.stickTick.hitTest = function(){return false;};
        this.stickTick.addCssClass("cursorPointer");

        this.label = new draw2d.shape.basic.Label({
            text:attr.text,
            resizeable:false,
            stroke:0,
            padding:0,
            fontSize:10,
            fontColor:"#303030"
        });
        this.add(this.label);
        // don't catch the mouse events. This is done by the parent container
        this.label.hitTest = function(){return false;};
        this.label.addCssClass("cursorPointer");

        // we must override the hitTest method to ensure that the parent can receive the mouseenter/mouseleave events.
        // Unfortunately draw2D didn't provide event bubbling like HTML. The first shape in queue consumes the event.
        //
        // now this shape is "dead" for any mouse events and the parent must/can handle this.
        this.hitTest = function(){return false;};
    },

    setText: function(text)
    {
        this.label.setText(text);
    },

    setTick :function(flag)
    {
        this.stickTick.attr({bgColor:flag?"#00bcd4":"#f0f0f0"});
   },

    getStickTickFigure:function()
    {
        return this.stickTick;
    },

    getLabelFigure:function()
    {
        return this.label;
    },

    /**
     * @method
     *
     *
     * @template
     **/
    repaint: function(attributes)
    {
        if(this.repaintBlocked===true || this.shape===null){
            return;
        }

        attributes= attributes || {};

        attributes.path = this.calculatePath();

        this._super(attributes);
    },


    /**
     * @method
     *
     * Override the default rendering of the HorizontalLayout, which is a simple
     * rectangle. We want an arrow.
     */
    createShapeElement : function()
    {
        return this.canvas.paper.path(this.calculatePath());
    },

    /**
     * stupid copy&paste the code from the Polygon shape...unfortunately the LayoutFigure isn't a polygon.
     *
     * @returns {string}
     */
    calculatePath: function()
    {
        var arrowLength=8;

        this.vertices   = new draw2d.util.ArrayList();

        var w= this.width;
        var h= this.height;
        var pos= this.getAbsolutePosition();
        var i=0;
        var length=0;
        this.vertices.add(new draw2d.geo.Point(pos.x,  pos.y)  );
        this.vertices.add(new draw2d.geo.Point(pos.x+w-arrowLength,pos.y)  );

        this.vertices.add(new draw2d.geo.Point(pos.x+w,pos.y+h/2));

        this.vertices.add(new draw2d.geo.Point(pos.x+w-arrowLength,pos.y+h));
        this.vertices.add(new draw2d.geo.Point(pos.x  ,pos.y+h));

        var radius = this.getRadius();
        var path = [];
        // hard corners
        //
        if(radius === 0){
            length = this.vertices.getSize();
            var p = this.vertices.get(0);
            path.push("M",(p.x|0)+0.5," ",(p.y|0)+0.5);
            for(i=1;i<length;i++){
                p = this.vertices.get(i);
                path.push("L", (p.x|0)+0.5, " ", (p.y|0)+0.5);
            }
            path.push("Z");
        }
        // soften/round corners
        //
        else{
            length = this.vertices.getSize();
            var start = this.vertices.first();
            var end   = this.vertices.last();
            if(start.equals(end)){
                length = length-1;
                end = this.vertices.get(length-1);
            }
            var begin   = draw2d.geo.Util.insetPoint(start,end, radius);
            path.push("M", (begin.x|0)+0.5, ",", (begin.y|0)+0.5);
            for( i=0 ;i<length;i++){
                start = this.vertices.get(i);
                end   = this.vertices.get((i+1)%length);
                modStart = draw2d.geo.Util.insetPoint(start,end, radius);
                modEnd   = draw2d.geo.Util.insetPoint(end,start,radius);
                path.push("Q",start.x,",",start.y," ", (modStart.x|0)+0.5, ", ", (modStart.y|0)+0.5);
                path.push("L", (modEnd.x|0)+0.5, ",", (modEnd.y|0)+0.5);
            }
        }
        return path.join("");
    }


});

/* jshint evil:true */
shape_designer.figure.TestSwitch = draw2d.shape.basic.Label.extend({

    NAME: "shape_designer.figure.TestSwitch",


    init:function(attr, setter, getter)
    {
        this._super({text:"Low"},setter,getter);

        this.createPort("output");

        var _this = this;

        this.value = false;
        this.on("click",function(){
            _this.toggleValue();
            _this.getOutputPort(0).setValue(_this.value);
            _this.getOutputPort(0).getConnections().each(function(i,c){
                c.getTarget().setValue(_this.value);
            });
        });
    },

    toggleValue:function(){
        this.value = !this.value;
        this.attr({text:this.value?"High":"Low"});
    }
});


/* jshint evil:true */
shape_designer.figure.ExtLabel = draw2d.shape.basic.Label.extend({

    NAME: "shape_designer.figure.ExtLabel",


    init:function()
    {
        this.blur = 0;
        this.isExtFigure = true;

        this._super();


        this.setUserData({name:"Label"});

        this.filters   = new draw2d.util.ArrayList();
        this.filters.add( new shape_designer.filter.PositionFilter());
        this.filters.add( new shape_designer.filter.FontSizeFilter());
        this.filters.add( new shape_designer.filter.FontColorFilter());

        this.installEditor(new draw2d.ui.LabelInplaceEditor());

    },

    getPotentialFilters: function(){
        return [
            {label:"Opacity", impl:"shape_designer.filter.OpacityFilter"},
            {label:"Blur", impl:"shape_designer.filter.BlurFilter"},
            {label:"Outline", impl:"shape_designer.filter.OutlineStrokeFilter"},
            {label:"Gradient", impl:"shape_designer.filter.TextLinearGradientFilter"},
            {label:"Font Size", impl:"shape_designer.filter.FontSizeFilter"},
            {label:"Font Color", impl:"shape_designer.filter.FontColorFilter"}
        ];
    },

    setBlur: function( value){
        this.blur = value;
        this.repaint();
    },

    getBlur: function(){
        return this.blur;
    },

    removeFilter:function(filter){
        this.filters.remove(filter);

        return this;
    },

    addFilter:function(filter){
        var alreadyIn = false;

        this.filters.each($.proxy(function(i,e){
            alreadyIn = alreadyIn || (e.NAME===filter.NAME);
        },this));
        if(alreadyIn===true){
            return; // silently
        }

        this.filters.add(filter);
        filter.onInstall(this);
        this.repaint();

        return this;
    },


    /**
     * @method
     * Trigger the repaint of the element.
     *
     */
    repaint:function(attributes)
    {
        if(this.shape===null){
            return;
        }

        if(typeof attributes === "undefined"){
            attributes = {};
        }

        // style the label
        var lattr = {};
        lattr.text = this.text;
        lattr["font-weight"] = (this.bold===true)?"bold":"normal";
        lattr["text-anchor"] = "start";
        lattr["font-size"] = this.fontSize;
        if(this.fontFamily!==null){
            lattr["font-family"] = this.fontFamily;
        }
        lattr.fill = this.fontColor.hash();
        // since 4.2.1
        lattr.stroke = this.outlineColor.hash();
        lattr["stroke-width"] = this.outlineStroke;

        this.filters.each($.proxy(function(i,filter){
            filter.apply(this, attributes, lattr);
        },this));

        this.svgNodes.attr(lattr);
        // set of the x/y must be done AFTER the font-size and bold has been set.
        // Reason: the getHeight method needs the font-size for calculation because
        //         it redirects the calculation to the SVG element.
        this.svgNodes.attr({x:this.padding.left,y: this.getHeight()/2});

        // jump over the normal Label implementation
        draw2d.SetFigure.prototype.repaint.call(this,attributes);
    },

    getPersistentAttributes : function()
    {
        var memento = this._super();

        memento.filters = [];
        this.filters.each($.proxy(function(i,e){
            var filterMemento = e.getPersistentAttributes(this);
            memento.filters.push(filterMemento);
        },this));

        return memento;
    },

    setPersistentAttributes : function( memento)
    {
        this._super(memento);


        if(typeof memento.filters !=="undefined"){
            this.filters = new draw2d.util.ArrayList();
            $.each(memento.filters, $.proxy(function(i,e){
                var filter = eval("new "+e.name+"()");
                filter.setPersistentAttributes(this, e);
                this.filters.add(filter);
            },this));
        }
    }
});

/* jshint evil:true */

shape_designer.figure.ExtPolygon = draw2d.shape.basic.Polygon.extend({
    
    NAME: "shape_designer.figure.ExtPolygon",
    

    init:function(attr, setter, getter)
    {
      this.blur=0;
      this.isExtFigure = true;

      this._super(attr, setter, getter);
 
      this.setUserData({name:"Polygon"});
      
      this.filters   = new draw2d.util.ArrayList();
      this.filters.add( new shape_designer.filter.PositionFilter());
      this.filters.add( new shape_designer.filter.SizeFilter());
      this.filters.add( new shape_designer.filter.StrokeFilter());
      this.filters.add( new shape_designer.filter.FillColorFilter());
      
      this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
    },
    
    setBlur: function( value){
        this.blur = parseInt(value);
        this.repaint();
    },
    
    getBlur: function(){
      return this.blur;  
    },
    
    getPotentialFilters: function(){
        return [
                { label: "Stroke",          impl: "shape_designer.filter.StrokeFilter"},
                { label: "Opacity",         impl: "shape_designer.filter.OpacityFilter"},
                { label: "Blur",            impl: "shape_designer.filter.BlurFilter"},
                { label: "Corner Radius",   impl: "shape_designer.filter.RadiusFilter"},
                { label: "Linear Gradient", impl: "shape_designer.filter.LinearGradientFilter"},
                { label: "Fill Color",      impl: "shape_designer.filter.FillColorFilter"}
               ];
    },
    
    removeFilter:function(filter){
      this.filters.remove(filter);  
    },

    addFilter:function(filter){
        var alreadyIn = false;
        
        this.filters.each($.proxy(function(i,e){
            alreadyIn = alreadyIn || (e.NAME===filter.NAME);
        },this));

        if(alreadyIn===true){
            return; // silently
        }
        
        this.filters.add(filter);  
        filter.onInstall(this);
        this.repaint();
    },
      
    onDoubleClick: function()
    {
        this.installEditPolicy(new draw2d.policy.figure.VertexSelectionFeedbackPolicy());
    },
    
    /**
     * @method
     * Unselect the figure and propagete this event to all edit policies.
     * 
     * @final
     * @private
     **/
    unselect:function()
    {
        this._super();
        
        this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
        return this;
    },
    
    
    /**
     * @method
     * Trigger the repaint of the element.
     * 
     */
    repaint:function(attributes)
    {
        if(this.shape===null){
            return;
        }

        if(this.svgPathString===null){
            this.calculatePath();
        }
        
        if(typeof attributes === "undefined"){
            attributes = {};
        }
        
         
        attributes.path = this.svgPathString;
        
        this.filters.each($.proxy(function(i,filter){
            filter.apply(this, attributes);
        },this));

        //this.shape.blur(this.blur===0?-1:this.blur);
/*
        if(this.filter)
        this.filter = this.canvas.paper.createFilter();
        filter.addShiftToColor("red");
        filter.addBlur(7);
        this.shape.filter(filter);
*/
        this._super(attributes);
    },

    getPersistentAttributes : function()
    {
        var memento = this._super();
        
        memento.blur = this.blur;
        memento.filters = [];
        this.filters.each($.proxy(function(i,e){
            var filterMemento = e.getPersistentAttributes(this);
            memento.filters.push(filterMemento);
        },this));
 
        return memento;
    },

    setPersistentAttributes : function( memento)
    {
        this._super(memento);
        
        if(typeof memento.blur !=="undefined")
            this.setBlur(memento.blur);
        
        if(typeof memento.filters !=="undefined"){
            this.filters = new draw2d.util.ArrayList();
            var sizeFilterAdded = false;
            $.each(memento.filters, $.proxy(function(i,e){

                var filter = eval("new "+e.name+"()");
                if(filter instanceof shape_designer.filter.SizeFilter){
                    sizeFilterAdded=true;
                }
                filter.setPersistentAttributes(this, e);
                this.filters.add(filter);
            },this));
            if(! sizeFilterAdded){
                this.filters.insertElementAt(new shape_designer.filter.SizeFilter(),1);
            }
        }
    }
});

/* jshint evil:true */

shape_designer.figure.ExtPort = draw2d.shape.basic.Circle.extend({
    
    NAME: "shape_designer.figure.ExtPort",
    

    init:function()
    {
      this.isExtFigure = true;
      this.decoration = null;
      this._super({
          bgColor:"#37B1DE",
          diameter:10
      });


      this.setUserData({
    	  name:"Port",
          type:"input",
    	  direction:null,
          fanout:20,
          datatype: "undefined"
      });
      
      this.filters   = new draw2d.util.ArrayList();
      this.filters.add( new shape_designer.filter.PositionFilter());
      this.filters.add( new shape_designer.filter.FanoutFilter());
      this.filters.add( new shape_designer.filter.PortDirectionFilter());
      this.filters.add( new shape_designer.filter.PortTypeFilter());
      this.filters.add( new shape_designer.filter.PortDatatypeFilter());    //added by LuboJ

      this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    

    setDatatype: function(datatype)
    {
    	if (datatype == "") datatype = "undefined";
        this.getUserData().datatype = datatype;
    },

    getDatatype: function()
    {
    	var datatype = this.getUserData().datatype;
        if (!datatype) datatype = "undefined";
        return datatype;
    },

    setInputType: function(type)
    {
    	this.getUserData().type = type;
    },
    
    getInputType: function()
    {
    	return this.getUserData().type;
    },

    setMaxFanOut: function( count)
    {
        this.getUserData().fanout = parseInt(count);
    },

    getMaxFanOut: function()
    {
        return this.getUserData().fanout?this.getUserData().fanout:20;
    },


    setConnectionDirection: function(direction)
    {
        this.getUserData().direction = direction;
        this.updateDecoration();
    },
    
    getConnectionDirection: function()
    {
        return this.getUserData().direction;
    },

    
    updateDecoration:function()
    {
        if(this.decoration!==null){
            this.remove(this.decoration);
            this.decoration = null;
        }
        var figure =null;
        var locator = null;
        switch(this.getConnectionDirection()){
            case 0:
                figure = new draw2d.shape.icon.ArrowUp({width:8, height:8, opacity:0.5});
                locator= new draw2d.layout.locator.TopLocator();
                break;
            case 1:
                figure = new draw2d.shape.icon.ArrowRight({width:8, height:8, opacity:0.5});
                locator= new draw2d.layout.locator.RightLocator();
                break;
            case 2:
                figure = new draw2d.shape.icon.ArrowDown({width:8, height:8, opacity:0.5});
                locator= new draw2d.layout.locator.BottomLocator();
                break;
            case 3:
                figure = new draw2d.shape.icon.ArrowLeft({width:8, height:8, opacity:0.5});
                locator= new draw2d.layout.locator.LeftLocator();
                break;
        }
        if(figure!==null){
            this.add(figure, locator);
            this.decoration = figure;
        }
    },
    
    getPotentialFilters: function(){
        return [
                {label:"Port Type",      impl:"shape_designer.filter.PortTypeFilter"},
                {label:"Port Direction", impl:"shape_designer.filter.PortDirectionFilter"},
                {label:"Color",          impl:"shape_designer.filter.FillColorFilter"}
                
                ];
    },

    removeFilter:function(filter)
    {
      this.filters.remove(filter);  
    },

    addFilter:function(filter)
    {
        var alreadyIn = false;
        
        this.filters.each($.proxy(function(i,e){
            alreadyIn = alreadyIn || (e.NAME===filter.NAME);
        },this));
        if(alreadyIn===true){
            return; // silently
        }
        
        this.filters.add(filter);  
        filter.onInstall(this);
        this.repaint();
    },
      
    
    /**
     * @method
     * Trigger the repaint of the element.
     * 
     */
    repaint:function(attributes)
    {
        if(this.shape===null){
            return;
        }

        if(typeof attributes === "undefined"){
            attributes = {};
        }

        this.filters.each($.proxy(function(i,filter){
            filter.apply(this, attributes);
        },this));
        
        this._super(attributes);
    },

    getPersistentAttributes : function()
    {   
        var memento = this._super();
        
        memento.filters = [];
        this.filters.each($.proxy(function(i,e){
            var filterMemento = e.getPersistentAttributes(this);
            memento.filters.push(filterMemento);
        },this));
 
        return memento;
    },
    
    setPersistentAttributes : function( memento)
    {
        this._super(memento);
        

        if(typeof memento.filters !=="undefined"){
            this.filters = new draw2d.util.ArrayList();
            var fanoutFilterAdded = false;
            $.each(memento.filters, $.proxy(function(i,e){
                var filter = eval("new "+e.name+"()");
                if(filter instanceof shape_designer.filter.FanoutFilter){
                    fanoutFilterAdded=true;
                }
                filter.setPersistentAttributes(this, e);
                this.filters.add(filter);
            },this));
            if(!fanoutFilterAdded){
                this.filters.insertElementAt(new shape_designer.filter.FanoutFilter(),1);
            }

        }
        this.updateDecoration();
    }
});

/* jshint evil:true */
shape_designer.figure.ExtLine = draw2d.shape.basic.PolyLine.extend({
    
    NAME: "shape_designer.figure.ExtLine",
    

    init:function()
    {
      this._super();
 
      this.blur = 0;
      this.isExtFigure = true;

      this.setUserData({name:"Line"});
      
      this.filters   = new draw2d.util.ArrayList();
      this.filters.add( new shape_designer.filter.StrokeFilter());
      
      this.setRouter(new draw2d.layout.connection.VertexRouter());
      this.installEditPolicy(new draw2d.policy.line.VertexSelectionFeedbackPolicy());
    },

    setBlur: function( value){
        this.blur = parseInt(value);
        this.repaint();
    },
    
    getBlur: function(){
      return this.blur;  
    },
    
    getPotentialFilters: function(){
        return [
                {label:"Opacity", impl:"shape_designer.filter.OpacityFilter"},
                {label:"Blur", impl:"shape_designer.filter.BlurFilter"},
                {label:"Outline", impl:"shape_designer.filter.OutlineStrokeFilter"},
                {label:"Corner Radius", impl:"shape_designer.filter.RadiusFilter"},
                {label:"Stroke", impl:"shape_designer.filter.StrokeFilter"}
               ];
    },
     
    removeFilter:function(filter)
    {
      this.filters.remove(filter);  
      
      return this;
    },

    addFilter:function(filter)
    {
        var alreadyIn = false;
        
        this.filters.each($.proxy(function(i,e){
            alreadyIn = alreadyIn || (e.NAME===filter.NAME);
        },this));
        if(alreadyIn===true){
            return; // silently
        }
        
        this.filters.add(filter);  
        filter.onInstall(this);
        this.repaint();
        
        return this;
    },
    
    
    /**
     * @method
     * Trigger the repaint of the element.
     * 
     */
    repaint:function(attributes)
    {
        if(this.shape===null){
            return;
        }

        if(typeof attributes === "undefined"){
            attributes = {};
        }
        
        this.filters.each($.proxy(function(i,filter){
            filter.apply(this, attributes);
        },this));
        
//        this.shape.blur(this.blur);
        this._super(attributes);
    },

    getPersistentAttributes : function()
    {   
        var memento = this._super();
        
        memento.filters = [];
        this.filters.each($.proxy(function(i,e){
            var filterMemento = e.getPersistentAttributes(this);
            memento.filters.push(filterMemento);
        },this));
 
        return memento;
    },
    
    setPersistentAttributes : function( memento)
    {
        this._super(memento);
        

        if(typeof memento.filters !=="undefined"){
            this.filters = new draw2d.util.ArrayList();
            $.each(memento.filters, $.proxy(function(i,e){
                var filter = eval("new "+e.name+"()");
                filter.setPersistentAttributes(this, e);
                this.filters.add(filter);
            },this));
        }
    }
});

shape_designer.figure.PolyRect = shape_designer.figure.ExtPolygon.extend({

    NAME: "shape_designer.figure.PolyRect",

    init:function(topLeft, bottomRight)
    {
      this._super();
    
      if(typeof topLeft === "undefined"){
          this.vertices   = new draw2d.util.ArrayList();
          this.addVertex(new draw2d.geo.Point(100,100) );
          this.addVertex(new draw2d.geo.Point(140,100) );
          this.addVertex(new draw2d.geo.Point(140,140) );
          this.addVertex(new draw2d.geo.Point(100,140) );
      }
      else{
          this.vertices   = new draw2d.util.ArrayList();
          this.addVertex(new draw2d.geo.Point(topLeft.x,topLeft.y) );
          this.addVertex(new draw2d.geo.Point(bottomRight.x,topLeft.y) );
          this.addVertex(new draw2d.geo.Point(bottomRight.x,bottomRight.y) );
          this.addVertex(new draw2d.geo.Point(topLeft.x,bottomRight.y));
      }
      
      this.setUserData({name:"Rectangle"});
    }
});

/* jshint evil:true */
shape_designer.figure.PolyCircle = draw2d.shape.basic.Oval.extend({

    NAME: "shape_designer.figure.PolyCircle",


    init:function(center, radius)
    {
      this.blur=0;
      this.isExtFigure = true;

        // set some good defaults
      if(typeof radius==="undefined" ){
          radius = 10;
      }
      
      this._super({stroke:0, bgColor:"95C06A", width:radius*2, height:radius*2});
      
      // center must be set after the width/height...bug
      if(typeof center!=="undefined"){
          this.setCenter(center);
      }
      
      this.setUserData({name:"Circle"});
      
      this.filters = new draw2d.util.ArrayList();
      this.filters.add( new shape_designer.filter.PositionFilter());
      this.filters.add( new shape_designer.filter.SizeFilter());
      this.filters.add( new shape_designer.filter.FillColorFilter());
    },

    getPotentialFilters: function(){
        return [
                {label:"Stroke", impl:"shape_designer.filter.StrokeFilter"},
                {label:"Opacity", impl:"shape_designer.filter.OpacityFilter"},
                {label:"Blur", impl:"shape_designer.filter.BlurFilter"},
                {label:"Linear Gradient", impl:"shape_designer.filter.LinearGradientFilter"},
                {label:"Fill Color", impl:"shape_designer.filter.FillColorFilter"}
                ];
    },
    
    removeFilter:function(filter){
      this.filters.remove(filter);  
    },

    addFilter:function(filter){
        var alreadyIn = false;
        
        this.filters.each($.proxy(function(i,e){
            alreadyIn = alreadyIn || (e.NAME===filter.NAME);
        },this));
        
        if(alreadyIn===true){
            return; // silently
        }
        
        this.filters.add(filter);  
        filter.onInstall(this);
        this.repaint();
    },
   
    
    setBlur: function( value){
        this.blur = parseInt(value);
        this.repaint();
    },
    
    getBlur: function(){
      return this.blur;  
    },
    
    /**
     * @method
     * Trigger the repaint of the element.
     * 
     */
    repaint:function(attributes)
    {
        if(this.shape===null){
            return;
        }

        this.filters.each($.proxy(function(i,filter){
            filter.apply(this, attributes);
        },this));
        
//        this.shape.blur(this.blur);
        this._super(attributes);
    },

    getVertices: function(){

    	var w2 = this.getWidth()/2;
    	var h2 = this.getHeight()/2;
    	var center = this.getCenter();
        var sides = 36;

        var vertices   = new draw2d.util.ArrayList();
        for (var i = 0; i < sides; i++){
            var radian = 2 * Math.PI * i / sides;
            var x = Math.cos( radian )*w2+center.x;
            var y = Math.sin( radian )*h2+center.y;
            vertices.add(new draw2d.geo.Point(x,y) );
        }
        return vertices;	
    },
    
    getPersistentAttributes : function()
    {   
        var memento = this._super();
        
        memento.blur = this.blur;
        memento.filters = [];
        this.filters.each($.proxy(function(i,e){
            var filterMemento = e.getPersistentAttributes(this);
            memento.filters.push(filterMemento);
        },this));
 
        return memento;
    },
    
    setPersistentAttributes : function( memento)
    {
        this._super(memento);
        
        if(typeof memento.blur !=="undefined")
            this.setBlur(memento.blur);
        
        if(typeof memento.filters !=="undefined"){
            this.filters = new draw2d.util.ArrayList();
            $.each(memento.filters, $.proxy(function(i,e){
                var filter = eval("new "+e.name+"()");
                filter.setPersistentAttributes(this, e);
                this.filters.add(filter);
            },this));
        }
    }
});

shape_designer.storage.BackendStorage = Class.extend({

    /**
     * @constructor
     * 
     */
    init:function(){
        this.octo=null;
        this.repositories = null;
        this.currentRepository = null;
        this.currentPath = "";
        this.currentFileHandle = null;
    },
    

    connect: function(token, callback)
    {
        this.octo = new Octokat({
            token: token
        });

        this.octo.user.fetch(function(param0, user){
            if(user){
                callback(true);
            }
            else {
                callback(false);
            }
        });
    },

    load: function(repository, path, successCallback)
    {
        var _this = this;
        // anonymous usage. Not authenticated
        //
        if (this.octo === null) {
            var octo = new Octokat();
            var repo = octo.repos(conf.defaultUser, conf.defaultRepo);
            repo.contents(path).read()
                .then(function(contents) {
                    successCallback(contents);
                });
        }
        // Authenticated usage
        //
        else {
            this.octo.user.repos.fetch(function (param, repos) {
                _this.repositories = repos;
                _this.currentRepository = $.grep(_this.repositories, function (repo) {
                    return repo.fullName === repository;
                })[0];
                _this.currentPath = _this.dirname(path);
                _this.currentRepository
                    .contents(path)
                    .fetch()
                    .then(function (info) {
                        // SAFARI breaks if line breaks part of the base64
                        info.content  = info.content.replace(/\s/g, '');

                        _this.currentFileHandle = {
                            path: path,
                            title: _this.basename(path),
                            sha: info.sha,
                            content: atob(info.content)
                        };
                        successCallback(_this.currentFileHandle.content);
                    });
            });
        }
    },


    dirname: function(path)
    {
        if (path.length === 0)
            return "";

        var segments = path.split("/");
        if (segments.length <= 1)
            return "";
        return segments.slice(0, -1).join("/");
    },


    basename:function(path)
    {
        return path.split(/[\\/]/).pop();
    }

});

shape_designer.FigureWriter = draw2d.io.Writer.extend({
    
    init:function(){
        this._super();
    },
   
    /**
     * @method
     * Export the content to the implemented data format. Inherit class implements
     * content specific writer.
     * <br>
     * <br>
     * 
     * Method signature has been changed from version 2.10.1 to version 3.0.0.<br>
     * The parameter <b>resultCallback</b> is required and new. The method calls
     * the callback instead of return the result.
     * 
     * @param {draw2d.Canvas} canvas
     * @parma {String} className
     * @param {Function} resultCallback the method to call on success. The first argument is the result object, the second the base64 representation of the file content
     */
    marshal: function(canvas, className, resultCallback){
        var baseClass  = app.getConfiguration("baseClass");
        var customCode = app.getConfiguration("code");
        var figures = canvas.getExtFigures();
        var b = canvas.getBoundingBox();

        var x = b.x;
        var y = b.y;
        
        var ports  = [];
        var shapes = [];
        
        shapes.push({constructor: 'this.canvas.paper.path("M0,0 L'+(b.w)+',0 L'+(b.w)+','+(b.h)+' L0,'+(b.h)+ '")',
                     attr       : '{"stroke":"none","stroke-width":0,"fill":"none"}',
                     name       : "BoundingBox"
                    });
        
        figures.each(function(i,figure){
            figure.uninstallEditPolicy("draw2d.policy.figure.RegionEditPolicy");
            var attr = {};
            figure.svgPathString=null;
            figure.translate(-x,-y);
            // paint the element and fill the "attr" object with the current
            // settings
            figure.repaint(attr);
            delete attr.path;
            delete attr.x;
            delete attr.y;
            if((figure instanceof shape_designer.figure.ExtPolygon)){
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            } else if((figure instanceof shape_designer.figure.PolyCircle)){
                shapes.push({
                    constructor:"this.canvas.paper.ellipse()", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            }else if((figure instanceof shape_designer.figure.ExtLine)){
                // drop shadow
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify($.extend({},attr,{"stroke-width": attr["stroke-width"]+figure.getOutlineStroke(), "stroke": figure.getOutlineColor().hash()})),
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name+"_shadow"
                    });
                
                // the line itself
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            }else if(figure instanceof shape_designer.figure.ExtLabel){
                attr = figure.svgNodes[0].attr();
                attr.x = attr.x+figure.getAbsoluteX();
                attr.y = attr.y+figure.getAbsoluteY();
                delete attr.transform;
                shapes.push({
                    constructor:"this.canvas.paper.text(0,0,'"+figure.getText()+"')", 
                    attr:JSON.stringify(attr) ,
                    extra :"",
                    name: figure.getUserData().name
                    });
            }else if(figure instanceof shape_designer.figure.ExtPort){
                ports.push({
                    type:figure.getInputType()==="input"?"new DecoratedInputPort()":'"'+figure.getInputType().toLowerCase()+'"',
                    method:figure.getInputType()==="input"?"addPort":'createPort',
                    direction:figure.getConnectionDirection(),
                    x    : 100/b.w*figure.getCenter().x,
                    y    : 100/b.h*figure.getCenter().y,
                    color: figure.getBackgroundColor().hash(),
                    name : figure.getUserData().name,
                    fanout: figure.getMaxFanOut()
                    });
            }
            figure.translate(x,y);
        });
        
        var template =$("#shape-base-template").text().trim();

        var compiled = Hogan.compile(template);
        var output = compiled.render({
            className: className,
            baseClass: baseClass,
            figures: shapes,
            ports: ports,
            width: b.w,
            height: b.h
        });

        output = output +"\n\n"+customCode;
        resultCallback(output,  draw2d.util.Base64.encode(output));
    }
});
shape_designer.policy.AbstractToolPolicy = draw2d.policy.canvas.SelectionPolicy.extend({
	
	init:function(){
	    this._super();
	},
	
   
    setToolHeader: function(heading, icon ){
        $('#currentTool_image').fadeOut(200, function() {
            $("#currentTool_image").attr({"src": "./assets/images/tools/"+icon});
            $('#currentTool_image').fadeIn(200);
        });
        $('#currentTool_heading').fadeOut(200, function() {
            $("#currentTool_heading").html(heading);
            $('#currentTool_heading').fadeIn(200);
        });
    },

    setToolText: function( message ){
        $('#currentTool_message').fadeOut(200, function() {
            $("#currentTool_message").html(message);
            $('#currentTool_message').fadeIn(200);
        });
    }
});





/* jshint evil: true */
shape_designer.policy.AbstractGeoToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
	
	init:function(){
	    this._super();
	    this.firstFigure = null;
	    this.operation =null;
	},
	
    
    onInstall: function(canvas){
        this.setToolHeader("");
        this.setToolMessage("Select first figure..");
    },
    
    select: function(canvas, figure){
        console.log(figure);
        if(canvas.getSelection().getAll().contains(figure)){
            return; // nothing to to
        }
        
        // check if the element an valid polygon. otherwise an boolean operation
        // isn't possible
        if(!(figure instanceof shape_designer.figure.ExtPolygon)){
            return;
        }
        
        if(canvas.getSelection().getPrimary()!==null){
            this.unselect(canvas, canvas.getSelection().getPrimary());
        }
      
        if(figure !==null) {
            figure.select(true); // primary selection
        }
        
        canvas.getSelection().setPrimary(figure);

        // inform all selection listeners about the new selection.
        //
        canvas.fireEvent("select",{figure:figure});
    },
    
    
    execute: function(canvas, firstFigure, figure){
        if(firstFigure instanceof draw2d.util.ArrayList){
            if(firstFigure.getSize()<2){
                return; // silently
            }
            figure = firstFigure.get(1);
            firstFigure = firstFigure.get(0);
        }
        this.executeGeometryOperation(canvas, firstFigure, figure, this.operation);
    },
    
    executeGeometryOperation: function(canvas, figure1, figure2, operationFunc){
        var p1 = this.getGeometry(figure1);
        var p2 = this.getGeometry(figure2);
        var union = eval("p1."+operationFunc+"(p2)");
        var geo = new jsts.io.GeoJSONWriter().write(union);
        var memento = figure1.getPersistentAttributes();
        var cmd =new draw2d.command.CommandCollection();
        cmd.add(new draw2d.command.CommandDelete(figure1));
        cmd.add(new draw2d.command.CommandDelete(figure2));
        $.each(geo.coordinates, $.proxy(function(i,poly){
            var figure = new shape_designer.figure.ExtPolygon();
            figure.setPersistentAttributes(memento);
            figure.vertices   = new draw2d.util.ArrayList();
            $.each(poly, function(i,vertex){
                figure.addVertex(vertex[0],vertex[1]);
            });
            var command = new draw2d.command.CommandAdd(canvas, figure, figure.getX(), figure.getY());
            cmd.add(command);
        },this));
        canvas.getCommandStack().execute(cmd);

    },
    
    getGeometry: function(figure){
        var reader = new jsts.io.WKTReader();  
        var v= figure.getVertices().clone().asArray();
        v.push(v[0]);
        return reader.read("POLYGON(("+$.map(v, function(e){return e.x+" "+e.y;}).join(", ")+"))");
    }
   
});






shape_designer.policy.GeoUnionToolPolicy = shape_designer.policy.AbstractGeoToolPolicy.extend({
	
	init:function(){
	    this._super();
	    this.operation = "union";
	},
	
    
    onInstall: function(canvas){
        this.setToolHeader("Merge Polygons", "SURFACE_BOOL_ADD_064.png");
    	this.setToolText( "Select polygon to add to..");
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){
 
        var figure = canvas.getBestFigure(x, y);

        // check if the user click on a child shape. DragDrop and movement must redirect
        // to the parent
        // Exception: Port's
        while((figure!==null && figure.getParent()!==null) && !(figure instanceof draw2d.Port)){
            figure = figure.getParent();
        }

        if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
            if(this.firstFigure===null){
                this.firstFigure = figure;
                this.select(canvas,figure);
            	this.setToolText( "Select polygon to merge");
            }
            else{
                this.execute(canvas, this.firstFigure, figure);
                this.firstFigure = null;
            	this.setToolText("Select polygon to add to");
            }
        }
    }    
    
});






shape_designer.policy.GeoDifferenceToolPolicy = shape_designer.policy.AbstractGeoToolPolicy.extend({
	
	init:function(){
	    this._super();
	    this.operation ="difference";
	},
	
    
    onInstall: function(canvas){
        this.setToolHeader("Subtract Polygon", "SURFACE_BOOL_SUBTRACT_064.png");
    	this.setToolText( "Select polygon to subtract from");
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){
        var figure = canvas.getBestFigure(x, y);

        // check if the user click on a child shape. DragDrop and movement must redirect
        // to the parent
        // Exception: Port's
        while((figure!==null && figure.getParent()!==null) && !(figure instanceof draw2d.Port)){
            figure = figure.getParent();
        }

        if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
            if(this.firstFigure===null){
                this.firstFigure = figure;
                this.select(canvas,figure);
            	this.setToolText("Select polygon to subtract");
            }
            else{
                this.execute(canvas, this.firstFigure, figure);
                this.firstFigure = null;
            	this.setToolText("Select polygon to subtract from");
            }
        }
    }

});






shape_designer.policy.GeoIntersectionToolPolicy = shape_designer.policy.AbstractGeoToolPolicy.extend({
	
	init:function(){
	    this._super();
	    this.operation="intersection";
	},
	
    
    onInstall: function(canvas){
        this.setToolHeader("Intersect Polygon", "SURFACE_BOOL_INTERSECT_064.png");
    	this.setToolText( "Select polygon to intersect with");
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){
 
        var figure = canvas.getBestFigure(x, y);

        // check if the user click on a child shape. DragDrop and movement must redirect
        // to the parent
        // Exception: Port's
        while((figure!==null && figure.getParent()!==null) && !(figure instanceof draw2d.Port)){
            figure = figure.getParent();
        }

        if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
            if(this.firstFigure===null){
                this.firstFigure = figure;
                this.select(canvas,figure);
            	this.setToolText( "Select polygon to intersect");
            }
            else{
                this.execute(canvas, this.firstFigure, figure);
                this.firstFigure = null;
            	this.setToolText( "Select polygon to intersect with");
            }
        }
    }
    
    
});






shape_designer.policy.SelectionToolPolicy = draw2d.policy.canvas.BoundingboxSelectionPolicy.extend({
	
	init:function()
    {
	    this._super();
	},
	
    onInstall: function(canvas)
    {
        this.setToolHeader("Selection", "SELECT_TOOL_064.png");
    	this.setToolText("Click on shape to select<br>Double click to edit");
    },


    setToolHeader: function(heading, icon ){
        $("#currentTool_image").attr({"src": "./assets/images/tools/"+icon});
        $("#currentTool_heading").text(heading);
    },

    setToolText: function( message ){
        $("#currentTool_message").html(message);
	},

    /**
     * @method
     *
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey)
    {
        this.cloneOnDrag = shiftKey;
        this._super(canvas, x,y,shiftKey, ctrlKey);
    },

    /**
     * Copy the selected figure if the user start dragging the selection.
     *
     */
    onMouseDrag:function(canvas, dx, dy, dx2, dy2)
    {
        if( !((this.mouseDraggingElement instanceof draw2d.ResizeHandle) || (this.mouseDraggingElement instanceof draw2d.Port))){
            if(this.cloneOnDrag ===true && this.mouseDraggingElement !==null){
                // get the current position of the selected shape
                var pos = this.mouseDraggingElement.getPosition();

                // cancel the current drag&drop operation
                this.mouseDraggingElement.onDragEnd(pos.x, pos.y, false,false);
                this.mouseDraggingElement.unselect();

                // clone the selection
                this.mouseDraggingElement  = this.mouseDraggingElement.clone();
                // add the clone to the canvas and start dragging of the clone
                canvas.add(this.mouseDraggingElement, pos);

                // select the cloned shape
                this.select(canvas,this.mouseDraggingElement);

                // start dragging if the clone accept this operation
                this.mouseDraggingElement.onDragStart(pos.x, pos.y, false,false);
            }
        }
        this.cloneOnDrag=false;
        this._super(canvas, dx,dy,dx2,dy2);
    }
});


shape_designer.policy.RectangleToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
	
	init:function(){
	    this._super();
	    
	    this.topLeftPoint = null;
        this.boundingBoxFigure1 = null;
        this.boundingBoxFigure2 = null;
	},

    
    onInstall: function(canvas){
        this.setToolHeader("Diagonal Polygon", "POLYGON_DIAGONALS_064.png");
        this.setToolText("Select first corner of rectangle");
        canvas.setCursor("cursor_rectangle.png");
    },
    
    onUninstall: function(canvas){
        if(this.boundingBoxFigure1 !==null){
            this.boundingBoxFigure1.setCanvas(null);
            this.boundingBoxFigure1 = null;
            this.boundingBoxFigure2.setCanvas(null);
            this.boundingBoxFigure2 = null;
        }
        canvas.setCursor(null);
    },
   
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){

    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse event
     * @param {Number} y the y-coordinate of the mouse event
     * @template
     */
    onMouseMove:function(canvas, x, y){
       
        if (this.boundingBoxFigure1!==null) {
            var dx = this.topLeftPoint.x -x;
            var dy = this.topLeftPoint.y -y;
            this.boundingBoxFigure1.setDimension(Math.abs(dx),Math.abs(dy));
            this.boundingBoxFigure1.setPosition(x + Math.min(0,dx), y + Math.min(0,dy));
            this.boundingBoxFigure2.setDimension(Math.abs(dx),Math.abs(dy));
            this.boundingBoxFigure2.setPosition(x + Math.min(0,dx), y + Math.min(0,dy));
        }
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} dx The x diff between start of dragging and this event
     * @param {Number} dy The y diff between start of dragging and this event
     * @param {Number} dx2 The x diff since the last call of this dragging operation
     * @param {Number} dy2 The y diff since the last call of this dragging operation
     * @template
     */
    onMouseDrag:function(canvas, dx, dy, dx2, dy2){
    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @template
     */
    onMouseUp: function(canvas, x, y){
        if(this.topLeftPoint===null){
            this.topLeftPoint = new draw2d.geo.Point(x,y);
            this.setToolText("Select second corner of rectangle");

            this.boundingBoxFigure1 = new draw2d.shape.basic.Rectangle({width:1,height:1});
            this.boundingBoxFigure1.setPosition(x,y);
            this.boundingBoxFigure1.setCanvas(canvas);
            this.boundingBoxFigure1.setBackgroundColor("#333333");
            this.boundingBoxFigure1.setAlpha(0.1);
            
            this.boundingBoxFigure2 = new draw2d.shape.basic.Rectangle({width:1,height:1});
            this.boundingBoxFigure2.setPosition(x,y);
            this.boundingBoxFigure2.setCanvas(canvas);
//            this.boundingBoxFigure2.setDashArray("- ");
            this.boundingBoxFigure2.setStroke(1);
            this.boundingBoxFigure2.setColor(new draw2d.util.Color("#333333"));
            this.boundingBoxFigure2.setBackgroundColor(null);
        }
        else{
            var bottomRight = new draw2d.geo.Point(x,y);
            var rect =new shape_designer.figure.PolyRect(this.topLeftPoint, bottomRight);
            var command = new draw2d.command.CommandAdd(canvas, rect, rect.getX(), rect.getY());
            canvas.getCommandStack().execute(command);
            canvas.setCurrentSelection(rect);
            this.topLeftPoint = null;
            this.setToolText("Select first corner of rectangle");

            this.boundingBoxFigure1.setCanvas(null);
            this.boundingBoxFigure1 = null;
            this.boundingBoxFigure2.setCanvas(null);
            this.boundingBoxFigure2 = null;
}
    }
});






shape_designer.policy.CircleToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
	
    TITLE: "Circle",
    MESSAGE_STEP1 : "Select center of the circle",
    MESSAGE_STEP2 : "Select outer bound",
    
	init:function(){
	    this._super();
	    
	    this.center = null;
        this.boundingBoxFigure1 = null;
        this.boundingBoxFigure2 = null;
	},

    
    onInstall: function(canvas){
        this.setToolHeader(this.TITLE, "CIRCLE_1_064.png");
        this.setToolText(this.MESSAGE_STEP1);
        canvas.setCursor("cursor_circle.png");
    },
    
    onUninstall: function(canvas){
        if(this.boundingBoxFigure1 !==null){
            this.boundingBoxFigure1.setCanvas(null);
            this.boundingBoxFigure1 = null;
            this.boundingBoxFigure2.setCanvas(null);
            this.boundingBoxFigure2 = null;
        }
        canvas.setCursor(null);
    },
    

    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){

    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse event
     * @param {Number} y the y-coordinate of the mouse event
     * @template
     */
    onMouseMove:function(canvas, x, y){
       
        if (this.boundingBoxFigure1!==null) {
            var dx = Math.abs(this.center.x -x);
            this.boundingBoxFigure1.setRadius(dx);
            this.boundingBoxFigure2.setRadius(dx);
        }
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} dx The x diff between start of dragging and this event
     * @param {Number} dy The y diff between start of dragging and this event
     * @param {Number} dx2 The x diff since the last call of this dragging operation
     * @param {Number} dy2 The y diff since the last call of this dragging operation
     * @template
     */
    onMouseDrag:function(canvas, dx, dy, dx2, dy2){
    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @template
     */
    onMouseUp: function(canvas, x, y){
        if(this.center===null){
            this.center = new draw2d.geo.Point(x,y);
            this.setToolText(this.MESSAGE_STEP2);

            this.boundingBoxFigure1 = new draw2d.shape.basic.Circle({radius:1});
            this.boundingBoxFigure1.setCenter(x,y);
            this.boundingBoxFigure1.setCanvas(canvas);
            this.boundingBoxFigure1.setBackgroundColor("#333333");
            this.boundingBoxFigure1.setAlpha(0.1);
            
            this.boundingBoxFigure2 = new draw2d.shape.basic.Circle({radius:1});
            this.boundingBoxFigure2.setCenter(x,y);
            this.boundingBoxFigure2.setCanvas(canvas);
            this.boundingBoxFigure2.setStroke(1);
            this.boundingBoxFigure2.setColor(new draw2d.util.Color("#333333"));
            this.boundingBoxFigure2.setBackgroundColor(null);
        }
        else{
            var dx = Math.abs(this.center.x -x);
            var rect =new shape_designer.figure.PolyCircle(this.center,dx);
            var command = new draw2d.command.CommandAdd(canvas, rect, rect.getX(), rect.getY());
            canvas.getCommandStack().execute(command);
            canvas.setCurrentSelection(rect);
            this.center = null;
            this.setToolText(this.MESSAGE_STEP1);

            this.boundingBoxFigure1.setCanvas(null);
            this.boundingBoxFigure1 = null;
            this.boundingBoxFigure2.setCanvas(null);
            this.boundingBoxFigure2 = null;
        }
    }
});






shape_designer.policy.TextToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
    
    TITLE: "Text",
    MESSAGE_STEP1 : "Select location for text",
    MESSAGE_STEP2 : "Enter Text",
    
    init:function(){
        this._super();
        
        this.topLeft = null;
        this.newFigure = null;
    },

    
    onInstall: function(canvas){
        this.setToolHeader(this.TITLE, "TEXT_064.png");
        this.setToolText(this.MESSAGE_STEP1);
        canvas.setCursor("cursor_text.png");
    },
    
    onUninstall: function(canvas){
        canvas.setCursor(null);
    },
    
    
     /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){

    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse event
     * @param {Number} y the y-coordinate of the mouse event
     * @template
     */
    onMouseMove:function(canvas, x, y){
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} dx The x diff between start of dragging and this event
     * @param {Number} dy The y diff between start of dragging and this event
     * @param {Number} dx2 The x diff since the last call of this dragging operation
     * @param {Number} dy2 The y diff since the last call of this dragging operation
     * @template
     */
    onMouseDrag:function(canvas, dx, dy, dx2, dy2){
    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @template
     */
    onMouseUp: function(canvas, x, y){
        if(this.topLeft===null){
            this.topLeft = new draw2d.geo.Point(x,y);
            this.setToolText(this.MESSAGE_STEP2);

            this.newFigure = new shape_designer.figure.ExtLabel();
            this.newFigure.setText("Text");
            this.newFigure.setStroke(0);
            this.newFigure.setPadding(5);
            this.newFigure.setFontSize(16);
           
            var command = new draw2d.command.CommandAdd(canvas, this.newFigure, parseInt(x),parseInt(y));
            canvas.getCommandStack().execute(command);
            canvas.setCurrentSelection(this.newFigure);
            
            // start inplace editing
            //
            setTimeout($.proxy(function(){this.newFigure.onDoubleClick();},this),100);
        }
        else{
            this.topLeft=null;
        }
    }
});






shape_designer.policy.PortToolPolicy = shape_designer.policy.SelectionToolPolicy.extend({
    
    TITLE: "Port",
    MESSAGE_STEP1 : "Select location to add port.<br>Click on port to move.",
    
    init:function()
    {
        this._super();
    },

    
    onInstall: function(canvas)
    {
        this.setToolHeader(this.TITLE, "PORT_064.png");
        this.setToolText(this.MESSAGE_STEP1);
        canvas.setCursor("cursor_port.png");
    },
    
    onUninstall: function(canvas)
    {
        canvas.setCursor(null);
    },
    
    
    select: function(canvas, figure)
    {
      // check if the element an valid polygon. otherwise an boolean operation
        // isn't possible
        if(!(figure instanceof shape_designer.figure.ExtPort)){
            return;
        }

        this._super(canvas, figure);
    },
    
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey)
    {
        var figure = canvas.getBestFigure(x, y);
        
        if(figure===null || figure instanceof shape_designer.figure.ExtPort){
            this._super(canvas,x,y,shiftKey, ctrlKey);
        }
    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @template
     */
    onMouseUp: function(canvas, x, y){

        if(this.mouseDownElement===null || !(this.mouseDownElement instanceof shape_designer.figure.ExtPort)){
            var command = new draw2d.command.CommandAdd(canvas, new shape_designer.figure.ExtPort(), x, y);
            canvas.getCommandStack().execute(command);
            canvas.setCurrentSelection(command.figure);
        }
        else{
            this._super(canvas,x,y);
        }
    }   
});






shape_designer.policy.LineToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
	
    MESSAGE_STEP1 : "Select start point of the line.",
    MESSAGE_STEP2 : "Click to add additional vertex.<br>Double click to finish line.",

	init:function(){
	    this._super();
	    
        this.lineFigure = null;
        this.canvas = null;
	},

    
    onInstall: function(canvas){
        this.setToolHeader("Line", "LINE_064.png");
        this.setToolText(this.MESSAGE_STEP1);
        this.canvas = canvas;
        canvas.setCursor("cursor_line.png");
    },
    
    onUninstall: function(canvas){
        if(this.lineFigure !==null){
            if(this.lineFigure.getVertices().getSize()<2){
                canvas.remove(this.lineFigure);
                this.lineFigure = null;
            }
            else{
                // stay in the canvas and finalize the stroke if a doubleClick
                var last = this.lineFigure.vertices.last();
                this.onDoubleClick(this.lineFigure, last.x, last.y, false, false);
            }
        }
        this.canvas = null;
        canvas.setCursor(null);
    },
   
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown:function(canvas, x, y, shiftKey, ctrlKey){

    },
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse event
     * @param {Number} y the y-coordinate of the mouse event
     * @template
     */
    onMouseMove:function(canvas, x, y){
       
        if (this.lineFigure!==null) {
            this.lineFigure.setEndPoint(x,y);
        }
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} dx The x diff between start of dragging and this event
     * @param {Number} dy The y diff between start of dragging and this event
     * @param {Number} dx2 The x diff since the last call of this dragging operation
     * @param {Number} dy2 The y diff since the last call of this dragging operation
     * @template
     */
    onMouseDrag:function(canvas, dx, dy, dx2, dy2){
    },
    

    
    onDoubleClick: function(figure, x, y, shiftKey, ctrlKey){
        this.onClick(figure, x, y, shiftKey, ctrlKey);

        // Remove duplicate points at the end of the polyLine. This happens during the DoubleClick.
        // Reason: before the double click is fired the two "single click" comes before. In this case we
        // added three vertex for a doubleClick event
        //
        
        // don't use the shortcut and assign the this.lineFigure.vertices to a local var.
        // the vertices are recreated in the "calculatePath" mnethod of the polygon and
        // the reference is in this case invalid...design flaw!
        //
        var last = this.lineFigure.vertices.last();
        var beforeLast = this.lineFigure.vertices.get(this.lineFigure.vertices.getSize()-2);
        while(last.equals(beforeLast)){
            this.lineFigure.removeVertexAt(this.lineFigure.vertices.getSize()-2);
            beforeLast = this.lineFigure.vertices.get(this.lineFigure.vertices.getSize()-2);
        }
               
        this.lineFigure = null;
    },
    
    
    /**
     * @method
     * 
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @template
     */
    onClick: function(figure, x, y, shiftKey, ctrlKey){
        if (this.lineFigure === null) {
            this.setToolText(this.MESSAGE_STEP2);

            this.lineFigure = new shape_designer.figure.ExtLine();
            this.lineFigure.setStartPoint(x, y);
            this.lineFigure.setEndPoint(x, y);
            var command = new draw2d.command.CommandAdd(this.canvas, this.lineFigure, x, y);
            this.canvas.getCommandStack().execute(command);
            this.canvas.setCurrentSelection(this.lineFigure);
        }
        else {
            this.lineFigure.addVertex(x, y);
        }
    }
});


/********************************************************************************************************************
 *  LuboJ GraphLang functions
 ********************************************************************************************************************/
/**
 *  @method readSingleFile
 *  @param {HTMLInputFileTag} e Javascript object for input file tag placed somewhere in toolbar or else.
 *  @description Registered on some file input, at it change it will read chosen file and display its content.
 */
shape_designer.readSingleFile = function(e, appCanvas, appCanvas2){
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;             //result is read
    shape_designer.loadSymbolFromGraphLangClass(contents, appCanvas, appCanvas2);  //display as alert
  };
  reader.readAsText(file);  //this will put result into internal variable named result
}

shape_designer.dialog.GraphLangFigureCodeExport = Class.extend({
    init:function(){
	},

	show:function(){

		var writer = new shape_designer.GraphLangFigureWriter();
		
		writer.marshal(app.view,$("#symbol-name-input").val(),function(js){

	        var splash = $(
	                '<div class="overlay-scale"><pre id="export_overlay" class="prettyprint">'+
                    js+
	                '</pre>'+
					' <div title="Close" id="export_close"><i class="icon ion-ios-close-outline"></i></div>'+
			        ' <div title="Copy to Clipboard" id="export_clipboard"><i class="icon ion-clipboard"></i></div></div>'
	                );
	        $("body").append(splash);

	         var removeDialog = function(){
				 splash.removeClass("open");
				 setTimeout(function(){splash.remove();},400);
             };
             
	         $("#export_close").on("click",removeDialog);
	         prettyPrint();
	         
	         setTimeout(function(){splash.addClass("open");},100);

			$("#export_clipboard").off("click").on("click",function(ev){

				var copyElement = document.createElement('textarea');
				copyElement.innerHTML=js;
				copyElement = document.body.appendChild(copyElement);
				copyElement.select();
				document.execCommand('copy');
				copyElement.remove();

				toastr.options = {
					"closeButton": false,
					"debug": false,
					"newestOnTop": false,
					"progressBar": false,
					"positionClass": "toast-top-right",
					"preventDuplicates": true,
					"onclick": null,
					"showDuration": "3000",
					"hideDuration": "2000",
					"timeOut": "500",
					"extendedTimeOut": "2000",
					"showEasing": "swing",
					"hideEasing": "linear",
					"showMethod": "fadeIn",
					"hideMethod": "fadeOut"
				};

				toastr.info("Code copied to clipboard");
			});
		});

	}      
});  

shape_designer.GraphLangFigureWriter = draw2d.io.Writer.extend({
    
    init:function(){
        this._super();
    },
   
    /**
     * @method
     * Export the content to the implemented data format. Inherit class implements
     * content specific writer.
     * <br>
     * <br>
     * 
     * Method signature has been changed from version 2.10.1 to version 3.0.0.<br>
     * The parameter <b>resultCallback</b> is required and new. The method calls
     * the callback instead of return the result.
     * 
     * @param {draw2d.Canvas} canvas
     * @parma {String} className
     * @param {Function} resultCallback the method to call on success. The first argument is the result object, the second the base64 representation of the file content
     */
    marshal: function(canvas, className, resultCallback){
        var baseClass  = app.getConfiguration("baseClass");
        var customCode = app.getConfiguration("code");
        var figures = canvas.getExtFigures();
        var b = canvas.getBoundingBox();

        var x = b.x;
        var y = b.y;
        
        var ports  = [];
        var shapes = [];
        
        shapes.push({constructor: 'this.canvas.paper.path("M0,0 L'+(b.w)+',0 L'+(b.w)+','+(b.h)+' L0,'+(b.h)+ '")',
                     attr       : '{"stroke":"none","stroke-width":0,"fill":"none"}',
                     name       : "BoundingBox"
                    });
        
        figures.each(function(i,figure){
            figure.uninstallEditPolicy("draw2d.policy.figure.RegionEditPolicy");
            var attr = {};
            figure.svgPathString=null;
            figure.translate(-x,-y);
            // paint the element and fill the "attr" object with the current
            // settings
            figure.repaint(attr);
            delete attr.path;
            delete attr.x;
            delete attr.y;
            if((figure instanceof shape_designer.figure.ExtPolygon)){
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            } else if((figure instanceof shape_designer.figure.PolyCircle)){
                shapes.push({
                    constructor:"this.canvas.paper.ellipse()", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            }else if((figure instanceof shape_designer.figure.ExtLine)){
                // drop shadow
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify($.extend({},attr,{"stroke-width": attr["stroke-width"]+figure.getOutlineStroke(), "stroke": figure.getOutlineColor().hash()})),
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name+"_shadow"
                    });
                
                // the line itself
                shapes.push({
                    constructor:"this.canvas.paper.path('"+figure.svgPathString+"')", 
                    attr:JSON.stringify(attr) ,
                    extra:figure.getBlur()===0?"": "shape.blur("+figure.getBlur()+");\n",
                    name: figure.getUserData().name
                    });
            }else if(figure instanceof shape_designer.figure.ExtLabel){
                attr = figure.svgNodes[0].attr();
                attr.x = attr.x+figure.getAbsoluteX();
                attr.y = attr.y+figure.getAbsoluteY();
                delete attr.transform;
                shapes.push({
                    constructor:"this.canvas.paper.text(0,0,'"+figure.getText()+"')", 
                    attr:JSON.stringify(attr) ,
                    extra :"",
                    name: figure.getUserData().name
                    });
            }else if(figure instanceof shape_designer.figure.ExtPort){
                ports.push({
                    type:figure.getInputType()==="input"? '"input"': '"output"',
                    method: 'createPort',
                    direction:figure.getConnectionDirection(),
                    x    : 100/b.w*figure.getCenter().x,
                    y    : 100/b.h*figure.getCenter().y,
                    color: figure.getBackgroundColor().hash(),
                    name : figure.getUserData().name,
                    fanout: figure.getMaxFanOut(),
                    datatype: figure.getDatatype()
                    });
            }
            figure.translate(x,y);
        });
        
        var template =$("#shape-base-template").text().trim();

        //LuboJ
        jsonDocument = "[]";
        loadedObjectPreservedFunctions = "";
        if (shape_designer.loadedObjectJsonDocument) jsonDocument = shape_designer.loadedObjectJsonDocument;
        if (shape_designer.loadedObjectPreservedFunctions) loadedObjectPreservedFunctions = shape_designer.loadedObjectPreservedFunctions;
        symbolPicture = shape_designer.getSymbolPicture(app.view);

        var compiled = Hogan.compile(template);
        var output = compiled.render({
            className: className,
            baseClass: baseClass,
            figures: shapes,
            ports: ports,
            width: b.w,
            height: b.h,
            symbolPicture: symbolPicture,
            jsonDocument: jsonDocument,
            loadedObjectPreservedFunctions: loadedObjectPreservedFunctions
        });

        //LuboJ, remove shape instance creation
        //output = output +"\n\n"+customCode;
        
        resultCallback(output,  draw2d.util.Base64.encode(output));
    }
});

shape_designer.loadSymbolFromGraphLangClass = function(contents, appCanvas, appCanvas2){
  var canvas = appCanvas;
  var canvas2 = appCanvas2;     //auxiliar canvas which is hidden

  //regular expression match over multiple lines also using groups
  let regExp = new RegExp(/[\s\n]*([a-zA-Z0-9\.\-\_]+)[\s]*=[\s]*([a-zA-Z0-9\.\-\_]+)\.extend\(\{/gm);
  let matchPattern = regExp.exec(contents);

  var newObjectName = '';
  if (matchPattern){
    /*
        matchPattern[0] - whole match
        matchPattern[1] - group 1 - new object name (it's nested object in other object tree)
        matchPattern[2] - group 2 - parent object

        matchPattern.forEach(function(element){
          alert(element)
        });
    */

    objectTree = "";
    newObjectName = matchPattern[1];
    matchPattern[1].split('.').forEach(function(element, index){
        if (index > 0){
            objectTree += '.';        
        }else{
            //if most top variable is not defined create one here
            eval('if (typeof ' + element + ' === "undefined") ' + element + ' = {}');
        }
        objectTree += element;

        //here if subsequent variables are not defined then they are created
        var expression = 'return ' + objectTree;
        var result = new Function(expression)();
        if (result == undefined){
            //alert(objectTree + ' is undefined')
            eval(objectTree + ' = {}');             //creates object
        }
    });
  }
  
  if (!newObjectName){
    alert("Schematic file is not corrupted. Loaded process canceled.");
    return;
  }

  //THIS FOLLOW VIOLATE ALL PROGRAMMING PRINCIPPLES NOW FOR DEBUGGING SUPPOSE VARIABLES ARE GLOBAL!
  eval(contents); //all schematics are saved as JSON assigned to variable jsonDocument
  appCanvas.clear();
  var reader = new draw2d.io.json.Reader();

  //here is object creation and after getting its jsonDocument property where it's inside schematic is stored
  var newObject = eval('new ' + newObjectName + '()');
  shape_designer.loadedObject = newObject;

  /*
   *    Update symbol name input in toolbar
   */
  $("#symbol-name-input").val(newObject.NAME);

  /*
   *    Loading shape drawing, lines, circles, ...
   */

  newObject.setCanvas(canvas2);                          //paper must be set, this is auxiliar paper, drawing will be put there and then we are reading parameters from elements
  var shape = newObject.createSet();                     //calling method returning Raphael set
  let moveToX = 0;                                     //addtional X translation 
  let moveToY = 0;                                      //additional Y translation
  
  moveToX = $("#canvas").innerWidth()/2 - newObject.getWidth()/2;
  moveToY = $("#canvas").innerHeight()/2 - newObject.getHeight()/2;
  
  shape.forEach(function(element, index){
    var infoStr = "";
    var propertiesStr = "";

    if (element.type == 'path'){
        /*
            attrs
              fill
              stroke
              path
              stroke-width
        */
        
        /*
         *  Create open lines elements
         */
        if (element.data("name").toLowerCase().search("_shadow") == -1 &&
            element.data("name").toLowerCase().search("boundingbox") == -1 &&
            element.attrs.path[element.attrs.path.length - 1] != "Z" &&
            element.attrs.path[element.attrs.path.length - 1] != "z"
        ){

          //print element attributes for debugging
          /*
          infoStr = element.data("name") + "\n";
          propertiesStr = "";
          e = element.attrs;
          Object.keys(e).forEach(prop => propertiesStr += prop + " = " + e[prop] + "\n")
          infoStr += propertiesStr;
          alert(infoStr)
          */


          let pathStr = element.attrs.path;
          let regExp = new RegExp('M[L,Q,0-9,\.]*');
          let matchPattern = regExp.exec(pathStr);
          matchPattern = matchPattern[0].slice(1);
          let vertexArray = [];  
          /*
           *    Split string using 'L', 'Q'
           *    'Q' defines curvet line, it's there when curved corners are used, need to figure out how to get radius for now UNSUPPORTED
           */
          matchPattern.split(/[LQ]+/).forEach(function(coordsStr){        
            let coordsXY = coordsStr.split(',');
            vertexArray.push({x:moveToX + parseFloat(coordsXY[0]),y: moveToY + parseFloat(coordsXY[1])});
          });
          
          var lineFigure = new shape_designer.figure.ExtLine(); //extended draw2d.shape.basic.PolyLine
          lineFigure.setUserData({name: element.data("name")});
          lineFigure.setVertices(vertexArray);

          lineFigure.setAlpha(element.attrs.opacity);
          lineFigure.setStroke(element.attrs["stroke-width"]);
          lineFigure.setColor(element.attrs.stroke);
          //lineFigure.setRadius(element.attrs.stroke);

          var command = new draw2d.command.CommandAdd(canvas, lineFigure, 0);
          canvas.getCommandStack().execute(command);
          canvas.setCurrentSelection(lineFigure);
        }else if (
            element.attrs.path[element.attrs.path.length - 1] == "Z" ||
            element.attrs.path[element.attrs.path.length - 1] == "z" 
        ){
          let pathStr = element.attrs.path;
          let regExp = new RegExp('M[L,0-9,\.]*');
          let matchPattern = regExp.exec(pathStr);
          matchPattern = matchPattern[0].slice(1);

          var polygonFigure = new shape_designer.figure.ExtPolygon(); //extended draw2d.shape.basic.PolyLine
          polygonFigure.setUserData({name: element.data("name")});
          let vertexArray = [];
          let smallestX = 1e6;
          let smallestY = 1e6;  
          matchPattern.split('L').forEach(function(coordsStr){        
            let coordsXY = coordsStr.split(',');

            let coordX = parseFloat(coordsXY[0]);
            let coordY = parseFloat(coordsXY[1]);
            if (coordX < smallestX) smallestX = coordX;
            if (coordY < smallestY) smallestY = coordY;

            vertexArray.push({x: coordX,y: coordY});
            polygonFigure.addVertex(parseFloat(coordsXY[0]), parseFloat(coordsXY[1]));
          });

          //by default there are 3 vertices created so here we removed them, they are created
          //becasue there is some width height calculation and it must be done
          polygonFigure.removeVertexAt(0);
          polygonFigure.removeVertexAt(0);
          polygonFigure.removeVertexAt(0);

          //polygonFigure.setWidth(element.attrs.rx*2);
          //polygonFigure.setHeight(element.attrs.ry*2);
          polygonFigure.setAlpha(element.attrs.opacity);
          polygonFigure.setBackgroundColor(element.attrs.fill);
          polygonFigure.setStroke(element.attrs["stroke-width"]);
          polygonFigure.setColor(element.attrs.stroke);


          let posX = moveToX + smallestX;
          let posY = moveToY + smallestY;
          var command = new draw2d.command.CommandAdd(canvas, polygonFigure, posX, posY);
          canvas.getCommandStack().execute(command);
          canvas.setCurrentSelection(polygonFigure);
        }
    }else if (element.type == 'ellipse'){

        /*
        infoStr = element.data("name") + "\n";
        propertiesStr = "";
        e = element.attrs;
        Object.keys(e).forEach(prop => propertiesStr += prop + " = " + e[prop] + "\n")
            infoStr += propertiesStr;
        alert(infoStr);
        */
        
        var circleFigure = new shape_designer.figure.PolyCircle(new draw2d.geo.Point(0,0), element.attrs.rx);
        circleFigure.setWidth(element.attrs.rx*2);
        circleFigure.setHeight(element.attrs.ry*2);
        circleFigure.setUserData({name: element.data("name")});       
        circleFigure.setAlpha(element.attrs.opacity);
        circleFigure.setBackgroundColor(element.attrs.fill);
        circleFigure.setStroke(element.attrs["stroke-width"]);
        circleFigure.setColor(element.attrs.stroke);
        
        //alert(moveToX + element.attrs.cx + " - " + moveToY + element.attrs.cy)
        let radiusX = element.attrs.rx;
        let radiusY = element.attrs.ry;
        let posX = moveToX + element.attrs.cx - radiusX;
        let posY = moveToY + element.attrs.cy - radiusY;
                
        var command = new draw2d.command.CommandAdd(canvas, circleFigure, posX, posY);
        canvas.getCommandStack().execute(command);
        canvas.setCurrentSelection(circleFigure);
    }else if (element.type == 'text'){
        /*
        infoStr = element.data("name") + "\n";
        propertiesStr = "";
        e = element.attrs;
        Object.keys(e).forEach(prop => propertiesStr += prop + " = " + e[prop] + "\n")
            infoStr += propertiesStr;
        alert(infoStr);
        */
        
        var textFigure = new shape_designer.figure.ExtLabel();
        textFigure.setUserData({name: element.data("name")});
        textFigure.setText(element.attrs.text);
        textFigure.setStroke(element.attrs["stroke-width"]);    //this is outline stroke width not rectangle around label
        textFigure.setColor(element.attrs.stroke);

        //this is set by experiment, text anchor point seema to be in left bottom point, so at positioning font height is subtracted
        //from position of label which is left top point of label bounding box
        var textFigurePadding = 0;
        var textFigureWidth = 0;
        var textFigureHeight = textFigure.getFontSize() + 2*textFigurePadding;

        var command = new draw2d.command.CommandAdd(canvas, textFigure, moveToX + element.attrs.x - textFigureWidth/2, moveToY + element.attrs.y - textFigureHeight/2);
        canvas.getCommandStack().execute(command);
        canvas.setCurrentSelection(textFigure);
    }else{
        //do nothing
    }    
  });

  /*
   *    Loading shape ports
   */
  newObject.getPorts().each(function(portIndex, portObj){
    let posX = portObj.getLocator().x * newObject.width / 100;
    let posY = portObj.getLocator().y * newObject.height / 100;

    var portFigure = new shape_designer.figure.ExtPort();
    portFigure.setUserData({name: portObj.getName(), datatype: (portObj.userData && portObj.userData.datatype)?portObj.userData.datatype:"undefined"});

    //set in/out
    let portObjTypeStr = portObj.NAME;
    if (portObjTypeStr.toLowerCase().search("input") > -1){
        portFigure.setInputType("Input");
    }else if (portObjTypeStr.toLowerCase().search("output") > -1){
        portFigure.setInputType("Output");
    }
    portFigure.setColor(portObj.getColor());
    portFigure.setConnectionDirection(portObj.getConnectionDirection());
    portFigure.setMaxFanOut(portObj.getMaxFanOut());
    portFigure.setBackgroundColor(portObj.getBackgroundColor());
    

    var command = new draw2d.command.CommandAdd(canvas, portFigure, moveToX + posX - portObj.getWidth()/2, moveToY + posY - portObj.getHeight()/2);
    canvas.getCommandStack().execute(command);
    canvas.setCurrentSelection(portFigure);
  });

  /*
   *    Store into shape_designer structure functions which should be preserved and contained
   *    in newly generated code for this symbol, these are from loaded file.
   */
  shape_designer.loadedObjectJsonDocument = JSON.stringify(newObject.jsonDocument, null, 2);
  shape_designer.loadedObjectPreservedFunctions = "";
  if (newObject.translateToCppCode) shape_designer.loadedObjectPreservedFunctions += "translateToCppCode: " + newObject.translateToCppCode; 

  /*
  var js = "";
  js = newObject.getObjectAsString();
  alert(js);
  var copyElement = document.createElement('textarea');
  copyElement.innerHTML=js;
  copyElement = document.body.appendChild(copyElement);
  copyElement.select();
  document.execCommand('copy');
  copyElement.remove();
  */





  /*
   *    AT THE END CHECK DIFFERENCE BETWEEN PORT AND SCHEMATIC PORTS
   *        - port compare against schematic is done just in case schematic is defined at object ie. jsonDocument exists
   */
  if (newObject.jsonDocument) {
    this.checkSymbolAndSchematic(canvas)
  }

}

shape_designer.checkSymbolAndSchematic = function(canvas){
    var symbolPortList = new draw2d.util.ArrayList();
    var symbolPortList2 = new draw2d.util.ArrayList();
    canvas.getExtFigures().each(function(figureIndex, figureObj){
        if (figureObj.NAME.toLowerCase().search("extport") > -1){
            symbolPortList.push(figureObj);
            symbolPortList2.push({name: figureObj.getUserData().name, datatype: figureObj.getDatatype(), type: figureObj.getInputType().toLowerCase()});
        }
    });
    
    var loadedObject = shape_designer.loadedObject;
    var terminalList = new draw2d.util.ArrayList();
    var flagReturnValueAdded = false;
    if (loadedObject.jsonDocument){
      loadedObject.jsonDocument.forEach(function(element){

          /*
           *  This terminal nodes.
           */
          if (element.userData && element.userData.isTerminal){
            var terminalObj = eval('new ' + element.type + '()');
            terminalList.push({name: element.userData.nodeLabel, datatype: element.userData.datatype, type: terminalObj.getOutputPorts().getSize() > 0?"input":"output"});
          }

          /*
           *    Add return node as terminal, BUT ADD IT ONLY ONCE
           */
          /*
          if (!flagReturnValueAdded && element.type.toLowerCase().search(".return") > -1){
              flagReturnValueAdded = true;  //this prevent to add multiple return nodes as output terminals
              terminalList.push({name: "return", datatype: "undefined", type: "output"});
          }
          */

         /*
          *  This takes return node and add output port to node.
          */
          if (element.type.toLowerCase().search(".terminaloutput") > -1){
            terminalList.push({name: element.text, datatype: element.userData.datatype, type: "output"});
          }
      });
    }
    
    var terminalStatusList = new draw2d.util.ArrayList();
    var symbolPortList2Copy = symbolPortList2.clone();
    terminalList.each(function(terminalIndex, terminalObj){
        if (symbolPortList2Copy.contains(terminalObj)){
            terminalStatusList.push("ok");
        }else if (symbolPortList2Copy.find(function(figure){return figure.name === terminalObj.name && figure.datatype === terminalObj.datatype})){
            symbolPortList2Copy.remove(symbolPortList2Copy.find(function(figure){return figure.name === terminalObj.name && figure.datatype === terminalObj.datatype}));
            terminalStatusList.push("wrong direction");
        }else if (symbolPortList2Copy.find(function(figure){return figure.name === terminalObj.name && figure.type === terminalObj.type})){
            symbolPortList2Copy.remove(symbolPortList2Copy.find(function(figure){return figure.name === terminalObj.name && figure.type === terminalObj.type}));
            terminalStatusList.push("wrong datatype");
        }else if (symbolPortList2Copy.find(function(figure){return figure.datatype === terminalObj.datatype && figure.type === terminalObj.type})){
            symbolPortList2Copy.remove(symbolPortList2Copy.find(function(figure){return figure.datatype === terminalObj.datatype && figure.type === terminalObj.type}));
            terminalStatusList.push("wrong name");
        }else{
            terminalStatusList.push("missing");
        }    
    });

    msg = "------- SYMBOL PORTS ------\n";
    symbolPortList2.each(function(index, element){
        msg += index + JSON.stringify(element) + "\n";
    });

    msg += "\n--- SCHEMATIC PORTS --------\n";
    terminalList.each(function(index, element){
        msg += index + JSON.stringify(element) + "\n";
    });
    
    msg += "\n--------- STATUS -----------\n";
    terminalStatusList.each(function(index, element){
        msg += index + JSON.stringify(element) + "\n";
    });
    alert(msg);

    /*
     *  Correcting symbol ports.
     */
    var missingTerminalCounter = 0;
    terminalStatusList.each(function(index, element){
        var terminalObj = terminalList.get(index);
        var symbolPort = null;
        
        if (element == "wrong direction"){
            symbolPort = symbolPortList.find(function(figure){return figure.getUserData().name === terminalObj.name && figure.getDatatype() === terminalObj.datatype});
            symbolPort.setInputType(terminalObj.type);
        }else if(element == "wrong datatype"){
            symbolPort = symbolPortList.find(function(figure){return figure.getUserData().name === terminalObj.name && figure.getInputType().toLowerCase() === terminalObj.type});
            symbolPort.setDatatype(terminalObj.datatype);
        }else if(element == "wrong name"){
            symbolPort = symbolPortList.find(function(figure){return figure.getDatatype() === terminalObj.datatype && figure.getInputType().toLowerCase() === terminalObj.type});
            symbolPort.userData.name = terminalObj.name;
        }else if(element == "missing"){
            missingTerminalCounter++;
            
            var portFigure = new shape_designer.figure.ExtPort();
            portFigure.setUserData({name: terminalObj.name, datatype: terminalObj.datatype});
            portFigure.setInputType(terminalObj.type == 'input' ? "input" : "output");
            portFigure.setConnectionDirection(terminalObj.type == 'input' ? 3 : 1);
        
            //place port randomly on canvas, put there some positional noise :D
            var boundingBox = app.view.getBoundingBox();
            var posX = boundingBox.getX() + missingTerminalCounter*30;
            var posY = boundingBox.getY() - 50;
            
            var command = new draw2d.command.CommandAdd(canvas, portFigure, posX, posY);
            canvas.getCommandStack().execute(command);
            canvas.setCurrentSelection(portFigure);
        }
        
        if (symbolPort) symbolPortList.remove(symbolPort);
    });

    symbolPortList.each(function(portIndex, portObj){
        canvas.remove(portObj);
    });
    
    app.layer.stackChanged(null);

    /*
    $(".layerElement").removeClass("layerSelectedElement");
    var selection = this.view.getSelection();
    selection.each(function(i,e){
        $("#layerElement_"+e.id).addClass("layerSelectedElement");
    });
    */
}

shape_designer.getSymbolPicture = function(canvas){
        var writer = new draw2d.io.png.Writer();
        var boundingBox = canvas.getBoundingBox();
        boundingBox.setX(boundingBox.getX()-10);
        boundingBox.setY(boundingBox.getY()-10);
        boundingBox.setWidth(boundingBox.getWidth()+20);
        boundingBox.setHeight(boundingBox.getHeight()+20);
        
        var resultPictureAsVase64Data = "";
        writer.marshal(canvas,function(pngBase64Data, pngData){
            navigator.clipboard.writeText(pngBase64Data);
            resultPictureAsVase64Data = pngBase64Data;
        }, boundingBox);
        
        return resultPictureAsVase64Data;
}

/**
 *  @method: shape_designer.saveSymbol
 *  @ddescription: Save current file into file.
 */
shape_designer.saveSymbol = function(){
    var writer = new shape_designer.GraphLangFigureWriter();
    writer.marshal(app.view,$("#symbol-name-input").val(),function(data){
        var filename = $("#symbol-name-input").val() + '.js';
        var type = 'text/javascript';
    
        /*
         *  This is here because there were some html encoded chars in data as &quote; and &gt; so this will make them back to ",>,...
         */
        htmlDecode = function(input){
          var e = document.createElement('textarea');
          e.innerHTML = input;
          // handle case of empty input
          return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
        data = htmlDecode(data);
        
        /*
         *  Generic function to saver file and open download dialog for user.
         */
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
            url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    });
}