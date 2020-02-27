///  ex2:: de cllback //// obj desse exemplo é pegar todas as notas e jogar num arrew e mostrar as menos que o valor 7

const notas = [4,5,6,7,8,9,10]

///sem callback

//observação toda vez que for usar um elemento no arrew tem que usar o .push 

const notasBaixas1 = [] /// cria um arrew
for (let i in notas){  /// fazer um for em cima das notas
        if(notas[i] < 7){  /// if se ela for menor que 7
            notasBaixas1.push(notas[i]) ///.push ==== serve para adicionar um elemento no arrew
        }
}
console.log(notasBaixas1) /// resultado 4,5,6...
////
//////com callBack
const notasBaixas2 = notas.filter(function(nota){ /// é uma funcao que vai filtrar em um arrey um determinado critério. que vai ser uma funcao cllback que vai retornar true ou false
        return nota <7 /// retorna se é verdadeiro ou falso
})
console.log(notasBaixas2)

///ex3:: usando o arrow
 const notasBaixas3 = notas.filter(nota => nota <7)
 console.log(notasBaixas3)