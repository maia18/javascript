function randomTime(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function waitThere(msg, time, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(false);
                return;
            };
            resolve(msg.toUpperCase() + ' - I passed the promise');
        }, time);
    });
}

/*  

    Promise.all 
    Promise.race 
    Promise.resolve 
    Promise.reject

*/

// Promise.all 
const promises = [
    'First value',
    waitThere('Promise 1', 3000),
    waitThere('Promise 2', 500),
    waitThere('Promise 3', 1000),
    // waitThere(2500, 1000),
    'Another value'
];
Promise.all(promises)
.then(function(value) {
    console.log(value);
})
.catch(function(error) {
    console.log(error)
});

// ------------------------------------------------

// Promise.race
const promises_two = [
    waitThere('Promise 1', randomTime(1, 5)),
    waitThere('Promise 2', randomTime(1, 5)),
    waitThere('Promise 3', randomTime(1, 5)),
];
Promise.race(promises_two)
.then(function(value) {
    console.log(value);
})
.catch(function(error) {
    console.log(error)
});

// ------------------------------------------------

function downloadPage() {
    const onCache = true;
    if (onCache) {
        // return Promise.resolve('Page on cache!');
        return Promise.reject('Page on cache!');
    } else {
        return waitThere('Downloaded the page', 2000);
    }
}
downloadPage()
.then(datasages => {
    console.log(datasages);
})
.catch(e => console.log('ERROR!', e));