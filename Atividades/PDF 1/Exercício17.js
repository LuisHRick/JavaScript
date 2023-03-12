function aumento(salario, valor) {
    switch (valor) {
        case 10: return salario = salario + salario * 0.10
        case 15: return salario = salario + salario * 0.15
        case 20: return salario = salario + salario * 0.20
        default: return 'inválido'
    }
}

console.log(aumento(1000, 20))
console.log(aumento(1500, 10))
console.log(aumento(2000, 15))