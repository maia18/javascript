var num = document.getElementById("Inum")
var res = document.querySelector("div#res")

let select = document.querySelector("select#inumbers")

let list_ = []

function ANALYZER_ITEM(item_, lists) {
    if (lists.indexOf(Number(item_)) != -1) {
        return true
    } else {
        return false
    }
}

function ADD() {

    if ( ! ANALYZER_ITEM(num.value, list_)) {
        list_.push(Number(num.value))

        let item = document.createElement("option")
        item.text = `${num.value} added!`
        select.appendChild(item)

        res.innerHTML = ''
    } else {
        alert(`Invalid datas!`)
    }
    num.value = ''
    num.focus()
}

function ANALYZER() {
    if (list_.length == 0) {
        window.alert("Add items bafore finishing!")
    } else {
        let tot = list_.length
        let biggest = Math.max(...list_)
        let lowerest = Math.min(...list_)
        var sum = 0
        var average = 0

        for (var pos_ in list_) {
            sum += list_[pos_]
        } 

        average = sum / tot

        res.innerHTML = ''
        res.innerHTML += `<p>There are <strong>${tot}</strong> items</p>`
        res.innerHTML += `<p>The biggest value is <strong>${biggest}</strong></p>`
        res.innerHTML += `<p>The lowerest value is <strong>${lowerest}</strong></p>`
        res.innerHTML += `<p>The Sum is <strong>${sum}</strong></p>`
        res.innerHTML += `<p>The Average is <strong>${average}</strong></p>`
    }
}