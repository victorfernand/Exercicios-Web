/// para retornar uma instancia é só usar o factory === factory ela retorna uma nova instancia (novo objeto)
module.exports = () => {  /// retornar uma funcão arroy
    return {
        valor: 1,
        inc() { /// inc === funcao para inclementar
            this.valor ++ ///++ == contador fica retornando o valor 

        }
    }

}
 /// ex :: para testar vamos criar outro arquivo instanciaCliente.js
