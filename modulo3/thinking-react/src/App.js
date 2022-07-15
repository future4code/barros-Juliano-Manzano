import React, { useState } from 'react';
import { BottaoTarefa, DivFormNovaTarefa, DivPai, FormNovaTarefa, HeaderApp, InputTarefa, ListaTarefas } from './style'
import { DadoDeTarefas } from './mockDados';

                              // App  
            // form                       // lista de tarefas
// inputTarefas   //botão                      // item da tarefa

function App() {
  // Passo 3: identificar os nossos estados
  const [produto, setProduto] = useState("")
  const [preco, setPreco] = useState(Number)
  const [image, setImage] = useState('URL')
  const [listaDeProdutos, setListaDeProdutos] = useState(DadoDeTarefas)
  
  const handleProduto = (e) => {
    setProduto(e.target.value)
  }

  // Passo 4: entender onde os nossos estados moram
  // criar a atualização de estado do nosso form
  const addProduto = (e) => {
    e.preventDefault()
    // pegar o tarefa
    const novoProduto = {id: "", Produto: produto, Preço: preco, Foto: image}
    // adicionar na lista, gerar uma nova lista
    const novaListaDeProdutos = [...listaDeProdutos, novoProduto]
    // atualizar o estado da lista
    setListaDeProdutos(novaListaDeProdutos)
  }

  const mostrarListaDeProdutos = listaDeProdutos.map((Produto, index) => {
    return <li key={index}>{Produto.nome}{Produto.nome}</li>
        
  })

  // Passo 2: criar uma versão estática da aplicação
  return (
    <DivPai>
      <HeaderApp></HeaderApp>
      <DivFormNovaTarefa>
        <FormNovaTarefa>
          <InputTarefa
            placeholder='Insira uma nova tarefa'
            // Passo 3: identificar os estados
            value={produto}
            onChange={handleProduto}
          />
          <BottaoTarefa onClick={addProduto}>Adicionar tarefa</BottaoTarefa>
        </FormNovaTarefa>
      </DivFormNovaTarefa>

      <ListaTarefas>
        <ul>
          {mostrarListaDeProdutos}
        </ul>
      </ListaTarefas>
    </DivPai>
  );
}

export default App;
