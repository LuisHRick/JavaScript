const schedule = require('node-schedule')

// Para funcionar o código, deve-se alterar os hotários da tarefa 1 e da
// regra.hour para o horário atual

// Pesquisar sobre scheduleJob, é mais facil
// No segundo número, coloca o horário atual para ver funcionando
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancela após X milisegundos
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]

// Alterar também
regra.hour = 18
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})


