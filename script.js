console.log("Hello World");
let myData = {
  name: "The Greate Wall of China",
  type: "fortifications",
  discoveryLocation: "Imperial China",
  builtBy: "dynasties",
  timeBuilt: "7th century BC",
  primaryPurpose: "to protect against raids and invasions from various nomadic groups",
  metirial_used: "stone, brick, tamped earth, and wood",
  significance: "a UNESCO World Heritage site and a powerful symbol of China's enduring strength and history",
};

console.log(myData["name"]);
console.log(myData["The Greate Wall of China"]);
myData.recordId = "8329642121";
console.log(myData);
/*
document.getElementById("root").innerHTML = JSON.stringify(myData);
*/
document.getElementById("name").innerHTML = myData["name"];
document.getElementById("type").innerHTML = myData["type"];
document.getElementById("discoveryLocation").innerHTML = myData["discoveryLocation"];
document.getElementById("builtBy").innerHTML = myData["builtBy"];
document.getElementById("timeBuilt").innerHTML = myData["timeBuilt"];
document.getElementById("primaryPurpose").innerHTML = myData["primaryPurpose"];
document.getElementById("metirial_used").innerHTML = myData["metirial_used"];
document.getElementById("significance").innerHTML = myData["significance"];
