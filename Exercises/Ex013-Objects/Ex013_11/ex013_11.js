const speak = {
    speak() {
        console.log(`${this.name} is speaking...`)
    }
};
const eat = {
    eat() {
        console.log(`${this.name} is eating...`)
    }
};
const drink = {
    drink() {
        console.log(`${this.name} is drinking...`)
    }
};

const personPrototype = Object.assign({}, speak, eat, drink);

function createPerson(name, lastname) {
    return Object.create(personPrototype, {
        name: { value: name },
        lastname: { value: lastname }
    });
}

const p1 = createPerson('Luiz', 'Otávio');
const p2 = createPerson('Marcos', 'André');
p2.speak();
p2.eat();
p2.drink();
