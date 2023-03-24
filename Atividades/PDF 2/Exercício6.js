const inverso = a => {
    if (typeof a == 'boolean') {
        console.log(a == false)
    } else if (typeof a == 'number') {
        console.log(a - a * 2)
    } else console.log(`Booleano ou números esperado, o valor colocado é um ${typeof a}`)
}

inverso(true)
inverso('6')
inverso(-2000)
inverso('programação')