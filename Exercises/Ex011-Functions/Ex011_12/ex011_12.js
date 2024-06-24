// Constructor function --> objects, Person(new)
// Fabric function --> objects

// ----------------------------------------------

function Person(name, last_name) {

    // PRIVATE attributes or methods
    const ID = 123456;
    const InternalMethod = function() {

    };

    // PUBLIC attributes or methods
    this.name = name;
    this.last_name = last_name;

    this.method = function() {
        console.log('I am a method')
    }
}
const p1 = new Person('Luiz', 'Otávio');
const p2 = new Person('Mario', 'André');

console.log(p1.name + '\n' + p2.name); /* Luiz
                                          Mario */
p2.method(); // I am a method

// ----------------------------------------------
