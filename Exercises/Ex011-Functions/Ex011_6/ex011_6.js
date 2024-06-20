
// arguments --> sustains all of values sended on ()

function funcOne(a, b) {
    let tot = 0;
    for (let argument of arguments) {
        tot += argument;
    }
    console.log(tot, a, b);
}
funcOne(1, 2 ,3); // 6 1 2

// -------------------------------------------------------

function funcTwo(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcTwo(1, 2 ,3); // 1 2 3 undefined undefined undefined

// -------------------------------------------------------

function funcThree(a, b = 0, c = 1) {
    console.log(a + b - c);
}
funcThree(2, undefined, 10); // -8