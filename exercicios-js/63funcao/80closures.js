/// ex:  clousures é o escopo criado quando uma funcao é declarada
///esse escopo permite a funcao acessaR E   manipular variaveis externas á funcao.

/// contexto lexico em acao

const x = 'global'

 function fora (){
const x = "local" /// criar dentro da funcao x recebendo local
function dentro (){
    return x
}
return dentro

 }
 const minhaFuncao = fora()
 console.log(minhaFuncao())