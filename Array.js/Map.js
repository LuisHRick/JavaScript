// Aplica uma alteração para todos os valores do ARRAY
// Cria um outro ARRAY com a alteração

const numeros = [1, 2, 3, 4, 5]

let resultado = numeros.map(function (e) {
    return e * 2
})

console.log(resultado, numeros)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)