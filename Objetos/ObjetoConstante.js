// pessoa -> endereço -> objetos
// o objeto pessoa não altera, o que altera é o objeto, por isso é uma constante
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) // não da mais para mexer no objeto

pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Pedro' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)