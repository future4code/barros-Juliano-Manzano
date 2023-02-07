import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user, USER_ROLES } from "../types";
import { HashManager } from "../services/HashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname, email, password, role } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('Users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      let idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()


       const hashPassword: HashManager = new HashManager() 
       const cypherPassword = await hashPassword.generateHash(password)


      await connection('Users')
         .insert({ 
            id,
            name, 
            nickname,
            email,
            password: cypherPassword,
            role
         
         })


      const authenticator: Authenticator = new Authenticator()
      const payload:authenticationData = {
         id: id,
         role: role
      }
      const token = authenticator.GenerateToken(payload)
      res.status(201).send({ token })

   } catch (error:any) {

     res.send(error.sqlMessage || error.message)
   }
}