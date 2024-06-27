/* 
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor(o, 'prop')
    ... (spread)

    // We've already seen
    Object.keys ---> (return the keys)
    Object.freeze ---> (freezes the object)
    Object.defineProperties ---> (define multiple properties)
    Object.defineProperty ---> (define just one property)
    
*/

// ----------------------------------------------------------------------------------

const product = {name: 'Bottle', price: 1.8};

const anotherThing = {
     ...product,
     material: 'porcelain'
};

anotherThing.name = 'Something new';
anotherThing.price = 2.5;

console.log(product, anotherThing);

// ----------------------------------------------------------------------------------

console.log('\r');

const mug_product = { name: product.name, price: product.price};

mug_product.name = 'Something oldest';
mug_product.price = 1.2;

console.log(product, mug_product);

// ----------------------------------------------------------------------------------

console.log('\r');

const mug =  Object.assign({}, product, { material: 'quartz' });

mug.name = 'Something really new';
mug.price = 3.1;

console.log(product, mug);

// ----------------------------------------------------------------------------------

console.log('\r');

const new_product = {name: 'Wine Juice', price: 10.4};

console.log(Object.getOwnPropertyDescriptor(new_product, 'name'));

Object.defineProperty(new_product, 'name', {
    writable: false,
    configurable: false,
    value: 'Anything'
})

console.log(Object.getOwnPropertyDescriptor(new_product, 'name'));

// ----------------------------------------------------------------------------------

console.log('\r');

const other_product = {name: 'product', price: 1.8, material: 'gold'};

console.log(Object.values(other_product));
console.log(Object.entries(other_product));

for  (let [entry, value] of Object.entries(other_product)) {
    console.log(entry, value);
}
