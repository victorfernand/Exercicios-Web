//// contexto lexico

const valor = "global"  ///declarar variavel

function minhaFuncao(){  ///declarar funcao
console.log(valor)

}

function exec(){  /// criar outra funcao
        const valor = 'local' /// dentro da funcao criar variavel valor recebendo local
        minhaFuncao()
}
exec()