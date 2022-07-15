import React, {useState} from "react";
import {ItemLista, MyForm,} from '../style';

const Exercicio=()=>{
    /////////////////////alteração dos itens 
    const [itens,setItens]=useState([
        {nome:"",menssagem:""},
        
    ])

    const itensNaLista=itens.map((item,index)=>{
        return(
            
                <ItemLista key={index}>
                  <div>
                    <span>
                        <p>{item.nome}</p>
                        <p>{item.menssagem}</p>
                    </span>                  
                  </div>
                </ItemLista>
            
            
        )
    })

    /////////////////////////aula 2 list 

    const [inputName,setInputName]=useState('');
    const [inputMenssagem,setInputMenssagem]=useState('');

    const mudaNome=(event)=>{
        setInputName(event.target.value)
        console.log();
        console.log(inputName);
    }

    const mudaMenssagem=(event)=>{
        setInputMenssagem(event.target.value)
        console.log();
        console.log(inputMenssagem);
    }

    const adicionar=(e)=>{
        e.preventDefault()
        const itensAtualizados=[...itens,{nome:inputName,menssagem:inputMenssagem}]
        setItens(itensAtualizados)
        
        setInputName()
        setInputMenssagem("")
    }
    
    return(
        <>
         <ul>
            {itensNaLista}
        </ul>
        <MyForm action="">
            

            <div className="rem">
             <h3>Remetente:</h3>
                <input type='text' required placeholder='Usuário' value={inputName} onChange={mudaNome}></input>
            </div>

            <div className="msg">
                <h3>Remetente:</h3>
                <input type='text' required placejolder='Envie uma menssagem' value={inputMenssagem} onChange={mudaMenssagem}></input>
            </div>
            

           
            
            <button onClick={adicionar}>Adicionar</button>
    
        </MyForm>
       
        </>
    )///
}

export default Exercicio;