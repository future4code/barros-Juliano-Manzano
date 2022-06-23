import logo from './perfil-juliano.jpg';
import './App.css';

function App() {
  const msge='Olá!! Eu sou Juliano Manzano!'
  function alerta(){
    alert(`    Que esta noite
     lhe traga Paz
     e Serenidade.
     BOA NOITE!!`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{msge}</h1>
        <img src={logo} className="App-logo" alt="Perfil" />
        <p>
          Este é o meu primeiro site React.
        </p>
        <button className='btn' onClick={alerta}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
