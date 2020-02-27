//// mesma funcao que o filter 1
Array.prototype.filter2 = function(callback){
    const newArray = [] /// criar um novo arrey vou fazer um laco de for para percorrer um arrey
    for (let i = 0; i < this.length; i++){ /// linha de comando para percorrer o arrey do inicio ao fim
        if (callback(this[i], i, this)){ //// se essa linha retornar true, ela vai ser adicionado num novo arrey abaixo
                newArray.push(this[i]) /// indice[i] elemeto atual
        }
    }
    return newArray
}


const produtos = [
    {nome: 'notebook', preco: 2000, fragil: true},
    {nome: 'ipad', preco: 1200, fragil: true},
    {nome: 'copo vidro', preco: 50, fragil: true},
    {nome: 'copo plastico', preco: 30, fragil: false}
]
/// ex: da funcao filter,,, quase igual o map só que nao gera outro arrey

///ex:: criar uma funcao que vai retornar os valores fragil e os preco acima de 500 reias
const produtoCaro = produtos => produtos.preco >= 500 /// maior ou igual a 500 = true
const fragil = produtos => produtos.fragil /// mostrar os produtos fragil //// => = arroy funtion
console.log(produtos.filter2(produtoCaro).filter2(fragil))