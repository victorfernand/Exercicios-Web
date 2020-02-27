//// vai ser criada uma cadeia de protótipos (prototype chen)
/// vai ser criada entao 3 objetos  avo, depois pai e o filho ,, o pai tem como prototipo o avo,, e o filho prototipo de pai
const avo = {atributo1: 'a'}
const pai = {__proto__: avo, atributo2: 'b'}  /// para ver que o pai tem o prototipo do avo tem que ser atribuido __proto__
const filho = {__proto__: pai, atributo3: 'c'}
console.log(filho.atributo1, filho.atributo2,filho.atributo3)

/// observaçaõ ,,, percebe que no console declarei os atributos do pai e do avo,, e deu certo porque,, __proto__ revolse pro filho.
 /// outro ex::

const carro = {
    velocidade: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta){ /// função criada recebendo delta
            if(this.velocidade + delta <= this.velocidadeMaxima){ /// if = se a velocidade mais o delta passar da velocidade maxima
                this.velocidade +=delta
            }else{  /// else === caso nao passe da velocidade maxima
                    this.velocidade = this.velocidadeMaxima
            }
    },
    status(){ /// criei outra funcao chamado status,, so pra mostrar no console o valor
            return ('velocidade =',this.velocidade, this.velocidadeMaxima)
    }
    }
     const ferrari = { /// criar outro objeto
                modelo: 'f40',
                velocidadeMaxima: 200, ///shadowing == assombreamento,, ou seja ele vai assombrear o valor carro la em cima     
     }
     const volvo = {
             modelo: 'v40',
             status() { //// assombrear a funcao status, mostrar o valor no console
                return this.modelo, super.status() /// super mostra o valor que estou pegando na classe acima (mãe).

             }
     }
     Object.setPrototypeOf(ferrari, carro)//// setPrototypeOF == é o que fornece a relação entre 2 objetos. (ferrari e o objeto entao ele vai ter como prototipo carro)
     Object.setPrototypeOf(volvo, carro)

     console.log(ferrari)
     console.log(volvo)