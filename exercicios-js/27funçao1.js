// funcao sem retorno  === funçao mais uma vez são um par de chaves ou seja blocos de codigos 

function imprimirSoma(a,b){// percebe que nao precisou criar a funcao com (var, let e const), a funcao mesmo ja chamou a variavel a e b
    console.log(a + b)
    


}

imprimirSoma(2, 3)
imprimirSoma(2) // assim tambem pode so  que vai dar como NaN = NOT A NAMBER
imprimirSoma(1,2,3,4,5,6,7)// assim tambem da certo,,, mais so vai somar 1 e 2 poq refere o a e b.

// agora funcao com retorno::::
function soma(a, b =0) {  /// soma recebe a e b == e retorna o parametro ,,, depois so colocar no console 
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))/// como o (b)=0 a soma fica se passando por 2