/// vai construir uma funcao que vai fazer um parser em todas as variaveis interpolada
function real(partes, ...valores){ ///real recebe partes e valores..
    const resultado = [] ///  em cima da partes vou gerar um resultado dentro de um arrey,,, depois faço um joy para juntar as frases
    valores.forEach((valor, indice)=>{ //O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido.
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}` ///em cima desses valores vou aplicar isNaN== valor da moeda.. toFixided==casas decimais
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') //join = ele vai pegar todos os elementos do arrey resultado e vai gerar a string no final
}  
///testa  
const preco = 29
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)