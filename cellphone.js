function most_data() {
    var walter = "It was 67MB. Is that everything? I’m busy, you know.";
    var cutting = walter.replace("It was ", " ").replace("MB. Is that everything? I’m busy, you know.", " ").split(",");
    var name = 'Walter ';

    var jesse = "Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
    var cutting2 = jesse.replace("Damn, it was like ", " ").replace("MB. Dat Snaptalk is a data hog, yo.", " ").split(",");
    var name2 = "Jesse ";

    var saul = "I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
    var cutting3 = saul.replace("I think ", " ").replace("MB. That’s what the guy at the store said. I think it means MegaBites.", " ").split(",");
    var name3 = "Saul ";

    var Gus = "Around 150MB. I have the receipts if you need more precise figures.";
    var cutting4 = Gus.replace("Around", "").replace("MB. I have the receipts if you need more precise figures.", "").split(",");
    var name4 = "Gus ";

    var pushed = [];
    pushed.push(cutting, cutting2, cutting3, cutting4);

    var max = Math.max.apply(null, pushed);
    var min = Math.min.apply(null, pushed);
    console.log(pushed);
    console.log(name2 + max + "MB");
    console.log(name + min + "MB");
}

most_data();