//-----Exercícios de interpretação de código---
/*
1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)

-----Resposta---
a. undefined , retorna indefinido, pois nao definiu nenhum elemento para a variavel.

array = null
console.log('b. ', array)

-----Resposta---
b. null, foi definido null na variavel array.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

-----Resposta---
c. 11 elementos, length mostra aquantidade de elementos em um array.

let i = 0
console.log('d. ', array[i])

-----Resposta---
d. 3, array[i], indica a posição do elemento, retornando o elemento, neste caso retornou o elemtno da questão de letra c.
 sendo o primeiro elemento o número 3.

array[i+1] = 19
console.log('e. ', array)

-----Resposta---
e. o elemento na posição 0+1=1 será substituido pelo elemento indicado, neste caso o 4 será substituido pelo 19,
 então temos [3,19,5,6,7,8,9,10,11,12,13].

const valor = array[i+6]
console.log('f. ', valor)

-----Resposta---
f. 9, cria-se uma variavel de somatória da posição indice de um elemento dentro da array,
 sendo o indice 0+6=indice 6, logo ao pedimos para retornar resultado dessa variavel "valor" temos o elemento "9".


2. Leia o código abaixo com atenção.
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

-----Resposta---
SUBI NUM ÔNIBUS EM MIRROCOS 27, Pedimos ao usuário inserir uma frase pelo prompt e armazenamos em uma variavel, 
logo mostramos essa frase com algumas alterações como as letras todas em maiusculas com o toUpperCase e substituimos
 a letra "A" pela letra "I" (observar se esta em maiusculo ou minusculo para substituir) com o comando replaceAll(todas as palavras da frase)
 e contamos o numero de caracteres com o length.

 ------------------Exercícios de escrita de código-------------

 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

let nomeDoUsuario = prompt("Qual o seu nome")
let emailDoUsuario = prompt("Qual o seu e-mail")

console.log("O e-mail "+emailDoUsuario+` foi cadastrado com sucesso.
Seja bem vindo(a), `+nomeDoUsuario+" !")


//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

let comidaPreferidas = ["Sopa", "Pizza", "Churrasco", "Salgados", "Peixe"]

//a).  Imprima no console o array completo

console.log(comidaPreferidas)

//b).  Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log(`Essas são as minhas comidas preferidas: 
${comidaPreferidas[0]}
${comidaPreferidas[1]}
${comidaPreferidas[2]}
${comidaPreferidas[3]}
${comidaPreferidas[4]}`)

//c).  Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

let comidaUsuario = prompt("Qual a sua comida preferida ?")
comidaPreferidas[1] = comidaUsuario
console.log(comidaPreferidas)


/*3. Faça um programa, seguindo os passos:
    
 a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`*/

 let listaDeTarefas = []
    
 //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
let tarefa1 = prompt("Qual tarefa você precisa realizar hoje ?")
listaDeTarefas = [tarefa1]
let tarefa2 = prompt("Qual a segunda tarefa você precisa realizar hoje ?")
listaDeTarefas = [tarefa1,tarefa2 ]
let tarefa3 = prompt("Qual a terceira tarefa você precisa realizar hoje ?")
listaDeTarefas = [tarefa1,tarefa2,tarefa3]

 //c) Imprima o array no console

 console.log(listaDeTarefas)
    
 //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
 
 let indice = prompt(`Insira o número da tarefa que você já realizou:
 0 => ${tarefa1}
 1 => ${tarefa2}
 2 => ${tarefa3}`)

 //e) Remova da lista o item de índice que o usuário escolheu.
 
 listaDeTarefas.splice(indice, 1)
 
 //f) Imprima o array no console

 console.log(listaDeTarefas)



 /*-------------------------------DESAFIOS---------------------

1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços*/

let frase = prompt("Digite uma frase")
resultado = frase.split(" ")
console.log(resultado)


/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`,
 faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array*/

 let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

 let indice1 = frutas.indexOf("Abacaxi");
 let frutas2 = frutas[indice1] 
  tamanhoFruta = frutas2.length
 console.log(indice1, tamanhoFruta)