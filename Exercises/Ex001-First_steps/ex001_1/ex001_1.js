var now = new Date()
var year_ = now.getFullYear()

const first_name = "Kleiton";
const last_name = "Rasta";
const age = 20;
var weight = 80.2;
var height = 1.9;

let imc = weight / (height**2);
const year_birth = year_ - age;

console.log
(`
Name: ${first_name} ${last_name} 
Age: ${age} years old - borned in ${year_birth}
Weight: ${weight}kg
Height: ${height.toFixed(2)}m
IMC: ${imc}
`)