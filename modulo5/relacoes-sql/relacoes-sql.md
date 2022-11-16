-- 1) A) Chave estrangeira interliga informações de tabelas diferentes

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
filmes_id VARCHAR(255),
FOREIGN KEY (filmes_id) REFERENCES filmes(id)
);

select \* from Rating;

-- B)

insert into Rating(id, comment, rate, filmes_id)
values (
"001",
"muito bom!",
6,
"004"
);

-- C) Ele fala que não pode criar porque uma chave estrangeira não consegue se conectar com aquele id (inexistente)

-- D)

alter table filmes drop column rating;

-- E) Ele diz que não pode deletar por causa da ligação da chave estrangeira

-- Exercício 2

-- A) foi criado uma tabela que serve como um intermediário para ligar os filmes

CREATE TABLE MovieCast (
filmes_id VARCHAR(255),
Actor_id VARCHAR(255),
FOREIGN KEY (filmes_id) REFERENCES filmes(id),
FOREIGN KEY (Actor_id) REFERENCES Actor(id)
);

-- B)

insert into MovieCast(filmes_id, Actor_id)
values("002","002");

insert into MovieCast(filmes_id, Actor_id)
values("003","003");

insert into MovieCast(filmes_id, Actor_id)
values("004","004");

-- c) Ele diz há uma falha na criação por não existir aquele valor, então quando ele tenta ligar um ao outro não consegue.

insert into MovieCast(filmes_id, Actor_id)
values("006","006");

-- D) Ele não pode apagar uma linha "parente" de outra por causa do FOREIGN KEY

delete from Actor
where id = "002";

-- Exercício 3

-- A) ON referencia uma condição

-- B)

select filmes.id, nome, rate from filmes
join Rating on filmes.id = Rating.filmes_id;

select \* from MovieCast;
