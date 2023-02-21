let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

isAtivo = 1
console.log(!!isAtivo) // true
console.log(!isAtivo) // falso   -> ! inverte o valor
console.log(isAtivo)
console.log('======================================')
// os verdadeiros:
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log({})
console.log(!![])
console.log(!!(isAtivo == true))
console.log('======================================')

// falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('======================================')


// outros
console.log(!!('' || null || 0 || ' ')) // '||' -> ou

let nome = ''

console.log(nome || 'Desconhecido')