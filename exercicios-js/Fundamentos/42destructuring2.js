///// destructuring usando arrew agora...

const [a] = [10]/// simples (o a recebe o numero 10)
console.log(a)

//exemplo
const [n1, ,n3, ,n5, ,n7=0] = [10,9,8,7,6] /// percebe que deixei alguns campos de valor vazio,, na execucao deu os valores indicados.
console.log(n1, n3, n5, n7)

//outro exemplo:
const [, [, nota]]= [[, 8, 8], [9, 6, 8]]// foi criado um elemento vazio,,, depois dentro do arrew foi criado nota.
console.log(nota)/// ou seja o primeiro arrew ele ignorou,, ja no segundo ele pegou so o valor definido do arrew=6