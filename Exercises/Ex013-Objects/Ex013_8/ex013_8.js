function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.increase = function(quantity) {
    this.price += quantity;
}
Product.prototype.discount = function(quantity) {
    this.price -= quantity;
}

function T_shirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}
T_shirt.prototype = Object.create(Product.prototype);
T_shirt.prototype.constructor = T_shirt;
T_shirt.prototype.increase = function(percent) {
    this.price = this.price + (this.price * (percent / 100));
}

function Mug(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;
    this.stock = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== 'number') return;
            stock = value;
        }
    })
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;


const product = new Product('Gen', 100)
const t_shirt = new T_shirt('regatta', 8, 'black');
const mug = new Mug('mmug', 13, 'Plastic', 5)

console.log(product) // Product { name: 'Gen', price: 100 }
console.log(t_shirt); // T_shirt { name: 'regatta', price: 8, color: 'black' }
console.log(mug); /* Mug {
                        name: 'mmug',
                        price: 13,
                        material: 'Plastic',
                        stock: [Getter/Setter]
                    } */

t_shirt.increase(50);
console.log(t_shirt); // T_shirt { name: 'regatta', price: 12, color: 'black' }

mug.stock = 100;
console.log(mug, '\n' + mug.stock); /* Mug {
                                         name: 'mmug',
                                         price: 13,
                                         material: 'Plastic',
                                         stock: [Getter/Setter]
                                    } 
                                    100 */