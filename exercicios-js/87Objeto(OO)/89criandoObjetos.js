//// preimeiro ex:: usando anotacao literal:

 const obj1 = {}
 console.log(obj1) //// essa é uma forma literal

 //// ex: apartir do object em js
 console.log(typeof Object, typeof new Object) /// foi criado um objeto apartir de uma funcao construtora.
 
 //// ex: de criacao de objto
 const obj2 = new Object
 console.log(obj2)

 /// ex3:  criar as proprias funcoes construtoras.
 function produto (nome, preco, desc){
        this.nome = nome /// torna a variavel publica, pode ser usada fora da funcao tambem.
        this.getPrecoComDesconto = () => { /// essa funcao vai ter um método publico,,, ouseja pode buscar fora dessa chave tambem
                return preco * (1-desc) /// calculo do programa vem apartir daqui..
        }
 }

   const p1 = new produto('caneta', 7.99, 0.15)
   const p2 = new produto ('notbook', 3456, 0.15)
   console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto( ))

   //// ex4:: funcao factory ,,, funcao de fabricação de objeto
   function criarFuncionario(nome, salarioBase, faltas){
       return {
           nome,
           salarioBase,
           faltas,
           getsalario(){ /// criar uma funcao dentro de outra
            return (salarioBase /30)*(30 -faltas)

           }
       }
   }                    ///  joao,recebe,faltas
const f1 = criarFuncionario('joao=', 5000, 4) /// criando objetos apartir da funcao
const f2 = criarFuncionario('bixo=', 4000, 6) /// criando segundo funcionario
console.log(f1.getsalario(), f2.getsalario())

/// object crate
const filha = Object.create(null)//// crate ===objeto construtor tambem recebendo valor nulo
filha.nome ='ana'
console.log(filha)

//// funcao famosa que rotorna um objto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')/// cria uma variavel JSON vai ser(objeto),, que vai receber o valor de JSON.parse,, depois passa um objeto string
console.log(fromJSON.info) /// ELE transformor a string info: para um objeto,, podendo chamar .info no console

