const tecnologia = new Map() /// instancia o map apartir do new
 /// valor framework == vai ser um objeto
tecnologia.set('react', { framework: false} ) /// SET= colocar estrutura chave e valor (armazenar)
tecnologia.set('angular', {framework: true})

console.log(tecnologia.get('react')) /// get ==retorna um elemento especifico da funcao map

///  ex : criar um map e atribuindo os elementos
const chavesVariadas = new Map([  // vai ser criado um arrey e dentro desse arrey vai ser criado outros arreys
    [function(){ }, 'funcao'], /// essa chave é funcao
    [{}, 'objeto'], /// essa é objeto
    [123, 'numero'], //essa é valor numerico
])
chavesVariadas.forEach((vl, ch)=> { /// com forEach == vai acessar primeiro o valor (vl,) depois a chave (ch)
    console.log(ch, vl)
}) 
console.log(chavesVariadas.has(123)) /// has = é uma funcao que ve se o elemento esta ou nao contido dentro do MAP
console.log(chavesVariadas.size) /// size = mostra quantos elementos tem dentro do MAP.