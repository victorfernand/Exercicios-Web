Array.prototype.reduce2 = function(callback){ /// poderia começa com qualquer valor.. vamos de callback para percorrer os dopis primeiros elementos
    let acumulador = this[0] /// recebe indice [0].. ou seja ele esta usando [0] como callback para o valor inicial
   //// this.length == o tamanho do arrey
    for (let i = 1; i< this.length; i++){ /// linha para percorrer o arrey apartir do indice 1 e não do 0
            acumulador = callback(acumulador, this[i], i, this) /// linha passando o resultado da callback. ou seja primeiro o acumulador, depois elemento(this[i]), depois o indice, e o arrey.


    }
    return acumulador
    }
//// para executar esse programa
const soma = (total, valor)=> total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma)) 
