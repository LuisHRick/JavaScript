function meuObjeto() { }
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ == obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function () { console.log('Bom dia!') }


obj1.falar()
console.log(obj2.nome)

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
console.log(obj3)

// Resumo

console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)