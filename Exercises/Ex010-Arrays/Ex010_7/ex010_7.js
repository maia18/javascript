// reduce

// -----------------------------------------------------------

/* Sum all the numbers ( Reduce )
   Return an array with the even numbers ( Filter )
   Return an array with the double of values ( Map )
*/

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const tot = numbers.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
});
console.log(tot); // 236

const even_numbers = numbers.reduce((accumulator, value) => {
    if (value % 2 === 0) accumulator.push(value);
    return accumulator
}, []);
console.log(even_numbers); // [ 50, 80, 2, 8, 22 ]

const double_numbers = numbers.reduce((accumulator, value) => {
    accumulator.push(value * 2);
    return accumulator;
}, [])
console.log(double_numbers); /* [
                                  10, 100, 160,  2,  4,  6,
                                  10,  16,  14, 22, 30, 44,
                                  54
                                ] */

// -----------------------------------------------------------

// Return the oldest person

const people = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23}, 
    { name: 'Eduardo', age: 55}, 
    { name: 'Letícia', age: 19}, 
    { name: 'Rosana', age: 64}, 
    { name: 'Wallace', age: 47},
];

const oldest_person = people.reduce((accumulator, value) => {
    if (accumulator.age > value.age) return accumulator;
    return value;
});
console.log(oldest_person);
