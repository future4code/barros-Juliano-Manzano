import { app } from "./app";
import { Request, response, Response } from "express"
import { connection } from "./data/connection";
import { getAllUsers } from "./endpoints/getAllUsers"
import { user } from "./types";



//1)A)

app.get("/users", getAllUsers)


//B)

app.get("/users/:title", async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const title = req.params.title

        const result = await connection("aula48_exercicio")
        .where("name", "like" , `%${title}%`)

        if(!result.length){
            errorCode = 404
            throw new Error("Employee not found")
        }

        res.send(result)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


//Exercício 2

app.get("/firstUser", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        
        let name = req.query.name
        let type = req.query.type

        if(!name && !type){
            const result = await connection("aula48_exercicio")
            .orderBy("email", "asc")
            res.send(result)
         }

        
        const result = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .or
        .where("type", "like", `${type}`)
        .orderBy("name", "asc")


        if(!result.length) {
            erroCode = 404
            throw new Error("Employee Not Found")
        }

        res.send(result)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})


// app.get("/firstUser", async (req: Request, res: Response) => {
//     let erroCode = 400

//     try {
//         let title = req.query.title

//         if(title!== 'name' && title!== 'type'){
//             title = 'email'
//          }

        
//         const result = await connection("aula48_exercicio")
//         .select("*")
//         .orderBy(`${title}`, "asc")


//         if(!result.length) {
//             erroCode = 404
//             throw new Error("Employee Not Found")
//         }

//         res.send(result)

//     } catch (error:any) {
//         res.status(erroCode).send(error.message)
//     }
// })


//Exercício 3


app.get("/secondUser", async (req: Request, res: Response) => {
    let erroCode = 400

    try {

        let page = Number(req.params.page)
        const size = 5

        if(page < 1 || isNaN(page)){
            page = 1
        }

        let offset = (page - 1) * size

        const result = await connection("aula48_exercicio")
        .select("*")
        .limit(size)
        .offset(offset)

        if(!result.length){
            erroCode = 404
            throw new Error("User Not Found")
        }

        res.send(result)
        
    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }


})


//4) 

app.get("/secondUser", async (req: Request, res: Response) => {

    try {
        let name = req.query.name

        if (!name) {
            name = ""
        }

        let sort = req.query.sort as string

        if (!sort) {
            sort = "name"
        }

        let order = req.query.order

        if (order !== "asc" && order !== "desc") {
            sort = "name"
            order = "desc"
        }

        const size = 5
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let offset = (page - 1) * size

        const result = await connection("aula48_exercicio").where("name", "LIKE", `%${name}%`).orderBy(sort, order).limit(size).offset(offset)

        const users = result.map(toUser)

        res.status(200).send(users)


    } catch (error) {
        res.status(500).send("Internal server error")

    }

    
const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }


})




