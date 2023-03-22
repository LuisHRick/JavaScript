// Usar somente o mesmo tipo de valores em um array

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Raphael' // É possível manter índices vazios
console.log(aprovados)

console.log(aprovados)
aprovados.sort()         // Organiza o Array
console.log(aprovados)

delete aprovados[5]
console.log(aprovados)

// Apagar / Adicionar
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Número inicial / quantos vai apagar além dele (seguido)
console.log(aprovados)
console.log()
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
console.log()
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2') // Adiciona onde apagou
console.log(aprovados)
console.log()
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2') // Adiciona sem apagar
console.log(aprovados)
console.log()