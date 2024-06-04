function Fact(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * Fact(n-1)
    }
}

console.log(Fact(6)) // 720
