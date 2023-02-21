const escola = 'Cod3r'

console.log(escola.charAt(4))  // Caractere do índice {Parâmetro}
console.log(escola.charAt(6))  // Caractere fora do alcance não retorna nada
console.log(escola.charCodeAt(3)) // Valor do caractere na tabela Unicode
console.log(escola.indexOf('od')) // Indice onde se localiza o elemento 

console.log(escola.substring(1)) // Começa uma string a partir do índice {parâmetro}
console.log(escola.substring(0, 3)) // Ponto inicial, Ponto final

console.log(escola.replace(3, 'e')) // substitui índice por parâmetro
console.log(escola.replace(/\d/, 'a')) // substitui os dígitos por parâmetro
console.log(escola.replace(/\w/g, 'asd')) // w -> Todos os tipos de valores || -> Global -> fazer com todos os digitos

console.log('Ana,Maria,Pedeo'.split(',')) // Cria array dividindo pelo {parâmetro}

console.log('Escola '.concat(escola).concat('!'))  // Forma de concatenar string
console.log('Escola '+ escola + '!')               // Forma mais fácil de concatenar string