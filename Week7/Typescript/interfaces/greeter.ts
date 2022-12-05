class Student {
    fullname: string;

    constructor(public firstName: string, public middlename, public lastName: string) {
        this.fullname = firstName + " " + middlename + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello there, " + person.firstName + " " + person.lastName;
}

let user = new Student("John", "M.", "Smith");
console.log(greeter(user));

// property name of object assumed.
function printName(individual) {
    console.log(individual.name);
}

printName({name:"ajay"});
printName({label:"mary"});

interface Individual {
    name: string;
    age?: number;   // optional using "?".
}

// Better to use interfaces.
function printName2(individual: Individual) {
    console.log(individual.name);
}

printName2({name:"ajay"});
//printName2({label:"mary"}); // error.
