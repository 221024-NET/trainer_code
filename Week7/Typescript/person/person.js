var person = /** @class */ (function () {
    function person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    person.prototype.fullName = function () {
        return "".concat(this.lastname, ", ").concat(this.firstname);
    };
    return person;
}());
var aPerson = new person('John', 'Smith');
console.log(aPerson.fullName());
