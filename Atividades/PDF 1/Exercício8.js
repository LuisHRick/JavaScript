pontuações = [2, 4, 7, 3, 5]
function compararPontuacao(pontos) {
    maiorValor = 0
    menorValor = pontos[0]
    recordes = []
    for (let v of pontos) {
        valorAtual = v
        if (valorAtual > maiorValor) {
            maiorValor = valorAtual
            recordes.push(valorAtual)
        } else if (v < menorValor) {
            menorValor = v
        }
    }
    console.log(`Pontos Recordes: ${recordes}`)
    console.log(`Menor Valor: ${menorValor}`)
}

compararPontuacao(pontuações)