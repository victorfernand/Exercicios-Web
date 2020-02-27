console.log(typeof String) //// o que é uma string em java sacript === é uma funcao
console.log(typeof Array) /// é uma funcao
console.log(typeof Object) /// funcao

String.prototype.reverse = function() {  /// reverse = reverter uma string
            return this.split('').reverse().join('') /// this.split == quebrar a string em cada uma das letras e gerar um arrey,, o arrey tem a funcao de reverse,,join == funcao de juntar as strings de novo

}

console.log('escola feioso'.reverse())