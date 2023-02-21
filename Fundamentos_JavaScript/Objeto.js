
// Não é um Json!!!

const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 5000.00
prod1['DescontoLegal'] = 0.40

console.log(prod1)
console.log(prod1.nome)

prod1.preco = 3000

console.log(prod1.preco)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        algo1: 1,
        obj: {
            algo2: 2
        }
    }
}

console.log(prod2)