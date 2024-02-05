function Verificar() {
    var msg = document.getElementById('horario')
    let img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `${hora}h`

    if (hora >= 5 && hora < 12) {
        img.src = "dia.jpeg"
        
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg"
    } else {
        img.src = "noite.jpg"
    }
}

