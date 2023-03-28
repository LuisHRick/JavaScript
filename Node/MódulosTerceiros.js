// Como instalar módulos de terceiros
// Verificar o pacote Nodemon

// npm - node package manager
// i - install
// Sempre instalará na pasta o terminal no qual você está utilizando

// npm i lodash

const lod = require('lodash') // Forma de usar o módulo
setInterval(() => console.log(lod.random(1, 1000)), 2000)