import React from 'react';
/*import Lista from './components/ListaP/listas';*/
import Post from './components/Post/Post';
import './style.css'




function App() {

  const lis = [
  {
  	nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/45/50",
    fotoPost: <img src={"https://picsum.photos/45/50"} alt='' />
  },
  {
	  nomeUsuario: "João",
    fotoUsuario: "https://picsum.photos/50/40",
    fotoPost: "https://picsum.photos/190/150"
  },
  {
	  nomeUsuario: "Mars",
    fotoUsuario: "https://picsum.photos/60/50",
    fotoPost: "https://picsum.photos/300/150"
  }
]
const listaInsta4 = lis.map((item,index)=>{
  return (<Post key={index}>
    <div>
      {item.nomeUsuario}
      {item.fotoUsuario}
      {item.fotoPost}
    </div>
  </Post>)
})

console.log(lis);

return(
  <div className='MainContainer'>
    <>
    
    {listaInsta4}
    </>
               
  </div>
)

}


export default App;
