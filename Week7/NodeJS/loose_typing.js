var a =35;
console.log(typeof a);

a = "Hello there";
console.log(typeof a);

a = undefined;
console.log(typeof a);

// Object.
var company = {
	Name: "ajay singala",
	Address: "Boston",
	Contact: "555-123-4567",
	Email: "ajay@singala.com"
};

console.log("Information of the company variable is :", company);
console.log("The type of the company variable is :", typeof company);

// Function.
function multiply(num1, num2) {
    return num1 * num2;
}

var x = 2;
var y = 5;
console.log("Multiplication of ", x, " and ", y, " is ", multiply(x,y));
console.log("Type of multiply() is ", multiply);
