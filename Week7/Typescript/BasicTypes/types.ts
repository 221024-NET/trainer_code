var n: Number = 10;
// n = "John"; // ERROR

var isWinter: Boolean = false;
// isWinter = 123; // ERROR

// Array.
var names: string[] = ["John", "Mary", "Joe"];
var names2: any[] = ["John", "Mary", 5];

// Enum.
enum Starks { Jon, Bran, Heather, Catlyn }
var cat = Starks.Catlyn;
console.log(cat);   // 3.

enum Values {
    First,
    Second = 12,
    Third = 13,
    Fourth = 14
}

let first = Values.First;
console.log(`Enum first = ${first} ${Values[Values.First]}`);
console.log(Values[0]);

let second = Values.Second;
console.log(`Enum second = ${second}`);
console.log(Values[Values.Second]);
console.log(Values[12]);


function getMsg(): string {
    return "Some message";
    //return 1;
}

// void.
function getName(): void {
    console.log("getName()...");
}
