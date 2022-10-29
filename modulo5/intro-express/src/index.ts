import express from 'express'
import cors from 'cors'
import {Response, Request} from 'express'
import { postData, userData } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response) => {
    res.status(200).send("Deu tudo certo!")
})

app.get('/users', (req:Request, res:Response) =>{
    try{
        const usersData = userData
        res.status(200).send(usersData)
    }
    catch(err){
        res.status(400).end("Ocorreu algo de errado!")
    }
})

app.get('/posts', (req:Request, res: Response)=>{
    try{
        const postsData = postData
        res.status(200).send(postsData)
    }
    catch(err){
        res.status(400).end("Ocorreu algo de errado!")
    }
})

app.listen(3003,() => {
    console.log("Tudo funcionando!")
})