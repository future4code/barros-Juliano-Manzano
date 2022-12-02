# EXERCÍCIOS

# 1.a.
Nós retornamos um objeto com várias informações além dos dados, por isso devemos pegar o primeiro index deste objeto para pegar as informações.

# 1.b. 
const GetActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actor WHERE name = '${name}'
    `)

    return result[0][0]
}

# 1.c.
const CountActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM actor WHERE gender = '${gender}'
    `);
    const count = `${gender} - ${result[0][0].count}`
    return count
}

# 2.a.
const UpdateActorSalary = async (
    id: string,
    salary: number
): Promise<void> => {
    await connection
        .update({ salary: salary })
        .from('actor')
        .where({ id: id })
};

# 2.b.
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

# 2.c.
const GetActorSalaryByGender =async (gender:string):Promise<any> => {
    const salaryAvg = await connection('actor')
        .avg('salary as average')
        .where({gender})

        const avg = `Sexo: ${gender} - Média: ${salaryAvg[0].average}`

        console.log(avg)

        return avg
}

# 3.a.
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

# 3.b.
app.get('/actor', async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string

        res.status(200).send(await CountActorsByGender(gender))
    }
    catch (err: any) {
        res.status(500).end("Houve algo de errado.")
    }
})

# 4.a.
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

# 4.b.
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