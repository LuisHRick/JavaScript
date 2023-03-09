dinheiro = x => `R$${x.toFixed(2).toString().replace('.', ',')}`

console.log(dinheiro(0.2 + 0.1))
console.log(0.2 + 0.1)