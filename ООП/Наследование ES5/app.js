function Product(brand, price, discount) {
    console.log(this);
    // 1. Создается новый объект
    // 2. на это объект устанавливается ссылка this
    // 3. возвращает этот объект

    this.brand = brand;
    this.price = price;
    this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
    return this.price * (100 - this.discount) / 100;
}

Product.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 150, 25);

console.log(apple);
console.log(samsung);

console.log(apple.getPriceWithDiscount());
console.log(samsung.getPriceWithDiscount());

// Object.create

const protoForObj = {
    sayHello() { 
        return 'Hello world'
    }
}

const obj = Object.create(protoForObj, {
    firstName: {
        value: 'John',
    }
});

console.log(obj.sayHello());

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

User.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

User.prototype.sayHello = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const user = new User('John', 'Abramovich');

// Customer
function Customer(firstName, lastName, membership) {
    User.apply(this, arguments)

    this.membership = membership;
}

Customer.prototype = Object.create(User.prototype)
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function() {
    return this.membership.toUpperCase();
}

const customer = new Customer('Ivan', 'Popov', 'basic');