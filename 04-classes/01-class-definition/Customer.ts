class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// Instance of class Customer
// let myCustomer = new Customer();

let myCustomer = new Customer("Elvis", "Mugisha");



// myCustomer.firstName = "Elvis";
// myCustomer.lastName = "Mugisha";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);