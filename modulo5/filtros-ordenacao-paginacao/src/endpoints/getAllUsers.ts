import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula48_exercicio")

      const User = result.map(toUser)

      res.status(200).send(User)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toUser = (input: any): recipe => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
     
   }
}