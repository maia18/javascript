function Contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    let res = document.getElementById('resultado')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados incompletos!')
    } else {
        res.innerHTML = 'Contando...'
        for (var c = i; c <= f ; c += p) {
            res.innerHTML += ` ${c} `
        }
    }
}

