function randomTime(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function waitThere(msg, time, cb) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERROR!'));
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

waitThere('Phrase 1', randomTime(1, 3))
.then(answer => {
    console.log(answer);
    return waitThere('Phrase 2', randomTime(1, 3));
})
.then(answer => {
    console.log(answer);
    return waitThere(22222, randomTime(1, 3));
})
.then(answer => {
    console.log(answer);
})
.then(() => {
    console.log('To be continued...')
})
.catch(e => {
    console.log('ERROR:', e)
});
