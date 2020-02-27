/// aqui dentro vamos configurar o express do projeto1 para a criacao dos webs services.
/// primeiramente configurar a porta :: a porta nada mais é que um processo de comunicaçaõ de rede
const porta = 3003 //definindo a porta

/// já que instalamos o express.... agora só importar usando require... express está dentro de node_modules.
const express = require("express")
const app = express() /// ta estanciando o express e atribuindo na variavel app,, entao na variavel app vamos trabalhar em cima e colocar nossos serviços lá
const bodyParser = require('body-parser') //body parser==serve para permitir com que clientes externos possam enviar informação para sua aplicação Node. js
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) /// urlencoded = é uma funcao middleares,, esta passando para modo extendido,.

///ex:: GET ==  objetivo dele é obter uma informacao do servidor
app.get('/produtos/:id',(req, res, next)=> {  /// funcao middleares /// o que vai na url ,, id, é o que vai dar acesso ao um numero
      res.send(bancoDeDados.getProduto(req.params.id)) ///req.params ==é o local onde colocou os parametros na url
})

/// submeter os dados criados e salvar os produtos (salvar um novo elemento)
app.post('/produtos', (req, res, next)=>{ // NAO VAMOS PRECISAR POR ENQUANTO DESSA  FUNCAO
   const produto = bancoDeDados.salvarProduto({
      nome: req.body.nome, ///req.body === pega o nome do corpo da requisicao . 
      preco: req.body.preco
   })
   res.send(produto) /// resposta do produto que vai retornar/// vai gerar um JSON .  
})
app.put('/produtos', (req, res, next) => { ///put === alterar os dados 
   const produto = bancoDeDados.salvarProduto({
      id: req.params.id,
      nome: req.body.nome, ///req.body === pega o nome do corpo da requisicao . 
      preco: req.body.preco
   })
   res.send(produto) /// resposta do produto que vai retornar/// vai gerar um JSON .  
})

///testar,,,, get == é uma forma de requisição,, vou passar em cima dessa requisicao uma forma de produtos usar a funcao middleiares (request, response, nesxt) => passando uma funcao arroy
app.get('/produtos', (req, res, next)=> { 
   // linha que ta chamando o (res) =responda vai executar,, (send) = é uma funcao que envia uma resposta ,, resposta é esse objeto ({nome: 'notebook', preco: 123.45 })
      res.send(bancoDeDados.getProdutos()) /// entao esse objeto vai ser convertido para formato JSON automaticamente por causa do metodo send
})
app.listen(porta, ()=>{ /// aqui ele vai dizer qual a porta que vai executar a aplicacao,, => chaMANDO uma callback para restartar a aplicacao
       console.log(`Servidor executando está  na porta ${porta}.`) /// ou seja 3003
      
}) 
