function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade')
    } else {
        console.log('Não é verdade')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(true)


function teste1(num) {
    if (num > 7)                // sem chaves
        console.log(num)        // associado ao if
        console.log('Depois')   // não está associado ao if
}

teste1(6)
teste1(8)


function teste2(num) {
    if ( num > 7); {        // ponto e vírgula
        console.log(num)    // não está associado ao if
    }
}

teste2(6)
teste2(8)