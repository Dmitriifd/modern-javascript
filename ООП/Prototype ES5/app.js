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