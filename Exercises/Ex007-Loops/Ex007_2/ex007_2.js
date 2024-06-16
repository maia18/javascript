// for in --> Reads index or keys of object

// -------------------------------------------------- 

const fruits = ['apple', 'peach', 'grape'];
for (let fruit in fruits) {
    console.log(fruits[fruit]); /* apple
                                   peach
                                   grape */
}

// -------------------------------------------------- 

const person = {
    first_name: 'Luiz', 
    last_name: 'Marcos', 
    age: 32
};
for (let characteristics in person) {
    console.log(`${characteristics} - ${person[characteristics]}`); /* first_name - Luiz
                                                                       last_name - Marcos 
                                                                       age - 32 */
}
console.log(`${person.first_name}, ${person['first_name']}`); // Luiz, Luiz
console.log(`${person.last_name}, ${person['last_name']}`); // Marcos, Marcos
console.log(`${person.age}, ${person['age']}`); // 32, 32
