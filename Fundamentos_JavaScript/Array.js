
// EM JAVASCRIPT, VALORES VAZIOS OCUPAM ESPAÇO


const valores = [7.7, 8.9, 6.3]
console.log(valores[0], valores[1], valores[2], valores[3])
console.log(valores)

valores[3] = 10
console.log(valores[3])

valores[10]= 11
console.log(valores)

console.log(valores.length)

valores.push(false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // apaga o último índice

const a = valores.pop() // valores[-1] = null
console.log(a)

delete valores[0]
console.log(valores)

console.log(typeof valores)
