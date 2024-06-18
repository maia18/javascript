function Calc(num) {
    if (num >= 0 && num <= 100 && typeof(num) === 'number') {
        if (num % 3 == 0) {
            return 'Fizz';
        } else if (num % 5 == 0) {
            return 'Buzz';
        } else if ( num % 3 == 0 && num % 5 == 0) {
            return'FizzBuzz';
        } else {
            return num
        }
    } else {
        return 'Write a NUMBER between 0 and 100...'
    }
}

console.log(Calc(25))