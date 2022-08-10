import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ContainerLista = styled.div`

border: 1px solid black;
padding:.2em;

}

button {
  border: none;
  background:none;
  font-size: 1em;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  &:hover {
    background: lightgray;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: purple;
  }
}

img {
  height:40px;
width: 40px;
border-radius:50%;
margin-right: 1em;
}
ul {
  list-style-type: none;
  margin:0;
  padding:0;

  li{
margin:0.5em;
display:flex;
align-items: center;
cursor:pointer;
padding:0.5em;
&:hover{
  background:lightgray;
}

  }
}
`;
const aluno = "juliano";

const ListaMatches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((err) => err.response);
  }, []);

  return (
      <ContainerLista>
        <header>
          <h3>astromatch</h3>
          <button onClick={() => props.renderizacao("Profile")}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </header>
        <ul>
          {matches.map((matche) => {
            return (
              <li key={matche.id}>
                <img src={matche.photo} alt="perfil" />
                {matche.name}
              </li>
            );
          })}
        </ul>
      </ContainerLista>
  );
};
export default ListaMatches;
