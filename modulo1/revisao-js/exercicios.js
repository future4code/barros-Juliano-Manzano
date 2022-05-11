// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   listaDeCores=["azul", "Amarelo", "Vermelho"]
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  arrayInverte=[0,8,23,16,10,15,41,12,13]
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
      array.sort((a, b)=> a - b)
        return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = function (numero) {
    return (numero % 2 ===0);
    }
    let numerosPar = array.filter(pares);
    return numerosPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = function (numero1) {
        return (numero1 % 2 ===0);
        }
        let numerosPar1 = array.filter(pares)
        //let numerosPar2 = numerosPar1*
        const resultado = Math.pow(numerosPar1,2)
        return resultado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}