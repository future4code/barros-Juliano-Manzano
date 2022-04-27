 /*------- Exercícios de interpretação de código---
 
 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

---RESPOSTA---
a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

---RESPOSTA---
b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

---RESPOSTA---
c. true

console.log("d. ", typeof resultado)

---RESPOSTA---
d. boolean */

/*
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

---RESPOSTA---

Ele esta somando uma string, onde ocorrerá o erro, deve converter de string para Number.

*/
/*
3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja,
 de fato, a soma dos dois números.

---RESPOSTA---

let primeiroNumero = Number ( prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma) */

/*--------------------------------------Exercícios de escrita de código---------------------------------------------

1. Faça um programa que:

a. Pergunte a idade do usuário
R.*/ let idade = Number(prompt("qual a sua idade ?"))

/*b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
R.*/ let amigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga ?"))

/*c. Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
 seguido pela resposta (true ou false)
 R.*/ 
 resultado = idade > amigo
 console.log ("Sua idade é maior do que a do seu melhor amigo ou amiga ?", resultado )

 /*d. Imprima na console a diferença de idade (não tem problema se sair um número negativo)
 R.*/ diferença = idade - amigo
 console.log ("A diferença entre idades é ", diferença)

 /*
 2. Faça um programa que:
 a. Peça ao usuário que insira um número par
 R. */

 let par = Number(prompt("Insira um número par"))

 /*b. Imprima na console o resto da divisão desse número por 2
 R.*/
 resto = par % 2
 console.log(resto)

 /*c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
 R. 
Todo o retorno será 0 porque numeros pares são divisiveis de 2 nao retornando restos.

 d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
 R.Com números impares restornará o resto da divisão.
 */

 /*
 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
R. */
 let idadeAnos = Number(prompt("Qual sua idade em anos ?"))
 /*
 a. A idade do usuário em meses
 R. */
idadeMeses = idadeAnos * 12
console.log (idadeMeses)

/*b. A idade do usuário em dias
R. */
idadeDias = idadeAnos * 365
console.log (idadeDias)

/*c. A idade do usuário em horas
R. */
idadeHoras = idadeDias * 24
console.log (idadeHoras)

/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, 
faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
R. */
let numero1= Number(prompt("Insira um número"))
let numero2= Number(prompt("Insira outro número"))
/*
O primeiro numero é maior que segundo? true
R.*/
let maiorQ = numero1 > numero2
console.log("O primeiro numero é maior que segundo ? ", maiorQ)
/*
O primeiro numero é igual ao segundo? false
R.*/
let igual = numero1 == numero2
console.log("O primeiro numero é igual ao segundo ? ", igual)
/*
O primeiro numero é divisível pelo segundo? true
R.*/

let divisor = numero1 % numero2
let resto1 = divisor == 0
console.log("O primeiro numero é divisível pelo segundo ? ", resto1)
/*
O segundo numero é divisível pelo primeiro? true
R.*/
let divisor2 = numero2 % numero1
let resto2 = divisor == 0
console.log("O segundo numero é divisível pelo primeiro ? ", resto2)
/*

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/
