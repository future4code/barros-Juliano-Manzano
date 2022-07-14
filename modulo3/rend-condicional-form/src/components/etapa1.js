import React from "react";


function etapa1(props) {
    

  return (
    <div>
      <>
      <h1>Dados Gerais</h1>
        <form>
            <label>
                1. Qual é o seu nome?
            <input type='text' name="nome" placeholder="Seu Nome:"></input>
                2. Qual é a sua idade?
            <input type='text' name="nome" placeholder="Seu Nome:"></input>
                3. Qual é o seu e-mail?
            <input type='text' name="nome" placeholder="Seu Nome:"></input>
                4. Qual a sua escolaridade?
            <select name="escolaridade">
                <option value="true">Selecione</option>
                <option value="false">Ensino Médio Incompleto</option>
                <option value="false">Ensino Médio Completo</option>
                <option value="true">Ensino Superior Incompleto</option>
                <option value="true">Ensino Superior Completo</option>
            </select>

            </label>
        </form>
      </>
    </div>
  );
}

export default etapa1;