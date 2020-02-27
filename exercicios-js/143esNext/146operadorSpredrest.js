//// rest =  significa juntar os conjunto.. (...esses 3 pontos)
/// spread =  é para espalhar

///usar spread com um objeto
const funcionarios = {nome: 'maria', salario:1234}
const clone = {ativo: true, ...funcionarios} /// ...funcionarios= ele esta usando spred pegando todos atributos de funcionarios
 ///obs: ele esta espalhando tudo que tem em funcionario no clone,,, no final ele vai ter os elementos do funcionario e do clone
 console.log(clone)