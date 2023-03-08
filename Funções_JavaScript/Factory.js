// Factory simples

function criarPessoa(nome, sobrenome = '') {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

Ana = criarPessoa('Ana')
console.log(Ana)

julia = criarPessoa('Julia', 'Maria')
console.log(julia)