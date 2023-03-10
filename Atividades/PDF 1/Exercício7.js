function equacaoSegundoGrau(ax2, bx, c) {
    let valores = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return 'Delta é negativo'
    }
    let x1 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    valores.push(x1, x2)
    return valores
}

console.log(equacaoSegundoGrau(1, 3, 2))