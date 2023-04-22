function GerarNumerosEntre(min = 0, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

GerarNumerosEntre(1, 10)
    .then(num => num * 10)
    .then(numX10 => `O número chamado foi ${numX10}`)
    .then(console.log)