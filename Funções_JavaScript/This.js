// this === self


const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)  // this == pessoa
    }
}

pessoa.falar
const falar = pessoa.falar
falar()  // O 'this' não está relacionado a nada, então ele não executa corretamente

const falarDePessoa = pessoa.falar.bind(pessoa)  // bind copia o 'body' da função dada
falarDePessoa()