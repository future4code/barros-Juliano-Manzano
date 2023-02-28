import { performPurchase } from "../src/funcs/funcUser"

describe("Testando compra do usuário",() => {
    const user = {
        name: "Juliano Manzano",
        balance: 160
    }

    test("Usuário com saldo superior ao da compra!",() => {
        expect(performPurchase(user,20)).toEqual(
            {
                name: "Juliano Manzano",
                balance: 120
            }  
        )
    })

    test("Usuário com o mesmo saldo ao da compra!",() => {
        expect(performPurchase(user,160)).toEqual(
            {
                name: "Juliano Manzano",
                balance: 10
            }  
        )
    })

    test("usuário com o saldo menor do que o valor de compra",() => {
        expect(performPurchase(user,120)).toBeUndefined()
    })
})