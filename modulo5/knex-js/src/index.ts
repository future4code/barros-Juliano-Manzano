import connection from "./connection";
import app from "./app";
import { Response, Request } from "express";

const GetActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actor WHERE id = '${id}'
    `)
    return result[0][0]
}

const GetActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actor WHERE name = '${name}'
    `)

    return result[0][0]
}

const CountActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM actor WHERE gender = '${gender}'
    `);
    const count = `${gender} - ${result[0][0].count}`
    return count
}

const UpdateActorSalary = async (
    id: string,
    salary: number
): Promise<void> => {
    await connection
        .update({ salary: salary })
        .from('actor')
        .where({ id: id })
};

const GetActorSalaryByGender =async (gender:string):Promise<any> => {
    const salaryAvg = await connection('actor')
        .avg('salary as average')
        .where({gender})

        const avg = `Sexo: ${gender} - Média: ${salaryAvg[0].average}`

        console.log(avg)

        return avg
}

app.get('/salary/:gender', async (req:Request, res: Response)=>{
    try{
        const gender = req.params.gender

        res.status(200).send(await GetActorSalaryByGender(gender))
    }
    catch(err:any){
        res.status(500).end("Não deu bom.")
    }
})

app.get('/test', async (req: Request, res: Response) => {
    try {
        console.log("Está funcionando.")
    }
    catch (err: any) {
        console.log("Deu algo de errado.")
    }
})

app.get('/actor', async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string

        res.status(200).send(await CountActorsByGender(gender))
    }
    catch (err: any) {
        res.status(500).end("Houve algo de errado.")
    }
})

app.get('/actor/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = req.params.id
        if(!id){
            ErrorCode = 400
            throw new Error("Parâmetro 'id' não enviado.")
        }

        const idChecker = await connection('actor')
            .select()
            .where({ id: id })

        if (Object.entries(idChecker).length === 0) {
            ErrorCode = 422
            throw new Error("Id enviado não consta na database.")
        }

        res.status(200).send(await GetActorById(id))
    }
    catch (err: any) {
        res.status(ErrorCode).send(err.message)
    }
})

app.get('/actors/:name', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const name = req.params.name

        if(!name){
            ErrorCode = 400
            throw new Error("Parâmetro 'id' não enviado.")
        }

        const nameChecker = await connection('actor')
            .select()
            .where({ name: name })

        if (Object.entries(nameChecker).length === 0) {
            ErrorCode = 422
            throw new Error("Nome enviado não consta na database.")
        }

        res.status(200).send(await GetActorByName(name))
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

app.put('/actor/update', (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const { id, salary } = req.body

        if (!id || !salary) {
            ErrorCode = 400
            throw new Error("Algum parâmetro não foi enviado.")
        }

        UpdateActorSalary(id, salary)
        res.status(200).send("Salário alterado com sucesso.")
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    };
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = req.params.id

        if (!id) {
            ErrorCode = 400
            throw new Error("Parâmetro 'id' não enviado.")
        }

        const idChecker = await connection('actor')
            .select()
            .where({ id: id })

        if (Object.entries(idChecker).length === 0) {
            ErrorCode = 422
            throw new Error("Id enviado não consta na database.")
        }

        await connection('actor')
        .where({id:id})
        .delete()

        res.status(200).send(`Ator com id:${id} excluído com sucesso!`)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

app.post('/actor', async (req:Request, res:Response)=>{
    let ErrorCode = 500
    try{
        const { name, salary, birthDate, gender } = req.body

        if(!name || !salary || !birthDate || !gender){
            ErrorCode = 400
            throw new Error("Parâmetro necessário não foi enviado.")
        }
        await connection('actor')
        .insert({
            name,
            salary,
            birth_date:birthDate,
            gender
    })
    res.status(200).send("Dados cadastrados no banco de dados.")
    }
    catch(err:any){
        res.status(ErrorCode).end(err.message)
    }
})