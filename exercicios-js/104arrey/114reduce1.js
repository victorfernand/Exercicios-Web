//// reduce é outra forma de percorrer,,, serve para transformar um arrey em um unico elemento,, ou seja pega os dois primeiros
////numeros de um arrey,,, depois é passado para proxima e vai indo com o resultado vai sempre passando pra proxima
const alunos = [
    {nome: 'joao', nota:7, bolsista: false},
    {nome: 'maria', nota: 9, bolsista: true},
    {nome: 'pedro', nota: 10, bolsista: false},
    {nome: 'gabi', nota: 8, bolsista: true}
]
//// ex: aplicando a funcao reduce
////passou como parametro e vai extrair dos alunos somente a nota. (a)=aluno /// depois chama o reduce que recebe uma callback com acumulador e o valor atual
/// ex :: reduce tem um for que vai passar o acumulador
const resultados = alunos.map(a => a.nota).reduce(function(acumulado, atual){
    console.log(acumulado, atual)
    return acumulado+atual /// a soma de todos resultado
})
console.log(resultados) /// resultado final
