function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiro(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
    switch(opcao){
        case -1:
            console.log('finalizando...')
            break
    }
}