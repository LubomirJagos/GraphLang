//LuboJ
//copied from internet: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// CONFIGURATION

var pathStr = ",201.31751 47.70761,200.38206 9.2207986,214.81462 47.306706,214.94825 18.040693,228.17809";
var outStr = pathStr;

//remove path directivems, I think M is move to, L is line
outStr = outStr.replaceAll("M", " ");
outStr = outStr.replaceAll("L", " ");
outStr = outStr.replaceAll("\,", " ");

//remove all spaces and replce them by just one this is really simple but running code
outStr = outStr.replaceAll("  ", " ");
outStr = outStr.trim();

//write text to show user original path
var inputText = document.getElementById("input");
inputText.innerHTML = pathStr;


//construct correct GraphLang Shape format
//if there is odd count of coords last one is not generated into result set
outStr2 =  '"vertex":[' + "\n";
var coords = outStr.split(" ");
for (var k = 0; k < coords.length; k++){
  if (k+1 < coords.length){
    outStr2 += "\t{\n";
    outStr2 += "\t\t\"x\": " + coords[k] + ",\n";
    outStr2 += "\t\t\"y\":" + coords[k+1] + "\n";
    outStr2 += "\t},\n";
  }
}
outStr2 = outStr2.substr(0, outStr2.length-2) + "\n"; //remove last dash in list, there is at the end end of line symbol so need to count with it and add it to have still right fomratting
outStr2 += ']' + "\n";

outStr = outStr2; //LuboJ ...for now some output

//show modified path for GraphLang Shape Designer
var outputText = document.getElementById("output");
outputText.innerHTML = outStr;
