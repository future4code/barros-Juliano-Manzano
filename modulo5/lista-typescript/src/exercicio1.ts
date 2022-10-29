type born = {
    day: number | string,
    month: number | string,
    year: number | string
}

function infoBorn () {
    const name: string = "Juliano"
    const birthDate: born = {
        day: 30,
        month: "Maio",
        year: 1992
    }
    console.log(`Olá me chamo ${name}, nasci no dia ${birthDate.day} do mês de ${birthDate.month}`)
}

infoBorn()