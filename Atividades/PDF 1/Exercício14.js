function frutas(frutas) {
    switch (frutas) {
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            return false
        case 'maça':
            console.log('Não vendemos esta fruta aqui')
            return false
        case 'melância':
            console.log('Aqui está, são 3 reais o quilo')
            return true
        default:
            console.log('Erro!')
    }
}

frutas('maça')
frutas('kiwi')
frutas('melância')