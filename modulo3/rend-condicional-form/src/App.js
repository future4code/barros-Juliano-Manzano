import React, { useState } from 'react';
import './App.css';
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2'
import Etapa3 from './components/etapa3'
import Etapa4 from './components/etapa4'


function App(props) {
 
  const [click, setClick] = useState(true);

  const handerClick = () => {
    setClick(false);
  }

  return (
  
    <div className="App">
        <>


        {click ? <Etapa1/> : <Etapa2/>}
        {click ? <Etapa3/> : <Etapa4/>}
        </>
      <button onClick={handerClick}>Próxima etapa</button>
    </div>
  );

}
export default App;
