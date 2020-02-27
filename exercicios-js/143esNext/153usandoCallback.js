/// objetivo desse é,,, pegar os 3 arquivos da web e extrair apenas os nomes desses arquivos
 ///ex: sem promisses
 const http = require('http')

 const getTurma = (letra, callback) =>{  /// chamando a letra do arquivo,, passando uma callback quando o arquivo  carrega
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`  /// buscar na url 
        http.get(url, res =>{ /// res == vou receber os dados em cima das resposta
                let resultado = ''
                res.on('data', dados =>{
                    resultado += dados
                })
                res.on('end', ()=>{
                    callback(JSON.parse(resultado))
                })
        })
 }
 let nomes =[]
 getTurma('A', alunos =>{
     console.log(alunos[0].nome)
 })