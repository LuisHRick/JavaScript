function anoBissexto(ano) {
    if (ano % 4 == 0) {
        if (ano % 100 != 0 || ano % 400 == 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(anoBissexto(2000))
console.log(anoBissexto(2004))
console.log(anoBissexto(2005))