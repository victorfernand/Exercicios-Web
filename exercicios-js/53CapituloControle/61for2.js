const notas = [6, 7, 8, 9, 10]
        for(i in notas){/// para cada elementos da nota ele me devolve o indice I...
console.log(i, notas[i])/// resultado...

        } 

        const pessoa = {

            nome:'ana',
            sobrenome:'silva',
            idade:12,
            peso: 45
        }

        for (atributo in pessoa){ ///n busca dentro do bloco de objeto ...

            console.log('atributo='+atributo, pessoa[atributo])
        }
    console.log(atributo)