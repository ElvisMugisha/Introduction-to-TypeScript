class Customer2 {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

// Instance of class Customer
// let myCustomer = new Customer();

let myCustomer2 = new Customer2("Elvis", "Mugisha");

// myCustomer.firstName = "Elvis";
// myCustomer.lastName = "Mugisha";

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);