/************Exercícios de interpretação de código***********
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
     pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo 
            function minhaFuncao(variavel) {
        	return variavel * 5
        }
        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))
                
        a) O que vai ser impresso no console?

        -------RESPOSTA------
       Será impresso a multiplicação de dois valores, como o 2*5=10 e 10*5=50
        
        b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
        e `minhaFuncao(10)`? O que apareceria no console?
        
        -------RESPOSTA------
       Retirando o console.log e apenas invocando as funções, o programa vai rodar, 
       fazendo a multiplicação normalmente porém nao aparecerá o resultado no console.

    2. Leia o código abaixo
        
        let textoDoUsuario = prompt("Insira um texto");
        
        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }
        
        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)
               
        a. Explique o que essa função faz e qual é sua utilidade
        
        -------RESPOSTA------


        b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
             i.   `Eu gosto de cenoura`
             ii.  `CENOURA é bom pra vista`
             iii. `Cenouras crescem na terra`

        -------RESPOSTA------*/

        /***********Exercícios de escrita de código******************
        
        1. Escreva as funções explicadas abaixo:
        
        a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas
         informações sobre você, como: 
        
            "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."   
        Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função
        não possui entradas, apenas imprime essa mensagem.

        -------RESPOSTA------
        */
        function infoPessoa1(){
            console.log(`Eu sou Juliano, tenho 29 anos, moro em Cuiabá e sou Engenheiro.`)
                    }
        infoPessoa1()
        
        /*
        b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
         o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
         Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
        
        Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
        
        -------RESPOSTA------*/

        function infoPessoa(nome, Number, cidade, profissao){
            console.log(`Eu sou ${nome}, tenho ${Number} anos, moro em ${cidade} e sou ${profissao}.`)
                    }
        infoPessoa("Juliano", 29, "Cuiabá", "Engenheiro")
            
        /*
    2. Escreva as funções explicadas abaixo:
        
        a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas
         e retorne o resultado. Invoque a função e imprima no console o resultado.
        
         -------RESPOSTA------*/
         function soma(valor1, valor2){
            return valor1 + valor2
        }
        console.log (soma(1020,5454))
        
/*
        b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou
         igual** ao segundo.
        
         -------RESPOSTA------*/
         function numeros(num1, num2){
            return num1 >= num2
        }
        console.log (numeros(1020,5454))//é para ser false (menor)
        console.log (numeros(5454,5454))//é para ser true (igual)
        console.log (numeros(5454,1020))//é para ser true (maior)

/*
        
        c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
        
        -------RESPOSTA------*/
        function par(num){
            return (num % 2) == 0
           }
        console.log(par(20))

/*      
        d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
         juntamente com uma versão dela em letras maiúsculas.
        
         -------RESPOSTA------*/
         let mensagem2 = "Minha pincher é doida"
         console.log(mensagem2.length, mensagem2.toUpperCase())
        

/*        
    3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida,
     peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário 
     sendo o argumento. Por fim, mostre no console o resultado das operações:*/

     function numeros3(valor, valor11){
         let numerosInseridos = (`Números inseridos: ${valor} e ${valor11}`)
        let soma33 = valor + valor11
        let subtracao = valor - valor11
        let multiplicacao = valor * valor11
        let divisao = valor / valor11
        console.log(`${numerosInseridos}
        Soma: ${soma33}
        Diferença: ${subtracao}
        Multiplicação: ${multiplicacao}
        Divisão: ${divisao}`)
     }
    numeros3(100,10)
    
