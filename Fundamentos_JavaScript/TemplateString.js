const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
============================
    Olá
    ${nome}!          :)
============================
`   // com (``) -> mantém todas as alterações dentro da string


console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}!`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
console.log(`Ei... ${toUpperCase('Cuidado')}`)