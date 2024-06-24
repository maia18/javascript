function recursive(max) {
    if (max >= 500) return;
    max++;
    console.log(max);
    recursive(max);
}

recursive(0);