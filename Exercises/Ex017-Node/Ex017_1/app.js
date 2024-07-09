// const mod1 = require('./mod1');
// const tellYourName = require('./mod1').tellName;
// const { name_, lastname, tellName } = require('./mod1');

// console.log(mod1);
// console.log(tellYourName());
// console.log(tellName());

// ------------------------------------------------
const path = require('path');
const axios = require('axios');
const { Person } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Person('João');
console.log(mod1);
console.log(p1);