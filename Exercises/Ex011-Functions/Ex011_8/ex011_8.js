function ReturnFunction(first_name) {
    // const first_name = 'Luiz';
    return function() {
        return first_name;
    };
}

let func = ReturnFunction('Luiz');
let func2 = ReturnFunction('João');
console.dir(func); // [Function (anonymous)]
console.dir(func2); // [Function (anonymous)]

console.log(func(), func2()); // Luiz João