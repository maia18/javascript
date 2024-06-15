// // index      0    1    2    3    4    5    6    7    8
// const num = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [one, two, three, ...rest] = num; // ...rest, ...spread
// console.log(one, two, three)
// console.log(rest)


// index      0    1    2    3    4    5    6    7    8
// const num = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [one, , three, , five, , seven, , nine, ...rest] = num; // ...rest, ...spread
// console.log(one, three, five, seven, nine)


// index[]           0          1          2    
// index[[]]      0  1  2    0  1  2    0  1  2
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];                        
console.log(numbers[1][2]); // 6

const [ , [, , six]] = numbers;
console.log(six); // 6

const [list1, list2, list3] = numbers;
console.log(list2[2]) // 6