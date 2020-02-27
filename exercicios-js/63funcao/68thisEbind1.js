const pessoa ={
    saudacao: 'bom dia',
    falar(){ /// criar uma funcao dentro do objeto
        console.log(this.saudacao)// this ele ta acessando saudacao dentro de pessoa

    }

}
pessoa.falar()
const falar = pessoa.falar
falar() /// deu conflito pq o thisnnao esta chamando  mais saudacao dentro de falar

/// usando o bind

const falarDEpessoa = pessoa.falar.bind(pessoa)/// o bind=== voce passa um objeto do que quer que seja resolvido o this,, ou seja o this é (pessoa)
falarDEpessoa() //// bind retorna o resulta para "bom dia"