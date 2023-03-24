/*------------Exercício 3 -----------------------*/

export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };


/*A complexidade deste algoritmo é O(1), ou seja, tempo constante. 
O motivo é que o algoritmo executa um número fixo de operações independentemente do tamanho da entrada.
 As operações são apenas a verificação de se a posição da matriz está dentro dos limites, e a substituição do valor na posição indicada.
 Ambas as operações são de tempo constante, independentemente do tamanho da matriz.
 Portanto, a complexidade do algoritmo é sempre a mesma, não importa o tamanho da matriz de entrada.*/