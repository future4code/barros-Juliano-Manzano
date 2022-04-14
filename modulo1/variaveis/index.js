//-------Exercício de interpetração de código-----

/* 1- Analise o programa abaixo
 e diga o que será impresso no console, 
SEM EXECUTAR o programa. */

let a = 10
let b = 10

console.log(b)
/*--Resposta 
Vai imprimir o número 10 */
b = 5
console.log(a, b)
/*--Resposta
Vai imprimir para a letra a = 10 e b = 5,
pois mudamos o valor da variavel let 
jáque se permite essas mudanças de variáveis.

/* 2- Analise o programa abaixo
 e diga o que será impresso no console,
 SEM EXECUTAR o programa.*/

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/* Resposta
Vai imprimir a=10, b=10 e c=10,
sendo c=a que a =10, logo c=10
sendo b=c que c=a e a=10, logo b=10
sendo a=b que b=c e c=a e a=10, logo a=10
de acordo com a linha de tempo.

/* 3- Analise o programa abaixo,
 entenda o que ele faz e sugira melhores
 nomes para as variáveis. Lembre-se que
 devemos escolher nomes significativos,
 usar o padrão camelCase. Alem disso,
 os nomes não podem começar 
com números ou caracteres especiais.*/

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* Resposta
let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
let valorRecebeDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadasDia/valorRecebeDia} por hora`)*/
 
//-----------Exercícios de escrita de código------

/* 1- Construa um programa, seguindo os seguintes passos:
a) Declare uma variável para armazenar um nome, sem atribuir um valor.*/

let nome = "Juliano"

/*
b) Declare uma variável para armazenar uma idade, sem atribuir um valor.*/

let idade = 29

/*
c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.*/

console.log (typeof nome, typeof idade)

/*
d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

Resposta
Foi atribuido para a variavél nome uma string, ou seja um texto e para a variavél um valor.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

Resposta*/

let nome1 = prompt("qual o seu nome ?")
let idade1 = prompt("Qual sua idade ?")


/*
f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

Resposta
*/
console.log (nome1, idade1)
/*
Tudo o que digitamos no prompt será uma string, então o seu retorno se o código se estiver correto será
uma string mesmo sendo números.

g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

Resposta*/ 

console.log ("Olá" nome1,"  você tem "idade1" anos")

/* 2- Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas*/

    let cantar = prompt("Você sabe cantar ?")
    let futebol = prompt("Você gosta de Futebol ?")
    let parque = prompt("Você esta no parque agora ?")

    /* b)  Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    Você está usando uma roupa azul hoje? - SIM*/

console.log ("Você sabe cantar ? - "cantar)
console.log ("Você gosta de Futebol ? - "futebol)
console.log ("Você esta no parque agora ? - "parque)

/* 3- Suponha que temos duas variáveis a e b, cada uma com um valor inicial*/
let a = 10
let b = 25

/*Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.*/
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
//Resposta
c = a
d = b
b = c
a = d
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

/*----------------------- Desafios-----------------------------
    
    Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!
    
    1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.*/

let numero10 = prompt("Insira um número qualquer")
let numero20 = prompt("Insira outro número")

let numero11 = Number(numero10)
let numero21 = Number(numero20)
let numero31 = numero11+numero21
let numero41 = numero11/numero21
console.log("O primeiro número somado ao segundo número resulta em: "numero31)
console.log("O primeiro número multiplicado ao segundo número resulta em: "numero41)