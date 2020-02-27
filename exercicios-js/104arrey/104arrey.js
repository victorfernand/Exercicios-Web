////arrey ele é um objeto.  arrey ele é organizado atraves dos couchetes e dos indices do numero 0 ate o final que vc queira
console.log(typeof Array, typeof new Array, typeof[]) /// resultado :: function , object. object

///ex: eessa forma nao é recomendada para criar um arrey ,,, forma melhor é literal [].
 let aprovados = new Array('Bia', 'carlos','ana') /// vai ser criado um arrey com seguintes nomes
 console.log(aprovados) /// resultado os nomes dentro do arrey.

 /// reatribuir para aprovados usando a anotacao literal
 aprovados = ['bia','carlos','ana']
 console.log(aprovados[0]) //// [0],, quer dizer que quer acessar o primeiro elemento do arrey no caso (bia)
 console.log(aprovados[1]) //// agora carlos
 console.log(aprovados[2]) /// ana
///adicionando 1 elemento no arrey
 aprovados[3] = 'paulo'
 aprovados.push('abia') /// assim adiciona tambem
 console.log(aprovados.length)  /// mostra o total de elemento no arrey (5)

 console.log(aprovados)
 delete aprovados[1]/// para deletar so colocar o indice na frente
 console.log(aprovados[1]) /// percebe que esta undefined pois exclui em cima o elemento.

 ////observacao    APLICE ==serve para adicionar ou remover elemento dentro do arrey
 