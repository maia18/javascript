function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw('x or y must be a number!');
        // throw new Error('x or y must be a number!');
        // throw new TypeError('x or y must be a number!');
        throw new ReferenceError('x or y must be a number!');
    }
    return x + y;
}

/* console.log(sum(1, 2)); // 3

 console.log(sum('1', '2')); // throw('x or y must be a number!');
                                ^
                            x or y must be a number! */

try {
    console.log(sum(1, 2)); // 3
    console.log(sum('1', '2'));
} catch(error) {
    // console.log(error); // x or y must be a number!
    console.log('Something friendlier to user...');
}