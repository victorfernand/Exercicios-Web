/// desafio aqui ... se perceber esse arquivo esta dentro da pasta 120node, depois 123pastaA, depois chega a pasta atual 123pastaB.
/// DESAFIO ENTAO É SAIR DAS 3 PASTA E ACESSAR ARQUIVO 121MODULO1.. 
const modulo1 = require('../../121modulo1')/// ../ = quer dizer que saiu da pasta,, ou seja (../../modulo1), saiu da pasta B e da pasta A, em seguida ficou na pasta 120node chamando a arquivo modulo1
console.log(modulo1.ola)