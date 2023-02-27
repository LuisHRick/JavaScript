// Switch Case executa todos os Case em que ele pode ser executado

const imprimirResultado = function (nota){
    switch (Math.floor(nota)) {
        case 10:                   // não tem execução, vai executar o de baixo
            console.log('Nota máxima')
        case 9:
            console.log('Quadro de honra')
            break                  // não executar os próximos
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:                        // caso não seja nenhum
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
console.log()
imprimirResultado(9)
console.log()
imprimirResultado(8.9)
console.log()
imprimirResultado(-1)
console.log()