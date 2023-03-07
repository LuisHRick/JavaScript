// function declaration
function soma(x, y) {  // Vai ser possível o uso dessa função antes de declarar
    return x + y
}

// function expression
const sub = function (x, y) { // Só vai ser possível usar após a declaração
    return x - y
}

// named function expression
const mult = function mult(x, y) {  // Só é utíl debbugando
    return x * y
}

