/// ex1: criar uma função

function rand({min = 0, max = 1000}){// foi criado uma funcao chamado rand,, dentro dela foi criado um atributo usando destructuring.
    const valor = Math.random() * (max - min)+min
    return Math.floor(valor)/// esse codigo quer dizer que foi criado uma funcao que retor um valor entre 0 a 1000.
    }
    console.log(rand({min: 955}))
    console.log(rand({})) // pode ser usado sem declarar qualquer valor tambem..