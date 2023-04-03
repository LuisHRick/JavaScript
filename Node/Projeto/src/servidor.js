const porta = 3003

const express = require('express')
const app = express()
const BancoDeDados = require('./BancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(BancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})