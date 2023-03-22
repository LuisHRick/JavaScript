// Forma de percorrer um ARRAY

const aprovados = ['Fulano1', 'Fulano2', 'Fulano3', 'Fulano4']

aprovados.forEach(function (valor, indice, array) { // Call Back
    console.log(`${indice + 1}) ${valor}`)
    console.log(array)
})

aprovados.forEach(valor => console.log(valor))

const exibirAprovados = valor => console.log(valor)
aprovados.forEach(exibirAprovados)