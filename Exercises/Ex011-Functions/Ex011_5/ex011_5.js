// --------------------------------------------------

function SayHello() {
    console.log('Hello');
};
SayHello();

// --------------------------------------------------

const IamAdata = function() {
    console.log('I am a data.');
};
IamAdata();

// --------------------------------------------------

function ExecuteFuntion(func) {
    console.log("I'll execute your function below:")
    func();
};
ExecuteFuntion(IamAdata);

// --------------------------------------------------

const arrowFunction = () => {
    console.log("It's a arrow function");
};
arrowFunction();

// --------------------------------------------------

const obj = {
    speak() {
        console.log("I'm speaking...");
    }
};
obj.speak();

// --------------------------------------------------