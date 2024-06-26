// -------------------------------------------------------------------------------------------------------------------

const person_one = {
    name: 'Luiz',
    last_name: 'Otávio'  
};
const key = 'name';
console.log(person_one[key], person_one['last_name']); // Luiz Otávio

// ------------------------------------------------------------------------------------------------------------------

console.log('\r');

const person_two = new Object();
person_two.name = 'Nelson';
person_two.last_name = 'Marques';
person_two.age = 20;
person_two.SayName = function() {
    return `${this.name} is saying his name.`;
};
person_two.get_birth_date = function() {
    const now = new Date();
    return now.getFullYear() - this.age;
};

console.log(person_two.name, person_two.last_name); // Nelson Marques

delete person_two.last_name;

console.log(
    person_two, '\n'+ 
    person_two.SayName(), '\n'+
    person_two.get_birth_date()
); /* {
    name: 'Nelson',
    age: 20,
    SayName: [Function (anonymous)],
    get_birth_date: [Function (anonymous)]
    } 
    Nelson is saying his name. 
    2004 */

for (let key_ in person_two) {
    console.log(person_two[key_]) /* Nelson
                                     20
                                     [Function (anonymous)]
                                     [Function (anonymous)] */
}

// -------------------------------------------------------------------------------------------------------------------

console.log('\r');

 function createPerson(name, last_name) {
    return {
        name,
        last_name,
        get fullName() {
            return `${this.name} ${this.last_name}`;
        }
    };
 }
 const p1 = createPerson('Paulo', 'André');
 console.log(p1.fullName); // Paulo André

// ------------------------------------------------------------------------------------------------------------------

console.log('\r');

function People(name, last_name) {
    this.name = name;
    this.last_name = last_name;

    // Object.freeze(this);
}

const p1_ = new People('Marcos', 'Borges');
const p2_ = new People('Vitor', 'Ramos');
console.log(p1_, p2_); // People { name: 'Marcos', last_name: 'Borges' } People { name: 'Vitor', last_name: 'Ramos' }

p1_.name = 'Maria';
p1_.last_name = 'Josefa';
console.log(p1_); // People { name: 'Maria', last_name: 'Josefa' }

// ------------------------------------------------------------------------------------------------------------------
