function diaUtil(dia) {
    if (dia < 31) {
        if (dia > 7) {
            dia = dia % 7
        }
        switch (dia) {
            case 1:
                return 'Fim de semana'
            case 2: case 3: case 4: case 5: case 6:
                return 'Dia Útil'
            case 7:
                return 'Fim de semana'
        }
    } else {
        return 'inválido'
    }
}

console.log(diaUtil(1))