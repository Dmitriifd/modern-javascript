const methodName = 'setPrice';

class ProductES {
	constructor(brand, price, discount) {
		this.brand = brand
		this.price = price
		this.discount = discount
	}

    get brand() { 
        return this._brand 
    }
    set brand(name) { 
        this._brand = name
    }

	getPriceWithDiscount() {
		return (this.price * (100 - this.discount)) / 100
	}

	static plus(x, y) {
		return x + y
	}

    [methodName](newPrice) {
        this.price = newPrice
    }
}

const newProduct = new ProductES('Samsung', 200, 15)
console.log(newProduct)
