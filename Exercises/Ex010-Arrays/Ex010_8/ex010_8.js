/*
    Return the sum of doubles of all evens
    -> Filter evens
    -> Double the values
    -> Reduce it ( sum all )
*/

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const even_numbers = numbers
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((accumulator, value) => accumulator += value);

console.log(even_numbers); // 324