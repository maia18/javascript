 /*function Hour() {
     let date = new Date();
     return date.toLocaleTimeString('pt-BR', {
         hour12: false
     });
 }
 function Interval() {
     console.log(Hour());
 }
 setInterval(Interval, 1000); */

// ----------------------------------------------------

function Hour() {
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const time = setInterval(function() {
    console.log(Hour())
}, 1000);
setTimeout(function() {
    clearInterval(time);
}, 3000);
setTimeout(function() {
    console.log('Hello, world!')
}, 5000)