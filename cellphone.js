var name = 'Walter ';
var name2 = "Jesse ";
var name3 = "Saul ";
var name4 = "Gus ";

function most_data() {
    var walter = "It was 67MB. Is that everything? I’m busy, you know.";
    var cutting = walter.replace("It was ", " ").replace("MB. Is that everything? I’m busy, you know.", " ").split(",");

    var jesse = "Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
    var cutting2 = jesse.replace("Damn, it was like ", " ").replace("MB. Dat Snaptalk is a data hog, yo.", " ").split(",");

    var saul = "I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
    var cutting3 = saul.replace("I think ", " ").replace("MB. That’s what the guy at the store said. I think it means MegaBites.", " ").split(",");

    var Gus = "Around 150MB. I have the receipts if you need more precise figures.";
    var cutting4 = Gus.replace("Around", "").replace("MB. I have the receipts if you need more precise figures.", "").split(",");

    var pushed = [];
    pushed.push(cutting, cutting2, cutting3, cutting4);

    var max = Math.max.apply(null, pushed);
    var min = Math.min.apply(null, pushed);
    console.log(pushed);
    console.log(name2 + max + "MB");
    console.log(name + min + "MB");
}

most_data();

function most_apps() {
    var apps1 = "Walter sent: Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.";

    var cut1 = apps1
        .replace("Walter sent: Hello. I’ve got ", "")
        .replace(". I’m too old for the other ones.", "")
        // .replace(" and ", " ")
        .split(",");

    var karma = [];
    cut1.forEach(function(apps1) {
        karma.push(apps1.split(" and "))
    })

    ///////////////////////////////////////////////-----------------------------------/////////////////////////////////////

    var apps2 = "Jesse sent: Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.";
    var cut2 = apps2.replace("Jesse sent: Yo! I’ve got ‘em all. ", "").split(",");

    var karma2 = [];
    cut2.forEach(function(apps2){
    	karma2.push(apps2.split(","))
    })
   
   /////////////////////////////////////////////----------------------------------////////////////////////////////

   // var apps3 = "Saul sent: I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.";
   // var cut3 = apps3
   // .replace("Saul sent: I’m on ", "")
   // .replace("for Business", "")
   // .replace("And I have an", "")
   // .replace("account my cats", "")
   // .replace("Oh, and", "")
   // .replace("for my ex-husbands", "")
   // .split(",")

   // var karma3 = [];
   // cut3.forEach(function(apps3){
   // 	karma3.push(apps3.split(","));
   });
   ///////////////////////////////////////////-----------------------------------///////////////////////////////

   var apps4 = "Gus sent: I use Tooter and Instantgam";
   var cut4 = apps4
   .replace("Gus sent: I use", " ")
   .split(" and ");

   var karma4 = [];
   cut4.forEach(function(apps4){
   	karma4.push(apps4.split(","))
   })
    console.log(karma);
    console.log(karma2);
    console.log(karma3);
    console.log(karma4);
}

most_apps();