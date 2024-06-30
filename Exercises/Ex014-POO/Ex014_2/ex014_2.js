class ElectronicDevices {
    constructor(name) {
        this.name = name;
        this.on = false;
    }
    turn_on() {
        if (this.on) {
            console.log(this.name + ' has already on');
            return;
        }
        this.on = true;
    }
    turn_off() {
        if (!this.on) {
            console.log(this.name + ' has already off');
            return;
        }
        this.on = false;
    }
}

class Smartphone extends ElectronicDevices {
    constructor(name, color, model) {
        super(name);

        this.color = color;
        this.model = model;
    }
}

class Tablet extends ElectronicDevices {
    constructor(name, hasWIFI) {
        super(name);
        this.hasWIFI = hasWIFI;
    }
    turn_on() {
        console.log("Look, you changed the 'turn_on' method...")
    }
    sayHI() {
        console.log('Hi')
    }
}

const s1 = new Smartphone('Samsung', 'black', 'Galaxy A01');
console.log(s1); /* Smartphone {
                      name: 'Samsung',
                      on: false,
                      color: 'black',
                      model: 'Galaxy A01'
                    } */

const t1 = new Tablet('Ipad', true);
t1.turn_on(); // Look, you changed the 'turn_on' method...
t1.turn_on(); // Look, you changed the 'turn_on' method...
t1.sayHI(); // Hi