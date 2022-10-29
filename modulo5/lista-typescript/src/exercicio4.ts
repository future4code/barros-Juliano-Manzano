enum SECTOR {
    MARKETING = "marketing",
    SALES = "vendas",
    FINANCe = "finamceiro"
}
type employee = {
    name:string,
    salary:number,
    sector: SECTOR,
    homeOffice: boolean
}


const employees: employee[] = [
    { name: "Marcos", salary: 2500, sector:SECTOR.MARKETING, homeOffice: true },
	{ name: "Maria" ,salary: 1500, sector: SECTOR.SALES, homeOffice: false},
	{ name: "Salete" ,salary: 2200, sector: SECTOR.FINANCe, homeOffice: true},
	{ name: "João" ,salary: 2800, sector:SECTOR.MARKETING, homeOffice: false},
	{ name: "Josué" ,salary: 5500, sector: SECTOR.FINANCe, homeOffice: true},
	{ name: "Natalia" ,salary: 4700, sector: SECTOR.SALES, homeOffice: true},
	{ name: "Paola" ,salary: 3500, sector:SECTOR.MARKETING, homeOffice: true }

]

function selecteEmployee () {
    employees.filter((employee) =>{
        if(employee.sector === SECTOR.MARKETING && employee.homeOffice === false){
            const list = [employee]
            console.table(list)
        }
            

    })
}
selecteEmployee()

