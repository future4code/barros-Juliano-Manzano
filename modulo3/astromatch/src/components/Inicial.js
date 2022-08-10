import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const aluno = "juliano";

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: center;
border: 1px solid black;
height: 100%;
width: 50%;
margin:0 auto;
}
button{
    margin-top:80%;
}
`;

export default function Inicial(props) {
  const [profile, setProfile] = useState({});
  const [deuMacth, setDeuMacth] = useState(true);
  const [naoGostou, setNaoGostou] = useState(false);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person/`
        )
        .then((response) => setProfile(response.data.profile))
        .catch((err) => console.log(err));
    };

    getProfile();
  }, []);

  const onClickMacth = () => {
    if (deuMacth) {
      setDeuMacth(deuMacth === true + 1);
    }
  };
  const onClickNaoMacth = () => {
    if (naoGostou) {
      setNaoGostou(naoGostou === false);
    }
  };

  
  return (
    <div>
      <ContainerPrincipal>
        <header>
          <p>
            Astromatch
          </p>
          <button onClick={()=> props.renderizacao("Pagina-macths")}>lista </button>
        </header>
        <div>
           <img src={profile.photo} alt = "perfil"/>
           
        </div>
        <button onClick={onClickMacth}> Deu macth</button>
        <button onClick={onClickNaoMacth}>não deu macth</button>
      </ContainerPrincipal>
    </div>
  );
}
