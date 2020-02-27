////  o this é um apontamento para fora,, ou seja aponta para module exports..
//// ex:: de verdadeiro ou false

console.log(this === global) //// this é extritamente igual ao global ?? = false .. this nao aponta para global
console.log(this === module.exports) /// true = this aponta para exports

/// obs : this dentro de uma funcao ele nao aponta para exports.. só fora da funcao
///ex:
function logThis() {
    console.log('dentro da funcao')
    console.log(this === exports)
}
logThis()  //// percebe que dentro da funcao fica falso