function COUNTER() {
    var start = Number(document.querySelector("input#Istt").value)
    var end = Number(document.querySelector("input#Iend").value)
    var step = Number(document.querySelector("input#Ists").value)
    var res = document.querySelector("div#res")
    if (start >= 0 || end >= 0 || step > 0) {
        if ((start > end) && (step <= start)) {
            for (var count = start; count >= end; count -= step) {
                res.innerHTML += `&#x1F449 ${count}`
            }
        } else if ((end > start) && (step <= end)) {
            for (var count = start; count <= end; count += step) {
                res.innerHTML += `&#x1F449 ${count}`
            }
        }
        res.innerHTML += "&#x1F4CC"
    } else {
        document.write("Invalid datas")
    }
}