
/// definir algumas funcoes middleares,, depois fazer a execucao de cada passo das funcoes
const passo1 = (ctx, next) => { /// ctx = é um objeto que vai colaca os dados,, o outro next é a funcao que quando for chamada aqui dentro{} vai passar pro proximo passo
        ctx.valor1 = 'mid1' // ctx = contexto // .valor == é um atributo que ele coloca chamando 'mid1' ..
        next() /// chamando a funcao para disparar o proximo passo ( ou seja o programa de baixo)
}
/// criar o segundo passo 
const passo2 = (ctx, next) => {
        ctx.valor2 ='mid2'
        next()
}
/// criacao do 3º middleares
const passo3 = ctx => ctx.valor3 = 'mid3'
 
//// depois que definiu as 3º funcoes /// agora é fazer a funcao que vai executar
const exec = (ctx, ...middlewares) => { /// exec =  contexto,, dentro do contexto ele vai receber um conjunto(... = conjunto que transforma em arrey) de middleares funcoes.
        ///dentro dessa funcao criar outra chamado exec
        const execPasso = indice => { /// ta pedindo para executar um indice apartir do 0..  entao ele vai olha no arrey middlewares e vai executar
                middlewares && indice < middlewares.length && // quer dizer que se o indice for menor que middlewares.length == é o tamanho do arrey
                middlewares [indice](ctx, ()=> execPasso(indice + 1)) /// executando o indice
        }
        execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

