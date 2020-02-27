/// armazenando uma funcao em uma variavel

const imprimirSoma = function (a,b){ // esta criando a avriavel imprimirsoma e depois esta recebendo a funcao a,b,, depois abre a chave da funcao
console.log(a+b)

}    

imprimirSoma(2,3)

// armazenando uma funcao arrow em uma variavel
const soma = (a,b) => { // a unica coisa que muda é => que seria (function)
        return a+b

}
soma(2, 3)

/// retorno implicido
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))// resultado -1