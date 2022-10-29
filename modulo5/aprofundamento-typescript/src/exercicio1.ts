// a)

// const minhaString:string = 9

// Quando um número é atribuído à variavel, ocorre um erro dizendo que o número não é uma string.

// b)

const meuNumero:number | string = "Olá, tudo bem"

// Variáveis podem aceitar vários tipos de valores se estes valores forem atribuídos após um |

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESC = "azul-escuro",
    VIOLETA = "violeta"
}

const pessoa1:Pessoa = {
    nome: "Caio",
    idade: 27,
    corFavorita: Cores.VIOLETA
}

const pessoa2:Pessoa = {
    nome: "Pedro",
    idade: 54,
    corFavorita: Cores.VERDE
}

const pessoa3:Pessoa = {
    nome: "Alessandra",
    idade: 23,
    corFavorita: Cores.AMARELA
}