function pessoa(){/// ex: criar uma funcao pessao,,, dentro dessa funcao sera criada um atributo::
    this.idade = 0
    setInterval(function() {/// funcao:  ela dispara outra funcao através de um intevalo passado
            this.idade++ // dentro dessa funcao ele vai emclementar um valor na idade
            console.log(this.idade)

    }, 1000)/// intervalo de 1000 ,, vai ser disparada...

}

new pessoa /// this aponta para esse objeto pessoa que foi criado 