///object.preventExtensions = ele vai previnir que o objeto seja estendido, ou seja para nao aumentar a quantidade de atributos

const produto = Object.preventExtensions({ /// vai ser criado um objeto produto que nao pode ser extendido
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) /// vai ser false /// poq nao é um objeto estensivel

produto.nome = 'borracha' /// modificando o nome do produto ou seja era 'qualquer' passou a ser 'borracha'
produto.descricao = 'borracha escola' /// essa linha nao vai vale nada no objeto poq nao tem na descricao
delete produto.tag /// vai deletar a tag (promocao)
console.log(produto)
////obs:: esse programa nao pode adicionar mais pode deletar

/// outro ex:  Objetc.seal ( selar) == ela faz com que nao pode adicionar e nem excluir atributos,, mais consegue modificar os valor dos objetos
const pessoa = {nome: 'juliana', idade: '35'}
Object.seal(pessoa) /// aplicar para selar o objeto pessoa
console.log('selado:', Object.isSealed(pessoa))/// imprimir na tela ===( selado: true) esta selado

 ////apartir daqui vamos fazer as alteracoes dos valores (so da idade vai da certo)
 pessoa.sobrenome = 'silva' /// nao pode mudar o nome
delete pessoa.nome /// nao pode deletar
pessoa.idade = 29 /// percebe que alterou o valor da idade de 35 para 29
console.log(pessoa)