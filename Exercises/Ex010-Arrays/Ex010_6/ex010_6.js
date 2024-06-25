// map

// -----------------------------------------------------------

// Double the numbers

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const double_numbers = numbers.map(value => 2 * value); 
console.log(double_numbers) /* [
                                10, 100, 160,  2,  4,  6,
                                10,  16,  14, 22, 30, 44,
                                54
                               ] */

// -----------------------------------------------------------

/* To each element:

  1 - Return just a string with the person's name
  2 - Remove just one 'name' key from the object
  3 -  Add an id key to each object 

*/

const people = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23}, 
    { name: 'Eduardo', age: 55}, 
    { name: 'Letícia', age: 19}, 
    { name: 'Rosana', age: 32}, 
    { name: 'Wallace', age: 47},
];

const first_task = people.map(obj => obj.name); 
console.log(first_task); // [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]

const second_task = people.map(obj => { 
    const newObj = {...obj};
    delete newObj.name; 
    return newObj; 
});
console.log(second_task); /* [
                                { age: 62 },
                                { age: 23 },
                                { age: 55 },
                                { age: 19 },
                                { age: 32 },
                                { age: 47 }
                             ] */

const third_task = people.map((obj, index) => {
    const newOBJ = {...obj};
    newOBJ.id = index + 1
    return newOBJ;
});
console.log(third_task); /* [
                              { age: 62, id: 1 },
                              { age: 23, id: 2 },
                              { age: 55, id: 3 },
                              { age: 19, id: 4 },
                              { age: 32, id: 5 },
                              { age: 47, id: 6 }
                            ] */
