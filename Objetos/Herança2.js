// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z'
const avo = { attr1: 'Avo' }
const pai = { __proto__: avo, attr2: 'Pai' }
const filho = { __proto__: pai, attr3: 'Filho' }
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,  // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`  // Super -> herança
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log()

ferrari.acelerarMais(300)
console.log(ferrari.status())
console.log()

console.log(volvo)
console.log()

volvo.acelerarMais(100)
console.log(volvo.status())