const axios = require('axios')
const { NONAME } = require('dns')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
    let FuncionarioMenorSalario = {
        'salario': 10000,
        'funcionario': null
    }
    const funcionarios = response.data
    funcionarios.forEach(function (funcionario) {
        if (funcionario['pais'] == 'China') {
            if (funcionario['genero'] == 'F') {
                if (funcionario['salario'] < FuncionarioMenorSalario.salario) {
                    FuncionarioMenorSalario.salario = funcionario['salario']
                    FuncionarioMenorSalario.funcionario = funcionario

                }
            }
        }
        return FuncionarioMenorSalario
    })
    console.log(FuncionarioMenorSalario.funcionario)
})

// Resolução do vídeo

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})