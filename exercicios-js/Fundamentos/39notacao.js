console.log(Math.ceil(6.1)) /// serve para operar um arredondamento  // Math =  é um objeto dentro do java

const obj1 = {}
obj1.nome = 'bola'; /// para criar um atributo dentro de um objeto é so colocacar (. e a anotoacao ==ex:obj1.nome)

console.log(obj1.nome)

function obj(nome){

    this.nome = nome// this = é mesma coisa que criar um atributo ,, so que fica visivel para publico.
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')
console.log(obj2.nome)
console.log(obj3.nome)/// percebe que usando o this === ele fica visivel fora do bloco... entao pode-se usar (.nome que grava fora do bloco)
