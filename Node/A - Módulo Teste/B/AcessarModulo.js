const _ = require('../../MódulosA') // ../ => Sair da pasta, import superior

console.log(_.bemVindo)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)