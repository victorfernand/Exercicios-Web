const nome = "Rebeca"
const concatenacao = "Olá" + nome + "!" // No template strings = pode quebrar linha.
const template = `
    Olá
    ${nome}!` //  imterpletou e substituiu a variavel nome igualando com a (Rebeca).

console.log(concatenacao, template);

// Dentro do template strings pode tambem colocar expressoes
console.log(`1 + 1 = ${1+1}`) // ` = becktic ==  no caso dessa operação ele irá somar o que está DENTRO da expressaão ${1+1}

// criar uma funçaõ erouu
// dentro do template string pode chamar uma funcao
const up = texto => texto.toUpperCase() // up e toUpperCase = pegar as letras e transaforma para maiusculo .. 

console.log(`Ei... ${up('cuidado')}!`) // nesse processo ele vai egar o texto (cuidado ) e jogar na funçaõ acima (up etc ..)

    