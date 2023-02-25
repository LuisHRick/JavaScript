let num1 = 1
let num2 = 2

/*
 num++ só executa depois, como em comparação, só executa depois da comparação,
 ++num executa antes, como na comparação, ela executa antes de ser comparada
*/

num1++       // num + = 1
console.log(num1)
--num1       // num - = 1 
console.log(num1)

console.log(++num1 === num2--)   // num1 + 1 = 2 === num2 = 2
console.log(num1 === num2)       // num1 = 2 !== num2 - 1 = 1