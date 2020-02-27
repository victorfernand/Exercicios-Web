/// objeto entao é uma colecao dinamica de par de chaves/valor
const produto = new Object /// é uma forma de criar um objeto, apartir do operador new,,(Objetc é uma funcao , quando ela junta com new vira uma funcao construtora)
produto.nome ='Cadeira'
produto ['marca do produto']= 'generica'
produto.preco = 220

console.log(produto) /// ex ::: como é uma funcao dinamica esse programa... pode deletar
delete produto.nome
delete produto.preco
console.log(produto)

//// outro ex::
const carro = {
    modelo: 'a4',
    ano:2010,
    cor: 'preta',
    proprietario: {
        nome: 'bixo',
        idade: 67,
        sexo: "gay",
        endereco: { 
          rua:  "servidao pedro manoel duarte",
            numero: 617

        }
    }
}

console.log(carro)