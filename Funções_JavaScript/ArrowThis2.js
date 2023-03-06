let comparaComThis = function (parâmetro) {
    console.log(this === parâmetro)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind
comparaComThisArrow(obj) // mantém