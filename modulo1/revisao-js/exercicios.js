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
  
  let parElevado = function (numero1) {
    return (numero1 % 2 ===0);
    }
    let numerosParElevado = array.filter(parElevado);
  let quadrados = numerosParElevado.map(function(item){
     return Math.pow(item, 2); //retorna o item elevado ao quadrado
  });
  
  return quadrados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let max = array.reduce(function(a, b) {
  return Math.max(a, b);
})
return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numero
let diferenca
let modulo
if(num1 >num2){
  numero=num1
  diferenca = num1 - num2
  modulo = num1 % num2 ===0
}else{
  numero = num2
  diferenca = num2 - num1
  modulo = num2 % num1 ===0
}
doisnumeros = {
  maiorNumero: numero,
  maiorDivisivelPorMenor: modulo,
  diferenca: diferenca
}
return doisnumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return "Equilátero";
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
} else {
    return "Isósceles";
}
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
  consultas.sort((a, b) => {
    if (a.nome < b.nome) {
        return -1;
    } else {
        return true
    }
})
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort((a,b ) => {
    if (a.dataDaConsulta < b.dataDaConsulta) return -1;
  })
  return consultas
}