

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// operador de destructuring

// pegando as variáveis de outra variável
const { nome, idade } = pessoa
console.log(nome, idade)

// renomeando as variáveis
const { nome: n, idade: i } = pessoa
console.log(n, i)

// dado aninhado
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

console.log(pessoa)