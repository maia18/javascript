function parimp(n) {
    if (n % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

for (var num = 0; num <= 10; num++) {
    console.log(`${num}: ${parimp(num)}`)
}