const _speed = Symbol('speed');
class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }
    set speed(value) {
        if (typeof value !== 'number') return;
        if (value > 100 || value <= 0) return;
        this[_speed] = value;
    }

    get speed() {
        return this[_speed];
    }
    speed_up() {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }
    slow_down() {
        if(this[_speed] >= 0) return;
        this[_speed]--;
    }
}

const c1 = new Car('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.speed_up();
// }

c1.speed = 100 ; // SETTER

console.log(c1.speed); // GETTER ----> 100

// ------------------------------------------------

console.log('\r')

class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return this.name + ' ' + this.lastname;
    }
    set fullName(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.lastname = value.join(' ');
    }
}

const p1 = new Person('Luiz', 'Borges');
console.log(p1.fullName); // Luiz Borges

p1.fullName = 'Mario Miranda';
console.log(p1.fullName); // Mario Miranda
console.log(p1.name, p1.lastname); // Mario Miranda