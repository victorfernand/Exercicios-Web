const sequence = {
    _id: 1,
    get id() {return this._id++} /// aqui vou ter uma funcao get que vai retornar um id,, ++ = é um retorno que vai sempre retorna um valor
}
const produtos = {} 
//// ex:: a chave do produto é o id
function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id /// if = se  ... ou seja se o id do produto nao estiver setado.
    produtos[produto.id] = produto  /// as chave do pruduto vai ser produto.id recebe o valor de produto
    return produto
}
/// proximo produto que vai criar vai ser pegar o produto por id
function getProduto(id) {
    return produtos[id] || {} /// passando id como parametro
}
/// proxima funcao vai ser para retornar todos os produtos
function getProdutos(){
    return Object.values(produtos ) ///objct.values == retorna somente os valores do produto
}
///pra finalizar :: esse programa esta visivel somente dentro do modulo do node.;;
/// para que torna visivel para fora do node tera que usar o exports.
module.exports = {salvarProduto, getProduto, getProdutos} /// essas tres funcoes esta visivel para fora do arquivo