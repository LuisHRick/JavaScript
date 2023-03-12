function notas(valor) {
    let qnt100 = 0
    let qnt50 = 0
    let qnt10 = 0
    let qnt5 = 0
    let qnt1 = 0
    valornota = dividir(valor)
    while (valor >= valornota) {
        switch (valornota) {
            case 100:
                valor -= 100
                qnt100++
                break
            case 50:
                valor -= 50
                qnt50++
                break
            case 10:
                valor -= 10
                qnt10++
                break
            case 5:
                valor -= 5
                qnt5++
                break
            case 1:
                valor -= 1
                qnt1++
                break
        }
        valornota = dividir(valor)
    }

    let lista = [qnt100, qnt50, qnt10, qnt5, qnt1]

    return lista
}

function dividir(valor) {
    if (valor >= 100) {
        return 100
    } else if (valor >= 50) {
        return 50
    } else if (valor >= 10) {
        return 10
    } else if (valor >= 5) {
        return 5
    } else if (valor >= 1) {
        return 1
    }
}


console.log(notas(99))
console.log(notas(3000))