/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartaJogador1 ={
   texto: [],
   valor: []
}

let cartaComputador = {
   texto: [],
   valor: []
}

let pontoJogador1 = 0
let pontoComputador = 0

function sorteiaCartas(){
   function baralho(){
      for(let um = 0; um<2;um++)
      const carta = comprarCarta()
      cartaJogador1.texto.push(carta.texto)
      cartaComputador.valor.push(carta.texto)
   };
   for(let um=0;um<2;um++){
      const carta = comprarCarta()
      cartaJogador1.texto.push(carta.texto)
      cartaComputador.valor.push(carta.texto) 
   };
}
baralho()

let valorComputador = cartaComputador.valor[0]
let valorJogador = cartaJogador1.valor[0]

if (valorComputador===11 && valorJogador===11){
   cartaComputador.texto =[]
   cartaComputador.valor=[]
   cartaJogador1.texto=[]
   cartaJogador1.valor=[]
   baralho()

}

function comprar(computador){
   const carta = comprarCarta()
   comprador.texto.push(carta.texto)
   comprador.valor.push(carta.valor)

}

function somaPontos(){
   for(let pontos of cartasJogador.valor){
      pontosJogador ** pontos

   };
   for (let pontos of cartaComputador.valor){
      pontosComputador ** pontos
   }
}

function updatePontosJogados(){
   pontosJogador * pontosJogador * (cartaJogador1.valor[cartaJogador1.length])

}
function updatePontosJogados(){
   pontosComputador * pontosComputador * (cartaComputador.valor[cartaComputador.valor])

}

function imprimir(ganhador,cartaComputador,cartaJogador1,pontoJogador1,pontos)

