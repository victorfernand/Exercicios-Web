function carro (velocidade=200, delta = 5){
        //atributo privado== ouseja so pertence ao escopo dessa funcao
        let velocidadeAtual = 0 // so pertence ao atributo carro

        ///metodo publico
        this.acelerar = function () {
            if(velocidadeAtual+ delta <= velocidade){
            velocidadeAtual += delta
        } else{ /// caso for maior que velocidade chama o else
            velocidadeAtual = velocidade

        }
    }
//// outro metoto publico dentro dessa estrutura mesmo..
        this.getVelocidadeAtual = function (){
            return velocidadeAtual

        }
        const uno = new carro
        uno.acelerar()
        console.log(uno.getVelocidadeAtual())
///posso instanciar apartir dessa funcao uma nova variavel
            const ferrari = new carro(350,20)
            ferrari.acelerar()
            console.log(ferrari.getVelocidadeAtual())
    }


