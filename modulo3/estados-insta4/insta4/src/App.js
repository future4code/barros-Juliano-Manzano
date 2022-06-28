import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post        
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post        
            nomeUsuario={'João'}
            fotoUsuario={'https://picsum.photos/50/40'}
            fotoPost={'https://picsum.photos/190/150'}
          />
          <Post        
            nomeUsuario={'Mars'}
            fotoUsuario={'https://picsum.photos/60/50'}
            fotoPost={'https://picsum.photos/300/150'}
          />
  </div>
)

}


export default App;
