const estaEntre = function (minimo, numero, maximo, inclusivo = false) {
    if (inclusivo) {
        console.log(minimo <= numero && numero <= maximo)
    } else {
        console.log(minimo < numero && numero < maximo)
    }
}

estaEntre(10, 50, 100)
estaEntre(15, 100, 100)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)