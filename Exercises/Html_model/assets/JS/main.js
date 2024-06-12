function IMC() {
    let weight = document.getElementById("iWeight");
    let height = document.getElementById("iHeight");

    let imc = Number(weight.value) / Number(height.value)**2

    if (imc < 18.5 ) {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nUnder weight!`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nNormal weight!`)
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nOverweight!`)
    } else if (imc >= 30 && imc <= 34.9) {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nresult: Grade 1 obesity`)
    } else if (imc >= 35 && imc <= 39.9) {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nresult: Grade 2 obesity`)
    } else {
        alert(`Weight: ${Number(weight.value)}kg\nIMC: ${imc}\nresult: Grade 3 obesity`)
    }
}