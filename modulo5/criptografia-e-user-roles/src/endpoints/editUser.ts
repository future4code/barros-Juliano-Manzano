import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { authenticationData, USER_ROLES } from "../types";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body
      const token = req.headers.authorization as string

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }
      if(!token){
         res.statusCode = 401
         res.statusMessage = "Token nao passado"
         throw new Error("Por favor envie um token")
      }

      const authenticator: Authenticator = new Authenticator() 
      const tokenData = authenticator.GetTokenData(token)
      if(!tokenData) {
         res.statusCode = 401
         res.statusMessage = "Token invalido"
         throw new Error("Usuário deslogado")
      }

      console.log(`id: ${tokenData.id}, role:${tokenData.role}`)
      if(tokenData.role !== USER_ROLES.ADMIN){
         res.statusCode = 403
         throw new Error("Sem permissão de acesso")
      }

      await connection('Users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error:any ) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }else{
         res.send({message: error.message || error.sqlMessage})
      }

      res.end()
   }
}