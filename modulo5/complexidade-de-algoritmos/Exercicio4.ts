/*------------Exercício 4 -----------------------*/

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

/*A complexidade deste algoritmo é O(n^2), onde n é o número de elementos na lista "listOfNumbers". 
O motivo é que o algoritmo percorre a lista "listOfNumbers" duas vezes. Dentro do loop "for",
o método "indexOf" é usado para verificar se o elemento atual é igual a qualquer elemento anterior na lista.
O método "indexOf" é executado no máximo n vezes dentro do loop "for", pois a lista tem no máximo n elementos.
Mas dentro do método "indexOf" há outro loop para percorrer a lista a partir do início procurando pelo elemento, portanto,
a complexidade de tempo total é n x n = n^2. Portanto, a complexidade do algoritmo é quadrática.
O pior caso seria quando não houver elementos repetidos e o loop tiver que percorrer toda a lista.*/