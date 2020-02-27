//// reduce é outra forma de percorrer,,, serve para transformar um arrey em um unico elemento,, ou seja pega os dois primeiros
////numeros de um arrey,,, depois é passado para proxima e vai indo com o resultado vai sempre passando pra proxima
const alunos = [
    {nome: 'joao', nota:7, bolsista: false},
    {nome: 'maria', nota: 9, bolsista: true},
    {nome: 'pedro', nota: 10, bolsista: false},
    {nome: 'gabi', nota: 8, bolsista: true}
]
//// deafio1== mostrar se todos alunos são bolsistas?
//// desafio 2 === mostrar se algum aluno é bolsista?
///desafio1 =
const todosBolsistas = (resultados, bolsista) => resultados && bolsista //// recebe como resultado bolsista,, e passa para um arroy resultado e (&&) bolsista
console.log(alunos.map(b => b.bolsista).reduce(todosBolsistas))
////desafio 2 ::
const algumBolsistas = (resultados, bolsista) => resultados || bolsista //// recebe como resultado bolsista,, e passa para um arroy resultado ou (||) bolsista
console.log(alunos.map(b => b.bolsista).reduce(algumBolsistas))
