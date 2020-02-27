//// aprender a escrever arquivos no Node
const fs = require('fs') /// fs ==filesystem
const pruduto = {
    nome:'celular',
    preco: 1675,
    desconto: 0.15
}
///obs: esse objeto vai ser transformado em um texto usando o JSON.STRINGFILE.((OU SEJA PEGA UM OBJETO E TRANSFORMA PARA UM JSON))
fs.writeFile(__dirname + '/133arquivoGerado.json', JSON.stringify(pruduto), err =>{ /// dirname == mostra onde ele ta.. + '/ele vai gerar o arquivo que ele quer,,JSON.stringfy ==persiste o conteudo no arquivo
            console.log(err || 'arquivo salvo')
})

/// percebe que ele gerou o arquivo JSON. 133arquivogerado.json



