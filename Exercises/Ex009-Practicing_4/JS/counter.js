function RESET() {
    location.reload()
}
function CALCULE() {
    var num_ = Number(document.querySelector("input#Inum").value)
    var res_ = document.getElementById("res")
    for (var i = 0; i <= 10; i++) {
        res_.innerHTML += `${num_} * ${i} = ${num_ * i}<br>`
    }
    res_.innerHTML += '<br>'
}
