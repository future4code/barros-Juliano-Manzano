function compressString(str: string): string {
    let compressed = '';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      count++;
  
      if (i + 1 >= str.length || str[i] !== str[i + 1]) {
        compressed += str[i] + count;
        count = 0;
      }
    }
  
    return compressed.length < str.length ? compressed : str;
  }

  
  /*O método compressString recebe uma string como parâmetro e retorna uma versão comprimida da mesma,
   usando a contagem dos caracteres repetidos em sequência. Ele percorre a string, mantendo um contador que é incrementado
    a cada vez que um caractere se repete em sequência. Quando encontra um caractere diferente, ele adiciona o caractere atual e o contador
     na string comprimida e zera o contador. No final, o método verifica se o tamanho da string comprimida é menor do que o tamanho da string 
     original e retorna a string comprimida se sim, ou a string original se não.
   Por exemplo, ao chamar compressString('aabbbcccaaa'), o método retorna a2b3c3a3,
    enquanto que ao chamar compressString('abc'), o método retorna abc, já que a string comprimida teria tamanho maior do que a string original.*/