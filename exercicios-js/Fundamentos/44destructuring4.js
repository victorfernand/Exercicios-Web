//// exemplo: mesma coisa que o exemplo passado só substitui as chaves ({}),, pelo couchete ([]).

function rand([min = 0, max=1000]) { /// couchete...
    if (min > max) [min, max]= [max, min]// criando um arrew dentro desses 2 atributos (min e maximo).
    const valor = Math.random()* (max-min)+min/// random:: é uma função de numero aleatória.
    return Math.floor(valor)/// floor :: arredonda o valor para baixo,,, ceil:: para cima


}

console.log(rand([50, 40 ]));/// pega so valor entre 50 e 40
console.log(rand([900])); /// pega so valor acima do 900
