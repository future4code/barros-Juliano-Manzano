/*****************Exercícios de interpretação de código******************
1.  Leia o código abaixo
        
            const filme = {
        	nome: "Auto da Compadecida", 
        	ano: 2000, 
        	elenco: [
        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        		"Virginia Cavendish"
        		], 
        	transmissoesHoje: [
        		{canal: "Telecine", horario: "21h"}, 
        		{canal: "Canal Brasil", horario: "19h"}, 
        		{canal: "Globo", horario: "14h"}
        		]
        }
        
        console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length-1])
        console.log(filme.transmissoesHoje[2])
 
    a) O que vai ser impresso no console?

    ------------RESPOSTA-------------------
vai aparecer o primeiro elemento = Matheus Nachtergaele
vai aparecer o ultimo elemento = Virginia Cavendish
vai informar o terceiro elemento transmissoesHoje = canal: 'globo', horario: '14h'

2. Leia o código abaixo
        
        const cachorro = {
        	nome: "Juca", 
        	idade: 3, 
        	raca: "SRD"
        }
        
        const gato = {...cachorro, nome: "Juba"}
        
        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        console.log(cachorro)
        console.log(gato)
        console.log(tartaruga)
              
    a) O que vai ser impresso no console?

    ------------RESPOSTA-------------------
    Em cachoro vai ser impresso o nome, idade e raca = nome:Juca, idade:3, e raca:SRD
    Em gato vai ser impresso os dados do cachorro copiados mas alterando somente o nome para Juba
    Em tartaruga os dados do gato copiados porém copiando o nome do gato e subtituindo alguns caracter o "a" pelo "o" ficando com nome de Jubo.
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    
    ------------RESPOSTA-------------------
    A sintaxe copia todos os dados do objeto, podendo ser alterados no objeto criado sem alterar o objeto copiado.

3. Leia o código abaixo
        
        function minhaFuncao(objeto, propriedade) {
        	return objeto[propriedade]
        }
        
        const pessoa = {
          nome: "Caio", 
          idade: 23, 
          backender: false
        }
        
        console.log(minhaFuncao(pessoa, "backender"))
        console.log(minhaFuncao(pessoa, "altura"))
        
    a) O que vai ser impresso no console?
        
    ------------RESPOSTA-------------------
    Será impresso false e indefinido.

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        
    ------------RESPOSTA-------------------
    Em console.log(minhaFuncao(pessoa, "backender")) foi impresso false, retornando o valor da chave backender sendo esse valor um boleano,
    e em console.log(minhaFuncao(pessoa, "altura")) foi impresso undefined pois nao foi definido nenhum valor para a chave altura.

 
    *******************************************Exercícios de escrita de código**************************************

    1. Resolva os passos a seguir: 
        
        a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
        
        // Exemplo de entrada
        const pessoa = {
           nome: "Amanda", 
           apelidos: ["Amandinha", "Mandinha", "Mandi"]
        }
        
        // Exemplo de saída
        "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
        */
        //------------RESPOSTA-------------------
        const pessoa = {
            nome: "João", 
            apelidos: ["Joãozinho", "Jão", "Jo"]
         }
         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
    
        /*
        
        b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
         --------------RESPOSTA-------------------*/
               
        const Animal = {...pessoa, apelidos:["Fininho", "Preguinho", "Tic"]}
        console.log(`O novo objeto é um Animal, como o nome de ${Animal.nome} e seus apelidos são: ${Animal.apelidos[0]}, ${Animal.apelidos[1]} e o ${Animal.apelidos[2]}.`)
      
       /* 
    2. Resolva os passos a seguir: 
        
        a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
        
         --------------RESPOSTA-------------------*/
         const concorrente1 = {
            nome: "Fabrício", 
            idade: 28,
            profissao: "Carpinteiro"
        }
                 /*
        b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
        
        1. O valor de `nome`
        2. O numero de caracteres do valor `nome`
        3. O valor de `idade`
        4. O valor de `profissão`
        5. O numero de caracteres do valor `profissão`
        - Exemplo
            const pessoa = {
            	nome: "Bruno", 
              idade: 23, 
            	profissao: "Instrutor"
            }
            
            minhaFuncao(pessoa)
            // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

--------------RESPOSTA-------------------*/
            const concorrente2 = {...concorrente1, nome: "Lúcia", idade: 31, profissao: "Cozinheira"}
    
       function vagaFuncao(){
           console.log([concorrente1.nome, concorrente1.nome.length, concorrente1.idade, concorrente1.profissao, concorrente1.profissao.length])
           console.log([concorrente2.nome, concorrente2.nome.length, concorrente2.idade, concorrente2.profissao, concorrente2.profissao.length])
        
       }
        vagaFuncao()
/*
        
    3. Resolva os passos a seguir: 
        
        a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
        --------------RESPOSTA-------------------*/
       const carrinho = []

       /*
        b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
        --------------RESPOSTA-------------------*/
       let fruta = {
        nome: "Banana", 
        disponibilidade: true
  }
  let fruta2 = {...fruta, nome:"Maçã" }
  let fruta3 = {...fruta, nome:"Mamão"}
      
  /*
        c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
        --------------RESPOSTA-------------------*/
        
        function compra(){
carrinho.push(fruta)
carrinho.push(fruta2)
carrinho.push(fruta3)
    
  /*
        
        d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
        */
            console.log(carrinho);
        }    
        compra()
    
/*

- Desafios
    1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
        - Exemplo
            
            ```
            // Exemplo de entrada: "Lais", 26, "Instrutora"
            // O que deve ser impresso no console: 
            { nome: 'Lais', profissao: "Instrutora", idade: 26}
            ```
            
    2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
        
        ```
        O primeiro filme foi lançado antes do segundo? false
        O primeiro filme foi lançado no mesmo ano do segundo? true
        ```
        
    3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.
