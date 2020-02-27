function pessoa(){

    this.idade =0 /// definir uma idade começando com (0)
    setInterval(() =>{ /// chamar a funcao setinterval,,, criar em seguida uma arrow
        this.idade++/// depois acessar o this.idade++ imclementar idade
        console.log(this.idade)

    },1000)// valor de repeticao do intervalo
}
new pessoa //instanciar o objeto pessoa crada na linha 1