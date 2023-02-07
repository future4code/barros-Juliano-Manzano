import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import * as bcrypt from "bcryptjs"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)


//--------------------------------Exercício 1--------------------------------------------------

//A) Round é o tempo de execução de algoritmo, quanto maior o tempo mais seguro.Quanto mais tempo, mais a aplicacao carrega, diminuindo o desempenho
// logo, temos que ter um balanço entre tempo e segurança // Salt é uma string gerada aleatoriamente que é adicionada na senha para evitar rainbow table.


//B) 

  