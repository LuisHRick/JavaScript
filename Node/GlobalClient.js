require('./GlobalObject')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'        // Não muda pois o objeto esta congelado
console.log(MinhaApp.nome)