{
    var a = 2
    let b = 3
    console.log(b) // let ele tem que ficar dentro do bloco para funcinar
}
console.log(a) // var tem que fica fora

///temolate string
const produto = 'ipad'
console.log(`${produto}, é caro`)

//destructuring tira de dentro de uma estrutura algo
const [l, e, ...tras] = 'coder' /// pego um arrey ,,ela vira uma string
console.log(l, e, tras)