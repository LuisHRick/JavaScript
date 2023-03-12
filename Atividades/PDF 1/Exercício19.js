function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100: return `Cachorro Quente: quantidade ${qtd}, valor total: R$${qtd * 3}`
        case 200: return `Hambúrguer simples: quantidade ${qtd}, valor total: R$${qtd * 4}`
        case 300: return `Cheese Burguer: quantidade ${qtd}, valor total: R$${qtd * 5.50}`
        case 400: return `Bauru: quantidade ${qtd}, valor total: R$${qtd * 7.50}`
        case 500: return `Refrigerante: quantidade ${qtd}, valor total: R$${qtd * 3.50}`
        case 600: return `Suco: quantidade ${qtd}, valor total: R$${qtd * 2.80}`
        default: return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
