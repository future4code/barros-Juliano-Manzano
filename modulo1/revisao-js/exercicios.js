// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  /* listaDeCores=["azul", "Amarelo", "Vermelho"]
    return array.length*/
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 /* arrayInverte=[0,8,23,16,10,15,41,12,13]
  return array.reverse()*/
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    /*
      array.sort((a, b)=> a - b)
        return array*/
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*let pares = function (numero) {
    return (numero % 2 ===0);
    }
    let numerosPar = array.filter(pares);
    return numerosPar*/
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  
  /*let parElevado = function (numero1) {
    return (numero1 % 2 ===0);
    }
    let numerosParElevado = array.filter(parElevado);
  let quadrados = numerosParElevado.map(function(item){
     return Math.pow(item, 2); //retorna o item elevado ao quadrado
  });
  
  return quadrados*/
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 /* let max = array.reduce(function(a, b) {
  return Math.max(a, b);
})
return max*/
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
/*let numero
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
return doisnumeros*/
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let pares = function (numero) {
    return (numero % 2 ===0);
    }
    let numerosPar = n.filter(pares);
    let novoArray= numerosPar.reduce(function(a, b) {
      return novoArray.max(a, b);
 })
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 /* if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return "Equilátero";
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
} else {
    return "Isósceles";
}*/
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let n = [2,32,5,12,1,0,28,29,369,325,23,22,44,]
  let menor = Math.min.apply(Math,n)
  n.sort(function(a,b){
    if(a>b){
      return 1
    }else if(a<b){
      return -1
    }
    return 0
  })
  let menor2 = n[1]
  let maior = Math.max.apply(Math,n)
  let maior2 = []
  for(let i =0;i<n.length;i++){
    if(n[i]>maior2 && n[i]!=maior){
      maior2=n[i]
    }
  }
  return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let texto = ""
   for(let ator of filme.atores){
     texto+=ator+","

   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.ator[0]}, ${filme.ator[1]}, ${filme.ator[2]} e ${filme.ator[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaNova = {
     ...pessoa,
     nome: "Anônimo"
   }
   return pessoaNova
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let autorizado = []
   for(let pessoa of pessoas){
     if((pessoa.idade>14&& pessoa.idade<60)&& pessoa.altura>=1.5){
       autorizado.push(pessoa)
     }
   }
   return autorizado
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizado = []
  for(let pessoa of pessoas){
    if((pessoa.idade<=14 || pessoa.idade>=60||pessoa.altura<=1.5)){
      naoAutorizado.push(pessoa)
    }
  }
  return naoAutorizado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
for (let i = 0; i <contas.length; i++){
  let entradas = []
  calculaSaldo (contas)
  function calculaSaldo (utilizador) {
    utilizador[i].compras.forEach(nr => entradas.push(nr*-1)) 
    };
    function somaNumeros() {
      return numeros.reduce((sum,nr)=> {
        return sum + nr;
      }, 0);
    }
    contas[i].compras = []
    contas[i].saldoTotal +=somaNumeros(entradas)
  }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let totalDivida = 0
  let saldoAtual
  for (let i=0; i<contas.compras.length; i++) {
    totalDivida += contas.compras[i];
  }
  for (let i = 0; i<contas.saldoTotal.length; i++) {
    saldoAtual = totalDivida - contas.saldoTotal[i];
  } 
  return saldoAtual
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 for (let i=0;i<3;i++){
   consultas.sort((a,b) =>a.dataDaConsulta.split('/')[i]>b.dataDaConsulta.split('/')[i]? 1:a.dataDaConsulta.split('/'))
 }
 return consultas
}