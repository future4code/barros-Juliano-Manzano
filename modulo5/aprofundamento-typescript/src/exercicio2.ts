// a) A entrada é um array com 2 números, que são comparados e a saída é um array com 3 números do tipo any. 


// b)

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([2,7]))

// c)

type amostraDeDados = {
    numeros:number[],
    obterEstatisticas: any
}

const amostraDeIdades:amostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros:number) => {}
}
