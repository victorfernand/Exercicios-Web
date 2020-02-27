console.log(module.exports === this) //// this == é uma referencia dentro do module exports ,, quando imprime so essa linha aparece que é true
console.log(module.exports === exports) /// outra referencia que aponta para exports.

this.a = 1 //// essas tres exporta algo pra fora
exports.b = 2 /// tambem exporta
module.exports.c = 3 /// tambem exporta

console.log(module.exports)