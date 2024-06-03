function CALCULE() {
    var num_ = Number(document.querySelector("input#Inum").value)
    var res_ = document.getElementById("res")
    res_.innerHTML = ''
    for (var i = 0; i <= 10; i++) {
        res_.innerHTML += `${num_} * ${i} = ${num_ * i}<br>`
    }
}