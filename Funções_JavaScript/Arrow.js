let double = function (a) {
    return 2 * a
}

dobro = (a) => {     // Arrow function, função anônima
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'  // possui parâmetro
console.log(ola())