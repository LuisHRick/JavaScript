const filhas = ['Filha 1', 'Filha 2']
const filhos = ['Filho 1', 'Filho 2']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)
console.log(filhas)
console.log(filhos)

// Após um elemento que se trata de um elemento solto e não um Array, todos os
// Seguintes devem ser o mesmo, caso contrário, será adicionado em forma de array
console.log([].concat([1, 2], [3, 4], 5, [6, 7]))