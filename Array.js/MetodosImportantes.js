const pilotos = ['Piloto 1', 'Piloto 2', 'Piloto 3', 'Piloto 4']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Piloto 5') // adiciona mais um elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Piloto 1') // adiciona um elemento em primeiro
console.log(pilotos)

// splice pode remover ou adicionar informações na casa de preferência

//
pilotos.splice(
    2, // casa inicial
    0, // quantos vai apagar em seguida (0 = nenhum)
    'Piloto rosa', // Elementos que vai adicionar
    'Piloto azul'
)

console.log(pilotos)

pilotos.splice(2, 2) // apaga a casa 2 e 3
console.log(pilotos)


// Gera um novo array a partir do índice x até o indice y
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)