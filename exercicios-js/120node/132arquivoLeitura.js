//// vamos ler o arquivo do JSON CRIADA apartir do module file systen
const fs = require('fs')/// fs == filesystem ,,, require == buscar ou importar o fliesystem

/// ex: como ler um arquivo de forma sicrona ,, ou seja arquivo grande em um loop ele fica lendo demora um pouco
const  caminho = __dirname + '/132lerArquivosNode.json' /// __dirname  ==  ler os arquivos.

const conteudo = fs.readFileSync(caminho, 'utf-8') /// criando conteudo, que vai ser o resultado de fs. readFileSync == ler um arquivo de forma sincrona passando o caminho
console.log(conteudo)

///forma assicrona:
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{ /// fiz uma callback passando como err, e conteudo
    const config = JSON.parse(conteudo) /// config recebe conteudo, mais vai da erro poq é uma string,, (entao vou transforma pra objeto usando JSON)
    console.log(`${config.db.host}:${config.db.port}`)///  aqui ele que que mostra o host e aport  dentro do arquivo JSON,,,`essa aspa é uma template string `,, ${e isso e uma interpolacao busca por isso em outro arquivo}    
})
///ex: metodo mais simples para ler arquivo JSON
const config = require ('./132lerArquivosNode.json')
console.log(config.db)

///ex para leitura de uma pasta
fs.readdir(__dirname, (err, arquivos)=>{ //// passando uma callback em err e arquivos.
    console.log('conteudo da pasta...')
    console.log(arquivos, err)
})
