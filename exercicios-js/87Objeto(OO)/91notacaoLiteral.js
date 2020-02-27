const a = 1
const b = 2
const c = 3

const obj1 = {a,b,c}
console.log(obj1)

/// ex: 

const atributo ="nota"
const valorAtributo = 7

console.log(atributo, valorAtributo)

/// ou
const atributo ="nota"
const valorAtributo = 7

const obj3 = {}
obj3[atributo] = valorAtributo
console.log(obj3)

/// ou
const obj4 = {[atributo]: valorAtributo}
console.log(obj4)
