function boaNoticia (nota){
    if (nota >= 7)
    console.log('Aprovado' + nota) //  exibe se esta aprovado ou reprovado,, + nota == uma concatenação
    console.log('reprovado: ' + nota)
}

//boaNoticia(8.1)
boaNoticia(6.1)

//ex:: IF == VERDADEIRO OU FALSO

function seForVerdade(valor){
    if (valor){/// se o valor for verdadeiro
        console.log('É vdd ...'+ valor)
    }

}
seForVerdade()// FALSO
seForVerdade(null)// FALSO
seForVerdade(NaN)// FALSO
seForVerdade(-1)// JA COMEÇA SER VDD