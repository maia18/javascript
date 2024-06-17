function Checks(number_one, number_two) {
    if (number_one > number_two) {
        console.log(`The number ${number_one} is bigger than the number ${number_two}`);
    } else if (number_two > number_one) {
        console.log(`The number ${number_two} is bigger than the number ${number_one}`);
    } else {
        console.log("The numbers are equals!");
    }
}

let num = Checks(4, 4);

// --------------------------------------------------------------------------------------

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20))