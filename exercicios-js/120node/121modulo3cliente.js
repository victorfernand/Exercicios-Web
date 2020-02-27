////  vamos criar esse arquivo para acessar os modulos anterior de 1 e 2...
/// importar os exports criado anterior
///require== O funcionamento básico do require é que ele lê o arquivo JavaScript, interpreta o script e em seguida retorna o conteúdo do objeto exports. Segue um exemplo de módulo para melhor compreensão
const modulo1 = require('./121modulo1') //// ./=referencia o modulo exportado dentro do sistema.
const modulo2 = require('./121modulo2')

console.log(modulo1.ola, modulo1.bemvindo, modulo1.atelogo)
console.log(modulo2.bomdia)
console.log(modulo2.boaNoite())
console.log(modulo2)