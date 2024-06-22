function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback) {
        setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
        setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Hello, world!');
//         });
//     });
// });

f1(Callback_f1);
function Callback_f1() {
    f2(Callback_f2);
}
function Callback_f2() {
    f3(Callback_f3);
}
function Callback_f3() {
    console.log('Hello, world!');
}