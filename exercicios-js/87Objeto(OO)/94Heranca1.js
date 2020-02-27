////    o que é herança::
//// A herança no Javascript nada mais é do que uma propriedade complicada e compartilhada entre objetos distintos.
//// prototype::: é mesma coisa que uma propriedade ,,, e ela só fica disponivel dentro de uma funcao.

const ferrari = {  //// objeto
modelo: 'f40',
velocidade: 300    
}

const volvo = {    //// objeto
    modelo: 'v40',
    velocidade: 200
}

console.log(ferrari.__proto__) //// __proto__ == é um prototipo que procura dentro das chaves dos objetos o valor para ser executado
console.log(ferrari.__proto__=== Object.prototype) /// resposta :: true ... ou seja ferrari é um objeto prototype
console.log(volvo.__proto__ === Object.prototype) /// tambem é igual ao objeto. 
