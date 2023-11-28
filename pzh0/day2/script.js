//////////////
// Working with objects
var checkVergunningVoorTanker = function (tanker) {
    var volume = tanker.volume, liters = tanker.liters, materiaal = tanker.materiaal, diesel = tanker.diesel, gewicht = tanker.gewicht, bemanning = tanker.bemanning;
    if (diesel) {
        return true;
    }
    else {
        return false;
    }
};
var resultVergunning = checkVergunningVoorTanker({
    volume: 100,
    liters: 12,
    materiaal: "metaal",
    diesel: true,
    gewicht: 12,
    bemanning: 80
});
// console.log(resultVergunning);
//////////////
// Inference
var obj = { width: 10, height: 15 };
var area = obj.width * obj.height;
console.log(area);
var user1 = {
    name: "John",
    id: 0,
    profilePicture: null
};
var user2 = {
    name: "John",
    id: 0,
    birthday: "12/01/1994",
    profilePicture: "https:jasd.com/jdajsd.jpg"
};
//////////////
// Basics
// Number types
// String types
// Booleans types
// 'special' types
//////////////
// Typing an Array
var numberArray = [user1, user2];
var pet = "Peluso";
//////////////
// More Complex Interfaces
