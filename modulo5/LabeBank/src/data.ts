export type USER = {
    id:number,
    name:string,
    cpf:string,
    birthDate:string,
    balance:number,
    extract: TRANSACTIONS
}

type TRANSACTIONS ={
    value:number,
    date:string,
    desc:string
}

export const usersData:USER[]=[
    {
        id: 1,
        name: "Juliano Manzano",
        cpf: "111.111.111-11",
        birthDate: "26/05/1992",
        balance:1340,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
    {
        id: 2,
        name: "Franciane Mariano",
        cpf: "222.222.222-22",
        birthDate: "04/12/1962",
        balance:438,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
    {
        id: 3,
        name: "Paulo Pereira",
        cpf: "333.333.333-33",
        birthDate: "05/04/1998",
        balance:0,
        extract: {
            value: 0,
            date: "",
            desc: ""
        }
    },
]