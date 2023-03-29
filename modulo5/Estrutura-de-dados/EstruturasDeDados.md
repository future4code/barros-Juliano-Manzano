# Estruturas de Dados


#### Exercício 1


```
add(element:any) {
   this.queue.push(element);
}

remove() {
   if (this.isEmpty())
       return "Underflow";
   return this.queue.shift();
}

```

A partir da análise dos métodos apresentados, podemos inferir que a estrutura sendo representada é uma fila (`queue`).

O método `add(element)` adiciona um elemento no final da fila, utilizando o método push do objeto `queue`.

Já o método `remove()` remove o elemento que está no início da fila, utilizando o método shift do objeto `queue`. Antes de remover o elemento, o método verifica se a fila está vazia, e, caso esteja, retorna a string "Underflow".

Portanto, podemos concluir que os métodos apresentados definem uma estrutura de dados do tipo fila.


#### Exercício 2 

```
add(value: any) {
  const node = new Node(value);
  if(!this.head){
    this.head = node;
  }else{
    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next=node;
  }
  this.size++;
}

remove(value:any){
  let current = this.head;
  let previous = null;
  while (current){
    if(current.value===value){
      if(!previous){
        this.head=current.next;
      }else{
        previous.next=current.next;
      }
      this.size--;
      return true;
    }
    previous=current;
    current=current.next;
  }
  return false;
}

```

A partir da análise dos métodos apresentados, podemos inferir que a estrutura sendo representada é uma lista encadeada (linked list).

O método add(value) adiciona um novo nó contendo o valor value ao final da lista encadeada. Caso a lista ainda não possua nenhum elemento, o novo nó se torna a cabeça (head) da lista. Caso contrário, o método percorre a lista até encontrar o último nó (current.next é null) e adiciona o novo nó como seu próximo nó (current.next = node).

Já o método remove(value) busca e remove o nó que contém o valor value da lista encadeada. Para isso, o método percorre a lista encadeada, mantendo um ponteiro para o nó atual (current) e outro para o nó anterior (previous). Quando o nó atual contém o valor value, o método atualiza os ponteiros para remover o nó da lista. Se o nó a ser removido é a cabeça da lista, o método atualiza a cabeça para o próximo nó (this.head = current.next). Caso contrário, o método atualiza o próximo nó do nó anterior para o próximo nó do nó atual (previous.next = current.next). Por fim, o método decrementa o tamanho da lista (this.size--).

Portanto, podemos concluir que os métodos apresentados definem uma estrutura de dados do tipo lista encadeada.



#### Exercício 3

```
add(element:any){
    this.stack.push(element);
}

remove(){
    if(this.isEmpty())
        return "Underflow";
    return this.stack.pop();
}


```

A partir da análise dos métodos apresentados, podemos inferir que a estrutura sendo representada é uma pilha (stack).

O método add(element) adiciona um elemento no topo da pilha, utilizando o método push do objeto stack.

Já o método remove() remove o elemento que está no topo da pilha, utilizando o método pop do objeto stack. Antes de remover o elemento, o método verifica se a pilha está vazia, e, caso esteja, retorna a string "Underflow".

Portanto, podemos concluir que os métodos apresentados definem uma estrutura de dados do tipo pilha.