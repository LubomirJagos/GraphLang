GraphLang.Color = Class.extend({
  NAME: "GraphLang.Color",
});
GraphLang.Color.getByName = function(colorName){
  if (colorName == "yellow") return "#FFFF00";
  else if (colorName == "red") return "#FF0000";
  else return "#000000";
}
