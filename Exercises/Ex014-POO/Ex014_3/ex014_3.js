function test() {
    console.log("This is my test.");
}

class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        test();
    }

    // Instance method
    increaseVolume() {
        this.volume += 2;
    }
    decreaseVolume() {
        this.volume -= 2;
    }

    // Static method
    static changeBattery() {
        console.log("Ok, I'll change");
    }
    static sum(x, y) {
        return x + y;
    }
}

const control1 = new RemoteControl('LG');
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();

// control1.changeBattery(); // control1.changeBattery is not a function

RemoteControl.changeBattery(); // Ok, it'll change

console.log(control1); // RemoteControl { tv: 'LG', volume: 8 }
console.log(RemoteControl.sum(5, 25)); // 30