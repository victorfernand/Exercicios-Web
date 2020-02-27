/// EX: de CallBack == SIGNIFICA CHAMAR DE VOLTA,,, ou seja passa uma funcao para outra ai o callback chama de volta

const frabricantes =['mercedes', 'audi','bmw'] /// arrew 

function imprimir(nome, indice){

    console.log(indice+1, nome)
}

frabricantes.forEach(imprimir) /// forEach é uma funcao de fabricantes do arrew
/// ex:
frabricantes.forEach(function(a){

console.log(a) /// vai imprir o mesmo valor.
})
