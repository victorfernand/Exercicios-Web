/// for of = é um tipo de laço for
/// ex: o FOR IN = ele opera em cima de indice
/// ja o FOR OF = ele opera em cima de valores
 
for (let letra of 'coder'){ /// vai ser percorrido a palavra coder em cima de um FOR usando a palvra OF
    console.log(letra)
}
const assuntosEcma =['map', 'set', 'promise']

for(let i in assuntosEcma){ /// in = percorre o indice ou seja (o, 1,2) e assim vai
    console.log(i)
}
for(let assunto of assuntosEcma){
    console.log(assunto)
}
///obs:Como você pode notar, o reduce() trabalha que nem o map(), ele percorre o array invocando uma função de retorno em cada elemento.