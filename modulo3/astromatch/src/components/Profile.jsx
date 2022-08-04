import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark, faEraser } from "@fortawesome/free-solid-svg-icons";

const aluno = "juliano";

const ContainerPrincipal = styled.div`
 //display: flex;
 //flex-direction: center;

//border: 1px solid black;
//padding:0 1em;
// height: 50%;
// width: 50%;
// margin:0 auto;
}
// button{
//     margin-top:80%;
// }

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: purple;
  }
}

.botoes {
  text-align: center;
}
`;

const Perfil = styled.div`
  position: relative;
  margin: 0 auto;
  box-shadow: 0px 0px 4px 1px #707070;
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const Bio = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  padding: 0.5em;

  // word-wrap: wrap;

  h2 {
    display: inline;
    opacity: 1;
    background: black;
    padding: 0.2em;
  }

  p,
  span {
    background: black;
    padding: 0.2em;
  }
`;
const Rodape = styled.p`
  text-align: center;
`;

const Like = styled.button`
  border: 1px solid red;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5em;
  color: red;

  &:hover {
    background: red;
    color: white;
  }
`;

const ListaMatches = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5em;
  color: pink;
  &:hover {
    color: red;
  }
`;

const Filtro = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;
`;

const Dislike = styled.button`
  border: 1px solid gray;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5em;
  color: gray;

  &:hover {
    background: gray;
    color: white;
  }
`;

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const [deuMacth, setDeuMacth] = useState(true);
  const [naoGostou, setNaoGostou] = useState(false);
  const [escolheu, setEscolheu] = useState(false);

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
  }, [escolheu]);

  const gosta = (gostou) => {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: profile.id,
          choice: gostou,
        }
      )
      .then((response) => {
        setEscolheu(!escolheu);
      });
  };

  const clear = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
      )
      .then((response) => {
        setEscolheu(!escolheu);
      });
  };

  return (
    <div>
      <ContainerPrincipal>
        <header>
          <ListaMatches onClick={() => props.renderizacao("ListaMatches")}>
            <FontAwesomeIcon icon={faHeart} />
          </ListaMatches>
          <h3>astromatch</h3>
          <Filtro onClick={clear}>
            <FontAwesomeIcon icon={faEraser} />
          </Filtro>
        </header>
        <Perfil>
          <img src={profile.photo} alt="perfil" />
          <Bio>
            <h2>
              {profile.name}, {profile.age}
            </h2>
            <p>{profile.bio}</p>
          </Bio>
        </Perfil>
        <Rodape>
          <Like onClick={() => gosta(true)}>
            <FontAwesomeIcon icon={faHeart} />
          </Like>
          <Dislike onClick={() => gosta(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </Dislike>
        </Rodape>
      </ContainerPrincipal>
    </div>
  );
};

export default Profile;
