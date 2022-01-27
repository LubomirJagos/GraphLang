import os, sys
import glob
import re

searchDirs = [
    "UserDefinedNode",
    "ArduinoLib",
    "PythonQtGuiLib",
]

objectsNamesList = []

htmlTemplate = """
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title></title>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

   <link type="text/css" rel="stylesheet" href="./css/aristo/jquery-ui-1.8.16.custom.css" />
   <link type="text/css" rel="stylesheet" href="./css/jquery.layout.css" />
   <link type="text/css" rel="stylesheet" href="./css/application.css" />
   <link type="text/css" rel="stylesheet" href="./css/GraphLang_application.css" />

    <style type="text/css">
      .palette_node_element{
        float: left; /*LuboJ*/
        margin: 5px 5px 5px 5px;
        padding: 5px 5px 5px 5px;
        font-size: 12px;
      }
      .palette_node_element img{
        max-width: 60px;
      }
    </style>

    <script src="./lib/jquery.js"></script>
    <script src="./lib/jquery-ui.js"></script>
    <script src="./lib/jquery.browser.js"></script>
    <script src="./lib/jquery.layout.js"></script>
    <script src="./lib/jquery.ui.touch-punch.js"></script>

<!--     <script src="../draw2d/dist/draw2d.js"></script>   -->
    <script src="../draw2d_hardCopy/draw2d.js"></script>

    <script type="text/javascript">
      /**
       *  GLOBAL DEFINITIONS
       */
      //save reference to canvas to have it globally acessible
      var appCanvas;
      var GraphLang = {};
      GraphLang.Shapes = {};
      GraphLang.Shapes.Basic = {};
      GraphLang.Shapes.Basic.Constant = {};
      GraphLang.Shapes.ItemsNode = {};

      <!-- library tree variables init place to insert -->

    </script>

    <script src="./gui/Application.js"></script>
    <script src="./gui/View.js"></script>
    <script src="./gui/Toolbar.js"></script>
    <script src="./gui/HoverConnection.js"></script>

    <!-- These are mine shapes added. LuboJ. -->
      <script src="./GraphLangShapes/__initEnv.js"></script>
      <script src="./GraphLangShapes/Port.js"></script>
      <script src="./GraphLangShapes/InputPort.js"></script>
      <script src="./GraphLangShapes/OutputPort.js"></script>
      <script src="./GraphLangShapes/Shapes.js"></script>
      <script src="./GraphLangShapes/Label.js"></script>  <!-- here is some serious PROBLEM, without definition inside file of variale it's not running, DAMN-->
      <script src="./GraphLangShapes/Loop2.js"></script>
      <script src="./GraphLangShapes/Jailhouse.js"></script>
      <script src="./GraphLangShapes/LayerChooser.js"></script> <!-- LuboJ, my invention -->
      <script src="./GraphLangShapes/Tunnel.js"></script>
      <script src="./GraphLangShapes/LeftTunnel.js"></script>
      <script src="./GraphLangShapes/RightTunnel.js"></script>
      <script src="./GraphLangShapes/WireConnection.js"></script>
      <script src="./GraphLangShapes/Multilayered3.js"></script>
      <script src="./GraphLangShapes/WhileLayer.js"></script>
      <script src="./GraphLangShapes/ForLoop.js"></script>
      <script src="./GraphLangShapes/Sequence.js"></script>
      <script src="./GraphLangShapes/FeedbackNode.js"></script>
      <script src="./GraphLangShapes/UnbundleByName.js"></script>
      <script src="./GraphLangShapes/BundleByName.js"></script>
      <script src="./GraphLangShapes/Unbundle.js"></script>
      <script src="./GraphLangShapes/Bundle.js"></script>
      <script src="./GraphLangShapes/ConstantNode.js"></script>
      <script src="./GraphLangShapes/ArrayNode.js"></script>
      <script src="./GraphLangShapes/ClusterDatatypeNode2.js"></script>
      <script src="./GraphLangShapes/SliderNode.js"></script>
      <script src="./GraphLangShapes/Return.js"></script>
      <script src="./GraphLangShapes/UserDefinedNode.js"></script>

    <script src="./GraphLangUtils/Utils.js"></script>
    <script src="./GraphLangUtils/RightRelPortLocator.js"></script>
    <script src="./GraphLangUtils/BottomRelPortLocator.js"></script>
    <script src="./GraphLangUtils/LeftRelPortLocator.js"></script>
    <script src="./GraphLangUtils/TopRelPortLocator.js"></script>
    <script src="./GraphLangUtils/CommandDelete.js"></script>
    <script src="./GraphLangUtils/KeyboardDeletePolicy.js"></script>
    <script src="./GraphLangUtils/Color.js"></script>
    <script src="./GraphLangUtils/ArrayClusterInPlaceEditor.js"></script>

    <script type="text/javascript">
      var jsonDocument = [];
      var jsonDocument2 = [];
      var userDefinedSchematics = [];
    </script>

    <!-- user defined nodes place to insert -->

 <script type="text/javascript">

document.addEventListener("DOMContentLoaded",function () {
     var app  = new example.Application();

     /**
      *   WIRE CONNECTION policy
      */
     app.view.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection: function(){
            var newWire = new HoverConnection();
            var newWireColor = new GraphLang.Utils.Color();
            newWire.setColor(newWireColor.getByName('broken'));

            return newWire;
        },
        delegateTarget: function(requestingFigure, connectTarget){
            // we allow that a figure with a special class is droppable to a connection
            //
            if(requestingFigure instanceof TunnelFigure && connectTarget instanceof draw2d.Connection){
                return connectTarget;
            }

            return this._super(requestingFigure, connectTarget);
        }
      }));

//draw2d.command.CommandStackListener

      /*
       *  KEYBOARD reactions
       */
      //app.view.uninstallEditPolicy(new draw2d.policy.canvas.DefaultKeyboardPolicy());
      //app.view.installEditPolicy(new GraphLang.Utils.KeyboardDeletePolicy());

      /**
       *  Adding actions TRIGGERED AFTER COMMAND STACK WAS CHANGED, ie. some command run succesfully
       *  Update JSON representation of canvas
       */
      appCanvas = app.view;
      app.view.getCommandStack().addEventListener(function(e){
          //postChangeEvent is notification when command already run
          if(e.isPostChangeEvent()){
  	          displayJSON(appCanvas);              //update JSON string somewhere in log window on canvas


              /*
               *  Change wire color by source port.
               */
              var lastCommand = e.getCommand();
              if (lastCommand.getLabel() == 'Connect Ports'){
                var wireColor = new GraphLang.Utils.Color();
                if (lastCommand.source.userData == null) return lastCommand.connection.setColor(wireColor.getByName('broken'));
                var portDatatype = lastCommand.source.userData.datatype;
                portDatatype = portDatatype ? portDatatype : 'broken';
                lastCommand.connection.setColor(wireColor.getByName(portDatatype));

                //GraphLang.Utils.detectTunnels(appCanvas, lastCommand.connection);  //there is also in Utils.js in Connection() LOOK THERE
                GraphLang.Utils.detectTunnels2(appCanvas, lastCommand.connection);
              }

              /*
               *  Recalculate all tunnels. This should be act just for particular wire, but for now I don't have this function just for one wire.
               *  THIS IS NOT RUNNING HOW IT SHOULD BE, BUT FOR DEBUGGING PROBABLY ENOUGH GOOD
               *    It's creating tunnels even when block is moved and wire goes through structures like while or case
               */
               //GraphLang.Utils.detectTunnels(appCanvas);  //there is also in Utils.js in Connection() LOOK THERE

  	      }
  	  });

      /*****************************************************************************
       * READING DEFAULT SCHEMATIC AND DRAW IT
       *****************************************************************************/
      var reader = new draw2d.io.json.Reader();
      reader.unmarshal(appCanvas, jsonDocument);



      /*
       *	LOADING FILE INTO BOTTOM CANVAS
	   */
	  appCanvas2 = app.view2;
      //reader.unmarshal(appCanvas2, jsonDocument2);
});

/**
 *  This is called on event and serializing canvas into JSON format here to have some results.
 *  @return Return value is JSON string to be able produce obj on another place
 */
function displayJSON(canvas){
    var writer = new draw2d.io.json.Writer();
    var jsonStr = "";
    writer.marshal(appCanvas,function(json){
      //LuboJ modification to remove Tunnels, they appear in json after executionOrder, THIS IS PROBLEM, this solution is just for now
      var clearedJson = [];
      var wrongJson = [];
      for (var k = 0; k < json.length; k++){
        if (json[k].type.toLowerCase().search("tunnel") == -1) clearedJson.push(json[k]);
        else wrongJson.push(json[k]);
      }

      jsonStr = JSON.stringify(clearedJson, null, 2);
      $("#json").text(jsonStr);

      //LuboJ auxiliary view
      jsonStr = JSON.stringify(wrongJson, null, 2);
      $("#json2").text(jsonStr);
    });
    return jsonStr;
}

</script>

</head>

<body id="container">

   <div id="content">
   		<div id="toolbar"></div>
   		<div id="canvas" style="width: 1500px; height: 600px;"></div>
      <div id="canvas2" style="width: 1500px; height: 600px;"></div> <!-- Size of bottom window is defined in Application.js -->

      <!--
       Canvas for screenshots set to not display but it's still here just chane its style attr.
       -->
      <div style="display: inline; position: absolute; right: 20px; bottom: 20px; width: 400px; height: 220px; background: none;">
        <canvas id="myCanvas" width="160px" height="85px" style="background: red; float: left;"></canvas>

        <div id="imgDiv" style="display: inline; overflow: hidden; height: 200px; width: 200px; background: yellow;">
          <img class="shadow" id="preview" style="border-radius:5px;overflow:auto;/* position:absolute; top:10px; left:10px; */width:150; height:150;border:3px solid gray; background: #FFFFFF; margin: 0 0 0 0;"/>
        </div>
      </div>
   </div>

   <div id="navigation" class="">

        <!--
          Tab 1 - GraphLang core nodes
        -->
        <div id="GraphLang.Shapes.Basic">
          <div data-shape="GraphLang.Shapes.Basic.SliderNode" data-label="GraphLang SliderNode" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/slider.png" />
            GraphLang SliderNode
          </div>
          <div data-shape="GraphLang.Shapes.Basic.Loop2.ClusterDatatypeNode2" data-label="GraphLang ClusterDatatypeNode2" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/Arduino_clusterDatatypeNode.png" />
            GraphLang ClusterDatatypeNode2
          </div>
          <div data-shape="GraphLang.Shapes.Basic.ArrayNode" data-label="GraphLang ArrayNode" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/ArrayNode.png" />
            GraphLang ArrayNode
          </div>
          <div data-shape="GraphLang.Shapes.Basic.ConstantNode" data-label="GraphLang ConstantNode" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/Constant.png" />
            GraphLang ConstantNode
          </div>
          <div data-shape="GraphLang.Shapes.Basic.BundleByName" data-label="GraphLang BundleByName" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/bundleByName.png" />
            GraphLang BundleByName
          </div>
          <div data-shape="GraphLang.Shapes.Basic.UnbundleByName" data-label="GraphLang UnbundleByName" class="palette_node_element draw2d_droppable">GraphLang UnbundleByName</div>
          <div data-shape="GraphLang.Shapes.Basic.Bundle" data-label="GraphLang Bundle" class="palette_node_element draw2d_droppable">GraphLang Bundle</div>
          <div data-shape="GraphLang.Shapes.Basic.Unbundle" data-label="GraphLang Unbundle" class="palette_node_element draw2d_droppable">GraphLang Unbundle</div>
          <div data-shape="GraphLang.Shapes.Basic.Loop2.WhileLayer" data-label="GraphLang WhileLayer" class="palette_node_element draw2d_droppable">WhileLayer</div>
          <div data-shape="GraphLang.Shapes.Basic.Loop2.ForLoop" data-label="GraphLang ForLoop" class="palette_node_element draw2d_droppable">ForLoop</div>
          <div data-shape="GraphLang.Shapes.Basic.Loop2.Multilayered3" data-label="GraphLang Multilayered3" class="palette_node_element draw2d_droppable">Multilayered3</div>
          <div data-shape="GraphLang.Shapes.Basic.Loop2.Sequence" data-label="GraphLang Sequence" class="palette_node_element draw2d_droppable">Sequence</div>
          <div data-shape="GraphLang.Shapes.Basic.FeedbackNode" data-label="GraphLang FeedbackNode" class="palette_node_element draw2d_droppable">
            <img src="GraphLangSymbols/Arduino_feedback.png" />
            GraphLang FeedbackNode
          </div>
          <div data-shape="GraphLang.Shapes.Basic.Return" data-label="GraphLang Return" class="palette_node_element draw2d_droppable">Return</div>
        </div>

        <!-- user defined nodes menu place to insert -->

  </div>

   <!-- window with JSON representation of schematic -->
   <div id="json" style="display: none; overflow:auto;position:absolute; top:100px; right:10px; width:350; height:100;background:white;border:1px solid gray"></div>
   <div id="json2" style="display: none; overflow:auto;position:absolute; top:100px; left:220px; width:250; height:100;background:white;border:1px solid gray">
   </div>

</body>
</html>
"""

def formatData(t,s):
    if not isinstance(t,dict) and not isinstance(t,list):
        print ("\t"*s+str(t))
    else:
        for key in t:
            print("\t"*s+str(key))
            if not isinstance(t,list):
                formatData(t[key],s+1)


createVariableIniStatement = []
classList = []
treeStr = ""
def createVariableInitDeclaration(t,s, outStr = ""):
    global createVariableIniStatement
    for key in t:
        if not isinstance(t,list):
            createVariableInitDeclaration(t[key],s+1, outStr + ('.' if len(outStr) > 0 else '') + key)

            createVariableIniStatement.append("\t" + outStr + ('.' if len(outStr) > 0 else '') + key + " = {};\n")
            classList.append(outStr + ('.' if len(outStr) > 0 else '') + key)


if __name__ == "__main__":
    for dirName in searchDirs:
        searchPath = dirName + '/**'
        for fileName in glob.glob(searchPath, recursive=True):
            if not os.path.isdir(fileName):
                #print(fileName)
                with open(fileName, "r") as currentFile:
                     fileContent = currentFile.read()
                     regExp = re.compile(r"[\/\s\n]*([a-zA-Z0-9\.\-]+)[\s]*=[\s]*([a-zA-Z0-9\.\-]+)", re.MULTILINE)
                     matchPattern = regExp.findall(fileContent)
                     if matchPattern:
                        objectsNamesList.append((os.path.dirname(fileName), fileName, matchPattern[0][0]))

    #print('===================================')
    #print(objectsNamesList)

    jsScriptIncludeStatement = ""
    libraryObjectTree = {}
    for nodeItem in objectsNamesList:
        nodeLibTree = nodeItem[2].split('.')
        if len(nodeLibTree) > 1:
            nodeLibTree.pop()
        currentParent = libraryObjectTree
        for nodeLibTreeItem in nodeLibTree:
            if not nodeLibTreeItem in currentParent:
               currentParent[nodeLibTreeItem] = {}
            currentParent = currentParent[nodeLibTreeItem]

    #formatData(libraryObjectTree,0)
    createVariableInitDeclaration(libraryObjectTree, 0)
    createVariableIniStatement = createVariableIniStatement[::-1]
    classList = classList[::-1]

    print(libraryObjectTree)

    print('=============================')

    for k in objectsNamesList:
        print(k)

    print('=============================')

    print(classList)

    print('=============================')

    for className in classList:
        for nodeItem in objectsNamesList:
            jsNodeName = nodeItem[2]
            if jsNodeName.rfind('.') > -1:
               jsNodeName = jsNodeName[:jsNodeName.rfind('.')]

            if jsNodeName == className:
               jsScriptIncludeStatement += "\t" + '<script src="' + nodeItem[1] + '"></script>' + "\n"

    print(jsScriptIncludeStatement)

    #print(jsScriptIncludeStatement)
    outputStr = htmlTemplate.replace('<!-- user defined nodes place to insert -->', '<!-- user defined nodes place to insert -->'+"\n"+jsScriptIncludeStatement)
    outputStr = outputStr.replace('<!-- library tree variables init place to insert -->', '<!-- library tree variables init place to insert -->'+"\n"+ "".join(createVariableIniStatement))
    #print(outputStr)
    with open("GrahpLang IDE Generated 1.html", "w") as fileOutput:
         fileOutput.write(outputStr)

