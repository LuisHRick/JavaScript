function divisivelTres(numero) {
    if (numero % 3 == 0) {
        return 'APROVADO'
    } else {
        return 'REPROVADO'
    }
}


console.log(divisivelTres(3))
console.log(divisivelTres(30))
console.log(divisivelTres(31))