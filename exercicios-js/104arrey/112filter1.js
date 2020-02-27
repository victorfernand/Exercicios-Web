const produtos = [
    {nome: 'notebook', preco: 2000, fragil: true},
    {nome: 'ipad', preco: 1200, fragil: true},
    {nome: 'copo vidro', preco: 50, fragil: true},
    {nome: 'copo plastico', preco: 30, fragil: false}
]
/// ex: da funcao filter,,, quase igual o map só que nao gera outro arrey

console.log(produtos.filter(function(p){ /// ta filtrando os produtos e passando para uma funcao,, essa funcao tem como parametro(p),,ou seja sao cada elementos do arrey
    /// passar uma funcao logica que retorna os valores dos prudutos no arrey
    return  /// todos pegas poq foram filtrados
}))
///ex:: criar uma funcao que vai retornar os valores fragil e os preco acima de 500 reias
const produtoCaro = produtos => produtos.preco >= 500 /// maior ou igual a 500 = true
const fragil = produtos => produtos.fragil /// mostrar os produtos fragil //// => = arroy funtion
console.log(produtos.filter(produtoCaro).filter(fragil))