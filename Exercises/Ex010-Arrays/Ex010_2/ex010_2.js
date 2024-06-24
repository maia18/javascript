// -----------------------------------------------------------------------------------------

const names = new Array('Eduardo', 'Maria', 'Joana');
console.log(names); // [ 'Eduardo', 'Maria', 'Joana' ]

// -----------------------------------------------------------------------------------------

console.log('\r');

const people = ['José', 'Jorge', 'Bianca'];

people[2] = 'João';
delete people[2];

console.log(people); // [ 'Eduardo', 'Maria', <1 empty item> ]

// -----------------------------------------------------------------------------------------

console.log('\r');

const list_names = ['Júlia', 'Cecília', 'Marcos', 'Pedro'];
const new_ = [...list_names];

new_.pop();

console.log(new_); // [ 'Júlia', 'Cecília', 'Marcos' ]
console.log(list_names, list_names.length); // [ 'Júlia', 'Cecília', 'Marcos', 'Pedro' ] 4

const removed = list_names.shift();

console.log(list_names, removed); // [ 'Cecília', 'Marcos', 'Pedro' ] Júlia

list_names.push('André',);
list_names.unshift('Mateus', 'Simão');

console.log(list_names); // [ 'Mateus', 'Simão', 'Cecília', 'Marcos', 'Pedro', 'André' ]

// -----------------------------------------------------------------------------------------

console.log('\r');

const list_people = ['Stephanie', 'Beatriz', 'Paulo', 'Bento', 'Wallace', 'Maria'];
const new_list_people = list_people.slice(1, -3);

console.log(new_list_people) // [ 'Beatriz', 'Paulo' ]

// -----------------------------------------------------------------------------------------

console.log('\r');

const name_ = 'Luiz Otávio Miranda';
const name_splitted = name_.split(' ');

console.log(name_splitted); // [ 'Luiz', 'Otávio', 'Miranda' ]

// -----------------------------------------------------------------------------------------

console.log('\r');

const name_two = [ 'Luiz', 'Otávio', 'Miranda' ];
const join_name_two = name_two.join(', ');

console.log(join_name_two); // Luiz, Otávio, Miranda

// -----------------------------------------------------------------------------------------