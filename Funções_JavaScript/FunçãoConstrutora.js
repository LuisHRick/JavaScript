/* As funções construtoras em JavaScript são como as classes do Java,
diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções
contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir
de molde para a criação de objetos.*/

function Carro(VelMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= VelMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = VelMaxima
        }
    }

    // metodo publico
    this.getVelAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual())