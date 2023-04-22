function GerarNumerosEntre(min = 0, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(function () {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function GerarVariosNumeros() {
    return Promise.all([
        GerarNumerosEntre(1, 60, 4000),
        GerarNumerosEntre(1, 60, 3000),
        GerarNumerosEntre(1, 60, 1000),
        GerarNumerosEntre(1, 60, 5000),
        GerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')
GerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })