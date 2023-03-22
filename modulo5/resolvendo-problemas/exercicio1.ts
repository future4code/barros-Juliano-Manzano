/*Exercício 1

O método que determina se uma string é 'one edit' de outra,
 considerando as operações permitidas de adicionar, remover ou substituir um caractere:*/

 function isOneEditAway(str1: string, str2: string): boolean {
    const len1 = str1.length;
    const len2 = str2.length;
  
    // Verifica se a diferença no tamanho das strings é maior do que 1
    if (Math.abs(len1 - len2) > 1) {
      return false;
    }
  
    let edits = 0;
    let i = 0;
    let j = 0;
  
    // Percorre as duas strings ao mesmo tempo, comparando os caracteres
    while (i < len1 && j < len2) {
      if (str1[i] !== str2[j]) {
        edits++;
        if (edits > 1) {
          return false;
        }
  
        // Verifica se deve adicionar, remover ou substituir um caractere
        if (len1 > len2) {
          i++;
        } else if (len2 > len1) {
          j++;
        } else {
          i++;
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
  
    // Verifica se ainda sobraram caracteres em apenas uma das strings
    if (i < len1 || j < len2) {
      edits++;
    }
  
    // Retorna true se a string é 'one edit' da outra
    return edits === 1;
  }

  
  /*O método isOneEditAway recebe duas strings como parâmetro e retorna um valor booleano indicando se a primeira string é
   'one edit' da segunda. Ele verifica se a diferença no tamanho das strings é maior do que 1, já que nesse caso não é possível
    transformar uma string na outra com apenas uma operação. Depois, percorre as duas strings ao mesmo tempo, comparando os caracteres em cada posição.
     Se um caractere for diferente, ele incrementa o contador de edições e verifica se já passou de 1, retornando false em caso positivo.
      Em seguida, verifica se deve adicionar, remover ou substituir um caractere, de acordo com o tamanho das strings.
   Por fim, verifica se ainda sobraram caracteres em apenas uma das strings e retorna true se a string é 'one edit' da outra.*/