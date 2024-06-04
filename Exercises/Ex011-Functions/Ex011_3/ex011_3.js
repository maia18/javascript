function Fact(num) {
    var fat = 1
    for(var c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(Fact(5))