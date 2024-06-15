const person = {
    first_name: 'Luiz',
    last_name: 'Miranda',
    age: 30,
    address: {
        street: 'Av Brasil',
        number: 320
    }
}

// const first_name = person.first_name; 
// console.log(first_name);

// const { first_name = '', last_name, age } = person;
// console.log(first_name, last_name, 'age:', age);

// const { first_name: name_ = '', last_name, age } = person;
// console.log(name_, last_name, 'age:', age);

// const { 
//     address: { street: s = 12345, number }, 
//     address 
// } = person;
// // console.log(street, number, address); // Av Brasil 320 { street: 'Av Brasil', number: 320 }
// console.log(s, number, address); // Av Brasil 320 { street: 'Av Brasil', number: 320 }

const {first_name, last_name, ...rest} = person;
console.log(first_name, last_name, rest) // Luiz Miranda { age: 30, address: { street: 'Av Brasil', number: 320 } }