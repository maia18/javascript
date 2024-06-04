function ANALYZER() {
    var num = document.querySelector("input#Inum")
    var ul = document.getElementById("list")
    var res = document.querySelector("div#res")

    var list = []

    let item = document.createElement("li")
    ul.appendChild(item)

    for (var obj in ul) {
        res.innerHTML += ul[obj]
    }

    // list.push(ul)

    // res.innerHTML += ul
    // var letters;
    // letters += "<li>" + list
}  
