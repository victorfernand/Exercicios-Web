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

 const resultado = carrinho.map(objeto).map(preco) /// resultado recebe = carrinho.map(objeto) que passa para objeto, depois chama um map para extrair somente o preco
 console.log(resultado)
