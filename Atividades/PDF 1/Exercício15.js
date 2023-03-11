function modelos(modelo) {
    switch (modelo) {
        case 'hatch':
            return 'compra feita com sucesso'
        case 'sedan': case 'motocicletas': case 'caminhonetes':
            return 'Tem certeza que prefere esse modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}


console.log(modelos('hatch'))
console.log(modelos('sedan'))
console.log(modelos('hb20'))