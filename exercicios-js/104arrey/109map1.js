//// ex: de map ;; == o map serve para mapiar um arrey dentro de outro arrey so que com dados transformados
const nums = [1,2,3,4,5] /// ou seja vou gerar outro arrey so que com resulta [2,4,6,8,10]

//// o map é um for com proposito  (e) -=== elemento atual
let resultados =  nums.map(function(e){ /// aqui ele esta passando uma (funcao)callback para o map. essa funcao pode receber 3 parametros(valor,index ou arrey)
        return e*2 //// com essa funcao o arrey la em cima passa ser o dobro [2,4,6,8,10]

})   /// obs: esse programa significa que ele passou um arrey nums com 5 numeros, e dentro do map passou a funcao que vai usar para transformar cada um dos elementos
console.log(resultados) /// [2,4,6,8,10]

/// ex: 2 .,,,, ex =>  == return esplicido ,, retorna o valor ou transforma o elemento em +10
const soma10 = e => e +10 /// soma10 esta recebendo um elemento (e), e esta fazendo um return usando elemento arroy .
const triplo = e => e* 3
//// ex: retornar uma template string em real formatado
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` ///parsefloat= transforma em dolar o valor,,,tofixed, casadecimal....replace transforma o ponto por virgula
 /// ex ... agora chamar o map para gerar um arrey para as 3 funcao acima[soma10,triplo,paradinheiro]
 resultados = nums.map(soma10).map(triplo).map(paraDinheiro)
 console.log(resultados)