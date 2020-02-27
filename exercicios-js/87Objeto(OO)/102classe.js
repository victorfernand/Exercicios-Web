//// vamos criar 2 classes só pra brincar um pouco

class lancamento {
    constructor(nome = 'generico', valor = 0){ /// construtor tem o objetivo de instaciar a classe criada (lamcamento)
            this.nome=nome
            this.valor= valor /// esta adicionando um outro objeto criado
    } 
  //// essa é a classe lancamento com apenas um construtor
}
///// ex de outra classe

class cicloFinanceiro{
    constructor(mes, ano ){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //// vai ser criado 2 funcoes aqui dentro de lancamentos
    }
    addlancamentos(... lancamentos){ ///... que vai receber 1 ou mais lancamentos
     lancamentos.forEach(l => this.lancamentos.push(l)) /// forEach = serve para criar um arrew e concatenar todos elementos que ta la dentro ///push = é o objt que vai dar cada um dos lancamentos no console

    }
    sumario(){
         let valorConsolidado = 0
         this.lancamentos.forEach(l =>{ /// cada valor do lancamento vai somado
            valorConsolidado += l.valor /// soamdo

     
       })
       return valorConsolidado
    }
}
/// testando esses exemplos::
const salario = new lancamento('salario', 2000)
const contadeLuz = new lancamento ('luz', -220)
/// criar ciclo financeiro
const conta = new cicloFinanceiro(6, 2018)
conta.addlancamentos(salario, contadeLuz) // nesse lancamento vou chamar o salario e aconta de luz
console.log(conta.sumario()) 