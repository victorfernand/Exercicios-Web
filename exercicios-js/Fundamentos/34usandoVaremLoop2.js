const funcs = []// funcs recebe um arrew vazia

for (var i = 0; i <10; i++){ // i<10== é uma condiçaõ, essa linha quer dizer que vai enclementando de 0 a 9 de 1 em 1.

    funcs.push(function(){//push == aqui quer dizer que vai adicionar um novo elemento no arrew//ou seja uma funçao anonima.
    console.log(i)
    })


}
funcs [2]()
funcs [8]()