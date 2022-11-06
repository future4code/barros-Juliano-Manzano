import express,{Request,Response} from "express"
import cors from "cors"
import { users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

///////////////Exercício1

///////A) metodo get. 
///////B) indicaria como users.

type user = {
    id:number,
    name: string,
    email:string,
    type: string,
    age: number
}



app.get("/users", (req:Request, res:Response) =>{
   res.send(users)
})

/////////////////Exercício2

///////A) nenhum parametro.
///////B) garantindo que apenas o type fosse passado utilizando o if.  

app.get("/users/types", (req: Request, res: Response)=>{
    let errorCode = 400
    try{
    const {type} = req.query    
    const admins = users.filter((user) =>{
        if(user.type === type){
            return users
        }
    })

    res.send(admins)

    }catch(error:any){
        res.status(errorCode).send("usuario não encontrado")
    }
})

/////////////////Exercício3

////////A) req.params

////////B)

app.get("/users/:name", (req: Request, res:Response)=>{
    let name : string = req.params.name as string
    let errorCode: number = 400

    try{
     const getName = users.find((user)=>{
       return user.name.toLowerCase() === name.toLowerCase()
     })  
     
     if(!getName){
         errorCode = 404
         throw new Error("Nome não encontrado")
     }
     res.status(200).send(getName)

    }catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
})

//Exercício4

app.post("/addUsers", (req: Request, res: Response) =>{
    let errorCode = 400

    const NewUser: user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        age: req.body.age
    }

    try{

        if(!NewUser.id){
            errorCode = 404
            throw new Error ("id vazio")
        }else if(!NewUser.name || NewUser.name == ""){
            errorCode = 404
            throw new Error ("nome vazio")
        }else if (!NewUser.email || NewUser.name == ""){
            errorCode = 404
            throw new Error ("email de entrada vazio")
        }else if (!NewUser.type || NewUser.name == ""){
            errorCode = 404
            throw new Error ("tipo vazio")
        }else if (!NewUser.age || NewUser.age <= 0){
            errorCode = 404
            throw new Error ("verifique se a idade é maior que 0")
        }
        users.push(NewUser)
        res.send(users)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
  });