/// ex comparando classe vs factury funcao

class pessoa{
    constructor(nome){ //// construtor da classe recebe o nome 
        this.nome = nome
         
    }
falar(){
    console.log('meu nome='+ this.nome)//// entao essa sera a funcao classe que vai comparar com a facture
}
}
//// funcao factury
const p1 = new pessoa('joao') /// this. acessa o objeto que foi estanciado no caso pessoa (joao)
p1.falar()
//// outro ex:

const criarPessoa = nome => {  ///criar uma funcao arroy
    return { falar: () => console.log('meu nome é',nome)} /// dentro desse objeto vamos
}
const p2 = criarPessoa('joao') 
p2.falar()