const peoples = [
    { id: 3, name: 'Luiz' },
    { id: 2, name: 'Maria' },
    { id: 1, name: 'Helena' }
];

// const newPeoples = {};

// for (const people of peoples) {
//     const { id } = people; 
//     newPeoples[id] = { ...people };
// }

const newPeoples = new Map();

for (const people of peoples) {
    const { id } = people; 
    newPeoples.set(id, { ...people });
}
console.log(newPeoples); /* Map(3) {
                              3 => { id: 3, name: 'Luiz' },
                              2 => { id: 2, name: 'Maria' },
                              1 => { id: 1, name: 'Helena' }
                            } */
console.log(newPeoples.get(2)); // { id: 2, name: 'Maria' }

newPeoples.delete(3);
console.log(newPeoples); /* Map(2) {
                              2 => { id: 2, name: 'Maria' },
                              1 => { id: 1, name: 'Helena' }
                            } */

for (const [identifier, { id, name }] of newPeoples) {
    console.log(identifier, id, name); /* 2 2 Maria
                                          1 1 Helena */
}
