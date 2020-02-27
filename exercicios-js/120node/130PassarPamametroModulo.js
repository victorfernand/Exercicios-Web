module.exports = function (...nomes){ /// vou retornar uma funcao... em seguida passar quantos nomes eu quiser (...nomes)
    return nomes.map(nomes => `boa semana ${nomes}`) /// entao esse metodo vai transformar uma lista de nome por uma lista de saudacao
    
}