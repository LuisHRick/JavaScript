// Só a ultilidade do ".", como em console.log

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj2.exec())
console.log(obj3.exec())
