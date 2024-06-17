function randomNumbers(min, max) {
    const r = Math.random() * (max - min) + min;
    // return r
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = randomNumbers(min, max);

// -----------------------------------------

while (rand != 10) {
    rand = randomNumbers(min, max);
    console.log(rand);
}
console.log('\r');

// -----------------------------------------

do {
    rand = randomNumbers(min, max);
    console.log(rand);
} while (rand != 10);
