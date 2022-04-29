/******************Exercícios de interpretação de código**
     
    1. Leia o código abaixo:
        
        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)
        
        if (numero % 2 === 0) {
          console.log("Passou no teste.")
        } else {
          console.log("Não passou no teste.")
        }

        a) Explique o que o código faz. Qual o teste que ele realiza? 
        --------resposta-------
        Se numero diferente de 2=0 entao faça senão faça.

        b) Para que tipos de números ele imprime no console "Passou no teste"? 
        --------resposta-------
        Imprime para a resposta do usuário o numero 2 e o número 0.

        c) Para que tipos de números a mensagem é "Não passou no teste"? 
        --------resposta-------
        Para todo número diferente de 2 e 0.

    2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
       
        let fruta = prompt("Escolha uma fruta")
        let preco
        switch (fruta) {
          case "Laranja":
            preco = 3.5
            break;
          case "Maçã":
            preco = 2.25
            break;
          case "Uva":
            preco = 0.30
            break;
          case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
          default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
        
    
        a) Para que serve o código acima?
        --------resposta-------
        Serve para sabermos o preço da fruta escolhida.

        b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
        --------resposta-------
        O preço da fruta Maçã é R$ 2.25

        c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        --------resposta-------
        O preço da fruta Pêra estaria incorreto, pois o break serve para parar quando encontrar o resultado, neste caso passaria direto para o default com a resposta de preco = 5.

    3. Leia o código abaixo:
        
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
        
        a) O que a primeira linha está fazendo?
        --------resposta-------
        A primeira linha está pedindo ao usuario para digitar o primeiro número e salvando em uma variavel de tipo Number.
        
        b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
        --------resposta-------
        Caso o usuario digitasse o numero 10 imprimiria "Esse número passou no teste" caso for um numero menor que 0 no caso -10 imprimiria "Essa mensagem é secreta".

        c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
        --------resposta-------
        Sim, há um erro no bloco do código, a sintase correta seria 
         const numero = Number(prompt("Digite o primeiro número."))
        
        if(numero > 0) {
          console.log("Esse número passou no teste")
        }else{
        	let mensagem = "Essa mensagem é secreta!!!"
            console.log(mensagem)
        }
        


***************************Exercícios de escrita de código******************

    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.*/
        let idade=Number(prompt("Qual a sua idade?"))/*

        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        Sim do tipo Number

        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
        */
        if (idade>=18){
                console.log("Você pode dirigir")
            }else{
                console.log("Você não pode dirigir.");
        }
/*
    2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    */    
 let turno=prompt(`Em que turno você estuda ?
 digite :
 M para Matutino
 V para Vespertino
 N para Noturno`)

 if (turno ==="M"){
    console.log("Bom dia");
 }else if(turno ==="V"){
    console.log("Boa Tarde");
 }else if(turno==="N"){
     console.log("Boa Noite");
 }else{
    console.log("Por favor informe o seu Turno");
 }
/*
    3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
*/

 let turno1=prompt(`Em que turno você estuda ?
 digite :
 M para Matutino
 V para Vespertino
 N para Noturno`)
switch (turno1){
 case 'M':
    console.log("Bom dia")
    break
 case 'V':
    console.log("Boa Tarde")
    break
 case 'N':
     console.log("Boa Noite")
     break
 default:
     console.log("Por favor informe o seu Turno")
     break
 }
        /*
    4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`
*/
let genero=prompt(`Qual o gênero do filme?
Ação
Aventura
Terror
Fantasia
Animação
Comédia
Romance
Intelectual
Documentário
Outros`)

let ingresso=Number(prompt("Qual o valor do ingresso?"))

if(genero==="Fantasia" && ingresso < 15){
    console.log("Bom filme")
}else{
    console.log("Escolha outro filme :(");
}

/*
********************** 🏅  Desafios ***********************


1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
        */
let genero2=prompt(`Qual o gênero do filme?
Ação
Aventura
Terror
Fantasia
Animação
Comédia
Romance
Intelectual
Documentário
Outros`)

let ingresso2=Number(prompt("Qual o valor do ingresso?"))

if(genero2==="Fantasia" && ingresso2 < 15){
    let lancheP=prompt("Você deseja comprar um lanche para acompanhar o filme?")
    if(lancheP==="sim"){
        let lanche=prompt(`Qual o lanche que você deseja saborear:
        Pipoca
        Chocolate
        Doces
        Salgados`)
        console.log(`Bom filme! Aproveite o seu lanche, ${lanche}.`)
    }else{
    console.log("Bom filme")
    }
}else{
    console.log("Escolha outro filme :(");
}

        /*
    2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,
     o usuário deve fornecer algumas informações:
        - Nome completo;*/
        let nomeCompleto=prompt("Qual o seu nome completo") 
        /*
        - Tipo de jogo: IN indica internacional; e DO indica doméstico;
        */
       let tipoDeJogo=prompt(`Indica o tipo de jogo:
       IN => Internacional
       DO => Doméstico`)
       /*
        - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final*/
        let etapaDoJogo=prompt(`Qual é a etapa do jogo:
        SF => Semi-Final
        DT => Terceiro Lugar
        FI => Final`)
        /*
        - Categoria: pode ser as opções 1, 2, 3 ou 4;*/
        let categoria=Number(prompt(`Qual a categoria:
        1
        2
        3
        4`))
        /*
        - Quantidade de ingressos*/
        let ingressos2=Number(prompt("Qual a quantidade de ingrssos?"))
        //ingressos categoria 1
        let PsF1=1320
        let PsF2=880
        let PsF3=550
        let PsF4=220
        let PdT1=660
        let PdT2=440
        let PdT3=330
        let PdT4=170
        let PfI1=1980
        let PfI2=1320
        let PfI3=880
        let PfI4=330
        
        /*
        
        O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, 
        junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso
             multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa
             . Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
            mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
        
        - Tabela de Preços
            
            ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png]
            (https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)
            */
             if (tipoDeJogo==="IN"){
                 if(etapaDoJogo==="SF"){
                     if(categoria===1){
                         const valor1=1320*4.10
                         console.log(`Nome do cliente: ${nomeCompleto}
                         Tipo de jogo: ${tipoDeJogo}
                         Etapa do jogo: ${etapaDoJogo}
                         Categoria: ${categoria}
                         Quantidade de ingressos: ${ingressos2}
                         ------Valores------
                         Valor do ingresso ${}`);
                     }
                 }
             }   

            /*
        - Exemplo de saída: Jogo Nacional
            
            ```
            ---Dados da compra--- 
            Nome do cliente:  Soter Padua 
            Tipo do jogo:  Nacional 
            Etapa do jogo:  Final 
            Categoria:  1 
            Quantidade de Ingressos:  10 ingressos 
            ---Valores--- 
            Valor do ingresso:  R$ 1980
            Valor total:  R$ 19800
            
            ```
            
        - Exemplo de saída: Jogo Internacional
            
            ```
            ---Dados da compra--- 
            Nome do cliente:  Soter Padua 
            Tipo do jogo:  Internacional 
            Etapa do jogo:  Final 
            Categoria:  1 
            Quantidade de Ingressos:  10 ingressos 
            ---Valores--- 
            Valor do ingresso:  U$ 482.92682926829275
            Valor total:  U$ 4829.2682926829275
            */