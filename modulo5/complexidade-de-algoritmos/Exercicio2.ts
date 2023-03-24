/*------------Exercício 2 -----------------------*/


export const func = (
    source: string,
    comparison: string
  ): boolean => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;
  
    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };




/*A complexidade deste algoritmo é O(n), onde n é o comprimento da string "comparison".
O motivo é que o algoritmo percorre cada caractere da string "comparison" uma vez e executa operações de tempo constante.
Portanto, a complexidade do algoritmo depende do comprimento da string "comparison" e não do comprimento da string "source",
que é usada apenas para calcular os limites de comparação com "comparison". 
As operações de comparação de strings (usando o operador "!==") têm complexidade de tempo O(m),
onde m é o comprimento da string mais longa, mas neste caso, como a comparação é feita com uma string fixa "source",
o valor de m é constante e pode ser considerado de tempo constante. O pior caso seria quando a string "comparison" 
tiver o mesmo comprimento da string "source" mais ou menos 1 caractere, e neste caso, 
o loop teria que percorrer todos os caracteres da string "comparison".*/