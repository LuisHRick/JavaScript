
// A variável """"var"""" é naturalmente global caso seja feita fora de uma função

{
    {
        {
            {
                var sera = 'será??'
                console.log(sera)
            }
        }
    }
}



console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)