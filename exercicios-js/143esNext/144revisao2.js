/// arrow function
const soma = (a,b) => a + b
console.log(soma(2,3))

///outro ex de arrow.
/// arrow function
const soma1 = (a,b) => {
        return a + b
}
console.log(soma1(2,3))

///parametro defaul
function log(texto = 'node'){ /// defaul= é entao ,, voce define um parametro padrao e ja coloca o valor dentro dele
    console.log(texto)
}
log()/// executar

///operador rest  ;; seginifica colocar varios parametros na chamada da funcao e seraoo agrupados num arrey
function total(...numeros){ /// funcao total recebe um conjunto de numeros
    let total = 0
    numeros.forEach(n => total += n) /// acrescentando ou atribuindo uma atribuicao aditiva na variavel total
    return total
}
console.log(total(1,2,3,4,5)) // total deu 15
