const numbersPartOne = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let number of numbersPartOne) {

    if (number === 20) {
        console.log("Skipped the number 20...")
        continue;
    }

    if (number === 70) {
        console.log("Stopped in the number 70...")
        break
    }

    console.log(number);
}
console.log('\r')

// ------------------------------------------------------

const numbersPartTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numbersPartTwo.length) {
    let number = numbersPartTwo[i];
    if (number === 2) {
        console.log("Skipped the number 2...");
        i++;
        continue;
    }
    console.log(number);

    if (number === 7) {
        console.log("Stopped in the number 7...");
        i++;
        break;
    }

    i++;
}
console.log('\r')

// ------------------------------------------------------

const numbersPartThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c = 0;
do {
    let number = numbersPartThree[c];
    if (number === 2) {
        console.log("Skipped the number 2...");
        c++;
        continue;
    }
    console.log(number);

    if (number === 7) {
        console.log("Stopped in the number 7...");
        c++;
        break;
    }

    c++;
} while (c < numbersPartThree.length);