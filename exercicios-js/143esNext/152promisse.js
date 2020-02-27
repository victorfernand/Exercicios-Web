
//Um objeto promise guarda a promessa de que a função que gerou ele irá em algum momento no futuro terminar e te retornar um resposta.
// ex: de uma promisse, usando setTimeOut == operacao que demora um determinado tempo, ai quando a resposta chega ai a promisse é resolvida

function falarDepois(segundos, frase){ // criei uma funcao passando dois parametros,, segundos que vai demora
    return new Promise((resolve, reject) => { /// vai retornar uma callbeck,, resolve vai ser chamado quando uma promessa for atendida
        setTimeout(()=> {
            resolve(frase)
        }, segundos *1000 )
    })
}
//testando
falarDepois(3, 'que legal')  // (3)= segundos
    .then(frase => frase.concat('?!?')) //O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
    .then(outraFrase => console.log(outraFrase))
///resumo do prgrama= criei uma funcao que recebe dois parametros,, e depois retornar uma promessa;;
///dentro da promessa coloquei um setTimeOut = para simular um tempo,, ai ele retorna uma promessa
///quando essa promessa for atendida, ele chama a funcao resolve(frase).