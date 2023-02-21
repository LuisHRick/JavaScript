const a = {name: 'teste'}

const b = a

b.name = 'opa'

// // B e A apenas tinham o endereço do objeto, quando um é alterado, os dois mudam
console.log(`
${typeof a} ${a}
${typeof b} ${b}
`)

let c = 3
let d = c

d++

console.log(`
${typeof c} ${c}
${typeof d} ${d}
`)

let valor // não inicializada
console.log(valor) // undefined
console.log(valor2)// is not defined

valor = null
console.log(valor) // null -> ausência de valor
console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco) // undefined

produto.preco = 3.50
console.log(produto)
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)