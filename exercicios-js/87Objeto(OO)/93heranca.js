const pai = {nome: 'pedro', corCabelo: 'preto'}

const filho1 = Object.create(pai) /// crate é um objeto que recebe um valor nulo
filho1.nome = "ana"/// apartir do momento que da um create ja pode ser alterado o nome .

console.log(filho1.corCabelo) //// se reparar a cor é preto usando o create a cor passou para o filho

const filha2 = Object.create(pai, {
        nome: {value: 'bia', writable: false, enumerable: true}  ///definir parametros /// writable == nao pode ser mudade quando tiver falso

})
console.log(filha2.nome)


