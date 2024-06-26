function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    let privateStock = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true, // Show the key
        configurable: false, // configurable
        get: function() {
            return privateStock;
        },
        set: function(value) {
            if (typeof value !== 'number') {
                throw new TypeError('Message')
            }
            privateStock = value;
        }
    });
}
function createProduct(name) {
    return {
        get name() {
            return name;
        },
        set name(value) {

            name = value;
        }
    }
}

const p1 = new Product('T-shirt', 20, 3);
console.log(p1, '\n' + p1.stock); /* Product { name: 'T-shirt', price: 20, stock: [Getter/Setter] }  
                                     3 */
p1.stock = 50;
console.log(p1.stock); // 50

const p2 = createProduct('Short');
p2.name = 'Anything';
console.log(p2, '\n' + p2.name); /* { name: [Getter/Setter] } 
                                    Anything */