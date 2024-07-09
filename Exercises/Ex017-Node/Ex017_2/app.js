const Dog = require('./Z/mod2_1');
const d1 = new Dog('Dog');
d1.bark();

// ----------------------------------------------

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'archives', 'images'))

// console.log(__filename);
// console.log(__dirname);