import React, {useState} from 'react'
import './style.css'
import {ItemLista, MyForm} from '../NovoPost/style';
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

function Post(props){
   
  const [itens,setItens]=useState([
    {nomeUsuario:"Caio",fotoUsuario:URL,fotoPost:URL},
    {nomeUsuario:"Caio",fotoUsuario:URL,fotoPost:URL},
    {nomeUsuario:"Caio",fotoUsuario:URL,fotoPost:URL},
    {nomeUsuario:"Caio",fotoUsuario:URL,fotoPost:URL}
   
  ])

  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputName,setInputName]=useState('');
  const [inputFotoUsuario,setInputFotoUsuario]=useState();
  const [inputFotoPost,setInputFotoPost]=useState();

  const mudaNome=(event)=>{
    setInputName(event.target.value)
    console.log();
    console.log(inputName);
  }

  const mudaFotoUsuario=(event)=>{
    setInputFotoUsuario(event.target.value)
    console.log();
    console.log(inputFotoUsuario);
  }

  const mudaFotoPost=(event)=>{
    setInputFotoPost(event.target.value)
    console.log();
    console.log(inputFotoPost);
  }

  const adicionar=(e)=>{
    e.preventDefault()
    const itensAtualizados=[...itens,{nomeUsuario:inputName,fotoUsuario:inputFotoUsuario,fotoPost:inputFotoPost}]
    setItens(itensAtualizados)
    console.log("botão precionado");
    setInputName("")
    setInputFotoUsuario()
    setInputFotoPost()
  }

  const remover=(indexRemover)=>{
    const itensAtualizados=itens.filter((item,index)=>{
        return index!==indexRemover;
    })
    setItens(itensAtualizados)
  }
 
  const onClickCurtida = () => {
    if (setCurtido(!curtido)){
      setNumeroCurtidas(numeroCurtidas - 1) 
    }else{
      setNumeroCurtidas(numeroCurtidas + 1)
    } 
  }

  const onClickComentario = () => {
      setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto    
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

  let componenteComentario
    
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }else{
      console.log(SecaoComentario.placeholder)
    }

  const itensNaLista=itens.map((item,index)=>{
    return(
      <ItemLista key={index}>
          <div>
              <div>
                <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
                <p>{item.nomeUsuario}</p>    
              </div>             
              <p>
                <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>
                <div className = 'PostFooter'>
                  <IconeComContador
                    icone={iconeCurtida}
                    onClickIcone={onClickCurtida}
                    valorContador={numeroCurtidas}
                  />

                  <IconeComContador
                    icone={iconeComentario}
                    onClickIcone={onClickComentario}
                    valorContador={numeroComentarios}
                  />
              
                </div>
              <div>
                {componenteComentario}
              </div>
              </p>
            <button onClick={()=>remover(index)}>X</button>
          </div>
      </ItemLista>
    )
  })

  return(
    <>

      <MyForm action="">
        <input type='text' required placeholder='nome' value={inputName} onChange={mudaNome}></input>
        <input type='img' required placeholder='Foto Usuário' value={inputFotoUsuario} onChange={mudaFotoUsuario}></input>
        <input type='img' required placeholder='Post' value={inputFotoPost} onChange={mudaFotoPost}></input>
        <button onClick={adicionar}>Adicionar</button>
      </MyForm>
      <ul>
        {itensNaLista}
      </ul>
    
    </>
  )
}

export default Post