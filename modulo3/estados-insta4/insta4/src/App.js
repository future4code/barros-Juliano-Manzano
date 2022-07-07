import React from 'react';
import Post from './components/Post/Post';
import './style.css'



function App() {
  return(
    <div className='MainContainer'>
          
      <Post        
        nomeUsuario={'João'}
        fotoUsuario={'https://picsum.photos/50/40'}
        fotoPost={'https://picsum.photos/190/150'}
      />
          
    </div>
  )
}

export default App;
