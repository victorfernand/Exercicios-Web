///ex: desafio do exemplo passado só que sem o construtor.


function pessoa(nome){
    this.nome = nome //// 
        this.falar = function(){
         
    
    
    console.log('meu nome='+ this.nome)//// entao essa sera a funcao classe que vai comparar com a facture
}
}
//// funcao factury
const p1 = new pessoa('joao') /// this. acessa o objeto que foi estanciado no caso pessoa (joao)
p1.falar()

