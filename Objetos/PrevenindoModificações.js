// Object.preventExtensions


// Permite alterar, porém, não permite adicionar atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.preco
console.log(produto)

// Object.seal

// Permite altera, porém, não permite deletar ou adicionar
const pessoa = { nome: 'Ju', idade: 35 }
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze

// Não se pode alterar nada