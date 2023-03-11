function fatorial(x) {
    let total = 1
    for (x; x > 0; x--) {
        total = x * total
    }
    return total
}

console.log(fatorial(5))