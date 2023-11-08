/**
 * 👨🏻‍🌾 Let's recap the farm
 */
var theOldFarm = {
    farmName: "Beats and Beets",
    animals: [
        {
            id: 1,
            name: "Fifi",
            age: 2,
            kind: "dog",
            feelings: {
                happy: true
            }
        },
        {
            id: 2,
            name: "Bella",
            age: 1,
            kind: "cow",
            feelings: {
                happy: true
            }
        },
        {
            id: 3,
            name: "Spots",
            age: 3,
            kind: "cow",
            feelings: {
                happy: true
            }
        },
        {
            id: 4,
            name: "Wilberd",
            age: 1,
            kind: "pig",
            feelings: {
                happy: true
            }
        },
        {
            id: 5,
            name: "Fluffy",
            age: 4,
            kind: "sheep",
            feelings: {
                happy: true
            }
        },
        {
            id: 6,
            name: "Wilberd",
            age: 3,
            kind: "monkey",
            feelings: {
                happy: true
            }
        }
    ]
};
// A function to checkHappiness
// that returns a boolean indicating if all the animals are happy
// 1. We want to check if all the animals are happy
// - We need some kind of thing to keep track of that
var checkHappinessOfAnimals = function () {
    var farmAnimals = theOldFarm.animals;
    var allAnimalsAreHappy = true;
    for (var i = 0; i < farmAnimals.length; i++) {
        var currentAnimal = farmAnimals[i];
        // If we encounter an animal that is
        // not happy, we change our tracking variable to false.
        if (currentAnimal.feelings.happy === false) {
            allAnimalsAreHappy = false;
        }
    }
    console.log("All animals are happy: ".concat(allAnimalsAreHappy));
};
checkHappinessOfAnimals();
// Built in Array methods
// .forEach method
var array1 = ["a", "b", "c"];
var newArray = [];
array1.forEach(function (letter) {
    console.log(letter);
    newArray.push("Our letter: ".concat(letter));
});
// .filter()
var array2 = ["a", "b", "b", "c"];
// We want to check if our letter is equal to "b"
var bArray = array2.filter(function (letter) { return letter === "b"; });
// We call this '===' comparison operator
console.log(bArray);
// .map()
var array3 = ["a", "b", "b", "c"];
var newArray3 = array3.map(function (letter) {
    return letter.toUpperCase();
});
console.log(newArray3);
// .find()
var array4 = ["a", "b", "b", "c"];
var itemFound = array4.find(function (letter) { return letter === "z"; });
console.log(itemFound);
