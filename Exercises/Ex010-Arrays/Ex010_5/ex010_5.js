// Filter --> Always returns an array with the same or less number of elements

// -----------------------------------------------------------

// Return numbers bigger than 10

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filter_numbers = numbers.filter(value => value > 10);
console.log(filter_numbers);

// -----------------------------------------------------------

// Return people whose name has 5 or more letters
// Return people with age bigger than 50
// Return people whose name ends with 'a'

const people = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23}, 
    { name: 'Eduardo', age: 55}, 
    { name: 'Letícia', age: 19}, 
    { name: 'Rosana', age: 32}, 
    { name: 'Wallace', age: 47},
];
const people_With_Big_Name = people.filter(obj => obj.name.length >= 5);
console.log(people_With_Big_Name); /* [
                                        { name: 'Maria', age: 23 },
                                        { name: 'Eduardo', age: 55 },
                                        { name: 'Letícia', age: 19 },
                                        { name: 'Rosana', age: 32 },
                                        { name: 'Wallace', age: 47 }
                                      ] */

const people_With_Majority = people.filter(obj => obj.age > 50);
console.log(people_With_Majority); // [ { name: 'Luiz', age: 62 }, { name: 'Eduardo', age: 55 } ]

const people_With_A_in_Last_Letter = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(people_With_A_in_Last_Letter); /* [
                                                { name: 'Maria', age: 23 },
                                                { name: 'Letícia', age: 19 },
                                                { name: 'Rosana', age: 32 }
                                              ] */