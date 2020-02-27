///ex de do/while

function interioAleatorio (min, max){

    const valor = Math.random() * (max - min) + min/// random ele gera um valor entre 0 e 1..
    return Math.floor(valor)

}

let opcao =0

do{ /// ve deve continuar ou nao.
    opcao = interioAleatorio(-1, 10 )
    console.log('valores escolhidos', +opcao)
    
}while (opcao != -1)/// laco de repeticao
console.log('ate a proxima')