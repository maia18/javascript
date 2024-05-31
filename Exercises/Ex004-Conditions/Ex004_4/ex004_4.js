var age = 16
console.log(`Your age: ${age} years old.`)
if (age < 16) {
    console.log("Don't vote!")
} else if (age < 18 || age > 65) {
    console.log("Optional voting!")
} else {
    console.log("Mandatory voting!")
}