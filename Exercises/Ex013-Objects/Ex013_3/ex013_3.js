// ----------------------------------------------------------------------------------

function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // Show the key
        value: stock, // Value
        writable: true, // Change the value
        configurable: false // configurable
    });
    
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Product('T-shirt', 20, 3);
console.log(p1); // Product { name: 'T-shirt', price: 20, stock: 3 }

p1.stock = 5000;

// writable: true -------->  Product { name: 'T-shirt', price: 20, stock: 5000 }
// writable: false -------> Product { name: 'T-shirt', price: 20, stock: 3 }

delete p1.stock; 

// configurable: true ----------> Product { name: 'T-shirt', price: 20}
// configurable: false ---------> Product { name: 'T-shirt', price: 20, stock: 5000 }

console.log(Object.keys(p1));

for (let key in p1) {
    console.log(key)
}

/* enumerable: true ------------> [ 'name', 'price', 'stock' ] , name
                                                                 price
                                                                 stock */

/* enumerable: false -----------> [ 'name', 'price'] , name
                                                       price */

// ----------------------------------------------------------------------------------