// Mesmo exemplo den While.js

function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1            // Fazendo com que a utilização de While seja inviavel

do {         // Executa antes da condição
    opcao = getInteiro(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
    switch(opcao){
        case -1:
            console.log('finalizando...')
            break
    }
} while (opcao != -1)      // Condição depois da execução