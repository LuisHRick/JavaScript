// não é porque não pede parâmetros que a função não aceita parâmetros

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2.2, 13, 5))
console.log(soma(1, 20, 1, 7, 114, 12534))
console.log(soma(1, 2, 7, 'Texto'))
console.log(soma('a', 'b', 'c'))