const escola = "Coder" // Começa contar o valor apartir do 0 0=C, 1=o, d=2, e=3, 4=r

console.log(escola.charAt(4)) // significa que vai dar a letra no indice 4 na string = letra (r )

console.log(escola.charCodeAt(3)) // nessa parte ele pegou o valor da tabela asc  deu como resultado 101
console.log(escola.indexOf('3')) // irá dar o digito da palavra associada. = 3
console.log(escola.substring(1))// indice na tela a partir do valor 1.
console.log(escola.substring(0, 3)) // vai imprimir na tela do 0 ate o 3;

console.log('escola'.concat(escola).concat("!")) // resposta (escolacoder!) = Concat = concatenando.
console.log('escola' + escola +"!") // O + pode ser referido igual o concat acima. da o mesmo valor.
console.log(escola.replace(3, "e")); // Replace = comando de substituiçaõ.  = substitui a letra.

console.log('Ana, Maria e Pedro'.split(',')); // Split= comando que gera um harrei,, entre cochetes.