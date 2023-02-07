import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.statusCode = 422;
            throw new Error("Por favor preencha 'email' e 'senha'")
        }

        const [user] = await
            connection('Users')
                .where({ email })


        if (!user || user.password !== password) {
            res.statusCode = 401;
            throw new Error("Credenciais inválidas")
        }

    

        

        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = {
            id: user.id,
            role: user.role
        }
        const token = authenticator.GenerateToken(payload)
        res.status(200).send(token)

    } catch (error) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.end()
        }
    }
}
