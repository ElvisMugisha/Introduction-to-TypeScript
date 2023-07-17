"use strict";
class Customer2 {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
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
