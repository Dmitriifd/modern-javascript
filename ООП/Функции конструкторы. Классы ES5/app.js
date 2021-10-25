const str = new String('Hello world')
console.log(str);


function Product(brand, price, discount) {
    console.log(this);
    // 1. Создается новый объект
    // 2. на это объект устанавливается ссылка this
    // 3. возвращает этот объект

    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function() {
        return this.price * (100 - this.discount) / 100;
    }
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 150, 25);

console.log(apple);
console.log(samsung);

console.log(apple.getPriceWithDiscount());
console.log(samsung.getPriceWithDiscount());

console.log(apple instanceof Product);