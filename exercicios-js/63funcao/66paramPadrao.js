/// estrategia 1 para gerar valor padrao
function soma1(a,b,c){
        a=a || 1  /// a recebe a ou valor 1
        b=b || 1 
        c=c || 1
        return a+b+c

}

console.log(soma1(), soma1(3), soma1(1,2,3))

///ex estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c,){
    a= a != undefined ? a : 1 /// se a for diferente de undefined (?=operador tenario) se caso a for difente de undefined vai assumir oo valor 1
    b= 1 in arguments ? b : 1 /// ta falando que dentro de arguments existe o indice 1// se existir pega o valor de b  se nao pega o valor 1 padrao
    c= isNaN(c) ? 1: c
    return a+b+c
}
console.log(soma2(), soma2(3))

//// valor padrao do proprio es2015
function soma3(a=1, b=1, c= 1){
return a+b+c

}

console.log(soma3(), soma3(3))