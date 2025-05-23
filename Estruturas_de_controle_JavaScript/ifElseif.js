Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('Entre as maiores notas')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }

    console.log('Finalizando a execução...')
}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(70)
imprimirResultado(1000)