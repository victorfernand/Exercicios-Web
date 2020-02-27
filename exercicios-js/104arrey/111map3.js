///ex:: implementar o map2
//// primeiro tem que criar o map 2 aqui em baixo:
Array.prototype.map2 = function(callback){ /// atribuir para map2 uma funcao,, essa funcao vai receber um callback
    const newArrey = [] /// criando um novo arrey vazio
    for (let i = 0; i <this.length; i++){/// essa linha ta dizendo que ta percorrendo o arrey, passando pelo primeiro elemento (0), ate o tamanho do arrey -1
        newArrey.push(callback(this[i], i, this))
    }
    return newArrey
}
//// obs desse programa acima: foi criado um arrey vazio, depois na 3º linha percorreu o arrey original usando (this)
/// na 4º dentro de cada interacao do arrei ele chama a callback passando o elemento atual(this[i]), depois o indice(i), depois arrey original this.
/// e o resultado dessa callback ele colocou dentro do novo arrey(newarrey),, e faz o retorno.

const carrinho = [ /// criei um carrinho, ai dentro desse carrinho tem um arrey, com algumas strings no formato Json
    '{"nome": "borracha", "preco": 3.45}', ///formato Json
    '{"nome": "caderno", "preco": 13.90}', /// segundo elemento criado
    '{"nome": "kit de lapis", "preco": 41.22}' /// terceiro elemento
]
///ex retornar um arrey com seguintes precos acima. 
//// primeiramente temos que chamar dois metodos,, chamr o Json.Parse para transformar as strings em objeto

const objeto = json => JSON.parse(json)//// recebe um json e depois retorna um Json.parse. convertendo um texto para objeto
const preco = produto => produto.preco // preco recebe como parametro um produto e no final ele retorna apenas produto.preco
 /// com esses dois metodos agora pode chamar o map ,, que no final vai ter os arreys convertido para preco

 const resultado = carrinho.map2(objeto).map2(preco) /// resultado recebe = carrinho.map(objeto) que passa para objeto, depois chama um map para extrair somente o preco
 console.log(resultado)