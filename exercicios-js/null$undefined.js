// trabalhando com conceito de null

let valor
console.log(valor)

valor = null // null = null é um caracter sem valor, não aponta pra ninguem
console.log(valor)

const produto = {} // essa parte quer dizer que o pruduto foi definido/ o que nao foi definido foi o preco do produto poq ta sem valor
console.log(produto.preco)
console.log(produto)

//defir o preço do produto agora

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)