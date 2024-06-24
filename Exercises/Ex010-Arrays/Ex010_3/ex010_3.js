// .splice(current index, delete, elem1, elem2, elem3);

// ---------------------------------------------------------------------------------------------------------

const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

console.log(names); // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]

const names_spliced_one = names.splice(-2, 1);
console.log(names, names_spliced_one);

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

const names_spliced_two = names.splice(-2, Number.MAX_VALUE);
console.log(names, names_spliced_two); // [ 'Maria', 'João' ] [ 'Eduardo', 'Júlia' ]

// ---------------------------------------------------------------------------------------------------------

console.log('\r');

const names_ = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const replaced = names_.splice(3, 2, 'Luiz', 'Otávio');

console.log(names_, replaced); // [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Otávio' ] [ 'Gabriel', 'Júlia' ]

// ---------------------------------------------------------------------------------------------------------

console.log('\r');

const list_names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// pop

const removed = list_names.splice(-1, 1);
console.log(list_names, removed); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]

// ---------------------------------------------------------------------------------------------------------

console.log('\r');

const list_people = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// shift

const shifted = list_people.splice(0, 1);
console.log(list_people, shifted); // [ 'João', 'Eduardo', 'Gabriel', 'Júlia' ] [ 'Maria' ]

// ---------------------------------------------------------------------------------------------------------

console.log('\r');

const list = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// push

list.splice(list.length, 0, 'Luiz');
console.log(list); // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Luiz' ]

// ---------------------------------------------------------------------------------------------------------

console.log('\r');

const list_ = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// unshift

list_.splice(0, 0, 'Marcio', 'Otávio');
console.log(list_); /* [
                        'Marcio',  'Otávio',
                        'Maria',   'João',
                        'Eduardo', 'Gabriel',
                        'Júlia'
                        ] */

// ---------------------------------------------------------------------------------------------------------