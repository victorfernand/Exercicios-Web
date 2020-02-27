/// require =  O funcionamento básico do require é que ele lê o arquivo JavaScript, interpreta o script e em seguida retorna o conteúdo do objeto exports. Segue um exemplo de módulo para melhor compreensão


const _ = require('lodash') //// quando vai referenciar um arquivo lodash,, sempre começa com _..
setInterval(() => console.log(_.random(1, 1000)), 2000) /// setInteval = funcao que executa de tempos em tempos, random = ele pega um numero sorteado entre 1 a 1000, 2000 significa os mili segundo que ele vai dar loop
