//////////////
// Example 1
// Function to double the value
function double(x) {
    return x * 2;
}
// console.log(double("4"));
//////////////
// Example 2
function multiply(num1, num2) {
    return num1 * num2;
}
// console.log(multiply("6", "3"));
//////////////
// Example 3
var checkVergunningVoorTanker = function (tanker) {
    var volume = tanker.volume, liters = tanker.liters, materiaal = tanker.materiaal, diesel = tanker.diesel, gewicht = tanker.gewicht, bemanning = tanker.bemanning;
    if (liters < 50) {
        return true;
    }
    else {
        return false;
    }
};
var resultVergunning = checkVergunningVoorTanker({
    volume: 100,
    liters: "12",
    materiaal: 65,
    diesel: true,
    gewicht: 12,
    bemanning: 80
});
// console.log(resultVergunning);
//////////////
// Example 4 - Inference
var obj = { width: 10, height: 15 };
var area = obj.width * obj.heigth;
// console.log(area);
