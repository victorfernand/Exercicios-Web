let comparaComThis = function(param){ /// criei uma funcao comparaComThis  em seguida passei o parametro(param)
    console.log(this === param) /// param é (===) estritamente igual o this ? vai retornar true ou false

}

comparaComThis(global) // opontar para o objeto global ==== resposta vai ser true= verdade

const obj ={}
comparaComThis=comparaComThis.bind(obj) /// associar os dois..
comparaComThis(global) /// ou seja não passa a ser mais global ... agora é obj...
comparaComThis(obj)///  true ,,, por que o bind mudou o apontamento nao é mais global