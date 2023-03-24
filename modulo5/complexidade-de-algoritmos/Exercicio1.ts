/*------------Exercício 1 -----------------------*/


const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  }; 





/*A complexidade do algoritmo é linear, O(n), onde "n" é o comprimento da entrada "input".
 Isso ocorre porque o algoritmo percorre cada caractere da entrada exatamente uma vez e executa operações
 de tempo constante (adicionar e verificar se um caractere já está no hash map).*/