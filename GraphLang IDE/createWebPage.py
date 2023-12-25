import os, sys
import glob
import re

blocksRootDir = "LibraryBlocks"

searchDirs = [
    blocksRootDir,
]

#
#   List of excluded directories, these here are included but there is no menu item generated
#
excludeFromHtmlBlockPatterns = [
    "Core/utils",
    "GraphLangExperimental",
]

#
#   Tabs assignemnt blocs. If it path starts with some of keys then is under this tab.
#
blocksToTabsAssignment = {
    os.path.join(blocksRootDir, "Arduino"):                 "Arduino",
    os.path.join(blocksRootDir, "Core"):                    "Core",
    os.path.join(blocksRootDir, "GraphLangExperimental"):   "Experimental",
    os.path.join(blocksRootDir, "PythonQtGuiLib"):          "Python GUI",
    os.path.join(blocksRootDir, "UserDefinedNode"):         "User Nodes"
}

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
       *    - save reference to canvas to have it globally acessible
       *    - init empty variable object for each library, otherwise there would be error in console
       */
      var appCanvas;

      //library tree variables init place to insert

    </script>

    <script src="./gui/Application.js"></script>
    <script src="./gui/View.js"></script>
    <script src="./gui/Toolbar 2.js"></script>
    <script src="./gui/HoverConnection.js"></script>

    <script src="./GraphLangUtils/Utils.js"></script>
    <script src="./GraphLangUtils/RightRelPortLocator.js"></script>
    <script src="./GraphLangUtils/BottomRelPortLocator.js"></script>
    <script src="./GraphLangUtils/LeftRelPortLocator.js"></script>
    <script src="./GraphLangUtils/TopRelPortLocator.js"></script>
    <script src="./GraphLangUtils/CommandDelete.js"></script>
    <script src="./GraphLangUtils/KeyboardDeletePolicy.js"></script>
    <script src="./GraphLangUtils/Color.js"></script>
    <script src="./GraphLangUtils/ArrayClusterInPlaceEditor.js"></script>

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

      /*
       *	LOADING FILE INTO BOTTOM CANVAS
	   */
	  appCanvas2 = app.view2;
      //reader.unmarshal(appCanvas2, jsonDocument2);


      /*****************************************************************************
       * LOAD PICTURES TO USER DEFINED NODES IN LEFT TOOLBOX
       *****************************************************************************/
      $('#navigation').children('div[id="GraphLang.UserDefined"]').children('div').each(function(index,htmlObj){
        jsCode="new " + htmlObj.getAttribute('data-shape') + "()";
        nodeObj = eval(jsCode);

        if (nodeObj.symbolPicture) {
          var imgElement = new Image();
          imgElement.src = nodeObj.symbolPicture;
          htmlObj.append(imgElement);
        }
      });
});

/**
 *  After page is loaded add pciture to each menu node item.
 */
$(document).ready(function(){
      $('#navigation div').each(function () {
          var nodeObj = eval('new ' + $(this).attr('data-shape') + '()');
          if (nodeObj.symbolPicture !== undefined){
              $(this).prepend('<img src="' + nodeObj.symbolPicture + '" />');
          }
      });
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
   </div>

   <div id="navigation" class="">

        <!-- user defined nodes menu place to insert -->

  </div>

   <!-- window with JSON representation of schematic -->
   <div id="json" style="display: none; overflow:auto;position:absolute; top:100px; right:10px; width:350; height:100;background:white;border:1px solid gray"></div>
   <div id="json2" style="display: none; overflow:auto;position:absolute; top:100px; left:220px; width:250; height:100;background:white;border:1px solid gray"></div>
   <div id="subnodeCanvasContainer" style="display: none;"/></div>

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
                     regExp = re.compile(r"[\/\s\n]*([a-zA-Z0-9\.\-\_]+)[\s]*=[\s]*([a-zA-Z0-9\.\-]+)\.extend", re.MULTILINE)
                     matchPattern = regExp.findall(fileContent)
                     if matchPattern:
                        objectsNamesList.append((os.path.dirname(fileName), fileName, matchPattern[0][0], matchPattern[0][1]))

    #print('===================================')
    #print(objectsNamesList)

    libraryObjectTree = {}
    for nodeItem in objectsNamesList:
        nodeLibTree = nodeItem[2].split('.')
        if len(nodeLibTree) > 1:
            nodeLibTree.pop()
        currentParent = libraryObjectTree
        for nodeLibTreeItem in nodeLibTree:
            if not nodeLibTreeItem == "draw2d":
                if not nodeLibTreeItem in currentParent:
                    currentParent[nodeLibTreeItem] = {}
                currentParent = currentParent[nodeLibTreeItem]

    #formatData(libraryObjectTree,0)
    createVariableInitDeclaration(libraryObjectTree, 0)
    createVariableIniStatement = createVariableIniStatement[::-1]
    classList = classList[::-1]

    print('============= libraryObjetTree ===============')

    print(libraryObjectTree)

    print('============ objectsNameList ================')

    k = 0
    while True:
        for j in range(0, k):
            if objectsNamesList[k][2] == objectsNamesList[j][3]:
                objectsNamesList[k], objectsNamesList[j] = objectsNamesList[j], objectsNamesList[k]
                k = 0
                break   
        k += 1
        if k >= len(objectsNamesList):
            break 
        
    for k in objectsNamesList:
        print(k)

    print('============= classList ================')
    print(classList)


    jsScriptIncludeStatement = ""
    tabList = [[] for k in range(len(blocksToTabsAssignment))]
    for nodeItem in objectsNamesList:
        scriptTagStr = "\t" + '<script src="./' + nodeItem[1].replace('\\','/') + '"></script>' + "\n"
        jsScriptIncludeStatement += scriptTagStr
        
        #
        #   Check if path is in exclude patterns, if yes flag is set and html <div> will not be generated
        #
        generateHtml = True
        for excludeStr in excludeFromHtmlBlockPatterns:
            if (scriptTagStr.find(excludeStr) > -1):
                generateHtml = False

        if generateHtml:
            htmlNodeMenuItemName = nodeItem[2].split('.')[-1]
            
            index = 0
            for tabDirLocation in blocksToTabsAssignment.keys():
                if (nodeItem[0].startswith(tabDirLocation)):
                    tabList[index].append('\t\t\t<div data-shape="' + nodeItem[2] + '" data-label="' + htmlNodeMenuItemName + '" class="palette_node_element draw2d_droppable">' + htmlNodeMenuItemName + '</div>' + "\n")
                index += 1
            

    #
    #   Create HTML blocks list in menu to be able put them on canvas
    #
    htmlNodeMenuItem = ""
    tabIndex = 0
    htmlNodeMenuItem += f'\t\t<input type="button" value="All" onclick="$(\'#navigation span\').show();" />\n'
    for tabCategory in tabList:
        htmlNodeMenuItem += f'\t\t<input type="button" value="{blocksToTabsAssignment[list(blocksToTabsAssignment.keys())[tabIndex]]}" onclick="$(\'#navigation span\').hide(); $(\'#tab{tabIndex}\').show();" />\n'
        tabIndex += 1
        
    tabIndex = 0
    for tabCategory in tabList:
        htmlNodeMenuItem += f'\t\t<span id="tab{tabIndex}">\n'
        for tabBlockHtmlLine in tabCategory:
            htmlNodeMenuItem += tabBlockHtmlLine 
        htmlNodeMenuItem += '\t\t</span>\n'
        tabIndex += 1 

    print('============== <script> ===============')
    print(jsScriptIncludeStatement)

    print('============== tabn list ===============')
    print(tabList)

    print('============== html node menu ===============')
    print(htmlNodeMenuItem)

    outputStr = htmlTemplate.replace('<!-- user defined nodes place to insert -->', '<!-- user defined nodes place to insert -->'+"\n"+jsScriptIncludeStatement)
    outputStr = outputStr.replace('//library tree variables init place to insert', '//library tree variables init place to insert'+"\n"+ "".join(createVariableIniStatement))
    outputStr = outputStr.replace('<!-- user defined nodes menu place to insert -->', '<!-- user defined nodes menu place to insert -->'+"\n"+ "".join(htmlNodeMenuItem))

    #print(outputStr)
    with open("GrahpLang IDE Generated 1.html", "w") as fileOutput:
         fileOutput.write(outputStr)

