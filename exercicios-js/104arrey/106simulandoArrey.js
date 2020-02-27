/// simulando arrey com um objto.
const quaseArrey = {0: 'rafael', 1: 'ana', 2: 'bia'} /// declarei uma constante chamando um objeto 
console.log(quaseArrey)

//// ex: metoto toString para colocar dentro desse arrey
Object.defineProperty(quaseArrey, 'toString',{ //// esse toString vai ser uma funcao
/// CRIANDO um atributo toString == valor recebe uma funcao que vai retornar um objeto de valores (imprimir objeto this atual.)
    value: function() { return Object.values(this )}, 
    enumerable: false /// nao quer que funcao seja enumerada
})
console.log(quaseArrey[0]) /// [0] acessando apartir do indice 0

///ex: meu arrey de verdade
const meuArrey = ['rafael', 'nico', 'jurso']
console.log(quaseArrey.toString(), meuArrey)