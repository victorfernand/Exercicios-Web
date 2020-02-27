const contadorA = require('./127instanciaUnica') /// require == ele busca e executa o programa de outro arquivo.
const contadorB = require('./127instanciaUnica')

const contadorC = require('./127instanciaNova')() ////require entao ele retorna ... ou seja uma funcao,, se colocar no final da linha do programa ('./127instanciaNova')()== ele retorna um objeto
const contadorD = require('./127instanciaNova')()

/// testar agora
contadorA.inc() ///inclementar
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
