// return --> Return a value and finish the function

function CreatePerson(first_name, last_name) {
    return {first_name, last_name};
}

const p1 = CreatePerson('Jurandir', 'Borges');
const p2 = {
    first_name: 'Jurandir', 
    last_name: 'Borges'
};

console.log(typeof p1, p1);
console.log(typeof p2, p2);

// -------------------------------------------------

function TellPhrase(start) {
    function TellRest(rest) {
        return start + ' ' + rest;
    }
    return TellRest;
}

const tell = TellPhrase('Hello,');
const rest = tell('World!');

console.log(rest);

// -------------------------------------------------

function CreateMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const duplicates = CreateMultiplier(2);
const triples = CreateMultiplier(3);
const quadruple = CreateMultiplier(4);

console.log(duplicates(4));
console.log(triples(8));
console.log(quadruple(12));