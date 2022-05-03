/*1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    let valor = 0
     for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)

---------------------------------------------RESPOSTA-----------------------------------------------------------
Vai imprimir no console o número 10, pois esta incremetando a soma de i em cada repetição até i ser menor que 5.


  2. Leia o código abaixo:
       
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero)
        	}
        }        

    a) O que vai ser impresso no console?
----------------------------------------------RESPOSTA----------------------------------------------------------
Vai ser impresso no console números maiores que 18 do array lista.

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
----------------------------------------------RESPOSTA----------------------------------------------------------        
for (const [i] of lista.entries()) {
  console.log(i)
}

  3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
          let linha = ""
          for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
          }
          console.log(linha)
          quantidadeAtual++
        }

----------------------------------------------RESPOSTA----------------------------------------------------------
Será impresso linhas e em cada linhas a quantidade de asteriscos, sendo que o loop final é a quantidade de linhas pedidas para o usuário digitar.
    
**********************************************Exercícios de escrita de código************************************

  1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

----------------------------------------------RESPOSTA----------------------------------------------------------*/
const quantPet = Number(prompt("Quantos bichinhos de estimação você tem?"))
const nomePets = []

/*  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

----------------------------------------------RESPOSTA----------------------------------------------------------*/
    if (quantPet == 0) {
        console.log("Que pena! Você pode adotar um pet");


/*  b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

----------------------------------------------RESPOSTA----------------------------------------------------------*/
    }else{     
        for(let pets = 0; pets <quantPet; pets++) {
          numeroPets = pets + 1
          const name= prompt(`Digite o nome do seu pet número ${numeroPets}.`)
          nomePets.push(name)
        }
      } 

/*c) Por fim, imprima o array com os nomes dos bichinhos no console

----------------------------------------------RESPOSTA----------------------------------------------------------*/
     console.log(nomePets);


/*  2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
        
        a) Escreva um programa que **imprime** cada um dos valores do array original.
        
        b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
        
        c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
        
        d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        
        e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
        
        - 💡 Dica
            
            Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.
            
        - Exemplo de saídas esperadas
            
            ```jsx
            // Este array será usado para exemplificar as respostas de todos os itens
            const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
            
            // Resposta item a.
            80
            30
            130
            40
            60
            21
            70
            120
            90
            103
            110
            55
            
            // Resposta item b.
            8
            3 
            13
            4
            6
            2.1
            7 
            12
            9
            10.3
            11 
            5.5
            
            // Resposta item c.
            [80, 30, 130, 40, 60, 70, 120, 90, 110] 
            
            // Resposta item d.
            [ 'O elemento do índex 0 é 80',
              'O elemento do índex 1 é 30',
              'O elemento do índex 2 é 130',
              'O elemento do índex 3 é 40',
              'O elemento do índex 4 é 60',
              'O elemento do índex 5 é 21',
              'O elemento do índex 6 é 70',
              'O elemento do índex 7 é 120',
              'O elemento do índex 8 é 90',
              'O elemento do índex 9 é 103',
              'O elemento do índex 10 é 110',
              'O elemento do índex 11 é 55' ]
            
            // Resposta e.
            "O maior número é 130 e o menor é 21"
         
*/
const arrayOriginal = [42,51,20,13,26,29,28,16,34]
//valor do array item a
for (valor of arrayOriginal){
  console.log(valor);
}
//dividindo por 10 item b
for (valor of arrayOriginal){
  const divisao = valor / 10
  console.log(divisao);
}
const newArray =[]
for (valor of arrayOriginal){
  if ((valor%2)===0){
    newArray.push(valor)
  }
}
console.log(newArray);

for (let i=0; i < arrayOriginal.length; i++){
  console.log(`O elemento do index ${i} é: ${arrayOriginal[i]}`);
}


/*
- 🏅  Desafios
    1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
        
        Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
        */


        /*
        Vamos jogar!
        O número chutado foi: 3
        Errrrrrrrou, é maior
        O número chutado foi: 18
        Errrrrrrrou, é menor
        O número chutado foi: 15
        Errrrrrrrou, é menor
        O número chutado foi: 11
        Acertou!!
        O número de tentativas foi: 4 
        
        ```
        
        Um resumo das funcionalidades são:
        
        a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
        
        b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
        
        - O número chutado, com a mensagem: `O número chutado foi: <número>`
        - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
        
        c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
        
        - Observação 👀
            
            Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, mas lembrem-se de cobrir todos os casos pedidos!
*/            
let numeroPrimeirJogador = Number(prompt("Jogador, escolha um número")) //Math.floor(100*Math.random() +1)
console.log(`Vamos Jogar`);
let tentativas = 0
let condicao

while (condicao !== numeroPrimeirJogador) {
  condicao = Number(prompt("Qual o seu chute?"))
  console.log(`O número chutado foi: ${condicao}`);
  tentativas++

  if (condicao>numeroPrimeirJogador) {
    console.log(`Errrrrrrrou, é Menor`);
  }else if (condicao < numeroPrimeirJogador) {
    console.log(`Errrrrrrrou, é Maior`);
  }else {
    console.log(`Acertou!!
    O número de tentativas foi: ${tentativas}`);
  }
}

/*
        
    2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
        
        Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**
        
        - 💡  Dica
            
            Aqui temos algumas referências que explicam como sortear um número aleatório em Javascript
            
            `EN`
            
            [JavaScript random() Method](https://www.w3schools.com/jsref/jsref_random.asp)
            
            `PT`
            
            [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

            */