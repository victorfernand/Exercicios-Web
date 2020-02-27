/// exemplo de funcao == em first-class object
//// higher-order function

/// 1'º ex : criar uma funcao de forma literal

function fun1(){}

//ex2:: armazenar uma funcao em uma varial

const fun2 = function(){}

///ex3:: armazernar uma funcaoo dentro de um arrey

const arrey = [function(a,b){return a + b},fun1, fun2]
console.log(arrey[0](2,3))

/// armazenar funcao dentro de um atributo objeto
const obj = {}
    obj.fala = function () {return'opa'}
    console.log(obj.fala())

///ex5:: como passar uma funcao como parametro para outra funcao
function run(fun){
    fun()
}
run(function(){console.log('executando..')})