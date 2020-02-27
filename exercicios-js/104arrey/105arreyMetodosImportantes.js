const pilotos = ['vettel', 'alonso','massa']
pilotos.pop() // pop ==  tirao  ultimo elemento da corria. (massa)
console.log(pilotos) /// vetel e alonso

pilotos.push('de bala') /// push ==  ele adiciona um elemento dentro do arrey
console.log(pilotos)

//ex: 
pilotos.shift() //// shift ==  é quase igual o pop ,, pop tira da ultima posicao,, ja o shift tira da primeira.
console.log(pilotos)

//ex:
pilotos.unshift('trinquiss') /// unshift = = coloco o nome na primeira posicao
console.log(pilotos)

///ex: splice ::: pode tando adiconar ou remover elementos dentro de um arrey
///adicionar primeiro
pilotos.splice(2 , 0, 'botas', 'massa') /// ou seja vai adicionar 2 indice(botas e massa) ,,, no (0) nao vai remover ninguem
console.log(pilotos)

///ex: remover elementos
pilotos.splice(3, 1 ) /// no indice 3 vai remover um elemento,, vai sair o (massa)
console.log(pilotos)

///ex: slice == é um metodo que gera um novo arrey
const algunsPilotos=pilotos.slice(2) ///novo arrey apartir do indice 2
console.log(algunsPilotos)