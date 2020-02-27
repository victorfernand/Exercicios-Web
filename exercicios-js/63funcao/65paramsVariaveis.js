function soma () {
    let soma = 0
    for (i in arguments){
        soma += arguments[i] // += ... atribuicao aditiva
    }
return soma
}

console.log(soma()) /// teste1== 0 
console.log(soma(1)) /// teste2 === 1
console.log(soma(5,3,1)) /// teste3 ===soma igual a 9