
// arguments --> sustains all of values sended on ()

function funcOne(a, b) {
    let tot = 0;
    for (let argument of arguments) {
        tot += argument;
    }
    console.log(tot, a, b);
}
funcOne(1, 2 ,3); // 6 1 2

// ----------------------------------------------------------------

function funcTwo(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcTwo(1, 2 ,3); // 1 2 3 undefined undefined undefined

// ----------------------------------------------------------------

function funcThree(a, b = 0, c = 1) {
    console.log(a + b - c);
}
funcThree(2, undefined, 10); // -8

// ----------------------------------------------------------------

function funcFour({first_name, last_name, age}) {
    console.log(first_name, last_name, age);
}
let obj = { first_name: 'Luiz', last_name: 'Miranda', age: 28 };
funcFour(obj); // Luiz Miranda 28

// ----------------------------------------------------------------

function funcFive([value1, value2, value3]) {
    console.log(value1, value2, value3);
}
funcFive(['Luiz', 'Miranda', 28]); // Luiz Miranda 28

// ----------------------------------------------------------------

const count = function(operator, accumulator, ...numbers) {
    console.log(arguments); // [Arguments] { '0': '+', '1': 1, '2': 20, '3': 30, '4': 40, '5': 50 }
    for (let number of numbers) {
        if (operator === '+') accumulator += number;
        if (operator === '-') accumulator -= number;
        if (operator === '/') accumulator /= number;
        if (operator === '*') accumulator *= number;
    }
    console.log(accumulator);
};
count('+', 1, 20, 30, 40, 50); // 141
count('-', 2, 20, 30, 40, 50); // -138
count('/', 3, 20, 30, 40, 50); // 0.0000025
count('*', 4, 20, 30, 40, 50); // 4800000