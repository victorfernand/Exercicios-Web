const alunos = [  /// criar uma constante alunos que vai ser um arrey... nele vai ter os objetos
        {nome:'joao', nota: 7},
        {nome:'maria', nota: 9}

]
////objetivo calcular as medias dos alunos
///ex: imperativel
let total1 = 0
for (let i =0; i < alunos.length; i++){
    total1 =+ alunos[i].nota
}
console.log(total1 / alunos.length)
////declarativa 
const getNota = aluno => aluno.nota //// pega o aluno e retorna apenas anota do aluno
const soma = (total, atual) => total+atual
///usando map e reduce
const total2 = alunos.map(get.nota).reduce(soma)
console.log(total2 / alunos.length)