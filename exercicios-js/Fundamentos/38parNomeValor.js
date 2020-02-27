// par nome/valor
const saudacao = 'opa'// contexto lexico 1 = variavel definida do codigo 

function exec(){// defini uma funcao exec

    const saudacao = 'falaa'// dentro dessa funcao criei uma variavel saudacao recebendo fala..
    return saudacao


}

//objetos sao grupos aninhados de par de chaves de nomes/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco:{
        lagradouro: 'rua legal',
        numero: 123
    }
    }
    console.log(saudacao)
console.log(exec())
console.log(cliente)