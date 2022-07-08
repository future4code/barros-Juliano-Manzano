import './App.css';
import Exercicio from './components/Exercicio'
import {Header,Body,Footer} from './style'
import img from "./img/lbn.png";

function App() {
  return (
    <div className="App">
      
     
     <div>
      <Header>
       <div>
          <img src={img}></img>
          <p>WhatsLab</p>
        </div>
      </Header>
      
        <Body>
          <div>
          <Exercicio/>
          </div>
         
              
        </Body>
       
    </div>
    
      
      
      <Footer>
      <div>
        <p>
        Copyright&copy; 2022 Juliano Manzano All rights reserved. R. Coximba Itú, 263, Floripa, Cuiabá-MT. CEP 78555-030 
        </p>
      </div>
    </Footer>
</div>

  );/////
}

export default App;
