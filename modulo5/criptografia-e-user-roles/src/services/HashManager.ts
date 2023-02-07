import * as bcrypt from "bcryptjs"

export class HashManager{
    generateHash = async(password: string) => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)

        const result = await bcrypt.hash(password, salt)
        return result
    }

    compare = async (password: string, hash1: string): Promise<boolean> =>{
        return bcrypt.compare(password,hash1)
    }  
}
