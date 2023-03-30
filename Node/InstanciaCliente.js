const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB) // Mesmo local que o ContadorA por ser uma instância Única

contadorC.inc()
contadorC.inc()
console.log(contadorD) // Não foi alterado pois se trada de uma nova instância