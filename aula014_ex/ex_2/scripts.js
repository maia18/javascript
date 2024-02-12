// function Tabuada() {
//     var num = document.getElementById('txtn')
//     var tab = document.getElementById('num_tab')

//     if (num.value.length == 0) {
//         window.alert("Dados incompletos!")
//     } else {
//         var n = Number(nun.value)
//         var c = 1
//         tab.innerHTML = ''

//         for (var c = 1; c <= 10; c++) {
//             var item = document.createElement('option')

//         }
 
//     }
// }

function Tabuada(){
    if(document.querySelector('input#txtn').value.length == 0){
        alert('Por favor, insira um número')
    }else{
        document.querySelector('select#num_tab').innerHTML = ``
        var n = Number(document.querySelector('input#txtn').value)
        for(let c = 1;c <= 10;c++){
            let mult = document.createElement('option')
            mult.text = `${n} * ${c} = ${n*c}`
            mult.value = `tab${c}`
            document.querySelector('select#num_tab').appendChild(mult)
        }
    }
}