function* Generate1() {
    // Any code...
    yield 'Value 1';
    // Any code...
    yield 'Value 2';
    // Any code...
    yield 'Value 3';
}

const g1 = Generate1();
/* console.log(g1.next().value); // Value 1
console.log(g1.next().value); // Value 2
console.log(g1.next()); // { value: 'Value 3', done: false }
console.log(g1.next()); // { value: undefined, done: true } */

for (let value of g1) {
    console.log(value);
}

// ------------------------------------------------

function* Generate2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = Generate2();
console.log('\n'+g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value + '\n');

// ------------------------------------------------

function* Generate3() {
    yield 0;
    yield 1;
    yield 2;
} 

function* Generate4() {
    yield* Generate3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}
const g4 = Generate4();
for (let value of g4) {
    console.log(value);
}

// ------------------------------------------------

function* Generate5() {
    yield function() {
        console.log('\nI came from y1');
    };
    yield function() {
        console.log('I came from return')
    };
    yield function() {
        console.log('I came from y2');
    };
}
const g5 = Generate5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();