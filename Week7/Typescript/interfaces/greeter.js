var Student = /** @class */ (function () {
    function Student(firstName, middlename, lastName) {
        this.firstName = firstName;
        this.middlename = middlename;
        this.lastName = lastName;
        this.fullname = firstName + " " + middlename + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello there, " + person.firstName + " " + person.lastName;
}
var user = new Student("John", "M.", "Smith");
console.log(greeter(user));
// property name of object assumed.
function printName(individual) {
    console.log(individual.name);
}
printName({ name: "ajay" });
printName({ label: "mary" });
// Better to use interfaces.
function printName2(individual) {
    console.log(individual.name);
}
printName2({ name: "ajay" });
//printName2({label:"mary"}); // error.
