function funciorarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {

            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

// O then recebe 2 funções, uma para ser executada e um para tratamento de erro específico daquela linha
// não rodando o catch
funciorarOuNao('Testando...', 0.1)
    .then(valor => console.log('Valor:', valor))
    .catch(err => console.log('Erro:', err)) // Caso tenha um erro
    .then(console.log('Fim')) // Após o catch, o then nao recebe valor