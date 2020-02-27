/// ex: mostrar 3 classes e ver a relacao de heranca entre elas
class avo{
    constructor(sobrenome){ //// definir uma funcao construtora que recebe com parametro sobrenome
        this.sobrenome = sobrenome ////this. == receber sobrenome só que esta vazio o objeto para estanciar,, no pai tem a prifissao
    }
}
class pai extends avo{ /// o pai vai extender o avo
        constructor(sobrenome, profissao = 'professor'){ /// profissaão foi um atributo a mais adicionado na classe pai
            super(sobrenome) //// extanciar a super classe de avo,, chamar o avo 
            this.profissao = profissao //// quando fala this.alguma coisa quer dizer que ele esta atribuindo ao objeto que foi estanciado no caso profissao

        }
}
class filho extends pai{
    constructor(){ /// dentro do construto vai ter:
            super('silva') /// super chamou o sobrenome de pai ,,
    }
}
const Filho = new filho
console.log(Filho)