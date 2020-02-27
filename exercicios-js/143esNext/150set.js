/// set == não aceita repeticão/ não é indexada
const times = new Set() //New== trata de reservar memória o suficiente para o objeto e criar automaticamente uma referência a ele.
//O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos
times.add('vasco')
times.add('timao')
times.add('bambi').add('palmeiras').add('flamengo') /// pode add assim tambem de forma encadeada

console.log(times)
console.log(times.size) //size = ve quantidade de elemento
console.log(times.has('vasco')) // has == has = é uma funcao que ve se o elemento esta ou nao contido dentro do MAP