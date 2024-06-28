// Contructor ---> mold ( class )
function Person(name, last_name) {
    this.name = name;
    this.last_name = last_name;
    // this.fullName = () => 'ORIGINAL: ' + this.name + ' ' + this.last_name;
}

// Person.prototype === person1.__proto__

Person.prototype.fullName = function() {
    return this.name + ' ' + this.last_name
}

// Instance
const person1 = new Person('Luiz', 'O.'); // <- Person = constructor function
const person2 = new Person('Maria', 'A.'); // <- Person = constructor function

console.log(person1, person1.fullName());
console.dir(person2);
