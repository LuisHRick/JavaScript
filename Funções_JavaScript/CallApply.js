// Métodos como call(), apply() e bind() conseguem referenciar 'this' a
// qualquer objeto


// https://www.w3schools.com/js/js_function_call.asp

// Com o metodo call(), voce pode escrever um metodo que pode ser usado com
// diferentes objetos
// com call(), um objeto pode usar um metodo pertencendo a outro objeto

// a diferença entre apply() e call(), é que call() recebe os parametros
// separadamente, enquanto apply() recebe em um array

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())         // Não possui os valores preco e desc
console.log(produto.getPreco()) // Possui os valores preco e desc


const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// call                contexto, parâmetros
console.log(getPreco.call(carro, 0.17, '$'))      // poram direto

// apply                contexto   parâmetros
console.log(getPreco.apply(carro, [0.17, '$']))  // param em array