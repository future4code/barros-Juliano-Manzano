function factorial (palavra: string): void {
    const fatorial = palavra.length;
    let resultado = fatorial;
    for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
    console.log(resultado);
}

factorial("juliano")