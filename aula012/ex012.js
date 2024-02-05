var agora = new Date()
let hora = agora.getHours()
let min = agora.getUTCMinutes()
console.log(`São ${hora}:${min}`)
if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}