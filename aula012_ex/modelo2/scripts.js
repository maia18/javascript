function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('ano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        // window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-homem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-mulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos Gênero ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }

}

