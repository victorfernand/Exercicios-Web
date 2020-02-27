/// json é um formato textual diferente da orientacao objeto...
///ex:: primeiro vamos criar um objeto e depois transformar para Json
///  ex: outro elemento que vai perceber que nao vai estar no Json vai ser a funcao
const obj = {a: 1, b:2, c:3, soma(){ return a+b+c}} /// criei os atributos a,b,c ,,,  depois retorna a funcao desses atributos, e converter esses objetos para um Json
////conbvertendo o valor para JSON
console.log(JSON.stringify(obj)) ///transforma para obj

//// ex :: agora vou pegar um Json e transformar para um objeto.
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) ///transforma para json respeitando seu formato
/// ex de formato de Json suporta
console.log(JSON.parse('{"a": 1, "b": "string", "c": true}'))/// Json suporta string, booleanos, arreys, e objeto{}
