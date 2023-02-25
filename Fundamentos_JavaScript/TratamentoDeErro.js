// Tratamento de erro TRY / CATCH / FINALLY

function tratarErro(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try {            // tentar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {    // Se tiver erro
        tratarErro(e)
    } finally{       // Executar depois de tudo
        console.log('Final')
    }
}

const obj = {nome: 'Roberto' }
imprimirNome(obj)