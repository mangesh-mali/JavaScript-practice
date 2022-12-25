let obj = [
    { petOwners: "PO1", pet: ["dog", "cat"] },
    { petOwners: "PO2", pet: ["cat"] },
    { petOwners: "PO3", pet: [] },
    { petOwners: "PO4", pet: ["dog", "parrot"] },
    { petOwners: "PO5", pet: ["dog", "snake", "hamster", "parrot", "horse"] }
]

var count = 0;

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].pet);
    console.log(obj[i].pet.length);
    if (obj[i].pet.length >= 2) {
        console.log(obj[i].petOwners);
    }

    // for (let j = 0; j < obj[i].pet.length; j++) {
    //     console.log(obj[i].pet[j]);
    //     if (obj[i].pet[j] == "dog") {
    //         console.log(obj[i].petOwners);
    //         count++;
    //     }
    // }
    // if (obj[i].pet.length <= 0) {
    //     console.log("true");
    //     console.log(obj[i].petOwners);
    // }
}

console.log(count);