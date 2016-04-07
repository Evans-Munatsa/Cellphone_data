var walter = "It was 67MB. Is that everything? I’m busy, you know.";

var cutting = walter.replace("It was ", " ").replace(". Is that everything? I’m busy, you know.", " ").split(",");

var jesse = "Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
var cutting2 = jesse.replace("Damn, it was like ", " ").replace(". Dat Snaptalk is a data hog, yo.", " ").split(",");

var saul = "I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
var cutting3 = saul.replace("I think ", " ").replace(". That’s what the guy at the store said. I think it means MegaBites.", " ").split(",");

var Gus = "Around 150MB. I have the receipts if you need more precise figures.";
var cutting4 = Gus.replace("Around", "").replace(". I have the receipts if you need more precise figures.", "").split(",");

var pushed = [];
pushed.push(cutting, cutting2, cutting3, cutting4);

// console.log(cutting);
// console.log(cutting2);
// console.log(cutting3);
// console.log(cutting4);
console.log(pushed);