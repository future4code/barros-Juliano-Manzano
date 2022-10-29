type Account = {
    client: string,
    totalBalance: number,
    debt: number[]
}

const bank:Account[] =[
    { client: "João", totalBalance: 1000, debt: [100, 200, 300] },
	{ client: "Paula", totalBalance: 7500, debt: [200, 1040] },
	{ client: "Pedro", totalBalance: 10000, debt: [5140, 6100, 100, 2000] },
	{ client: "Luciano", totalBalance: 100, debt: [100, 200, 1700] },
	{ client: "Artur", totalBalance: 1800, debt: [200, 300] },
	{ client: "Soter", totalBalance: 1200, debt: [] }
]

function usersInDebt (contas:Array<Account>):Account[] {
   const contasAtualizadas = contas.map((item)=>{
    let debitoTotal = 0
    for( let i of item.debt){
        debitoTotal += i
    }
    return ({
        client: item.client,
        totalBalance: item.totalBalance - debitoTotal,
        debt:[]
    })

   })

   const filtraNegativos = contasAtualizadas.filter(item => item.totalBalance < 0)

   return filtraNegativos
}

console.table(usersInDebt(bank))

