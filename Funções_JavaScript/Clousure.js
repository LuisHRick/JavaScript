// Clousure é o escopo criado quando a função é declarado
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico 

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())