class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    speak() {
        console.log(`${this.name} is speaking.`);
    }
}

function OtherPerson(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}
OtherPerson.prototype.speak = function() {
    console.log(`${this.name} is speaking.`);
}

const p1 = new Person('Luiz', 'Leandro');
const p2 = new OtherPerson('Bruno', 'Santos');

p1.speak(); // Luiz is speaking.
p2.speak(); // Bruno is speaking.