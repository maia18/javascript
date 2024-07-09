const mod1 = require('./mod1');
const tellYourName = require('./mod1').tellName;
const { name_, lastname, tellName } = require('./mod1');

console.log(mod1);
console.log(tellYourName());
console.log(tellName());

// ------------------------------------------------
const path = require('path');
const axios = require('axios');
const { Person } = require('./mod1');

axios('C:/Users/Nelso/OneDrive/Documentos/Estudos/javascript/Exercises/Ex015-Asynchronous/Ex015_4/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));

// const p1 = new Person('Luiz');
// console.log(p1);