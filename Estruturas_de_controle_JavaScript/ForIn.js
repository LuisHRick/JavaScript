
const notas = [1, 4, 5, 6, 2, 5, 3]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){    // Usar let para que a variável só exista dentro do laço
    console.log(`${atributo} = ${pessoa[atributo]}`)
}