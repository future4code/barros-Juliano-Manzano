/***Exercícios de interpretação de código**
1.  Leia o código abaixo
      
        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" }
        ]
        
        const novoArrayA = usuarios.map((item, index, array) => {
           console.log(item, index, array)
        })

        a) O que vai ser impresso no console?

-------------------RESPOSTA----------------------------
Vai imprimir um novo array de nome novoArrayA contendo os elementos do obejeto do array usuarios.
    

2. Leia o código abaixo

        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayB = usuarios.map((item, index, array) => {
           return item.nome
        })
        
        console.log(novoArrayB)

        
        a) O que vai ser impresso no console?

-------------------RESPOSTA----------------------------
A função esta mapeando o array usuarios, na qual esta sendo requisitado da função o retorno apenas do nome dos elementos criando um novo array com os nomes.

    3. Leia o código abaixo
        
        const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayC = usuarios.filter((item, index, array) => {
           return item.apelido !== "Chijo"
        })
        
        console.log(novoArrayC)
    
        a) O que vai ser impresso no console?

-------------------RESPOSTA---------------------------- 
Vai sem impresso um novo array filtrado por apelido sendo diferente de "chijo".       




*********************Exercícios de escrita de código**************

    1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        
       */
        const pets = [
           { nome: "Lupin", raca: "Salsicha"},
           { nome: "Polly", raca: "Lhasa Apso"},
           { nome: "Madame", raca: "Poodle"},
           { nome: "Quentinho", raca: "Salsicha"},
           { nome: "Fluffy", raca: "Poodle"},
           { nome: "Caramelo", raca: "Vira-lata"},
        ]
                  
        /*
        a) Crie um novo array que contenha apenas o nome dos doguinhos
        -------------------RESPOSTA---------------------------- */
        const itemA = pets.map((item, index, array) => {
            return item.nome})
         
         console.log(itemA)

/*
        b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
        -------------------RESPOSTA---------------------------- */
        
         const filtrarPets = pets.filter((raca)=>{
            if(raca.raca === "Salsicha"){
                    return raca.nome
            }
        })
        console.log(filtrarPets);
         /*
        c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
    
        -------------------RESPOSTA---------------------------- */
           const filtrarPets1 = pets.filter((raca)=>{
                if(raca.raca === "Poodle"){
                     console.log([`Você ganhou um cupom de desconto de 10% para tosar o/a ${raca.nome}!`]);
                }
            })
            console.log(filtrarPets1);        
        
            /*
    2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        */
        const produtos = [
           { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
           { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
           { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
           { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
           { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
           { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
           { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
           { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
           { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
           { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

        /*
        - ⭐  Resultados esperados em cada item
            
            ```jsx
            // item A
            [
              "Alface Lavada", 
              "Guaraná 2l",
              "Veja Multiuso",
              "Dúzia de Banana", 
              "Leite", 
              "Cândida", 
              "Detergente Ypê", 
              "Vinho Tinto", 
              "Berinjela kg", 
              "Sabão em Pó"
            ]
            
            // item B
            [
               { nome: "Alface Lavada", preço: 2.38 },
               { nome: "Guaraná 2l", preço: 7.13 },
               { nome: "Veja Multiuso", preço: 11.97 },
               { nome: "Dúzia de Banana", preço: 5.42 },
               { nome: "Leite", preço: 2.84 },
               { nome: "Cândida", preço: 3.14 },
               { nome: "Detergente Ypê", preço: 2.09 },
               { nome: "Vinho Tinto", preço: 52.25 },
               { nome: "Berinjela kg", preço: 8.54 },
               { nome: "Sabão em Pó Ypê", preço: 10.26 }
            ]
            
            // item C
            [
               { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
               { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
               { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 }
            ]
            
            // item D
            [
               { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
               { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
            ]
            
            // item E
            [
              "Compre Detergente Ypê por R$2,20",
            	"Compre Sabão em Pó Ypê por R$10,80"
            ]
            ```
            
        
        a) Crie um novo array que contenha apenas o nome de cada item
         
        -------------------RESPOSTA---------------------------- */
        const listaProdutos = produtos.map((item, index, array) => {
            return item.nome})
         
         console.log(listaProdutos)
        /*

        b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
        -------------------RESPOSTA---------------------------- */
        const precoProdutos = produtos.map((item, index, array) => {
            console.log([`nome: ${item.nome}`,`preço: ${item.preco}`]);
            })
         
         console.log(precoProdutos) 
        /*

        c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
        -------------------RESPOSTA---------------------------- */
        const filtraBebidas = produtos.filter((item)=>{
            if(item.categoria =="Bebidas"){
                    return item.categoria
            }
        })
        console.log(filtraBebidas);
            /*

        d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
        */
        const filtraYpe = produtos.filter(produtos =>produtos.name.includes("Ypê"))
        
        console.log(filtraYpe)
        /*        
        e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
        
      