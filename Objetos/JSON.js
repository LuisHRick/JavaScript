const obj = { a: 1, b: 2, c: 3 }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Delimitar string com ""

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e" : []}'))
