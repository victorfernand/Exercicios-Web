//// programa para extrair as notas dos alunos
const escola =[{  /// escola recebe um arrey objeto,, la dentro vai ser criado os alunos que pertencem a escola
    nome:'turma1', //// dentro das turma vai ter os alunos
    alunos: [{
        nome: 'gustagol',
        nota: 8 
    },{ 
        nome: 'ana',
        nota: 9

    }]
},{
    nome: 'turma2',
    alunos: [{
        nome: 'rebeca',
        nota: 7 
    }]
}]
const notaAluno =  aluno => aluno.nota ///  a = aluno => ele esta extraindo de dentro do aluno a nota (a.nota)
const notasTurma = turma => turma.alunos.map(notaAluno) /// vai extrair da turma a nota do aluno

const nota1= escola.map(notasTurma)
console.log(nota1)
//// concat agora juntar as notas
console.log([].concat([8,9],[7]))