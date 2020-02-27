 const pessoa = {
     nome: 'rebeca',
     idade: 2,
     peso: 13 
 }
 console.log(Object.keys(pessoa)) ///keys == pega a chaves de um objetoc(nome idade e etc..)
  console.log(Object.values(pessoa)) //// aqui so pega os valores das chaves ( rebeca 2 e 13)
  console.log(Object.entries(pessoa)) /// vai me dar todos os valores dentro de arrews..

  ////exxx: 
  Object.entries(pessoa).forEach( a => {
      console.log( a[0], a[1])
  });

  /// ex:
  Object.defineProperty(pessoa, 'dataNascimento',{ /// metodo construtor (propriedade)
    enumerable: true, /// percebe que esse prototy é enumerado ,,, se colocar falso no lugar de true passa a nao conter na lista de chaves
    writable: false,
    value: '01/01/1990'
  })
  pessoa.dataNascimento = '01/02/2018'
  console.log(pessoa.dataNascimento)
  console.log(Object.keys(pessoa)) //// mostra a data na linha de chavaes,,, a outra data acima esta congelada.
////ex::
 ////object.assing
 const dest = {a: 1 }
 const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1,o2)