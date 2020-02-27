//// exemplo de while::   while ele é um modo de repeticao que nunca para sempre fica lendo o resultado

function interioAleatorio (min, max){

    const valor = Math.random() * (max - min) + min/// random ele gera um valor entre 0 e 1..
    return Math.floor(valor)

}

let opcao =0

while (opcao != -1){/// laco de repeticao
    opcao = interioAleatorio(-1, 10 )
    console.log('valores escolhidos', +opcao)

}
console.log('ate a proxima')