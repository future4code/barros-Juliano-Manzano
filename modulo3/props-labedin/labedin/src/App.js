import React from 'react';
import './App.css';
import perfil from './img/img-1.jpg'
import endereco from './img/endereco.png'
import email from './img/email.png'
import geoeste from './img/geoeste.png'
import aggreko from './img/aggreko.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Juliano Manzano" 
          descricao="Oi, eu sou o Juliano Manzano. Sou alunos da Labenu. Adoro codar e ver séries com minha família, há e não gosto do botinho não, ele dá muito trabalho."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
        <CardPequeno
        imagem={email} 
        descricao="E-mail:"
        desc='julianomanzano@julianomanzano.com'
        />
        <CardPequeno
        imagem={endereco} 
        descricao="Endereço:"
        desc='Rua josé fina, bairro Renascer, 6565, Cuiabá-MT, 78555-000'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={aggreko} 
          nome="AGGREKO" 
          descricao="Desenvolvimento e controle de hardware e software códigos C#, C++ e BD MySQL" 
        />
        
        <CardGrande 
          imagem={geoeste} 
          nome="GEOESTE" 
          descricao="Desenvolvimento hardware de controle lençol freático junto com a SEMA-MT" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
