var num = [5, 8, 2, 9, 3]
num.push(6) // Add 6 in the var num

console.log(
`List: [${num}]
length: ${num.length}
sorted: [${num.sort()}]
3rd Value: ${num[2]}
Value 8 Index: ${num.indexOf(8)}
`)

/* for (var pos=0; pos < num.length; pos++) {
    console.log(`${pos}º value: ${num[pos]}`)
} */

/*                    ||                    */

for(let pos in num) {
    console.log(`${pos}º value: ${num[pos]}`)
}


