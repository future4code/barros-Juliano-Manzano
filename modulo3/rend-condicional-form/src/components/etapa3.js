import React from "react";


function etapa3() {
  return (
    <div className="App">
      <>
      <h1>Ensino Superior</h1>
      <div>
        <form>
            <label>
                5. Por que você não terminou um curso de graduação?
            <input type='text' name="nome" placeholder="Seu Nome:"></input>
                6. Você fez algum curso complementar?
                <select name="complementar">
                <option value="">Selecione</option>
                <option value="1">Curso Técnico</option>
                <option value="2">Curso de Idioma</option>
                <option value="3">Não fiz curso complementar</option>
            </select>

            </label>
           
        </form>
      
      </div>
      
      </>
    </div>
  );
}

export default etapa3;