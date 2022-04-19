// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const ladoA = Number(prompt("Insira a altura de um retângulo"))
  const ladoB = Number(prompt("Insira a largura do retângulo"))
 let area = ladoA*ladoB
 console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira o ao de seu nascimento"))
 let idade1 = anoAtual - anoNascimento
 console.log(idade)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome1 = prompt("Qual é o seu nome ?")
  let idade = Number(prompt("Quantos anos você tem ?"))
  let email1 = prompt("Qual é o seu e-mail ?")
  
  arrayUsuario = [nome1, idade, email1];
  console.log("Meu nome é " + arrayUsuario[0] + ", tenho " + arrayUsuario[1]+" anos, e o meu email é "+arrayUsuario[2]+".");
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 
let cor1 = prompt("insira uma cor favorita")
let cor2 = prompt("insira a segunda cor favorita")
let cor3 = prompt("insira a terceira cor favorita")
arrayCores = [cor1,cor2, cor3]
console.log(cor1)
console.log(cor2)
console.log(cor3)
console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
console.log(string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 
const condicao = string1==string2
console.log(condicao)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}