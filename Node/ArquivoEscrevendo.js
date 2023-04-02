const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.9,
    desconto: 0.15
}

fs.writeFile(__dirname + '\\ArquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})