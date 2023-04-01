const { error } = require('console')
const fs = require('fs')

const caminho = __dirname + '\\ArquivoLido.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('.\\ArquivoLido.json')
console.log(config.db)

fs.readdir(__dirname, (erro, arquivos) => {
    console.log(arquivos)
})