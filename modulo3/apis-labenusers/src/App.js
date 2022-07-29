/*import React from "react"
import axios from "axios"


export function App() {

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const header = {
    Authorization: "juliano-manzano-barros"
  }

  axios.get(url,{
    header
  }).then((response) =>{
    console.log(response.data);
  }).catch((error) =>{
    console.log(error.response.data);
  })
 
  return (
    <div className="App">

    </div>
  );

}

export default App;*/



import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [listaUsuario, setListaUsuario] = useState([]);
  const [meuInput, setMeuInput] = useState("");

  //Recebe dados do Input
  const atualizaInput = (event) => {
    setMeuInput(event.target.value);
  };
  const atualizaEmail = (event) => {
    setMeuInput(event.target.value);
  };

  useEffect(() => {
    getUsuario();
  }, []);

  //---------- Axios -----------
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  const myHeaders = {
    headers: {
      Authorization: "juliano-manzano-barros"
    }
  };
  //GET
  const getUsuario = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        //console.log(response.data.result.list);
        setListaUsuario(response.data.result.list);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };
  //POST
  const body = {
    name: meuInput
  };

  const postUsuario = (event) => {
    event.preventDefault();
    axios
      .post(url, body, myHeaders)
      .then(() => {
        alert("Usuário Adicionado com sucesso!");
        getUsuario();
      })
      .catch((erro) => {
        alert("Ops! Algo esta muito errado!");
        //console.log(erro.response);
      });
    setMeuInput("");
  };
  // //DELETE
  const deleteUsuario = (event) => {
    event.preventDefault();
    const deletarUsuario = listaUsuario.filter(
      (item) => item.name === meuInput
    );
    console.log(deletarUsuario[0].id);

    axios
      .delete(url + "/" + deletarUsuario[0].id, myHeaders)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        getUsuario();
        
      })
      .catch((erro) => {
        alert("Ops! Algo deu errado!");
        console.log(erro.response);
      });
    setMeuInput("");
  };

  return (
    <>
      <h1>Lista Usuário</h1>
      {listaUsuario.map((usuario) => {
        return <li key={usuario.id}>{usuario.name}</li>;
      })}
      {listaUsuario.map((usuario) => {
        return <li key={usuario.id}>{usuario.email}</li>;
      })}
      <form>
        <input type="text" value={meuInput} onChange={atualizaInput} />
        <input type="text" value={meuInput} onChange={atualizaEmail} />
        <button onClick={postUsuario}>Adicionar</button>
        <button onClick={deleteUsuario}>Excluir</button>
      </form>
    </>
  );
};
export default App;
