translateToPythonCodeFunctionsArray = new draw2d.util.ArrayList();
translateToPythonCodeImportArray = new draw2d.util.ArrayList();
translateToPythonCodeDeclarationArray = new draw2d.util.ArrayList();

/*****************************************************************************************************************************************************
 *    TRANSLATE TO Python functions
 *****************************************************************************************************************************************************/

GraphLang.Utils.translateCanvasToPythonCode = function(canvas, translateTerminalsDeclaration = true){
    let pythonCode = "";
    translateToPythonCodeDeclarationArray.clear();
    translateToPythonCodeImportArray.clear();
    var translateToPythonCodeSubnodeArray = new draw2d.util.ArrayList();

    //TO BE SURE RECALCULATE NODES OWNERSHIP BY loopsRecalculateAbroadFigures
    GraphLang.Utils.loopsRecalculateAbroadFigures(canvas);

    //THIS ADAPT PORT DATATYPES SAME AS CONNECTED Wires
    //this can cause some problems because it's not bullet proof function, beacuse it's running statically, need to rewrite it more adaptive but when clicked at least 3 times it's OK
    GraphLang.Utils.setWiresColorByPorts(canvas);

    // INITIALIZATION
    // added by LuboJ. this CAN CAUSE SOME ERRORS IT WASN'T HERE UNTIL RECENTLY when I saw that there is not port initialization and execution order done in this task.
    this.initAllPortToDefault(canvas);
    this.executionOrder(canvas);

    /*
     *    Now just ticking with clock and run nodes setup to run at that step by execution order.
     */

    /****************************************************************
     *  NODES TRANSLATING
     *  Going through diagram and translate each graphical node into its text representation.
     ****************************************************************/

        //obtain list of top level figures, their getComposite() returns null
    let allNodes = new draw2d.util.ArrayList()
    canvas.getFigures().each(function(figureIndex, figureObj){
        if (figureObj.getComposite() == null &&
            figureObj.NAME.toLowerCase().search('tunnel') == -1
        ){
            allNodes.push(figureObj);
        }
    });

    //translate nodes based on their execution order
    for (var actualStep = 0; actualStep < 20; actualStep++){
        allNodes.each(function(nodeIndex, nodeObj){
            if (nodeObj.getUserData() !== undefined &&
                nodeObj.getUserData().executionOrder == actualStep
            ){
                if (nodeObj.translateToPythonCodeDeclaration && translateTerminalsDeclaration) pythonCode += nodeObj.translateToPythonCodeDeclaration();
                if (nodeObj.translateToPythonCode) pythonCode += nodeObj.translateToPythonCode();

                /*
                 *    Translate node schematic into separate function
                 */
                if (!translateToPythonCodeSubnodeArray.contains(nodeObj.NAME) && nodeObj.jsonDocument){
                    translateToPythonCodeSubnodeArray.push(nodeObj.NAME)
                    GraphLang.Utils.translateToPythonCodeSubNode(nodeObj);
                }

                /*
                 *    Push python import lines into global array
                 */
                if (nodeObj.translateToPythonCodeImport){
                    let importItems = nodeObj.translateToPythonCodeImport()
                    if ((typeof importItems).toLowerCase().search() > -1) translateToPythonCodeImportArray.addAll(importItems);
                    else translateToPythonCodeImportArray.add(importItems);
                }
            }
        });
    }

    /* erase flag for for loops at the end of this operation, to be able run again correctly, otherwise
    there will be orphans flags that loops were translated and it will make mess when multiple times
    executed this function without initializing ports */
    allNodes.each(function(nodeIndex, nodeObj){
        if (nodeObj.NAME.toLowerCase().search("loop") >= 0){
            nodeObj.getUserData().wasTranslatedToPythonCode = false;
        }
    });

    /******************************************************************************
     * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
     *******************************************************************************/
    pythonCode = this.rewriteIDtoNumbers(canvas, pythonCode);

    return pythonCode;
},

GraphLang.Utils.translateToPythonCodeSubNode = function(nodeObj){
    let pythonCode = "";
    pythonCodeParams = "";

    GraphLang.Utils.displayContents2(nodeObj.jsonDocument, appCanvas2);
    paramsCounter = 0;
    appCanvas2.getFigures().each(function(figureIndex, figureObj){
        /*
         *  INPUT TERMINAL TRANSCRIPTION AS PARAMS FOR FUNCTION DECLARATION
         */
        if (
            figureObj.userData &&
            figureObj.userData.isTerminal &&
            (figureObj.userData.isTerminal == 1 || figureObj.userData.isTerminal.toLowerCase() == true) &&
            figureObj.translateToPythonCodeAsParam != undefined
        ){
            if (paramsCounter > 0) pythonCodeParams += ', ';
            pythonCodeParams += figureObj.translateToPythonCodeAsParam();
            paramsCounter++;
        }
    });

    pythonCode += 'def ' + nodeObj.translateToPythonCodeFunctionName() + "(" + pythonCodeParams + "):\n";
    pythonCode += GraphLang.Utils.translateCanvasToPythonCode(appCanvas2, translateTerminalsDeclaration = false).replaceAll('\n','\n\t');
    pythonCode += "\n";  //to not have separate last curly bracket by tabulator

    /******************************************************************************
     * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
     *******************************************************************************/
    cCode = this.rewriteIDtoNumbers(appCanvas2, pythonCode);

    //don't return any code, these functions are pushed into array and print after template is created
    //return cCode;
    translateToPythonCodeFunctionsArray.push(pythonCode);
},

/**
 * @method getPythonCode
 * @param {draw2d.Canvas} canvas - schematic which will be serialize to JSON
 * @param {bool} showCode - if true there is code showed in alert message after click on button
 * @returns {String} python code as string
 * @description Generate python code using template defined in this function.
 */
GraphLang.Utils.getPythonCode = function(canvas, showCode = true){
    translateToPythonCodeFunctionsArray.clear();
    let pythonCode = GraphLang.Utils.translateCanvasToPythonCode(canvas, translateTerminalsDeclaration = true);

    /******************************************************************************
     * LuboJ my template for ???
     *******************************************************************************/
    var template_pythonCode = "";
    template_pythonCode += "#GrahpLang Python generated code\n";
    template_pythonCode += "\n";

    translateToPythonCodeImportArray.unique();  //removes duplicates
    translateToPythonCodeImportArray.each(function(functionIndex, functionStr){
        template_pythonCode += functionStr + "\n";
    });

    template_pythonCode += "\n";
    template_pythonCode += pythonCode;
    template_pythonCode += "\n";

    pythonCode = template_pythonCode;
    /******************************************************************************
     * END MY TEMPLATE
     *******************************************************************************/

    /******************************************************************************
     * SubNode code printed as subfunctions
     *******************************************************************************/
    translateToPythonCodeFunctionsArray.unique();  //removes duplicates
    translateToPythonCodeFunctionsArray.each(function(functionIndex, functionStr){
        pythonCode += "\n";
        pythonCode += "/************* BEGIN SubNode function definition ************/\n";
        pythonCode += functionStr;
        pythonCode += "/************* END SubNode function definition ************/\n";
        pythonCode += "\n";
    });

    /******************************************************************************
     * REWRITE IDs to HUMAN READABLE NUMBERS (starts from 1,2,...,N)
     *******************************************************************************/
    pythonCode = this.rewriteIDtoNumbers(canvas, pythonCode);

    var copyElement = document.createElement('textarea');
    copyElement.innerHTML = pythonCode;
    copyElement = document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    copyElement.remove();

    if (showCode) alert(pythonCode); //DEBUG show code in alert message

    return pythonCode; //return python code as string
}
