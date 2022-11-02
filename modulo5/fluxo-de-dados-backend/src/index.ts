import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { prod } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

////////////////////exercício 1

app.get('/test', (req:Request, res:Response)=>{
    try{
        res.status(200).send("Está tudo funcionando!")
    }
    catch(err){
        res.status(400).end("Deu algo de errado!")
    }
})
app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})

////////////////////exercício 2

app.get('/products', (req:Request, res:Response)=>{
    try{
        res.status(200).send(prod)
    }
    catch(err){
        res.status(400).end("Ocorreu algo de errado!")
    }
})

///////////////////exercício 3

//ok

///////////////////exercício 4

app.post('/products/create',(req:Request, res:Response)=>{
    try{
        const prodName = req.body.name
        const prodPrice = req.body.price

        if(!prodName || !prodPrice){
        throw new Error("Parâmetro inválido ou faltando!")
        }

        const newProd = {
            id: String(prod.length +1),
            name: prodName,
            price: prodPrice
        }
        prod.push(newProd)
        res.status(200).send(prod)
    }
    catch(err: any){
        res.status(400).end(err.message)
    }
})

///////////////////exercício 5

app.get("/getAllProducts", (req, res) => {
    try {
      if (!req.headers.authorization) {
        throw new Error("Sua autorização está errada. Verifique sua autorização")
      }
    } catch (error: any) {
      switch(error.message) {
        case "Sua autorização está errada. Verifique sua autorização":
          res.status(422).send(error.message)
          break
        default:
          res.status(500).send(error.message)
          break
      }
    }
    res.send(prod)
  }) 

////////////////////exercício 6

app.put('/products/edit', (req:Request, res:Response)=>{
    try{
        const prodId = req.body.id
        const newPrice = Number(req.body.price)

        for(const obj of prod){
            if(obj.id === prodId){
                obj.price = newPrice
            }
        }
        
        res.send(prod)
    }
    catch(err){
        res.status(400).end("Deu algo de errado!")
    }
})
////////////////////exercício 7

app.delete('/products/delete', (req:Request, res:Response)=>{
    try{
        const prodId = req.body.id

        if(!prodId){
            throw new Error("Id não encontrado!")
        }

        prod.forEach((produ, i)=>{
            if(produ.id === prodId){
                prod.splice(i, 1)
            }
        })

        res.status(200).send(prod)
    }
    catch(err:any){
        res.status(400).end(err.message)
    }
})

