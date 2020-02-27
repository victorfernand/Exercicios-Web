function area(largura, altura){
const area = largura*altura
if (area > 20)
console.log('valor acima=', +area)
else{
    return area
}
}
console.log(area(2,2))
console.log(area(6,21))