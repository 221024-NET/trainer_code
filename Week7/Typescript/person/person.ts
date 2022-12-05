class person {
    public firstname: string;
    public lastname: string;
    private _fullName: string;

    constructor(fname: string, lname: string) {
        this.firstname = fname;
        this.lastname = lname;
    }

    fullName() : string {
        return `${this.lastname}, ${this.firstname}`;
    }
}

var aPerson = new person('John', 'Smith');
console.log(aPerson.fullName());
