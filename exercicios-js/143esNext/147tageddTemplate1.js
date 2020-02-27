//// tagedd == nada mais é que voce processar template string em cima de uma funcao

///ex:
function tag(partes, ...valores){  /// funcao recebe como parametro partes,, tambem vai receber uma funcao rest que dentro dessa funcao vai ser um conjunto de arrey
    console.log(partes)
    console.log(valores)
    return 'outra string'
}
/// para testar
const aluno = 'gui'
const situacao ='aprovado'
console.log(tag `${aluno} está ${situacao}.`)