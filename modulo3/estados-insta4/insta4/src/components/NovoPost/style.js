import styled from 'styled-components'

export const ItemLista=styled.li`
    margin: 5px 10px;
    width: 30vw;
    list-style: none;   
    border: 2px solid black;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 1vw;
        p:nth-child(2){
            color: orange;
        }
        button{
            padding: 0.6vw;
        }
    }
    p{  
        margin-left:1vw;
        text-align: left;
        font-weight: bold;
    }
`
export const MyForm=styled.form`
    margin-top:20px;
    width: 100%;
    input{
        margin: 0px 3px;
        font-size: 1.2vw;
    }
    button{
        font-size: 1.2vw;
    }
`