function randomTime(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function waitThere(msg, time, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERROR!');
                return;
            };
            resolve(msg.toUpperCase() + ' - I passed the promise');
        }, time);
    });
}

// waitThere('Phase 1', randomTime())
// .then(value => {
//     console.log(value);
//     return waitThere('Phase 2', randomTime());
// })
// .then(phase => {
//     console.log(phase);
//     return waitThere('Phase 3', randomTime());
// })
// .then(phase => {
//     console.log(phase);
//     return phase;
// })
// .then(phase => {
//     console.log('To be continued...')
// })
// .catch(e => console.log('ERROR!'));

async function execute() {
    try {
        const phase1 = await waitThere('Phase 1', randomTime());
        console.log(phase1);
        setTimeout(function() {
            console.log('This promise was pending', phase1);
        })
        const phase2 = await waitThere('Phase 2', randomTime());
        console.log(phase2);
        const phase3 = await waitThere('Phase 3', randomTime());
        console.log(phase3);
        console.log('To be continued...');
    }
    catch(e) {
        console.log(e);
    }
}
execute();
/*

    pending
    fullfilled ---> resolved
    rejected

*/