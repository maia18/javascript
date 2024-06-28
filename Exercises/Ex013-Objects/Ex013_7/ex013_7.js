// ----------------------------------------------------------------------------------

// new Object --> Object.prototype
const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
};
const objB = {
    keyB: 'B'
    // __proto__: objA
};
const objC = new Object();
objC.keyC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.keyA) // A
console.log(objC.keyA) // A 
console.log(objC.keyB) // B

// ----------------------------------------------------------------------------------

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.increase = function(percent) {
    this.price = this.price + (this.price*(percent / 100));
};
Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price*(percent / 100));
}; 

const p1 = new Product('T-shirt', 50);

p1.increase(50);
console.log(p1); // Product { name: 'T-shirt', price: 75 }

p1.discount(50);
console.log(p1); // Product { name: 'T-shirt', price: 37.5 }

// Literal
const p2 = {
    name: 'mug',
    price: 15
};
Object.setPrototypeOf(p2, Product.prototype);

p2.increase(30);
console.log(p2) // Product { name: 'mug', price: 19.5 }

const p3 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Calculator Scientific'
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 120
    },
});

p3.increase(10);
console.log(p3); // Product { name: 'Calculator Scientific', price: 132 }

// ----------------------------------------------------------------------------------
