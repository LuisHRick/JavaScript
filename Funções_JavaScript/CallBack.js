const fabricantes = ['mercedez', 'audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Para cada {nome}, {indice}
fabricantes.forEach(fabricante => console.log(fabricante)) // para cada {nome}


// Semelhante ao for enumerate em Pythom