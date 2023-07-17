"use strict";
class Customer2 {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let myCustomer2 = new Customer2("Elvis", "Mugisha");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
