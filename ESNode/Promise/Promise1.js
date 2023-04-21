let a = 1
console.log(a)

let p = new Promise(function (callback) {
    callback(['Ana', 'Bia', 'Carlos'])
})

p.then(function (calledback) {
    console.log(calledback[0]) // -> 3
})
    .then(calledback => console.log(calledback[1]))
    .then(calledback => console.log(calledback[2]))
    // .then()
    // .then()