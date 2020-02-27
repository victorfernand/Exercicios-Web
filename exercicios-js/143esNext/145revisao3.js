/// object.values = da o valor do objeto.. / object.entries = da o valor em chave de arreys 
const objeto = {a:1, b:2, c:3}
console.log(Object.values(objeto)) /// resultado em arrey
console.log(Object.entries(objeto)) /// resultado dentro de arreys

///melhoria na notacao continua
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return ' oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

/// class  (sempre vira uma funcao)
class Animal{}
class Cachorro extends Animal {
    fala(){
        return 'auau'
    }
}
console.log(new Cachorro().fala())