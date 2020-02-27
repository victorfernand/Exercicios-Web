//// foreach === usa para percorrer o arrey ate achar os elementos
const aprovados = ['agata', 'biel','ana', ' biaa']

aprovados.forEach(function(nome, indice){ /// forEach == percorrer o arrey dos aprovados,, function == é uma callback que retorna o indice nome
    /// ex: dentro dessa funcao calback ela tem um for que vai chamando o valor 
    console.log(indice+1 , nome)
})
/// ex: igual o de cima só que em menos codigo
aprovados.forEach(nome => console.log(nome)) /// vou passar uma funcao com apenas um parametro nome usando arroy

//ex:
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
    
