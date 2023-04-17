// operador: ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(funcionario)
console.log(clone)
console.log()

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Yasmim']
console.log(grupoFinal)