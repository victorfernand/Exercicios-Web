function meuObjeto () {}
console.log(meuObjeto.prototype) /// atributo existe == é um atributo objeto

// ex// criar duas instancias dessa função criada acima

const obj1 = new meuObjeto /// new == pega o meu objeto criada no começco
const obj2 = new meuObjeto //
console.log(obj1.__proto__ === obj2.__proto__) /// sim é === extritamente igual os dois objetos pois estao nao mesma funcao construtora
console.log(meuObjeto.prototype === obj1.__proto__) /// === tambem é extritamente igual

meuObjeto.prototype.nome = 'besta' /// agora vou atribuir um valor ,, ou seja colocar outro valor na funcao
meuObjeto.prototype.falar = function(){  /// atribuir mais um valor so que em funcao
            console.log('bom dia meu nome é', this.nome)
}
obj1.falar() /// executando a funcao acima.
obj2.nome = 'rafael' /// percebe que posso mudar o nome na atribuicao
obj2.falar()