///PROJETO AULA 138
//// primeiro passo para criacao do projeto:
///1 = etrar no terminal  /2 = cd node = etrar no node //3 = cd 138projeto1API = para etrar na pasta
///4 = npm init -y = ele criar o arquivo completo packger.json (estrura).
//5 = npm i --save express@4.16.2 -E = esse comando ele instala o espress  com a versao desejada.
///6=npm start == para executar a porta 

////PROJETO AULA 139
///1 == criar um arquivo banco de dados e la dentro vai ter os codigos.
///2 = no final desse arquivo tera o comando exports para exportar para fora do modulo (deixa visivel)
///3 == entra no arquivo servidor e cria uma const bancoDeDados chamando a funcao require.
///4 = res.send({nome: 'notebook', preco: 123.45 }) ,, muda essa resposta para essa res.send(bancoDeDados.getProdutos())
///5 ==  ainda dentro do servidor criar app.get('/produtos/:id',(req, res, next)=> {  /// funcao middleares /// o que vai na url ,, id, é o que vai dar acesso ao um numero
      //res.send(bancoDeDados.getProduto(req.params.id))
///6 =