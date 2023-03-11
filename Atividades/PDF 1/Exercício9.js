function Prova(notas) {
    let c = 1
    let alunos = []
    for (let nota of notas) {
        if (nota >= 38) {
            nota = (nota / 5).toFixed() * 5
            alunos.push(nota)
        } else {
            alunos.push(nota)
        }
    }
    for (let aluno of alunos) {
        if (aluno > 40) {
            console.log(`${c}: ${aluno} = APROVADO`)
        } else {
            console.log(`${c}: ${aluno} = REPROVADO`)
        }
        c++
    }
}

const lista = [40, 88, 94, 12, 38, 70, 40]
Prova(lista)