function calculos(x, operacao, y) {
    switch (operacao) {
        case '+': return x + y
        case '-': return x - y
        case '*': return x * y
        case '/': return x / y
    }
}


console.log(calculos(3, '+', 3))
console.log(calculos(3, '+', 7))
console.log(calculos(10, '-', 5))
console.log(calculos(10, '/', 5))
console.log(calculos(5, '*', 5))