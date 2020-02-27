Number.prototype.entre = function (inicio, fim){/// prototype == pode adicionar valor dentro de number

    return this >= inicio && this <= fim // função criada
}

// usando a funcao entre criada acima vamos usar ela agora..

const imprimirResultado = function(nota) {

    if (nota.entre(9, 10))
             console.log('quadro de honra')

    else if(nota.entre(7, 8.99))
            console.log ('aprovado') 

    else if (nota.entre(4, 6.99)) 
        console.log('recuperação')
 
    else if (nota.entre(0, 3.99))
         console.log('reprovado')
    else 
    console.log('nota invalida')

    console.log('fim')  
}

imprimirResultado (9)
imprimirResultado (7)
imprimirResultado (4)
imprimirResultado (0)