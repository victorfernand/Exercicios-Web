let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// mostrar se o valor numerico 1 se é verdadeiro ou falso.
isAtivo = 1 // valor 1 == nao é um valor booleano no caso vamos ter que usar a negação (not).
console.log(!! isAtivo) // !! = negação pode usar 2 vezes

console.log("os verdeiros ....")
console.log(!!3) // esta forçando uma negação verdadeiro ou falso== ou seja numero 3 (verdadeiro)
console.log(!!-1) // todas que vai ficar em baixo desse console será verdadeiro.
console.log(!!' ') // espaço vazio tambem sera verdadeiro
console.log(!!{}) // todos de baixo sera verdadeiro
console.log(!![]) // verdadeiro 

// Situaçoes que resolve para um valor falso

console.log('os falsos ....')
console.log(!!0)// valor 0 retorna para falso
console.log(!!'')// retorna para falso uma string vazia
console.log(!!null)// null = nulo retorna falso
console.log(!!NaN)
console.log(!!undefined)

//expressão lógica
console.log('Pra finalizar....')
console.log(!!(''  || null || 0 || (' '))) // || = significa ( ou) no caso deu verdadeira pq (' ') = poq tem uma vdd 

let nome = ''// variavel let recebe o nome de uma string vazia.
console.log(nome || 'desconhecido')// como a variavel nome ta vazia// estou imprimindo direto no console usando ou.