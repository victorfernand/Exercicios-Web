const soma = function ( x, y){    /// criei uma funcao anonima. que recebe dois parametros (x,y)
    return x + y

}

const imprimirResultado = function (a, b, operacao = soma ){

    console.log(operacao(a,b))
}

imprimirResultado(3,4 )
ex:
imprimirResultado(3,4, function (x,y) {
        return x -y

})