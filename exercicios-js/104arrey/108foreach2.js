//// foreach === usa para percorrer o arrey ate achar os elementos
const aprovados = ['agata', 'biel','ana', ' biaa']

aprovados.forEach(function(nome, indice){ /// forEach == percorrer o arrey dos aprovados,, function == é uma callback que retorna o indice nome
    /// ex: dentro dessa funcao calback ela tem um for que vai chamando o valor 
    console.log(indice+1 , nome)
})