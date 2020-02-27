// ex: de operadores logicos.

function compras (trabalho1, trabalho2){// criar uma funcao recebendo 2 parametros ,,.. (booleanos v e f)
    const comprarSorvete = trabalho1 || trabalho2// dentro da funcao criou sorvete recebendo dentro de um (ou) || = ou
    const comprarTV50 = trabalho1 && trabalho2 // && = operador do tipo (e )
   // const tv32polegadas = !!(trabalho1 ^ trabalho2) // xor !! (^) == usa para ser o ou excluisivo,,, !!= negacao 

const tv32polegadas = trabalho1 != trabalho2 // pode usar assim o exemplo de cima (!=) == diferente

const manterSaudavel = !comprarSorvete //operador unario
 ///ex: para retornar o valor essas 4 variaveis criadas usa: cria um retorno dentro de um objeto.

 return {comprarSorvete: comprarSorvete, comprarTV50, tv32polegadas, manterSaudavel }

}

console.log(compras(true,true))
console.log(compras(true, false))