const person_name = 'Luiz Marcelo';
for (let value of person_name) {
    console.log(value);
} 
console.log('\n');

// ----------------------------------------------

const names = ['Marcos', 'Jorge', 'Henrique'];
for (let people of names) {
    console.log(people);
} 
console.log('\n');

// ----------------------------------------------

const people_names = ['Junior', 'Nelson', 'Leandro', 'Gilberto', 'Roberto', 'Carlos'];
people_names.forEach(function(element, index, array) {
    console.log(`${element} - ${index}`); /* Junior - 0
                                             Nelson - 1
                                             Leandro - 2
                                             Gilberto - 3
                                             Roberto - 4
                                             Carlos - 5 */
    console.log(array); // [ 'Junior', 'Nelson', 'Leandro', 'Gilberto', 'Roberto', 'Carlos' ]
});
console.log('\n');

// ----------------------------------------------

const person = {
    first_name: 'José', 
    lats_name: 'Miranda', 
    age: 30
};
for (let characteristics in person) {
    console.log(`${characteristics} - ${person[characteristics]}`); /* first_name - José
                                                                       lats_name - Miranda
                                                                       age - 30 */
}
for (let value of person) {} // TypeError: person is not iterable