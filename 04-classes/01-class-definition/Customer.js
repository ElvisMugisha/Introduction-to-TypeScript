var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Instance of class Customer
// let myCustomer = new Customer();
var myCustomer = new Customer("Elvis", "Mugisha");
// myCustomer.firstName = "Elvis";
// myCustomer.lastName = "Mugisha";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
