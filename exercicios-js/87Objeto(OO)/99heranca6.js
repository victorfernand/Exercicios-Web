///ex: com operador new

function aula(nome, video){ //// criei uma funcao construtora aula recebendo 2 parametros (nome e video)
        this.nome = nome
        this.video = video

}
const aula1 = new aula('bem vindo', 123) /// 123 === video//// new = busca aula criada (nome, video)
const aula2 = new aula('ate breve', 345) 
console.log(aula1,aula2)

////obs:: o operador new serve de ajuda para apontar o objeto criado,,, ex na funcao acima..

//// ex:: simulando o operador new ((sem o new))
function novo(f, ... params) { //// conjunto de parametros entre parenteses. para criacao de objetos
        const obj = {}
        obj.__proto__ = f.prototype //// ou seja ele ta criando esse objeto para buscar o valor de aula la em cima e trazer dentro de f.prototype
        f.apply(obj, params) /// chamei a funcao f. e depois a funcao apply dentro dela tem uma concatenacao (obj, params)
        return obj /// retornar o resultado da funcao o objeto criado
}
//// testando esse exemplo acima ..
const aula3 = novo(aula, 'bem vindo',123)
const aula4 = novo(aula, 'ate breve',345)
console.log(aula3,aula4)