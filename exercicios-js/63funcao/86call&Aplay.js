//// get == pegar 

function getPreco(imposto =0, moeda = 'R$'){
        return ('moeda',+moeda, this.preco* (1-this.desc) * (1+imposto))
}   
const produto = {
        nome:'notebook',
        preco: 4589,
        desc: 0.15,
        getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
/// apartir do aplay
const carro = {preco: 4999, desc: 0.20}
console.log(getPreco.call(carro))  /// call == serve pra chamar a funcao
console.log(getPreco.apply(carro)) /// aplay == mesma funcao que o call e this

/// diferença dos dois é só a passagem dos parametros