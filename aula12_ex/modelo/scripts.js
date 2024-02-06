function Verificar() {
    var msg = document.getElementById('horario')
    let img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `${hora}h`

    if (hora >= 5 && hora < 12) {
        img.src = "dia.jpeg"
        document.body.style.background = 'rgba(0, 119, 255, 0.516)'

    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg"
        document.body.style.background = 'rgba(255, 170, 11, 0.718)'
    } else {
        img.src = "noite.jpg"
        document.body.style.background = 'rgba(0, 0, 91, 0.742)'
        
    }
}

