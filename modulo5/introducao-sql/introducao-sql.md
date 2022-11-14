CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


-- Exercício 1
-- 1)A) O varchar é utilizado para representar strings.
--      Data representa que é uma data
--      a Primary key representa o id

-- b) O show database me retorna as informações meu registro no SQL
-- O show tables me retorna informções de arquivos que eu criei

-- Exercício 2

-- 2)A) 

insert into Actor(id, name, salary, birth_date , gender)
values("002","Glória Pires", 1200000, "1963-08-23", "female");

-- B) Entrada duplicada para a chave 002. O bloqueio do comando aconteceu por conta do ID ja ser registrado, e como ele é uma chave primária, ele deve ser único.

-- C) Foi passado mais valores que não foram especificados no parâmetro do INSERT

insert into Actor(id,name,salary, birth_date, gender)
values("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

-- D) O nome Values não foi passado

insert into Actor(id,name,salary, birth_date, gender)
values("004", "Tony Ramos",400000,"1949-04-18", "male" );

-- E) A data de nascimento não foi passada como string (em aspas)

insert into Actor(id,name,salary, birth_date, gender)
values("005", "Juliana Paes",719333.33,"1979-03-26","female" );

-- F) 

insert into Actor(id,name,salary, birth_date, gender)
values("006", "juliano manzano", 1000000, "1992-05-26", "male");


-- Exercício 3

-- A) 
   select * from Actor 
   where gender = "female";

-- B) 
	select * from Actor 
    where name = "Tony Ramos";
    
-- C) veio vazio porque nenhum usuário foi definido como invalid

	select * from Actor 
	where gender = "invalid";
    
-- D)  
	
    select id, name, salary from Actor
    where salary > 500000;
 
-- E)  O parâmetro foi passado como "nome" ao inves de "name"

	select id,name from Actor
    where id = "002";
    
-- Exercício 4

-- A) Ela imprime as informações de atores que comecem com A ou J e o salário maior que 300000

-- B) 

	select * from Actor
    where name not like "a%" and salary > 350000;
    
-- C)
	
    select * from Actor
    where name like "%g%" or "%G%";
    
-- D) 
	
    select * from Actor
    where (name like "%a%" or name like "%g%" and salary between 350000 and 950000);
	

-- Exercício 5

-- A) O valor text serve para uma string de até 2gb de tamanho.

	create table filmes(
	id varchar(255) primary key,
    nome varchar(255) not null,
    sinopse text not null,
    release_date date not null,
    rating int not null
	);
    
    -- B)
    insert into filmes(id, nome, sinopse, release_date, rating)
    values(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    06/01/2006,
    7
    );
    
    -- C)
    
    insert into filmes(id, nome, sinopse, release_date, rating)
    values(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    27/12/2012,
    10
    );
    
   -- D)
   
   insert into filmes(id, nome, sinopse, release_date, rating)
    values(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    02/11/2017,
    8
    );
    
-- E)
    
    insert into filmes(id, nome, sinopse, release_date, rating)
    values(
    "004",
    "toy story",
    "Brinquedos que falam e vivem suas vidas kk",
    22/12/1995,
    8
    );
-- Exercício 6

-- A) 
  
	select id, nome, rating from filmes
    where id = "004";
    
-- B) 

	select * from filmes 
    where nome = "Doce de mãe";
    

-- C) 

	select id, nome, sinopse from filmes
    where rating >= 7;
    
-- Exercício 7

-- A) 

	select * from filmes 
    where nome like "%vida%";
    
-- B) 

	select * from filmes
    where nome like "%Dona Flor e Seus Dois Maridos%" or sinopse like "%Dona Flor e Seus Dois Maridos%";
    
-- C) 

	select * from filmes
    where release_date < "2022-05-04";
    

-- D) 

	select * from filmes
    where (nome like "%Dona Flor e Seus Dois Maridos%" or sinopse like "%Dona Flor e Seus Dois Maridos%") and rating > 7;
    
    
    
    
    
   
    
    
    
    
    

	
    
    


    
    
    
    
    



