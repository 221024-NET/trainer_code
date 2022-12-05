var n = 10;
// n = "John"; // ERROR
var isWinter = false;
// isWinter = 123; // ERROR
// Array.
var names = ["John", "Mary", "Joe"];
var names2 = ["John", "Mary", 5];
// Enum.
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Heather"] = 2] = "Heather";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
var cat = Starks.Catlyn;
console.log(cat); // 3.
var Values;
(function (Values) {
    Values[Values["First"] = 0] = "First";
    Values[Values["Second"] = 12] = "Second";
    Values[Values["Third"] = 13] = "Third";
    Values[Values["Fourth"] = 14] = "Fourth";
})(Values || (Values = {}));
var first = Values.First;
console.log("Enum first = ".concat(first, " ").concat(Values[Values.First]));
console.log(Values[0]);
var second = Values.Second;
console.log("Enum second = ".concat(second));
console.log(Values[Values.Second]);
console.log(Values[12]);
function getMsg() {
    return "Some message";
    //return 1;
}
// void.
function getName() {
    console.log("getName()...");
}
