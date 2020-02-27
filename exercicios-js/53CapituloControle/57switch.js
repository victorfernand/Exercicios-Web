const imprimirResultado = function (nota){
        switch (Math.floor(nota)){// floor arredonda para baixo // e switch == é mesma coisa que o if e o else
            case 10: // case == caso ou seja ==caso nao resolva passa pro de baixo..
            case 9:
                console.log('quadro de honra') 

            break ///  palavra reservada que sai do case quando ele executa
        case 8: case 7:
            break
        console.log('aprovado')
                break
        case 6: case 5: case 4:
            console.log('recuperacao')
            break
        case 3: case 2: case 1: case 0:
            break
        default:
            console.log('nota invalida')
        }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(3)
