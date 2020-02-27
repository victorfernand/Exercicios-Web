const valores = [7.7, 8.9, 6.3, 9.2]// foi declarado um arrey em forma de couchetes, arrey literal, COM 4 POSIÇOES DE NUMEROS.
console.log(valores[0], valores[3])// o arrey começa sempre do indice (0), até as demais posiçoes.
console.log(valores[4])// vai dar indefinido poq nao tem posiçaõ 4, vai ate a posicao 3

valores[4] = 10
console.log(valores)// Como não tem a posiçaõ 4 la em cima foi declarado aqui em baixo com valor 10
console.log(valores.length)// lenth = mostra quantos elementos tem no arrey (ou seja 5 elementos)

valores.push({id: 3}, false, null, 'teste' )// push=serve para adicionar novos elementos num arrey( false=booleano, null=nulo, string=teste)
//({id: 3})= significa objeto
console.log(valores)

console.log(valores.pop())// PoP= ELE TIRA O ultimo caracter do arrey (ou seja o 'teste') e retornar teste na tela
delete valores [0]
console.log(valores)// delete= funçaõ de tirar do arrey 

console.log(typeof valores)// mostra que o arrey é do tipo objetivo