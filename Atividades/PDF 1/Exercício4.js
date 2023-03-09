dividir = (x, y) => {
    divisao = (x / y).toFixed(0)
    resto = x % y
    return `resultado da divisão: ${divisao}, resto da divisão: ${resto}`
}

console.log(dividir(10, 3))