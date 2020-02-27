/// vamos criar um objeto 
/// depois que o bloco de objeto foi criado vamos tirar os seguintes atributos usando destructuring

const pessoa = {

    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'rua abc',
        numero: 1000
    }
}
//// {nome, idade  } === isso é destructuring 
const { nome, idade }= pessoa/// Destructuring ==  quer tirar o nome e idade da pessoa
console.log(nome,idade)// vai aparecer Ana 5 .....

const {endereco:{logradouro, numero }} = pessoa /// mesma coisa se for buscar o endereco.
console.log(logradouro, numero)