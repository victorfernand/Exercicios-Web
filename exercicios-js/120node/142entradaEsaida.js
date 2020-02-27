/// usar o comando proxes:: serve para ler dados de entrada e saida.. é igual o console.. pode fazer tasmbem apartir do proces
const anonimo = process.argv.indexOf('-a') !== -1 /// ta passando uma flag que a tem que ser diferente de -1
//console.log(anonimo)

// se: for anonimo
if(anonimo){
     process.stdout.write('fala anonimo!\n') ///studout == saida padrao// \n = quebra de linha
     process.exit() /// finalizar o processo
    /// se caso o anonimo nao estja presente,, dar um else para o usuario digitar o nome
}
