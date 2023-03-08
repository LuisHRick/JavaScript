// Com o bind(), um objeto pode tomar emprestado um método de outro objeto.

/*
O exemplo abaixo cria 2 objetos (pessoa e membro).

O objeto membro toma emprestado o método fullname do objeto pessoa:
*/


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

console.log(person.fullName())       // (person this) como parâmetro

let fullName = person.fullName.bind(member);
console.log(fullName())             //  (member this) como parâmetro


// bind() também é usado para preservar o 'this' da função
// {exemplo pendente}