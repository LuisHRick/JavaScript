
// Operadores ternários:
const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'
//                      | condição |?|   True   |   False   |

console.log(resultado(7.1))
console.log(resultado(6))

// desconstrução do código:
const extra = nota => {
    return nota >= 7 ? 'Aprovado': 'Reprovado'
}

function extra_2(nota) {
    return nota >= 7 ? 'Aprovado': 'Reprovado'
}