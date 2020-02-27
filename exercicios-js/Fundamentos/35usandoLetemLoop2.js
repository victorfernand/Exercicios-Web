
///mesma função da aula anterior (34) so que usando o let ,, poq respeita a funçaõ.

const funcs = []// funcs recebe um arrew vazia

for (let i = 0; i <10; i++){ // i<10== é uma condiçaõ, essa linha quer dizer que vai enclementando de 0 a 9 de 1 em 1.

    funcs.push(function(){//push == aqui quer dizer que vai adicionar um novo elemento no arrew//ou seja uma funçao anonima.
    console.log(i)
    })


}
funcs [2]()// ou seja imprimiu o valor respeitado 2 e 8;; na aula 34 foi imprimido o valor do bloco 10 poq so respeita dentro do bloco.
funcs [8]()