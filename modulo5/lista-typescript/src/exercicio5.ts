type account = {
    name:string,
    email: string,
    role: Role
}

enum Role  {
    ADMIN = "admin",
    USER = "user"

}


const users:account[] = [
    {name: "Rogério", email: "roger@email.com", role: Role.ADMIN},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN} 

]

const filtraAlgo = () => { 
 users.filter((user) =>{
     if(user.role === Role.ADMIN){
         const list = [user.email]
         console.table(list)
     }
 })
}

filtraAlgo()






































